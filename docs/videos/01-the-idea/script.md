# 01 · The idea

Welcome to Full stack with Claude. In this series we build a small full-stack web app with Claude, from the first idea to the demo videos, and we record every step along the way. This first episode covers step one: the idea.

## What this series covers

The series follows a fourteen-step process. Idea, name, repo, clone, skills, agent files, a new session, HTML mocks, design system, specs, detailed designs, estimates, ATDD implementation, and demo videos.

Each step gets a log in `docs/process/` that records the prompt, the model, the commands and the output. And each step gets an episode. So everything you see on screen in this series comes from those logs or from the real repositories, never from memory.

Two repositories are involved. This one holds the series: scripts, slide decks, recording and build tooling, and the process logs. The reference app lives in its own repo, which gets its name in episode two.

## The idea

Step one is the idea, and it is short. Here is the prompt, as stated to Claude: build a small full-stack reference web app with Next.js, using the App Router, React and in-memory SQLite. It is a reference app, not production.

Notice the two qualifiers. Small, because the whole thing has to be built on screen in a video series. And reference, not production, because the goal is to show the process, not to ship a product. In-memory SQLite makes that explicit: nothing persists across restarts, and that is intended.

## The product

The product is a notes app. A user signs up and signs in, then creates, edits and deletes notes, tags them, and searches them.

That is the entire feature list at this stage. Accounts, notes, tags and search. There is no sharing, no collaboration, no sync. The scope stays deliberately small so that the later steps, mocks, specs, designs and estimates, have something concrete and finite to work with.

## Why this idea

Why a notes app? Because it is small enough to build on screen, yet it touches every layer. The UI, where notes are listed and edited. The API that the UI talks to. The database, where notes and tags are stored. Auth, because users sign up and sign in. And tests, because every one of those layers has behaviour worth checking.

That is the trade-off behind the choice. A to-do list would be smaller, but it would not need accounts or search. A real product would be richer, but it would never fit in a series. A notes app sits in between: every layer is present, and none of them is deep.

## Look and feel

The idea also fixes the look and feel, and this is handed to the mocks step later. Crisp, modern SaaS. Neutral greys with one indigo accent. An Inter-style sans serif. Dense but clean. Light and dark themes.

Writing this down at step one matters. When Claude generates the HTML mocks in step eight, it has a visual direction to follow rather than inventing one, and every later artifact, the design system, the specs, the app itself, inherits the same direction.

## Recap

Things to remember from this episode.

Fourteen steps, each with a log in `docs/process/` and an episode.

A small, full-stack reference app: Next.js with the App Router, React and in-memory SQLite. Not production.

A notes app: sign up and sign in, create, edit and delete notes, tag them, search them.

Coverage: small enough to build on screen, yet it touches UI, API, database, auth and tests.

Look and feel fixed up front: crisp modern SaaS, neutral greys, one indigo accent, light and dark themes.

Next time, step two: naming the app with Opus, and why a good name is worth the stronger model.
