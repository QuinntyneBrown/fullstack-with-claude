# 08 · Detailed designs

Forty-nine requirements now say what Selah must do. Step eleven says how. For every feature, a design document names the components, the routes, the repository functions and the data, and draws them: context, containers, components, classes and sequences. Twenty-eight designs, one hundred and sixty diagrams. This episode is about how they are organised, what one looks like inside, and why they come before the estimates.

## What was produced

Step eleven runs on Sonnet, following the `writing-design-documents` skill. The output is `docs/detailed-designs/`: twenty-eight designs, each a folder with a README and a diagrams folder holding the PlantUML sources and the rendered PNG images. One hundred and sixty diagrams, rendered with PlantUML version one point twenty twenty-six point nine. The commit is `2234a91`.

The index at the top makes one promise: every L2 requirement in the specs is realised by one or more designs. It then lists each design with the requirement identifiers it covers, so you can go from any requirement to the design that implements it, and back.

## Five subsystems

The designs are grouped into five subsystems, which are also the vertical slices the agent instructions ask for.

Auth has five designs: sign up, sign in, sessions and sign-out, session expiry, and credentials and secrets. Notes has four: create and open, edit and autosave, offline and device copy, and delete and undo. Tags and search has four: tag a note, browse notes, search notes, and filter by tag. Account has four: the menu, settings, change password, and delete the account.

Platform is the biggest, with eleven: the app shell, dialogs, notifications, status pages, input and output safety, access control, request protection, in-memory data, theming, accessibility, and performance budgets. These are the cross-cutting pieces every feature renders into, and they will be built first.

## Inside one design

Take delete and undo, in the notes subsystem. Every design has the same shape.

An overview restates what Selah is in one paragraph, then defines the terms the design uses. A note. The workspace store, the client-side state that keeps the list, the sidebar and the editor in step. And a soft delete: hiding a row by setting a deleted-at column, without removing it, so it can be restored.

A description walks through the slice from the dialog to the database, and every sentence cites the criterion it satisfies. The dialog is a client component built on the shared dialog as an alert dialog, with initial focus on Cancel. A hook calls the delete route; on success it removes the row from the store, decrements the counts, navigates to the notes list and shows the undo toast. The delete route soft-deletes. A restore route clears the deleted-at column, but only within eight thousand milliseconds. A finalise route makes the deletion permanent at once, when the toast is dismissed. And a purge function hard-deletes expired rows before every write, while every read already filters out soft-deleted notes.

A requirements table lists the L2 requirements the design realises and the L1 each refines. Then the diagrams.

## The diagrams

Each design carries a C4 system context, a container view and a component view, a class structure, and one sequence diagram per behaviour. Delete and undo has two sequences: delete a note, and undo a deletion.

The component view shows what the description said in prose: the dialog and the toast driven by one hook, three route handlers calling one repository, and the purge keeping expired rows out of the table. The sequence for deleting a note shows the confirm, the soft delete, the store update and the toast, and the failure path that keeps the dialog open with a retry.

Where the design cannot decide something yet, it says so. Delete and undo leaves one marker: whether the server's eight-second window should add a grace period for slow transports is to supply. Those markers are honest gaps, and the implementation log records when each one gets resolved.

## Why designs before estimates

You cannot estimate delete a note. You can estimate a dialog with three states, a hook, three route handlers, two repository functions, a purge, and a toast. The design turns a requirement into a parts list, and the parts list is what the next step prices. That is the whole reason this step sits where it does.

## Recap

Things to remember from this episode.

Sonnet wrote twenty-eight designs in five subsystems, with one hundred and sixty PlantUML diagrams, and every L2 requirement maps to a design.

Platform is the largest subsystem and is built first, because every feature renders into it.

Each design has the same shape: overview and terms, a description that cites criteria, a requirements table, and diagrams.

C4 context, container and component, a class structure, and one sequence per behaviour. Open points are marked, not guessed.

Designs come before estimates because they turn requirements into parts lists.

Next time, step twelve: the estimates. Ninety-nine developer-days, and a decision about scope.
