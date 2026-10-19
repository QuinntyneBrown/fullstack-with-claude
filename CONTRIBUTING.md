# Contributing

Thank you for your interest in contributing. This document explains how to propose changes.

## Code of Conduct

This project follows the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

## Reporting issues

- Search existing issues before opening a new one.
- Include the episode folder, the command you ran and the full output.
- For security issues, follow [SECURITY.md](SECURITY.md) instead.

## Making changes

1. Fork the repository and create a branch from `main`.
2. Read [`AGENTS.md`](AGENTS.md); its guardrails apply to human contributors too.
3. Make your change and verify it:
   - Narration: `node tools/video-audio/generate-audio.mjs docs/videos/NN-topic --dry-run`
   - Build: `node tools/video-build/build-video.mjs docs/videos/NN-topic --check`
4. Open a pull request describing what changed and why.

## Guidelines

- Anything shown on screen or spoken in a script must come from `docs/process/` or the real repositories.
- Scripts contain no tables, code fences or links.
- Add new spoken identifiers to `tools/video-audio/pronunciations.json` and test them with `--say`.
- Keep `.claude/skills` and `.agents/skills` identical.
- Commit large media through Git LFS. Never commit `.cache/` or `node_modules/`.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
