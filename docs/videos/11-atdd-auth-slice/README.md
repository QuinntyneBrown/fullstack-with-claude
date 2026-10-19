# 11 · ATDD implementation: the auth slice

> **Runtime:** ~9.5 min · **Audience:** developers following the series step by step · **Prerequisites:** episodes 01–10; Node 22 if running Selah

**Video:** [11-atdd-auth-slice.mp4](11-atdd-auth-slice.mp4) · [Slides](slides.html) · **Audio:** [11-atdd-auth-slice.mp3](11-atdd-auth-slice.mp3) · [Transcript](script.md)

## Why this video exists

Slice one is the first feature slice: sign-up, sign-in, sign-out, sessions, route protection, session expiry and the session-ending warning, built under the same ATDD rule as slice zero. This episode covers what was built, the evidence per requirement, the status after the slice (as of October 2026) and the seven decisions the code forced.

## Learning objectives

By the end, the viewer can:

- List the six pieces of the slice: sessions, the authenticated route wrapper, sign-in and sign-up, the real shell, sign-out and the account menu, expiry and warning.
- Explain the session store (keyed hash of a random token, two windows, cookie attributes) and why rejection is generic.
- Give the status: 95 unit and 167 acceptance tests; 21 done, 3 partial, 1 started, 23 remaining, plus one deferred criterion.
- Recount the decisions, including why `requireUser` redirects instead of the middleware and how a test ages a session.

## Key questions

| Question | What a strong answer includes |
|---|---|
| How are sessions stored? | HMAC-SHA-256 of a 32-byte random token, only the hash kept; 2-hour inactivity and 7-day absolute windows; HttpOnly, SameSite=Lax, Secure over HTTPS cookie. |
| Why two route wrappers? | `publicRoute()` for health and harness; `route()` resolves the session first and answers 401 before any handler or repository runs, with `{ touch: false }` for reads that must not extend the window. |
| Why does `requireUser` redirect rather than the middleware? | Next rewrote the middleware redirect's host to `localhost`, which went cross-origin and tripped `connect-src 'self'` on a prefetch; a relative `redirect()` stays same-origin. |
| How are expiry and the warning tested without waiting hours? | `POST /api/harness/session/age` moves the session timestamps into the past, and the countdown uses a relative `expiresIn`, so Playwright's clock and the server's clock agree. |

## Code / assets on screen

| File | What to show |
|---|---|
| `docs/process/13-progress.md` (Selah repo), "Slice 1: authentication" | What was built (slides 2–5), the requirements table (slides 6–8), the test counts and status (slides 9–10), the decisions (slides 11–13) |

## Run sheet

| Time | Segment | Content |
|---|---|---|
| 00:00–00:35 | Introduction | Slice one as of October 2026; the same rule |
| 00:35–03:22 | What was built | Sessions, route wrappers, sign-in and sign-up, the real shell, sign-out, expiry |
| 03:22–05:51 | Requirements | Ten auth requirements with evidence; five slice-zero rows that moved |
| 05:51–06:35 | Status | 95 unit, 167 acceptance; 21 done, 23 remaining |
| 06:35–08:34 | Decisions | Who redirects, who navigates, ageing sessions, relative expiry, the account menu, TextField, deterministic assertions |
| 08:34–09:27 | Recap | Things to remember; next: the remaining slices |

## Demo commands

```
node tools/video-audio/generate-audio.mjs docs/videos/11-atdd-auth-slice --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/11-atdd-auth-slice
node tools/video-build/build-video.mjs docs/videos/11-atdd-auth-slice --check
node tools/video-build/build-video.mjs docs/videos/11-atdd-auth-slice --slides-only
node tools/video-build/build-video.mjs docs/videos/11-atdd-auth-slice
```

## Pitfalls

- The status counts (21 done, 1 done-with-deferral, 3 partial, 1 started, 23 remaining, out of 49) are derived from the slice-zero table updated by the slice-one rows; recount from the log if it changes.
- "Done" counts L2-037 (criterion 5 landed in this slice) and L2-001 to L2-008 and L2-010; L2-009 is listed separately because criterion 2 waits for L2-015.
- New lexicon entries: `HMAC`, `SHA-256`, `HttpOnly`, `SameSite`, `HTTPS`, `SQL`, `connect-src`, `aria-hidden`, `aria-label`, `POST`, `localhost`.
- On a machine low on memory, Kokoro falls back to one batch per sentence (`kokoro_say.py`) and the final encode can be run with `FFMPEG_THREADS=2`; this episode's MP4 was muxed that way.

## References

- `docs/process/13-progress.md` in the Selah repo, "Slice 1: authentication", the log this episode is built from.
- OWASP session management cheat sheet: https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
- Next.js Server Actions: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
