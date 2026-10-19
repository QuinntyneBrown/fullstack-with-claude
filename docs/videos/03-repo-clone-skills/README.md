# 03 · Repo, clone and skills

> **Runtime:** ~3.5 min · **Audience:** developers following the series step by step · **Prerequisites:** episodes 01–02; the GitHub CLI (`gh`) if following along

**Video:** [03-repo-clone-skills.mp4](03-repo-clone-skills.mp4) · [Slides](slides.html) · **Audio:** [03-repo-clone-skills.mp3](03-repo-clone-skills.mp3) · [Transcript](script.md)

## Why this video exists

Steps 3, 4 and 5 give Selah a home: a public repository, an empty clone, and the ten agent-toolkit skills copied into two folders. They are small command-line steps, but they set two rules the rest of the series depends on: every file arrives through a logged step, and the two skills folders stay identical.

## Learning objectives

By the end, the viewer can:

- Reproduce the `gh repo create` command and say what the two flags decide.
- Explain why the repo is cloned empty and what the "empty repository" warning guarantees.
- Describe what a skill is (a folder with a `SKILL.md`) and where the ten come from.
- Name the two destination folders and the rule that keeps them identical.
- Map seven of the ten skills onto their process steps.

## Key questions

| Question | What a strong answer includes |
|---|---|
| What does step 3 decide? | Public, because a reference app is meant to be read; a description written up front. |
| Why clone an empty repo? | No README, license or scaffold: every file arrives through a step with a log naming the model and prompt. |
| What is a skill? | A folder with a `SKILL.md` telling an agent how to do one kind of task; ten come from `QuinntyneBrown/agent-toolkit`. |
| Why two skills folders? | Different agents look in different places; the same ten in both, and `diff -r` between them is empty. |
| How do skills relate to the steps? | One skill per phase: agent files (6), mocks (8), design system (9), specs (10), designs (11), estimates (12), demo videos (14). |

## Code / assets on screen

| File | What to show |
|---|---|
| `docs/process/03-05-repo-and-skills.md` | The create and clone commands, the empty-repository warning, the list of ten skills (slides 2, 4, 6, 7) |
| `.claude/skills/` and `.agents/skills/` (Selah repo) | The two identical folders (slide 6) |
| `AGENTS.md` (this repo) | The 14-step list the skills are mapped against (slide 8) |

## Run sheet

| Time | Segment | Content |
|---|---|---|
| 00:00–00:14 | Introduction | Three small steps, one episode, all from the command line |
| 00:15–00:52 | Repo | `gh repo create`, public, described up front |
| 00:53–01:25 | Clone | The empty clone and why the warning is the point |
| 01:26–02:57 | Skills | What a skill is; two folders, empty diff; the ten skills; skills map onto steps |
| 02:58–03:33 | Recap | Things to remember; next: agent files and a fresh session |

## Demo commands

```
node tools/video-audio/generate-audio.mjs docs/videos/03-repo-clone-skills --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/03-repo-clone-skills
node tools/video-build/build-video.mjs docs/videos/03-repo-clone-skills --check
node tools/video-build/build-video.mjs docs/videos/03-repo-clone-skills --slides-only
node tools/video-build/build-video.mjs docs/videos/03-repo-clone-skills
```

## Pitfalls

- The create command on slide 2 is long; it uses `pre.code.tight` so the description fits at 1920 px. Re-run `--check` after any edit, which reports clipped code blocks.
- The skills list and the step mapping come from the log and `AGENTS.md`; the skill names are kebab-case and must match the folder names in the Selah repo.
- `gh` is pronounced "G H" via `tools/video-audio/pronunciations.json`.

## References

- `docs/process/03-05-repo-and-skills.md`, the log for steps 3 to 5.
- GitHub CLI manual: https://cli.github.com/manual/gh_repo_create
- Agent toolkit skills: https://github.com/QuinntyneBrown/agent-toolkit
