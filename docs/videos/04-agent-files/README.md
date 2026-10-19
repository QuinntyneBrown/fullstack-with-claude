# 04 · Agent files and a fresh session

> **Runtime:** ~5.5 min · **Audience:** developers following the series step by step · **Prerequisites:** episodes 01–03

**Video:** [04-agent-files.mp4](04-agent-files.mp4) · [Slides](slides.html) · **Audio:** [04-agent-files.mp3](04-agent-files.mp3) · [Transcript](script.md)

## Why this video exists

Step 6 writes the one file every coding agent reads before touching the Selah repo, and step 7 proves that a brand-new session loads it. The rules in `AGENTS.md` (security non-negotiables, the spec-driven order, no code without a failing acceptance test) govern every later episode, so this is where they are introduced.

## Learning objectives

By the end, the viewer can:

- Describe the four files step 6 produces and why one source plus three pointers beats four copies.
- Explain the 150-line budget for `AGENTS.md` and why short is a feature.
- Name the nine sections and quote the rules in Data and Security, Workflow and Testing Approach.
- Reproduce the step-7 proof and explain why "do not use tools" is the important part.

## Key questions

| Question | What a strong answer includes |
|---|---|
| Why is `AGENTS.md` kept short? | It rides along with every agent turn, so every line costs context on every request. 125 lines under a 150 budget. |
| Why three pointer files? | Different agents look for different file names; separate copies would drift. `CLAUDE.md` is `@AGENTS.md`, the others say it in prose. |
| What are the non-negotiables? | Zod-validate every input, parameterised SQL only, SQL in `lib/repositories/`, hashed passwords, no secrets, authorise every note query, generic sign-in errors. |
| What does step 7 prove? | A new `claude -p` session with tools off already knows the skills and the instructions: they are in context, not just in the repo. |

## Code / assets on screen

| File | What to show |
|---|---|
| `docs/process/06-07-agent-files.md` | The model, the 125/150 line counts, commit `f7e7eaa`, the `claude -p` command and its result (slides 2, 4, 10) |
| `GEMINI.md` (Selah repo) | The two-line pointer (slide 4) |
| `AGENTS.md` (Selah repo) | The nine section headings and the Data and Security list (slides 5, 6) |

## Run sheet

| Time | Segment | Content |
|---|---|---|
| 00:00–00:17 | Introduction | One file written, one proof that it works |
| 00:18–01:45 | Agent files | Sonnet 5.5 and the skill; four files; the line budget; one source, three pointers |
| 01:45–03:33 | Instructions | Nine sections; Data and Security; Workflow; Testing Approach |
| 03:34–04:35 | Fresh session | The `claude -p` proof with tools off |
| 04:36–05:32 | Recap | Things to remember; next: HTML mocks |

## Demo commands

```
node tools/video-audio/generate-audio.mjs docs/videos/04-agent-files --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/04-agent-files
node tools/video-build/build-video.mjs docs/videos/04-agent-files --check
node tools/video-build/build-video.mjs docs/videos/04-agent-files --slides-only
node tools/video-build/build-video.mjs docs/videos/04-agent-files
```

## Pitfalls

- The Data and Security excerpt on slide 6 is copied from the Selah `AGENTS.md`; if that file changes, re-copy rather than paraphrase.
- The slide-5 cue is "has nine sections" (not the full sentence) because the sentence starts with a code span the cue matcher strips.
- `AGENTS.md`, `CLAUDE.md`, `GEMINI.md` and `claude -p` have lexicon entries; keep them when editing the script.

## References

- `docs/process/06-07-agent-files.md`, the log for steps 6 and 7.
- Claude Code memory and `CLAUDE.md` imports: https://docs.claude.com/en/docs/claude-code/memory
