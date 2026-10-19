# 05 · HTML mocks

> **Runtime:** ~5.5 min · **Audience:** developers following the series step by step · **Prerequisites:** episodes 01–04

**Video:** [05-html-mocks.mp4](05-html-mocks.mp4) · [Slides](slides.html) · **Audio:** [05-html-mocks.mp3](05-html-mocks.mp3) · [Transcript](script.md)

## Why this video exists

Step 8 is the first big artifact: the whole product drawn as static HTML before any code exists. The design system, the specs, the detailed designs and the demo seed are all derived from these files, so the episode explains why mocks come first, what Fable produced, and which layout and behaviour decisions were settled here.

## Learning objectives

By the end, the viewer can:

- State the rule that mocks come before frontend code and where it is written down.
- Give the output numbers: 65 files, 16 screens, 63 states, light and dark, 108 contrast pairs.
- Name the three kinds of screen and the required states for each.
- Describe the shared cast (Naomi Adler, 12 notes, 7 tags) and why one cast matters.
- List the layout, visual and behaviour decisions the later steps quote.

## Key questions

| Question | What a strong answer includes |
|---|---|
| Why mocks first? | They are the product on disk before the product exists; everything after is derived from them, and screens are cheapest to change here. |
| Why Fable for this step? | Mocks are visual work; the second place in the series where a bigger model is worth it. |
| What states must exist? | Pages: default, loading, empty, error. Dialogs: default, busy, invalid. Notifications: info, success, warning, danger. The manifest says why when one does not apply. |
| Why one cast? | The same names, counts and titles in every state make 16 screens read as one product, and the demo seed reuses them. |

## Code / assets on screen

| File | What to show |
|---|---|
| `docs/process/08-12-artifacts.md` | Model, output counts and commit `c36b796` (slide 3) |
| `docs/mocks/README.md` (Selah repo) | The "product on disk" sentence (slide 2); layout, visual and behaviour decisions (slides 9, 10) |
| `docs/mocks/manifest.json` (Selah repo) | Screens, states and the reasons a state does not apply (slide 5) |
| `clips/mocks-tour.mp4` | Gallery, notes page, theme toggle, delete dialog, undo toast (slide 8) |

## Run sheet

| Time | Segment | Content |
|---|---|---|
| 00:00–00:24 | Introduction | The first big artifact, and the one everything else is derived from |
| 00:25–00:59 | Why | Mocks before frontend code; the product on disk |
| 01:00–02:19 | Output | Fable and the skill; 65 files; three kinds of screen; required states |
| 02:20–03:08 | Cast | Naomi Adler, 12 notes, 7 tags; the same cast in the demo seed |
| 03:09–03:51 | Tour | Screen recording of the mocks |
| 03:52–04:45 | Decisions | Layout, visual and behaviour decisions |
| 04:46–05:37 | Recap | Things to remember; next: design system |

## Demo commands

```
node tools/serve-static.mjs C:/projects/selah/docs 4173
node tools/video-record/record-clips.mjs docs/videos/05-html-mocks
node tools/video-audio/generate-audio.mjs docs/videos/05-html-mocks --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/05-html-mocks
node tools/video-build/build-video.mjs docs/videos/05-html-mocks --check
node tools/video-build/build-video.mjs docs/videos/05-html-mocks --slides-only
node tools/video-build/build-video.mjs docs/videos/05-html-mocks
```

## Pitfalls

- The tour clip is recorded from the Selah repo's `docs/mocks/` served over HTTP (`clips/clips.mjs`); keep the static server running while recording.
- The clip is about 17 s and the tour narration is short; `--check` reports the playback rate, and a warning above x1.6 means the "A tour" section needs more words.
- Counts (65, 16, 63, 108) come from the process log; do not recount from a later commit.

## References

- `docs/process/08-12-artifacts.md`, the log for steps 8 to 12.
- Selah mocks: https://github.com/QuinntyneBrown/selah/tree/main/docs/mocks
