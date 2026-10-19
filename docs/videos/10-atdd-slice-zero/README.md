# 10 · ATDD implementation: slice zero

> **Runtime:** ~6.5 min · **Audience:** developers following the series step by step · **Prerequisites:** episodes 01–09; Node 22 if running Selah

**Video:** [10-atdd-slice-zero.mp4](10-atdd-slice-zero.mp4) · [Slides](slides.html) · **Audio:** [10-atdd-slice-zero.mp3](10-atdd-slice-zero.mp3) · [Transcript](script.md)

## Why this video exists

Step 13 is where application code starts, and it is the longest step. This episode covers the first slice, the foundation every later feature renders into, as of October 2026: the ATDD rule and its conventions, how to run the project, the test harness that stands in for screens that do not exist yet, the status per requirement, and the decisions the code forced.

## Learning objectives

By the end, the viewer can:

- State the rule (no code without a failing acceptance test) and the naming convention that links tests to criteria.
- Say what slice zero contains and how to run, lint, typecheck and test it.
- Explain the test harness: what it exercises, when it answers 404, and why it has no mocks.
- Give the status: 11 done, 4 partial, 2 started, 33 remaining.
- Recount the recorded decisions, including the scrypt cost and why it changed.

## Key questions

| Question | What a strong answer includes |
|---|---|
| How are tests linked to specs? | Every acceptance test names the L2 and criterion it proves, such as L2-035.5; unit tests in `tests/unit/`, acceptance tests in `tests/e2e/` behind page objects. |
| How does the shell get tested before screens exist? | Harness pages and routes, enabled only by `SELAH_TEST_HARNESS=1` which the Playwright server sets; deleted once real routes exist. |
| Why is demo data opt-in? | With either demo variable empty nothing is seeded and no default password exists. |
| Why did the scrypt cost change? | The design's N = 2^15, p = 1 measured 65 ms, under the 100 ms floor of L2-049.4; the implementation uses 2^16, r 8, p 2, about 260 ms. |

## Code / assets on screen

| File | What to show |
|---|---|
| `docs/process/13-progress.md` (Selah repo) | The convention, the commands table, the harness, four requirement rows, the status and the decisions (slides 2–12) |

## Run sheet

| Time | Segment | Content |
|---|---|---|
| 00:00–00:28 | Introduction | Code starts; slice zero as of October 2026 |
| 00:28–01:17 | Rule | No code without a failing acceptance test; tracked per requirement |
| 01:18–02:43 | Slice zero | What it contains; how to run it; demo data opt-in |
| 02:44–03:27 | Harness | Test fixtures, not product screens |
| 03:27–04:20 | Status | 11 done, 4 partial, 2 started, 33 remaining |
| 04:21–05:44 | Decisions | Versions, scrypt cost, configuration errors, top bar, fonts and policy |
| 05:45–06:32 | Recap | Things to remember; next: the remaining slices |

## Demo commands

```
node tools/video-audio/generate-audio.mjs docs/videos/10-atdd-slice-zero --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/10-atdd-slice-zero
node tools/video-build/build-video.mjs docs/videos/10-atdd-slice-zero --check
node tools/video-build/build-video.mjs docs/videos/10-atdd-slice-zero --slides-only
node tools/video-build/build-video.mjs docs/videos/10-atdd-slice-zero
```

## Pitfalls

- The slide-10 cue is "The scrypt cost. The design said" because "the scrypt cost" also occurs in the recap; keep cues unique when editing the script.
- The episode is dated "as of October 2026" because the status table changes with every slice; later slices get their own episodes rather than edits to this one.
- Environment variable names (`SELAH_TEST_HARNESS`, `SELAH_DEMO_EMAIL`, `SELAH_DEMO_PASSWORD`, `SESSION_SECRET`) and the test identifier `L2-035.5` have lexicon entries.
- The status counts (11, 4, 2, 33) are derived from the progress log's table and Remaining list; recount from the log if it changes.

## References

- `docs/process/13-progress.md` in the Selah repo, the log this episode is built from.
- Playwright page object model: https://playwright.dev/docs/pom
- Node.js scrypt: https://nodejs.org/api/crypto.html#cryptoscryptpassword-salt-keylen-options-callback
