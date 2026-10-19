# AGENTS.md

## Purpose

This repo holds a narrated video series on building a full-stack web app with Claude: the scripts, slide decks, recording and build tooling, and process logs. The reference app itself (Next.js, React, in-memory SQLite; not for production) lives in its own repo, named in episode 02 and linked from `docs/process/`.

The series follows a 14-step process: idea, name (Opus), repo, clone, skills, agent files, new session, HTML mocks (Fable), design system, specs, detailed designs, estimates, ATDD implementation, demo videos. Each step has a log in `docs/process/` and an episode in `docs/videos/`.

## Stack

| Concern | Choice |
|---|---|
| Narration | Kokoro-82M (Hugging Face) via `kokoro-onnx`, `--engine kokoro` (default) |
| Slides | Static HTML decks, 1920x1080, `docs/videos/assets/slides.{css,js}` |
| Clips | Playwright screencasts of mocks, docs and the running app |
| Assembly | Headless Chromium plus ffmpeg (libx264, burned-in captions) |
| Tooling | Node 22 (`.mjs`), Python 3.12 for TTS only |

## Folder structure

```
docs/
  process/                 one log per process step: prompt, model, commands, output
  videos/
    README.md              series index
    assets/                shared slides.css and slides.js
    NN-topic/              script.md, slides.html, README.md, clips/, generated .mp3 and .mp4
tools/
  video-audio/             generate-audio.mjs, kokoro_say.py, pronunciations.json
  video-build/             build-video.mjs
  video-record/            record-clips.mjs
.claude/skills/, .agents/skills/   identical copies of the agent-toolkit skills
.cache/                    generated scratch (not committed)
```

## Guardrails

- Narration uses Kokoro. Ignore the edge-tts defaults in the video skills; pass no `--engine` flag.
- Everything on screen or in a script (paths, prompts, numbers, quotes) comes from `docs/process/` or the real repos, never from memory.
- Scripts contain no tables, code fences or links; describe code, do not read it.
- Add new spoken identifiers to `tools/video-audio/pronunciations.json` and test with `--say`.
- Keep `.claude/skills` and `.agents/skills` identical.
- Large media goes through Git LFS; `.cache/` and `node_modules/` are never committed.
- Do not push or create remote repos without the user's confirmation.

## Commands

```
node tools/video-audio/generate-audio.mjs docs/videos/NN-topic --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/NN-topic
node tools/video-build/build-video.mjs docs/videos/NN-topic --check
node tools/video-build/build-video.mjs docs/videos/NN-topic --slides-only
node tools/video-build/build-video.mjs docs/videos/NN-topic
node tools/video-record/record-clips.mjs docs/videos/NN-topic
```
