# Video tooling

One-time setup (Windows ARM64 tested): `npm install`, `npx playwright install chromium`, `python -m pip install kokoro-onnx soundfile`. Kokoro model files (about 350 MB) download to `.cache/kokoro/` on first use.

```
set PYTHON=python
node tools/video-audio/generate-audio.mjs --say "Next.js and `AGENTS.md`" --out .cache/say.wav
node tools/video-audio/generate-audio.mjs docs/videos/NN-topic --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/NN-topic
node tools/serve-static.mjs . 4173
node tools/video-record/record-clips.mjs docs/videos/NN-topic
node tools/video-build/build-video.mjs docs/videos/NN-topic --check
node tools/video-build/build-video.mjs docs/videos/NN-topic --slides-only
node tools/video-build/build-video.mjs docs/videos/NN-topic
```

Voices: `KOKORO_VOICE` (default `am_michael`) and `KOKORO_VOICE_2` (default `af_heart`).
