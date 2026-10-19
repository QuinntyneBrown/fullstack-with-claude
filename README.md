# Full Stack with Claude

A narrated video series on building a full-stack web app with Claude, from first idea to demo videos. This repository holds the scripts, slide decks, recording and build tooling, and the process logs behind every episode.

The reference app itself (Next.js, React, in-memory SQLite; not for production) lives in its own repository, named in episode 02 and linked from [`docs/process/`](docs/process/).

## Contents

- [Overview](#overview)
- [Repository layout](#repository-layout)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## Overview

The series follows a 14-step process. Each step has a log in [`docs/process/`](docs/process/) and an episode in [`docs/videos/`](docs/videos/).

1. Idea
2. Name (Opus)
3. Repo
4. Clone
5. Skills
6. Agent files
7. New session
8. HTML mocks (Fable)
9. Design system
10. Specs
11. Detailed designs
12. Estimates
13. ATDD implementation
14. Demo videos

| Concern | Choice |
|---|---|
| Narration | Kokoro-82M via `kokoro-onnx` |
| Slides | Static HTML decks, 1920x1080 |
| Clips | Playwright screencasts |
| Assembly | Headless Chromium plus ffmpeg (libx264, burned-in captions) |
| Tooling | Node 22 (`.mjs`), Python 3.12 for TTS only |

## Repository layout

```
docs/
  process/          one log per process step
  videos/           series index, shared assets, one folder per episode
tools/
  video-audio/      narration generation (Kokoro)
  video-build/      slide rendering and video assembly
  video-record/     Playwright clip recording
.claude/skills/     agent-toolkit skills (mirrored in .agents/skills/)
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 22 or later
- [Python](https://www.python.org/) 3.12 with `kokoro-onnx`
- [ffmpeg](https://ffmpeg.org/) on your `PATH`
- [Git LFS](https://git-lfs.com/) for media files

### Install

```bash
git lfs install
git clone <this-repo-url>
cd fullstack-with-claude
npm install
npx playwright install chromium
pip install kokoro-onnx
```

## Usage

Replace `NN-topic` with an episode folder under `docs/videos/`.

```bash
# Narration
node tools/video-audio/generate-audio.mjs docs/videos/NN-topic --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/NN-topic

# Clips
node tools/video-record/record-clips.mjs docs/videos/NN-topic

# Build
node tools/video-build/build-video.mjs docs/videos/NN-topic --check
node tools/video-build/build-video.mjs docs/videos/NN-topic --slides-only
node tools/video-build/build-video.mjs docs/videos/NN-topic
```

Coding agents working in this repository should read [`AGENTS.md`](AGENTS.md) first.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md) before opening an issue or pull request. For help, see [SUPPORT.md](SUPPORT.md).

## Security

Please do not report security vulnerabilities through public issues. See [SECURITY.md](SECURITY.md).

## License

Licensed under the [MIT License](LICENSE).
