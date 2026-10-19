# Full stack with Claude · video series

One episode per step of the 14-step process. Each folder holds the transcript (`script.md`), the slide deck (`slides.html`), an outline (`README.md`) and the generated `.mp3` and `.mp4`. The logs the episodes are built from are in `../process/`.

| # | Episode | Step | Runtime | Status |
|---|---|---|---|---|
| 01 | [The idea](01-the-idea/README.md) | 1 · Idea | ~4 min | Built |
| 02 | [Naming the app](02-naming-the-app/README.md) | 2 · Name (Opus) | ~3 min | Built |
| 03 | [Repo, clone and skills](03-repo-clone-skills/README.md) | 3–5 | ~3.5 min | Built |
| 04 | [Agent files and a fresh session](04-agent-files/README.md) | 6–7 | ~5.5 min | Built |
| 05 | [HTML mocks](05-html-mocks/README.md) | 8 (Fable) | ~5.5 min | Built |
| 06 | [Design system](06-design-system/README.md) | 9 | ~5.5 min | Built |
| 07 | [Specs](07-specs/README.md) | 10 | ~5 min | Built |
| 08 | [Detailed designs](08-detailed-designs/README.md) | 11 | ~6 min | Built |
| 09 | [Estimates](09-estimates/README.md) | 12 | ~4.5 min | Built |
| 10 | [ATDD implementation: slice zero](10-atdd-slice-zero/README.md) | 13 (first slice) | ~6.5 min | Built |
| 11 | [ATDD implementation: the auth slice](11-atdd-auth-slice/README.md) | 13 (auth slice) | ~9.5 min | Built |
| 12 | [ATDD implementation: the notes slice](12-atdd-notes-slice/README.md) | 13 (notes) | ~10.5 min | Built |
| 13 | [ATDD implementation: tags and search](13-atdd-tags-search-slice/README.md) | 13 (tags and search) | ~10 min | Built |
| 14 | ATDD implementation: the account slice | 13 (account) | | Waiting on the Selah build |
| 15 | Demo videos | 14 | | Waiting on step 14 |

Episodes 14 and 15 are written once the corresponding steps have happened in the Selah repo and are logged in `docs/process/`; nothing in this series is scripted ahead of its log. Episodes 05 and 06 carry a screen recording (`clips/`) made with `tools/video-record` against the Selah `docs/` folder served by `tools/serve-static.mjs`.

Shared slide assets: [`assets/slides.css`](assets/slides.css) and [`assets/slides.js`](assets/slides.js). Build commands are in the root `AGENTS.md`.
