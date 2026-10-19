# 04 · Agent files and a fresh session

The Selah repo has its skills. It still has no instructions. Step six writes the file every coding agent reads before it touches the repo, and step seven proves that a brand-new session actually picks it up. One file written, one proof that it works.

## Step six: the agent files

Step six runs on Sonnet 5.5, following the `writing-agent-instructions` skill, the first of the ten skills to be used. The input is a description of the project: the name and its meaning, the product, the stack, the look and feel, the spec-driven workflow, the guardrails, and the folder structure.

The output is four files. The main one is `AGENTS.md`, one hundred and twenty-five lines. The skill sets a budget of one hundred and fifty lines, and the reason matters: this file rides along with every single agent turn, so every line costs context on every request. Short is a feature.

The other three are pointers. `CLAUDE.md` contains one line, an at-sign followed by `AGENTS.md`, which tells Claude Code to include that file. `GEMINI.md` and `.github/copilot-instructions.md` say the same thing in prose: read `AGENTS.md` at the repository root before working in this repository; it is the single source of guidance, and this file adds nothing of its own.

Why one source and three pointers? Because different agents look for different file names. If each had its own copy, they would drift. One file, three pointers, and nothing to keep in sync. The commit is `f7e7eaa`.

## What the instructions say

`AGENTS.md` has nine sections. Purpose quotes the description it was generated from. Then Speed Is Not the Goal. Technology. Architecture and Design. Data and Security, marked non-negotiable. Look and Feel. Workflow, which is spec-driven. Testing Approach. And Folder Structure.

Three of those sections carry the rules the rest of the series lives by.

Data and Security says: Zod-validate every input at every boundary. Parameterised SQL only, never string concatenation, including LIKE search terms. All SQL lives in `lib/repositories/`. Never store or log a plaintext password; hash with scrypt or bcrypt, with a per-user salt. No secrets in the repo. Authorise every note query by the signed-in user. And return generic errors for failed sign-in, so an attacker cannot tell whether an email exists.

Workflow says: work flows in this order, and each phase feeds the next. Mocks, then the design system, then specs, then detailed designs, then estimates, then incremental ATDD implementation. Do not skip ahead. Mocks come before frontend code: if asked to build UI with no mock for it, say so and write the mock first.

Testing Approach says: no code without a failing acceptance test. Write a Playwright test linked to a Given-When-Then criterion in the specs, watch it fail for the right reason, implement until it passes, then refactor. Page objects own the selectors; tests state intent. And never write architecture tests, because a test suite exists to prove behaviour.

## Step seven: a fresh session

Step seven is the proof. A new CLI session is started in `C:\projects\selah`, and it is asked one question with tools switched off.

The command is `claude -p`, with the prompt: in two short bullet lists, one, the names of the skills available to you in this project, and two, a one-sentence summary of `AGENTS.md`. Do not use tools. The model flag is set to sonnet.

The result lists the project's skills, and summarises `AGENTS.md` as Selah, Next.js, in-memory SQLite, a spec-driven order, and security rules.

The important words are: do not use tools. With tools off, the model cannot open any file. Whatever it knows about the skills and the instructions, it knows because the session loaded them at start. That is the whole point of step seven: the instructions are not just in the repo, they are in the context of every new session.

## Recap

Things to remember from this episode.

Step six writes `AGENTS.md`, one hundred and twenty-five lines, under a budget of one hundred and fifty, because it rides along with every turn.

`CLAUDE.md`, `GEMINI.md` and the Copilot instructions are pointers to one source, so nothing drifts.

The non-negotiables: validate every input, parameterised SQL, hashed passwords, no secrets, authorise every query.

The workflow order: mocks, design system, specs, designs, estimates, then ATDD. No code without a failing acceptance test.

Step seven proves a fresh session, with tools off, already knows the skills and the instructions.

Next time, step eight: the HTML mocks, written by Fable. Every page, dialog and notification, in every state.
