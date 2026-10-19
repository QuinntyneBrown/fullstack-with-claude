# 00 · Build a full stack app with Claude Code, hands on

> **Runtime:** ~9.7 min · **Audience:** someone building their first full stack app with Claude Code, with any stack and any kind of app · **Prerequisites:** Claude Code, Git, the GitHub CLI

**Video:** [00-hands-on-quickstart.mp4](00-hands-on-quickstart.mp4) · [Slides](slides.html) · **Audio:** [00-hands-on-quickstart.mp3](00-hands-on-quickstart.mp3) · [Transcript](script.md)

## Why this video exists

The shortest path through the 14-step process. Each step has the same beat: what to type, what to prompt, how to check. It says nothing about why Selah uses the stack it does or about sign-in; the viewer picks their own stack and features.

## Learning objectives

By the end, the viewer can:

- Name the 14 steps in order and say what each produces.
- Run the commands for steps 3 to 5 and 7, and use the prompts for steps 1, 2, 6 and 13.
- Invoke the skill for each of steps 8 to 12 and 14, and know which model and effort the Selah build used.
- Apply the check for each step, ending with the per-slice gates: tests green, typecheck and lint clean, log updated.

## Run sheet

| Time | Segment | Content |
|---|---|---|
| 00:00–01:07 | Intro | What you get; the 14 steps |
| 01:07–04:19 | Set up | Idea, name, repo, clone, skills, agent files, fresh session |
| 04:19–06:09 | Design | HTML mocks (with a click-around), design system (with a tour) |
| 06:09–07:40 | Specify | Specs, detailed designs (sequence diagram), estimates |
| 07:40–09:03 | Build | The test-first prompt, the slice gates, a click-around of the running app |
| 09:03–09:41 | Ship | Demo videos; recap |

## Where each on-screen item comes from

- Steps 1, 2 and 7: the prompts and command in `docs/process/01-idea.md`, `02-naming.md` and `06-07-agent-files.md`. The step 1 prompt is shown with the stack and the product as placeholders.
- Steps 3 to 5: the commands in `docs/process/03-05-repo-and-skills.md`, with the account and app names generalized.
- Steps 8 to 12: the skill, model, effort and counts in `docs/process/08-12-artifacts.md`. No prompt was logged for these steps, so the cards show the skill invocation only.
- Step 13: the prompt on the card is a suggested template, not a logged prompt. The counts (172 unit, 280 acceptance) are from `docs/process/13-progress.md` in the Selah repo.
- Step 14: shown as how to run it; the series has not recorded that step yet.

## Recording and building

```
SELAH_DEMO_EMAIL=naomi@example.com SELAH_DEMO_PASSWORD=demo-pass-12345 SELAH_TEST_HARNESS=1 npx next dev -p 3100   # in the Selah repo
node tools/video-record/record-clips.mjs docs/videos/00-hands-on-quickstart app-tour
KOKORO_VOICE=af_bella KOKORO_SPEED=1.08 node tools/video-audio/generate-audio.mjs docs/videos/00-hands-on-quickstart
node tools/video-build/build-video.mjs docs/videos/00-hands-on-quickstart --check
FFMPEG_THREADS=2 node tools/video-build/build-video.mjs docs/videos/00-hands-on-quickstart
```

## Pitfalls

- `mocks-tour.mp4` and `design-system-tour.mp4` are copies of the episode 05 and 06 clips; re-record them there and copy again.
- The harness sign-in used by the clip setup needs an `origin` header, or the server answers 403.
- The voice is Kokoro's `af_bella` at speed 1.08 (`KOKORO_SPEED`, read in `kokoro_say.py`). Other episodes use the default voice at speed 1.0.
- The app-tour clip is 29 s and the narration over it about 36 s, so the last frame holds for about 7 s.
