# 02 · Naming the app

> **Runtime:** ~3 min · **Audience:** developers following the series step by step · **Prerequisites:** episode 01

**Video:** [02-naming-the-app.mp4](02-naming-the-app.mp4) · [Slides](slides.html) · **Audio:** [02-naming-the-app.mp3](02-naming-the-app.mp3) · [Transcript](script.md)

## Why this video exists

Step 2 is the shortest step in the process, and the first one where the choice of model is a deliberate decision. The episode shows the prompt that was sent to Opus, the four candidates it returned with their meanings, and the reasons behind the pick. From here on the app and its repository are called Selah.

## Learning objectives

By the end, the viewer can:

- Explain why naming runs on Opus while most other steps run on Sonnet.
- Repeat the prompt and say what it asks for (a meaning or association, in three directions).
- Name the four candidates and the association behind each.
- Give the three reasons Selah was picked.
- State the repository name and why it is public.

## Key questions

| Question | What a strong answer includes |
|---|---|
| Why the stronger model for a one-prompt step? | The name lands in the repo URL, every commit, every episode and the agent instructions; picking is cheap, changing is expensive. |
| What shape did the prompt have? | The product (a small notes app), an ask for meaning rather than a word list, and three directions: biblical, abstract, descriptive. |
| What were the candidates? | Selah (a pause to reflect), Zikaron (memory), Baruch (Jeremiah's scribe), Marginalia (notes in the margins). |
| Why Selah? | Short, easy to say, and the meaning fits a notes app. |

## Code / assets on screen

| File | What to show |
|---|---|
| `docs/process/02-naming.md` | The model line, the prompt, the four candidates and the pick (slides 2, 4, 6, 7) |
| `QuinntyneBrown/selah` | The public repository name (slide 8) |

## Run sheet

| Time | Segment | Content |
|---|---|---|
| 00:00–00:15 | Introduction | Step two gives the app a name; the first step where the model matters |
| 00:16–00:54 | Model | Opus 5.5 for naming; where the name ends up |
| 00:55–01:29 | Prompt | The prompt as stated; what it does and does not say |
| 01:30–02:04 | Candidates | Selah, Zikaron, Baruch, Marginalia, with meanings |
| 02:05–02:30 | Pick | Three reasons; the repository `QuinntyneBrown/selah`, public |
| 02:30–03:05 | Recap | Things to remember; next: repo, clone and skills |

## Demo commands

```
node tools/video-audio/generate-audio.mjs docs/videos/02-naming-the-app --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/02-naming-the-app
node tools/video-build/build-video.mjs docs/videos/02-naming-the-app --check
node tools/video-build/build-video.mjs docs/videos/02-naming-the-app --slides-only
node tools/video-build/build-video.mjs docs/videos/02-naming-the-app
```

## Pitfalls

- `Selah`, `Zikaron` and `Baruch` have entries in `tools/video-audio/pronunciations.json`; test any new name with `--say` before synthesizing.
- The candidates and the pick come from `docs/process/02-naming.md`; do not add reasons that are not in the log.
- The cue "The repository becomes" must stay verbatim in the script; the recap rewords it on purpose.

## References

- `docs/process/02-naming.md`, the step-2 log this episode is built from.
- GitHub repository: https://github.com/QuinntyneBrown/selah
