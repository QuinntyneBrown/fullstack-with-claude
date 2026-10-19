# 07 · Specs

Selah now has screens and a design system, but nobody has written down what the app must do. Step ten does that. The requirements come in two levels: eleven high-level requirements that say what Selah is for, and forty-nine detailed ones that say exactly how each screen behaves, with two hundred and eighty-one acceptance criteria that the tests will later prove one by one.

## Why specs after mocks

The usual order is requirements first, then screens. This series flips it, and the first line of the spec file says why: these requirements are derived from the agent instructions and from the HTML mocks, where the manifest lists every screen and state.

Because the mocks already exist, every requirement can point at a real screen, name the states it covers, and quote the real copy. The criteria are not abstract. They say which dialog opens, what its title is, and what the button reads while a request is in flight. That is what makes them testable later.

## What was produced

Step ten runs on Sonnet with low effort, following the `writing-requirements` skill. The output is two files in `docs/specs/`: `L1.md` and `L2.md`. Eleven L1 requirements, forty-nine L2 requirements, two hundred and eighty-one acceptance criteria. The commit is `97c3c62`.

Wording uses shall for mandatory behaviour. Every L2 traces to one or more L1 requirements by identifier, and names the mock states it covers.

## Level one

The eleven L1 requirements are the whole product in eleven sentences.

Sign up, sign in and sign out. Session lifecycle. Write and manage notes. Tag notes. Browse and search notes. Manage the account. Clear feedback in every state. Security and privacy. Demo data. Responsive, themed and accessible. And performance.

Two of them are worth hearing in full, because they come straight from the idea. L1 nine, demo data: because Selah is a reference app, data shall live in memory, be seeded at startup, reset on every restart, and the app shall say so. And L1 eleven, performance: common actions shall feel immediate on a workspace of over one thousand notes.

## Level two

Level two is where the detail lives. Take L2 sixteen, delete a note. It traces to L1 three, write and manage notes. It covers the delete-note dialog in its default, busy and failed states. And it has six acceptance criteria, each written as given, when, then.

Criterion one: given an open note, when Delete note is chosen, then a dialog opens titled Delete, the note's title, question mark. It reads: the note and its n tags are removed from your list; you'll have eight seconds to undo. It has Cancel and a Delete note danger button, and initial focus is on Cancel.

Criterion three: given the person confirms, when the request is in flight, then the danger button reads Deleting, is disabled, and Cancel is disabled.

Criterion five: given the request fails, then the dialog stays open with Couldn't delete the note, and the button reads Try again.

Criterion six: given a note with no tags, when the dialog opens, then it does not mention tags.

Every one of those is a sentence a Playwright test can assert: a title, a button label, a disabled state, a focus position. And every one of those strings was already on screen in the mocks.

## From criteria to tests

This is the handoff that makes ATDD work. The agent instructions say no code without a failing acceptance test, and that the test must link to a given-when-then criterion in the specs. So the forty-nine L2 requirements and their two hundred and eighty-one criteria are the backlog. Each criterion gets an identifier, like L2 sixteen point one, and each acceptance test names the criterion it proves.

## Recap

Things to remember from this episode.

Specs come after mocks here, so every requirement points at a real screen and quotes real copy.

Sonnet, low effort: eleven L1, forty-nine L2, two hundred and eighty-one acceptance criteria, in two files.

L1 is the product in eleven sentences; L2 traces to L1 and names the mock states it covers.

Criteria are given, when, then, and every one is something a test can assert.

The criteria are the backlog for ATDD: each test names the criterion it proves.

Next time, step eleven: the detailed designs. Twenty-eight designs and one hundred and sixty diagrams.
