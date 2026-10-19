# 09 · Estimates

Twenty-eight designs describe every part of Selah. Step twelve asks the question every project eventually faces: how long will this take? The answer is ninety-nine developer-days, which is far more than a small notes app sounds like. This episode is about where that number comes from, how it is kept honest as the code lands, and the decision it forced.

## What was produced

Step twelve runs on Sonnet with low effort, following the `estimating-designs` skill. The output is `docs/estimates/`: a root README with the overall effort, the percent complete and a brief roadmap, plus one file per subsystem with a table of its designs. The commit is `7bc534b`.

Overall effort: ninety-nine days. Complete: zero percent, because nothing has been built yet.

By subsystem: platform, thirty-four days. Auth, twenty. Notes, eighteen. Tags and search, seventeen. Account, ten.

And inside a subsystem, one line per design. Notes, for example: create and open a note, five days. Delete and undo, four. Edit and autosave, four. Offline and device copy, five.

## Evidence, not opinion

Two things make these estimates more than a guess.

First, they are per design, and each design is a parts list. The previous episode made that point: a dialog, a hook, three routes, two repository functions, a purge and a toast is something you can size. Delete and undo is four days because of what it contains, not because of how it sounds.

Second, the percent complete is evidence-based. The skill does not ask the model how far along it feels. It looks at what exists in the repository against what the design asks for, and the root README is refreshed as implementation lands. Today the answer is zero. The number is meant to move, and the same skill is run again to move it.

## The roadmap

The README closes with a five-phase roadmap, and the order follows the dependencies between the subsystems.

One: platform foundations. In-memory data, the app shell, theming, dialogs, notifications and status pages. Two: auth. Sign up, sign in, sessions and sign-out, session expiry, credentials and secrets. Three: platform guards. Access control, request protection, input and output safety. Four: notes. Create and open, edit and autosave, delete and undo, then tags and search. Five: account, the offline device copy, accessibility and performance.

Platform comes first because every feature renders into it, and auth comes before notes because every note belongs to a signed-in person.

## The decision

Ninety-nine days is far over the line. The process log puts the line for a small notes app at roughly fifteen days. So the estimate forced a scoping conversation, and that conversation is recorded.

Descope candidates were offered: the offline copy, session expiry, delete account, and others, about twenty-seven days between them. Dropping them would have brought the total down to about seventy-two days, still well over fifteen.

The decision was to keep all twenty-eight designs. Selah is a reference app, and its purpose is coverage: every layer, every state, every guard. Cutting the awkward features would make the schedule look better and the reference worse.

What matters here is not whether that was the right call. It is that the call was made with the number in view, before any code was written, and written down. That is what estimating before building buys you.

## Recap

Things to remember from this episode.

Sonnet, low effort, priced twenty-eight designs at ninety-nine developer-days across five subsystems.

Estimates are per design, and a design is a parts list, so the number has a reason.

Percent complete is evidence-based and refreshed as implementation lands. Today it is zero.

The roadmap follows the dependencies: platform, auth, guards, notes, then account.

Ninety-nine days forced a scope decision; the choice was to keep everything, with the number in view.

Next time, step thirteen: implementation begins. Acceptance tests first, one criterion at a time.
