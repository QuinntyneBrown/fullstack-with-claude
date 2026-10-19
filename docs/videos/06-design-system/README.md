# 06 · Design system

> **Runtime:** ~5.5 min · **Audience:** developers following the series step by step · **Prerequisites:** episodes 01–05

**Video:** [06-design-system.mp4](06-design-system.mp4) · [Slides](slides.html) · **Audio:** [06-design-system.mp3](06-design-system.mp3) · [Transcript](script.md)

## Why this video exists

A mock is a picture, and code cannot import a picture. Step 9 turns the mocks into named tokens, foundation pages and one page per component. The episode explains why the extraction is its own step, why a smaller model at low effort is enough for it, and the three-tier token structure the app later depends on.

## Learning objectives

By the end, the viewer can:

- Quote the rule that makes the design system the source of truth for tokens and components.
- Give the output: 65 pages (12 foundations, 44 components, 8 patterns), 254 tokens, 134 contrast pairs, a DTCG tokens file.
- Explain the three token tiers and which tier components consume.
- Say what the 4.5:1 and 3:1 annotations on the grey primitives mean.
- Describe the fixed section list of a component page and how it cites its source mocks.

## Key questions

| Question | What a strong answer includes |
|---|---|
| Why a separate step between mocks and specs? | Tokens must exist before the first component is written; the extraction reads contrast-checked mocks and names every value. |
| Why Sonnet at low effort? | Extraction is mechanical: the decisions were made in the mocks, and the skill's scripts do the checking. |
| What are the three tiers? | Primitives (raw values, never used directly), semantic (what components consume; themes override), component (always alias a semantic token). |
| What makes a component page traceable? | A sources section citing the mocks it came from, such as the button page citing notes, note editor and sign-in submitting. |

## Code / assets on screen

| File | What to show |
|---|---|
| `docs/process/08-12-artifacts.md` | Model, effort, counts and commit `4cb8744` (slide 4) |
| `AGENTS.md` (Selah repo) | The "no ad-hoc colours" rule (slide 2) |
| `docs/design-system/tokens/tokens.css` (Selah repo) | Grey 450 and 500 primitives with their contrast comments (slide 7) |
| `docs/design-system/components/button.html` and `dialog.html` (Selah repo) | Source citations (slide 8) |
| `clips/design-system-tour.mp4` | Index, button page, color foundation (slide 9) |

## Run sheet

| Time | Segment | Content |
|---|---|---|
| 00:00–00:24 | Introduction | A picture cannot be imported; tokens, foundations and components |
| 00:25–01:04 | Why | The source-of-truth rule; between the mocks and the specs |
| 01:05–02:16 | Output | Sonnet, low effort; 65 pages, 254 tokens, 134 pairs; foundations and patterns |
| 02:16–03:42 | Tokens | Primitives, semantic, component; grey 450 and 500 with reasons |
| 03:42–04:32 | Components | The same sections on every page; sources; the core set |
| 04:33–04:52 | Tour | Screen recording of the design system |
| 04:53–05:40 | Recap | Things to remember; next: specs |

## Demo commands

```
node tools/serve-static.mjs C:/projects/selah/docs 4173
node tools/video-record/record-clips.mjs docs/videos/06-design-system
node tools/video-audio/generate-audio.mjs docs/videos/06-design-system --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/06-design-system
node tools/video-build/build-video.mjs docs/videos/06-design-system --check
node tools/video-build/build-video.mjs docs/videos/06-design-system --slides-only
node tools/video-build/build-video.mjs docs/videos/06-design-system
```

## Pitfalls

- The tokens excerpt on slide 7 is copied from `tokens.css` lines 30–35 in the Selah repo; re-copy if the file changes.
- The tour clip is about 19 s against a 44-word section; `--check` reports the playback rate.
- `DTCG` and `WCAG 2.2 AA` are in the pronunciation lexicon.

## References

- `docs/process/08-12-artifacts.md`, the log for steps 8 to 12.
- Design Tokens Community Group format: https://tr.designtokens.org/format/
- WCAG 2.2 contrast minimum: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
