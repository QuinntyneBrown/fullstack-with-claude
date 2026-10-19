# 07 · Specs

> **Runtime:** ~5 min · **Audience:** developers following the series step by step · **Prerequisites:** episodes 01–06

**Video:** [07-specs.mp4](07-specs.mp4) · [Slides](slides.html) · **Audio:** [07-specs.mp3](07-specs.mp3) · [Transcript](script.md)

## Why this video exists

Step 10 writes down what Selah must do: 11 high-level requirements and 49 detailed ones with 281 acceptance criteria. The episode shows why the specs come after the mocks, what one L2 requirement looks like with its given-when-then criteria, and how those criteria become the ATDD backlog.

## Learning objectives

By the end, the viewer can:

- Explain why specs follow mocks in this process and what that buys.
- Give the output: 11 L1, 49 L2, 281 criteria, in `L1.md` and `L2.md`.
- List the eleven L1 requirements.
- Read an L2 requirement (L2-016, delete a note): trace, covered states, criteria.
- Describe how a criterion identifier such as L2-016.1 links a test to a requirement.

## Key questions

| Question | What a strong answer includes |
|---|---|
| Why specs after mocks? | Every requirement points at a real screen, names its states and quotes real copy, which makes criteria testable. |
| What is in L1? | The product in eleven sentences, including demo data (in memory, seeded, reset on restart) and performance (over one thousand notes). |
| What does an L2 look like? | Traces to an L1, covers named mock states, and has given-when-then criteria that name titles, labels, disabled states and focus. |
| How do criteria drive ATDD? | Each criterion gets an identifier, and each acceptance test names the criterion it proves. |

## Code / assets on screen

| File | What to show |
|---|---|
| `docs/process/08-12-artifacts.md` | Model, effort, counts and commit `97c3c62` (slide 4) |
| `docs/specs/L1.md` (Selah repo) | The derivation sentence (slide 2); the eleven L1 titles; L1-009 and L1-011 (slides 5, 6) |
| `docs/specs/L2.md` (Selah repo) | L2-016 with criteria 1, 3, 5, 6 (slide 7) |

## Run sheet

| Time | Segment | Content |
|---|---|---|
| 00:00–00:25 | Introduction | Two levels; what the tests will later prove |
| 00:26–01:05 | Why | Specs after mocks; every requirement points at a screen |
| 01:05–01:41 | Output | Sonnet, low effort; two files; shall; tracing |
| 01:42–02:27 | L1 | Eleven sentences; demo data and performance in full |
| 02:28–03:50 | L2 | L2-016 delete a note; four criteria; everything assertable |
| 03:50–04:18 | Tests | Criteria are the ATDD backlog |
| 04:18–05:04 | Recap | Things to remember; next: detailed designs |

## Demo commands

```
node tools/video-audio/generate-audio.mjs docs/videos/07-specs --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/07-specs
node tools/video-build/build-video.mjs docs/videos/07-specs --check
node tools/video-build/build-video.mjs docs/videos/07-specs --slides-only
node tools/video-build/build-video.mjs docs/videos/07-specs
```

## Pitfalls

- The L2-016 excerpt on slide 7 omits criteria 2 and 4 for space; it is still copied verbatim, with `<` and `>` escaped.
- Identifiers such as `L2-016` and `L1-003` are in the pronunciation lexicon; the script spells them out ("L2 sixteen") where it reads them aloud.
- Counts (11, 49, 281) come from the process log.

## References

- `docs/process/08-12-artifacts.md`, the log for steps 8 to 12.
- Selah specs: https://github.com/QuinntyneBrown/selah/tree/main/docs/specs
