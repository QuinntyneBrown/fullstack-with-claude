# 03 · Repo, clone and skills

The app has a name: Selah. Steps three, four and five give it a home. Create the repository, clone it empty, and copy the skills in. Three small steps, one episode, and all three run from the command line.

## Step three: create the repo

Step three creates the repository with the GitHub CLI, `gh`. The command is `gh repo create`, with the name `QuinntyneBrown/selah`, the `--public` flag, and a description: Selah, a small notes app, the reference app for the Full stack with Claude video series.

Two things are decided in that one command. The repo is public, because a reference app is meant to be read. And the description is written up front, so anyone who finds the repo knows what it is and what it is for before they open a single file.

## Step four: clone it empty

Step four clones it. `gh repo clone QuinntyneBrown/selah selah`, run in `C:\projects`. Git reports: you appear to have cloned an empty repository.

That warning is the point. There is no README, no license, no scaffold. Every file that lands in this repo from now on arrives through a step in the process, with a log that says which model wrote it and which prompt produced it. An empty clone means nothing arrives from memory.

## Step five: copy the skills in

Step five copies the skills in. A skill is a folder with a `SKILL.md` file that tells an agent how to do one kind of task: how to write mocks, how to extract a design system, how to write requirements, and so on. They come from the `QuinntyneBrown/agent-toolkit` repo, under `skills/`.

All ten skills are copied into two folders: `.claude/skills/` and `.agents/skills/`. Two folders, because different agents look in different places, and the same ten skills in both, so every agent gets the same instructions. A recursive diff between the two folders is empty, and keeping it empty is a rule for the rest of the series.

Here are the ten. Creating narrated videos. Estimating designs. Extracting design systems. Recording demo videos. Writing agent instructions. Writing design documents. Writing feature prompts. Writing HTML mocks. Writing requirements. And writing screen composition.

Look at the names next to the fourteen steps. Writing agent instructions is step six. Writing HTML mocks is step eight. Extracting design systems is step nine. Writing requirements is step ten. Writing design documents is step eleven. Estimating designs is step twelve. Recording demo videos is step fourteen. The skills are the process, packaged so an agent can follow it.

## Recap

Things to remember from this episode.

Step three: `gh repo create`, public, with the description written up front.

Step four: clone it empty, so every file arrives through the process.

Step five: ten skills from the agent toolkit, copied into both `.claude/skills/` and `.agents/skills/`, with an empty diff between them.

The skills map onto the steps: one skill per phase of the process.

Next time, steps six and seven: writing the agent instructions, and proving a fresh session picks them up.
