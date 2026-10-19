# 10 · ATDD implementation: slice zero

Twelve steps of preparation, and not one line of application code. Step thirteen is where the code starts, and it is the longest step by far. This episode covers the first slice: the foundation that every later feature renders into. As of October twenty twenty-six, slice zero is done, and auth, notes, tags and account are still to come. The source for everything here is the implementation progress log in the Selah repo.

## The rule

The agent instructions set one rule for this step: no code without a failing acceptance test. The progress log turns that into a convention. Every acceptance test names the L2 requirement and the criterion it proves, like `L2-035.5`: requirement thirty-five, criterion five. Unit tests live in `tests/unit/`, acceptance tests in `tests/e2e/`, behind page objects in the pages folder, so the tests state intent and the page objects know the DOM.

Progress is tracked per L2 requirement, with a status and the evidence: which spec files prove which criteria. That table is the percent complete from the estimates, made concrete.

## Slice zero

Slice zero is the scaffold, the data layer, the app shell and the platform pieces: theme, toasts, banners, status pages, validation, credentials, request protection, in-memory data, responsive layout, the drawer, dialogs, tokens and accessibility.

The commands are what you would expect. `npm run dev` for the dev server, after copying `.env.local` from the example. `npm run build` and start for production, where a session secret of thirty-two or more characters is required. `npm run lint`, which includes the no-ad-hoc-colours rule for the app and components folders, the design-system rule from episode six, now enforced by ESLint. `npm run typecheck`, strict. `npm test` runs Vitest: sixty-four tests, each with a fresh in-memory database. And `npm run test:e2e` runs Playwright against a production build that a support script builds and starts with a generated demo password and session secret.

Demo data is opt-in. Set the demo email and password in `.env.local` and the seed creates Naomi Adler with the twelve notes and seven tags from the mocks. With either variable empty, nothing is seeded and no default password exists.

## The test harness

Slice zero has a problem: the shell needs screens to render into, but sign-in and notes do not exist yet. The answer is a test harness. Pages under slash harness and routes under slash api slash harness exercise the shell, the drawer, toasts, banners, dialogs, forms, the theme control and the status pages with the seeded workspace.

They answer four-oh-four unless the test harness variable is set, and only the Playwright server sets it. The log is explicit: they are test fixtures, not product screens, so they have no mocks. Later slices move the layouts to the real routes and delete the harness once nothing uses it.

## Status

As of this slice, eleven L2 requirements are done: theme preference, toasts, banners, credentials and secrets, request protection, in-memory data and demo seed, responsive layout, the navigation drawer, dialogs and sheets, themes and design tokens, and keyboard and assistive technology.

Four are partial: status pages, validate every input, safe queries and output, and performance budgets. Each one names the criteria that remain and why: status pages wait for sign-out to exist, performance waits for the list, search and save endpoints.

Two are started: authorising every note and tag operation, and the dummy hash for sign-in.

Remaining: all ten auth requirements, eight for notes, ten for tags and search, and five for account.

## Decisions made in this slice

The log records the decisions the designs left open or the code forced.

Stack versions: Next.js fifteen point five, React nineteen, Tailwind three point four, Zod four, TypeScript five point nine, ESLint nine, Vitest five, Playwright one point sixty-four, better-sqlite3 thirteen.

The scrypt cost. The design said N equals two to the fifteen with p equals one. Measured, that took sixty-five milliseconds, under the one-hundred-millisecond floor that the performance requirement sets for hashing. So the implementation uses two to the sixteen, r eight, p two: about two hundred and sixty milliseconds.

A configuration error stops the server. Next.js fifteen keeps serving after the register hook throws, so the instrumentation file exits with code one and a clear message.

The phone top bar stays on the phone list and is hidden only on the phone editor, as in the mocks. That resolves the open marker in the app-shell design.

No web font is loaded, so the token stack applies and the content security policy keeps font-src to self. And the development policy adds unsafe-eval only in development; tests run against the production build.

## Recap

Things to remember from this episode.

No code without a failing acceptance test, and every test names the criterion it proves.

Slice zero is the foundation: scaffold, data layer, app shell and platform. Sixty-four unit tests, Playwright against a production build.

A test harness lets the shell be tested before real screens exist, and it is deleted when they do.

Eleven requirements done, four partial, two started, thirty-three remaining, each with its evidence.

Decisions are recorded as they are made: versions, the scrypt cost, the top bar, the policy.

Next time: the remaining slices, auth, notes, tags and account, and then step fourteen, the demo videos.
