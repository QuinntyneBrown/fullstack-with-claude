# Steps 6 and 7 · Agent files and a fresh session

**Step 6:** Sonnet 5.5 follows the `writing-agent-instructions` skill and writes `AGENTS.md` (125 lines, under the 150-line budget because it rides along with every agent turn), plus `CLAUDE.md` (`@AGENTS.md` only), `GEMINI.md` and `.github/copilot-instructions.md` (pointers). Commit: `f7e7eaa`.

**Step 7:** a new CLI session in the repo picks up the skills and AGENTS.md. Proof, run from `C:\projects\selah`:
`claude -p "In two short bullet lists: (1) the names of the skills available to you in this project, (2) a one-sentence summary of AGENTS.md. Do not use tools." --model sonnet`
Result: it lists the project's skills and summarizes AGENTS.md (Selah, Next.js, in-memory SQLite, spec-driven order, security rules).
