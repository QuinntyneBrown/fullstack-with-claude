# 02 · Naming the app

In episode one we fixed the idea: a small full-stack reference app, a notes app, built on screen. Step two gives it a name. It is the shortest step in the series, and it is also the first place where the choice of model matters.

## Why the stronger model

Every other step so far runs on Sonnet, and most of the later ones do too. Naming runs on Opus 5.5. The log gives the reason in one line: a good name is worth the stronger model.

Think about where the name ends up. It is the repository name, so it is in every URL and every clone command. It is in every commit message, every episode of this series, and in the first line of the agent instructions. Picking it takes one prompt, and changing it later touches everything. That asymmetry is why the step is small and the model is large.

## The prompt

Here is the prompt, as stated to Opus: what would be a good unique name for a small notes app? Consider a particular meaning or association: biblical, abstract, descriptive.

Notice what the prompt does and does not say. It gives the product, a small notes app, and it asks for a meaning or association rather than a list of words. It also offers three directions: biblical, abstract, descriptive. That is enough shape to get candidates with reasons attached, instead of a page of made-up words.

## The candidates

Opus came back with four candidates, each with its meaning.

Selah. Hebrew, used in the Psalms. A pause, a moment to stop and reflect.

Zikaron. Hebrew for memory, or remembrance.

Baruch. Jeremiah's scribe, the one who wrote down his words.

And Marginalia. The notes written in a book's margins.

Each one is a real word with a real association, and each one says something true about a notes app: pausing to reflect, remembering, writing things down, notes in the margins.

## The pick

The pick is Selah. Three reasons, all from the log: it is short, it is easy to say, and the meaning fits a notes app. A note is a pause to write something down and come back to it later.

The repository becomes `QuinntyneBrown/selah`, and it is public, because a reference app is meant to be read.

From here on, the app is called Selah, and so is its repo.

## Recap

Things to remember from this episode.

Naming is the shortest step, and it runs on Opus, because a good name is worth the stronger model.

The prompt asked for a meaning or association, in three directions: biblical, abstract, descriptive.

Four candidates came back with their meanings: Selah, Zikaron, Baruch and Marginalia.

Selah won: short, easy to say, and a pause to reflect, which fits a notes app.

Next time, steps three to five: creating the repo, cloning it empty, and copying the skills in.
