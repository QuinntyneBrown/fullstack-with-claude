# 01 · The idea

> **Runtime:** ~4 min · **Audience:** developers who want to build a full-stack app with Claude, step by step · **Prerequisites:** none

**Video:** [01-the-idea.mp4](01-the-idea.mp4) · [Slides](slides.html) · **Audio:** [01-the-idea.mp3](01-the-idea.mp3) · [Transcript](script.md)

## Why this video exists

The series follows a 14-step process, and this is step 1. Before any model, repo or skill is involved, the idea fixes three things the rest of the series depends on: what the app is, why it is small, and how it should look. This episode also sets the ground rules for the series itself: every step has a log in `docs/process/`, and everything on screen comes from those logs or the real repositories.

## Learning objectives

By the end, the viewer can:

- Name the 14 steps the series follows and where each one is logged.
- State the idea as it was given to Claude, and explain the two qualifiers (small; reference, not production).
- List the product's feature set: accounts, notes, tags, search.
- Explain why a notes app was chosen over a smaller or larger product.
- Repeat the look-and-feel brief that is handed to the mocks step.

## Key questions

| Question | What a strong answer includes |
|---|---|
| What is the series building? | A small full-stack reference web app: Next.js (App Router), React, in-memory SQLite. Not production. |
| Why a notes app? | Small enough to build on screen, yet it touches UI, API, database, auth and tests. |
| What does "reference, not production" change? | The goal is to show the process; in-memory SQLite means nothing persists across restarts, by design. |
| Why decide the look and feel at step 1? | The mocks (step 8) need a visual direction to follow; the design system, specs and app inherit it. |

## Code / assets on screen

| File | What to show |
|---|---|
| `docs/process/01-idea.md` | The prompt, the product, why this idea, the look and feel (quoted on slides 5, 7, 11) |
| `AGENTS.md` (this repo) | The 14-step list (slide 2) and the two-repo split (slide 4) |

## Run sheet

| Time | Segment | Content |
|---|---|---|
| 00:00–00:16 | Introduction | What the series is; this episode is step 1 |
| 00:16–01:07 | Series | The 14 steps; every step gets a log and an episode; two repositories |
| 01:07–01:44 | Idea | The prompt as stated; the two qualifiers |
| 01:44–02:14 | Product | A notes app; the entire feature list |
| 02:14–02:59 | Why | Every layer is touched; the trade-off against smaller and larger products |
| 02:59–03:27 | Look | The look-and-feel brief; decided once, inherited everywhere |
| 03:27–04:12 | Recap | Things to remember; next: naming with Opus |

## Demo commands

```
node tools/video-audio/generate-audio.mjs docs/videos/01-the-idea --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/01-the-idea
node tools/video-build/build-video.mjs docs/videos/01-the-idea --check
node tools/video-build/build-video.mjs docs/videos/01-the-idea --slides-only
node tools/video-build/build-video.mjs docs/videos/01-the-idea
```

## Pitfalls

- The app is not named in this episode on purpose; the name is chosen in episode 02. Keep it that way if the script is edited.
- Cue phrases in `slides.html` must stay verbatim and unique in `script.md`; the recap deliberately rewords the section sentences so cues do not collide.
- Run the build from the repo root. If the shell's working directory is inside `.cache/01-the-idea/slides/`, the renderer cannot delete that folder (`EBUSY`).

## References

- `docs/process/01-idea.md`, the step-1 log this episode is built from.
- Next.js App Router documentation: https://nextjs.org/docs/app
