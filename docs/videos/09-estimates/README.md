# 09 · Estimates

> **Runtime:** ~4.5 min · **Audience:** developers following the series step by step · **Prerequisites:** episodes 01–08

**Video:** [09-estimates.mp4](09-estimates.mp4) · [Slides](slides.html) · **Audio:** [09-estimates.mp3](09-estimates.mp3) · [Transcript](script.md)

## Why this video exists

Step 12 prices the 28 designs at 99 developer-days, far over the roughly 15-day line for a small notes app. The episode explains where the number comes from, how percent complete stays evidence-based as code lands, the five-phase roadmap, and the scope decision the number forced.

## Learning objectives

By the end, the viewer can:

- Give the output: 99 days, 0% complete, five subsystems with their totals.
- Explain why per-design estimates have a reason behind them.
- Describe how percent complete is measured and refreshed.
- List the five roadmap phases and the dependencies behind their order.
- Recount the scope decision: descope candidates offered, everything kept, and why.

## Key questions

| Question | What a strong answer includes |
|---|---|
| Where does 99 days come from? | One estimate per design, and each design is a parts list; platform 34, auth 20, notes 18, tags and search 17, account 10. |
| What makes percent complete honest? | The skill checks what exists in the repo against what the design asks for, and the README is refreshed as implementation lands. |
| Why that roadmap order? | Platform first because every feature renders into it; auth before notes because every note belongs to a signed-in person. |
| What was decided? | Descoping about 27 days was offered; all 28 designs were kept because a reference app's purpose is coverage. The decision was made with the number in view. |

## Code / assets on screen

| File | What to show |
|---|---|
| `docs/process/08-12-artifacts.md` | Model, effort, commit `7bc534b`, the 15-day line, the descope candidates and the decision (slides 2, 8, 9) |
| `docs/estimates/README.md` (Selah repo) | Overall effort, the subsystem table, the roadmap (slides 2, 3, 7) |
| `docs/estimates/notes.md` (Selah repo) | Per-design table for notes (slide 4) |

## Run sheet

| Time | Segment | Content |
|---|---|---|
| 00:00–00:23 | Introduction | How long will this take; ninety-nine days |
| 00:24–01:16 | Output | Sonnet, low effort; by subsystem; inside notes |
| 01:16–02:03 | Evidence | Per design; evidence-based percent complete |
| 02:04–02:50 | Roadmap | Five phases and their order |
| 02:51–03:50 | Decision | Far over the line; descope candidates; keep all 28 |
| 03:51–04:33 | Recap | Things to remember; next: ATDD implementation |

## Demo commands

```
node tools/video-audio/generate-audio.mjs docs/videos/09-estimates --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/09-estimates
node tools/video-build/build-video.mjs docs/videos/09-estimates --check
node tools/video-build/build-video.mjs docs/videos/09-estimates --slides-only
node tools/video-build/build-video.mjs docs/videos/09-estimates
```

## Pitfalls

- The percent-complete column is 0% as of the estimates commit; the Selah README is refreshed as slices land, so re-copy the table if the episode is rebuilt later.
- The 15-day line and the 27-day descope figure are from the process log, not from the estimates folder.
- Numbers are spelled out in the script where they are spoken ("ninety-nine") and kept as digits on slides.

## References

- `docs/process/08-12-artifacts.md`, the log for steps 8 to 12.
- Selah estimates: https://github.com/QuinntyneBrown/selah/tree/main/docs/estimates
