# 12 · ATDD implementation: the notes slice

Slice one gave Selah a way in. Slice two is the notes themselves: create, open, edit, autosave, delete, undo, copy, and keeping text on the device when the network goes away. The rule has not changed, no code without a failing acceptance test. As of October twenty twenty-six, slice two is done, and tags and search, and account, are still to come. As before, the source for everything here is the implementation progress log in the Selah repo.

## What was built

The log lists six pieces.

The data layer. The notes repository grew create, access, find by id, update, soft delete, deleted access, restore, finalize delete and purge expired. Access reports owned, foreign or missing before any content is read. Update is a single statement that only applies when the incoming revision is newer than the stored one, so a stale save never overwrites a newer one. Restore works only inside the eight-thousand-millisecond window. Every write purges expired soft deletes first, and every read filters out deleted rows, so a deleted note is gone from the moment of deletion. A notes module adds a helper that requires an owned note, answering forbidden or not found, and the note payload shape. A time module formats the relative times: just now, twelve minutes ago, yesterday, a weekday, a date.

The endpoints. Create, read, patch and delete for a note, plus restore and a finalize call, all on the authenticated route wrapper from slice one. Each validates with its own Zod schema and authorizes by id: four-oh-three for a foreign note, four-oh-four for a missing or deleted one, and four-oh-four, not four-oh-three, for another account's deleted ids.

The workspace store. A client context holds the visible note list, the all-notes count and the tag counts, so the sidebar, the list and the editor update together without a reload. The signed-in layout seeds it from the server.

The screens. The list renders the rich rows the mocks show: the title or the untitled placeholder, a two-line snippet, read-only tag chips and a relative time, with the open note marked current. A new-note button appears in the sidebar, the list header and the empty state, and the N key finds it. The editor has a title field limited to two hundred characters, a body limited to one hundred thousand, a save status, a copy button, a delete dialog, the device-copy offer, and a footer with the word count and the created and last-edited times.

Autosave and device retention. An autosave controller waits eight hundred milliseconds after the last keystroke, flushes on blur, page hide and visibility change, keeps one request in flight with one trailing save, and uses a monotonic revision. On failure it backs off two, four and eight seconds, then waits for a manual retry, and it never retries a bad request. A device-copy store keeps text per account and note, and sign-out clears the account's copies. A connectivity monitor raises the offline toast and banner and removes the banner on reconnect. A save that meets a four-oh-one keeps the text on the device and hands over to the session-expiry flow.

The test harness. A harness seed endpoint creates a throwaway account with the demo catalog, so each notes test gets its own isolated, seeded workspace. A new mock, the device copy notice, was also added, and registered in the mock index, manifest and readme.

## Requirements

Eight notes requirements are in the slice, and the log gives each one its evidence.

Create a note: the sidebar, the list header, the empty state and the N key each create a blank note and open it with the title focused. It lists first as untitled, no text yet, just now, and two activations make two notes.

Open a note: the editor shows title, text, tags, save status, copy and delete. The skeleton appears only after three hundred milliseconds, and not at all under reduced motion. A two-hundred-character title wraps, a long text scrolls inside the body, and a failing request shows an error panel with a request reference while the list stays usable.

Edit title and text: the list row follows as you type, the two hundred and first title character is refused in the field and with a four-hundred from the server, over-long text is refused and not saved, and a save moves the note to the top.

Autosave and save status: one request eight hundred milliseconds after the last keystroke, saving, then saved just now, then a relative time. Backoff, then retry. A bad request shows the field message and never retries. The status is the only save feedback, in a polite live region, and a newer save wins over a slower older one.

Offline and device retention: offline shows the status, the device copy, the toast once and the banner. Reconnecting saves and clears both. A failed save leaves a copy that is offered when newer than the server, then saved or discarded.

Delete a note: a named alert dialog with the tag count, Cancel focused, and an inert background. Busy disables both buttons. Success opens the notes page and raises the undo toast; failure keeps the dialog open with try again.

Undo a deletion: an eight-second toast. Undo restores the note in place, with the same data, and says note restored. After eight seconds the note answers four-oh-four, and a reload inside the window leaves the deletion final. A failed restore raises a danger toast with retry.

Copy a note as text: the clipboard gets the title, a blank line and the text as plain text, an info toast confirms, and an empty title copies as untitled note.

Eight other rows moved. Session expiry handling now has criterion two: a save that meets a four-oh-one keeps the text on the device and offers it after sign-in. The empty workspace has criteria two and three. Status pages were re-verified with real note ids, with no title, text or tag of another account exposed. Input validation advanced for the note endpoints. Authorization is done for criteria one, two, four and five. Safe output shows markup in a title or text as text, with no injected nodes. The responsive layout and the keyboard and assistive technology requirements were extended to the real screens, with axe run on the list, the editor and the delete dialog in both themes. And in performance, a save is under two hundred milliseconds at the ninety-fifth percentile over a hundred calls against one thousand two hundred and eighty-four notes, and ten seconds of typing sends at most one request per eight hundred milliseconds.

## Status

One hundred and thirty-two unit tests pass, thirty-seven of them new this slice. Two hundred and nineteen acceptance tests pass, with fifty-one new definitions, and the parametrized cases bring the run count higher. Typecheck and lint are clean.

What remains, as of this slice: tags and search, the requirements numbered nineteen to twenty-eight, except the empty workspace, which is done; and the account requirements, twenty-nine to thirty-two, and thirty-four, with the appearance control among them.

## Decisions made in this slice

Six decisions are recorded.

Deletion is soft, with a server-side undo window. A deleted note is excluded from every read at once, restore clears it only inside eight thousand milliseconds, and every write purges what is past the window. A note is created the moment you press new note, so it always has an id.

A monotonic client revision resolves out-of-order saves. Each edit sets the revision to the larger of the previous one plus one and the current time, and the server applies a save only when its revision is greater. A slow older response can never overwrite newer text.

The workspace store is a client context seeded by the server, so create, edit, delete and undo update the sidebar, the list and the editor without a reload.

The device-copy offer got its missing mock. The offline design had left that criterion to supply, so this slice adds an inline warning notice with use device copy and keep saved version, and builds the component to match.

Each notes test runs on its own seeded account. Tags could only be attached through the seed at this point, so tests use the harness seed, which keeps the shared demo account read-only and lets tests create, edit and delete in parallel. One slice-one assertion was relaxed from an exact title match to contains, because the row now shows more than the title.

And the autosave controller is created inside an effect, keyed by the note id, because it owns timers and browser listeners and must be disposed and recreated per note.

## Recap

Things to remember from this episode.

Slice two is the notes: create, open, edit, autosave, delete, undo, copy, and device retention.

A save carries a monotonic revision, so the newest text always wins.

Deletion is soft, and undo is a server-side window of eight seconds.

One hundred and thirty-two unit and two hundred and nineteen acceptance tests pass.

Every notes test runs on its own seeded account.

Next time: tags and search, the third feature slice.
