# 11 · ATDD implementation: the auth slice

Slice zero gave Selah a shell with nothing to protect. Slice one is authentication: sign-up, sign-in, sign-out, sessions, route protection, session expiry and the session-ending warning, all under the same rule, no code without a failing acceptance test. As of October twenty twenty-six, slice one is done, and notes, tags and account are still to come. As before, the source for everything here is the implementation progress log in the Selah repo.

## What was built

The log lists six pieces.

Sessions. A sessions repository holds all the session SQL, and a session module provides create, resolve, destroy, and destroy the others. The store is a keyed hash: an HMAC with SHA-256 of a thirty-two-byte random token, and only the hash is stored. Two windows apply, a two-hour inactivity window and a seven-day absolute window. The cookie is HttpOnly, SameSite Lax, path slash, Secure over HTTPS, with a seven-day max age. Helpers for server components and actions start and end a session, read the current one, require a user, and bounce a signed-in person away from the public pages.

The route wrapper gained authentication. The API module now exports two wrappers: public route, for health and the harness, and route, which is authenticated. The authenticated wrapper resolves the session first and returns four-oh-one before the handler body or any repository runs. It adds a session-expires header and a no-store cache header, and it takes a touch false option for reads that must not extend the window.

Sign-in and sign-up. Authenticate always verifies a hash and returns a generic result. Register account lets the unique constraint on the lower-cased email decide whether an address is taken. A safe next path helper filters the return address. The pages live under the public route group, with their Server Actions and client forms: client-side Zod validation first, a busy and read-only in-flight state, retained fields, and the rejected and unreachable states.

The real app shell. The app route group's layout requires a session and renders the shell with the workspace sidebar and the account menu. The notes page lists the person's note titles or shows the empty state, with the editor-empty pane and the welcome toast. The note page and the account page are protected placeholders.

Sign-out and the account menu. A sign-out action, the account menu with a keyboard-navigable list hosting account settings and sign out, a switch-account button that makes the four-oh-three page sign out, and a clear-device-state helper that clears the demo-banner dismissal on every sign-out path.

Session expiry and warning. A session endpoint and an extend endpoint, a session watcher and a session-ending banner in the shell, and a client module that handles an expired session. The countdown lives in an aria-hidden element while a static minute-level message is announced.

## Requirements

Ten auth requirements are in the slice, and the log gives each one its evidence.

Create an account: a new account lands on the notes page, empty, with a welcome toast, zero notes and zero tags, and a case-different email counts as taken. Sign-up validation: a focused summary, per-field messages, retained name and email with a cleared password, a single request while busy, a failed state with try again, and the eighty and one-hundred-and-twenty-eight character limits.

Sign in: case-insensitive email, return to the protected page that sent you, and a foreign or protocol-relative next path is ignored. Sign-in rejection is generic: an unknown email and a wrong password are identical in status and page, and a hash is always computed. The unreachable state keeps email and password, and try again resubmits.

Sign out: the server session is invalidated, the cookie cleared, a signed-out notice shown, no dialog, Back shows no data, and a replayed cookie is four-oh-one. Session lifetime: two hours inactivity, seven days absolute, a sliding window, and the cookie attributes. Route protection: notes, note and account redirect to sign-in with no data, API endpoints answer four-oh-one with no body, public pages render.

Session expiry: a four-oh-one or the countdown reaching zero goes to the expired notice, with no danger toast and no error page, and returns to the same page after sign-in. One criterion is deferred: offering the preserved device copy depends on the notes slice. The session-ending warning: a persistent banner five minutes before the end with a live countdown, stay signed in, and sign out, and no dismiss.

Five slice-zero rows moved too. Status pages: criterion five, switch account signs out, is now done. Credentials: the hash-only rule is re-verified for sign-up. Request protection: a cross-origin state change with a valid session is four-oh-three and changes nothing. Demo seed: a signed-up account has no notes, proven through the flow. And validate every input advanced: sign-in and sign-up share one Zod schema across the client, the Server Action and the unit tests.

## Status

The counts. Unit tests: ninety-five pass, twenty-seven new this slice. Acceptance tests: one hundred and sixty-seven pass, fifty-one new definitions, across sign-up, sign-in, sessions, session expiry and sign-out. Typecheck and lint are clean.

By requirement, out of forty-nine: twenty-one done, up from eleven. One done except a deferred criterion, session expiry. Three partial: validate every input, safe queries and output, and performance budgets. One started: authorising every note and tag operation. Twenty-three remaining: eight for notes, ten for tags and search, five for account.

## Decisions made in this slice

Seven decisions are recorded.

Protected pages are redirected by require user, not by the middleware. Next.js rewrites a middleware redirect's host to its own canonical host, localhost, which sent the browser cross-origin and tripped the connect-src self policy on a link prefetch. Require user issues a same-origin relative redirect instead. The middleware still answers four-oh-one for the API without a cookie, and still does the origin check, the nonce and the cache header. That refines the sessions design from episode eight.

Server Actions return a redirect target and the client navigates. Returning rather than redirecting lets the form catch a transport failure, an aborted POST, and show the unreachable state without the error reaching an error boundary.

Session windows are configurable, and a harness ages sessions. A harness endpoint moves a session's timestamps into the past, so expiry and warning are proven in Playwright with its clock instead of waiting hours.

The countdown uses a relative expires-in, not an absolute timestamp, so it stays correct when a test controls the browser clock while the server keeps real time.

The account menu is built only as far as sign out. The appearance control and the rest of the account menu requirement belong to the account slice. The sidebar trigger carries no aria-label, so its visible and accessible names match.

The text field accepts a rich error and help text, so the this-email-already-has-an-account message can hold a sign-in link.

And two slice-zero unit assertions were made deterministic, not behaviour changes: the tamper test flips a significant character of the salt, and the token test no longer asserts that a random token avoids a particular digit.

## Recap

Things to remember from this episode.

Slice one is auth: sessions, the authenticated route wrapper, sign-in and sign-up, the real shell, sign-out and expiry.

Sessions are a keyed hash of a random token, two hours inactivity, seven days absolute, in an HttpOnly cookie.

Rejection is generic and a hash is always computed, so an unknown email and a wrong password look the same.

Ninety-five unit tests and one hundred and sixty-seven acceptance tests pass. Twenty-one requirements done, twenty-three remaining.

Decisions again recorded as the code forced them: who redirects, who navigates, how a test ages a session.

Next time: the remaining slices, notes, tags and search, and account, and then step fourteen, the demo videos.
