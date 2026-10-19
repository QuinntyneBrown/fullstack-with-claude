# 13 · ATDD implementation: tags and search

Slice two gave Selah its notes. Slice three makes them findable: the paged notes list with its loading and failure states, the sidebar tag list and tag filter, live search with highlighted matches and the no-results state, and tagging inside the editor. Same rule, no code without a failing acceptance test. As of October twenty twenty-six, slice three is done, and only the account slice is still to come. The source is the implementation progress log in the Selah repo.

## What was built

The log lists five pieces.

The list query. The notes repository returns one page of list items: title, a two-hundred-and-forty-character snippet, tags and times, with the matching total and a keyset cursor on the updated time and the id. A tag narrows it with an exists check on the note-tags table, joined to the account's own tags. A search narrows it with a like on the title or the body, with the pattern built by a helper that escapes percent, underscore and backslash. The list endpoint parses the query, the tag, the limit and the before cursor with one schema, and adds the workspace total. The signed-in layout seeds the first page for the filter in the URL, so the first paint shows the right notes. Later filter changes are client requests.

Tags. Attach by name finds or creates the account's tag, refuses the eleventh, inserts the link, moves the note's updated time, all in one transaction. Detach and list with counts complete the repository. Two endpoints, add a tag to a note and remove one, authorize the note first and return the saved note plus the account's tag counts. A tag module normalizes input and builds the picker options, a highlight module splits text into matches.

The workspace store now holds the active filter, taken from the URL, the search text, and a view: the rows, the matching total, the cursor, a loading, ready or error state, the three-hundred-millisecond slow flag and the request reference. A changed filter fetches with an abort controller and ignores late answers. Search text is committed two hundred milliseconds after the last keystroke and written to the URL by replacing the history entry. Clear, refresh and load more complete the actions, and a tag response updates a row and the counts.

The list pane. A search field appears in the sidebar, the drawer and, below one thousand twenty-four pixels, in the list itself. The slash key focuses it and Escape clears it, with a hundred-character limit. A tag filter header shows the tag chip, clear tag filter, and a count such as four notes. A search summary shows the matches with a clear control, and a polite live region announces, for example, two of twelve notes. Rows highlight matches as mark elements built from text nodes, never an HTML string, and show up to three tag chips with a plus-n for the rest. The states are skeleton rows, the list error with try again, the reference and sign in again, no results, an empty tag, and a load-more footer that says showing fifty of one thousand two hundred and eighty-four.

Tags in the editor. Tag chips with named remove buttons, and a dashed add tag control, disabled with its reason at ten tags. The tag picker is a popover with a combobox named tag name and a listbox of the tags not yet on the note, with counts. It narrows as you type, offers a single create option for a valid new name, says no matching tag, shows the rule for an invalid name, shows a busy state while creating, and shows an inline error with retry on failure. A tag change counts as a save: the chips, the last-edited time and the save status follow.

## Requirements

Nine tag and list requirements are done, and the log gives each its evidence.

Add an existing tag: the picker opens with the field focused and the other tags with counts. Enter or a click attaches, closes, raises the count and saves. At ten tags the control is disabled and the server answers four-hundred.

Create a tag: a single create option with the Enter hint, the busy text with the field disabled, no create option for an invalid name, lowercase comparison, and a failure that keeps the name with an inline retry. A name that differs only by case reuses the existing tag.

Remove a tag and tag lifecycle: the chip leaves, the count drops and the note is saved. When the last note loses a tag, the tag leaves the sidebar and the picker. Delete and undo move the counts.

Sidebar tag list: each tag with its count and all notes with the total. Another account's tags are never listed.

Notes list: newest edit first, three chips plus a plus-n, and a relative time. With one thousand two hundred and eighty-four notes it shows fifty and load more until the last page. The open row carries aria-current.

Search: one request two hundred milliseconds after the last keystroke, with highlights only in the rows. Percent, underscore, quote, backslash and SQL fragments match literally. Escape and clear restore the list, only the person's own notes appear, and one hundred and one characters is a four-hundred.

No search results: the message, zero of twelve, nothing selected, the polite announcement, a clear search button, and a new note with the query as the title.

Filter by tag: only the tagged notes under the tag and its count, search within the tag, and all notes or the chip's clear control removes it. A malformed tag is four-hundred from the API and ignored by the page; an unowned tag gives an empty list.

Notes loading and failure: skeleton rows only after three hundred milliseconds, a failure panel with try again, a reference taken from the request id header, and sign in again. No stack, SQL or path appears in the panel.

Six cross-cutting rows moved. Validation is done: every route handler and server action now parses with a schema. Authorization is done for notes and tags, with foreign tag changes answering four-oh-three and changing nothing. Safe queries and output are done. Responsive layout and the keyboard and assistive technology requirements were extended to the filtered list, the picker states and the list error. And performance is done: the first page of fifty under two hundred milliseconds at the ninety-fifth percentile, and a search under three hundred.

## Status

One hundred and seventy-two unit tests pass, forty of them new this slice. Two hundred and eighty acceptance tests pass. Fifty-eight definitions are new this slice, and the light and dark theme cases bring the run count to sixty-one. Typecheck and lint are clean.

What remains is the account slice: requirements twenty-nine to thirty-two, and thirty-four. The appearance control is among them.

## Decisions made in this slice

Nine decisions are recorded.

The tag picker is a non-modal popover, not the shared dialog. The mocks draw it anchored to add tag, with the editor still interactive, so it closes on Escape, on an outside click and after a successful attach, as the spec says, and not on Enter as the mock note had it.

The filter lives in the URL. Question-mark q and tag are the one source, so back, a reload and a shared link keep them. The query is written by replacing the history entry, so typing never round-trips to the server.

The server seeds the first page for the URL's filter, so a tag page never flashes the unfiltered list. No tags endpoint was added, because the layout seeds the counts and every tag response carries them.

A malformed tag in the page URL is ignored, while the API answers four-hundred. The page shows the person's own full list, not an error panel, for a bad bookmark.

A tag filter with no notes and no query shows the header with zero notes and an empty-tag panel, explaining that tags stay only while a note carries them. The design had left that state to supply.

Chips keep attach order, the order of the note-tags row ids, as the mock's plus-six edge case shows.

The clear control in the search field keeps the mock's name, clear search, and so does the no-results button. They are never visible at the same width.

Snippets are two hundred and forty characters from the server; the full text never travels in the list, so highlights appear only in the part of the text a row can show.

And the percent test expects two matches, the seeded recipe, eighty percent hydration, and the test's own note, because the match is literal.

## Recap

Things to remember from this episode.

Slice three is tags and search: the paged list, the tag filter, live search and the tag picker.

The filter lives in the URL, and the server seeds the first page for it.

Search and tag input are matched literally, and highlights are built from text nodes.

One hundred and seventy-two unit and two hundred and eighty acceptance tests pass.

Next time: the account slice, and then step fourteen, the demo videos.
