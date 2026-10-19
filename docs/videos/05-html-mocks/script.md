# 05 · HTML mocks

Selah has a repo, skills and instructions, and still not a single screen. Step eight changes that. Before any code, before the design system, before the specs, the whole product is drawn as static HTML: every page, every dialog, every notification, in every state. This is the first big artifact of the series, and it is the one everything else is derived from.

## Why mocks come first

The agent instructions are blunt about it: mocks come before frontend code. If an agent is asked to build UI with no mock for it, it has to say so and write the mock first.

The mocks README says why in one sentence: they are the product on disk before the product exists. Everything after, the design system, the requirements, the detailed designs, the code, is derived from these files. Get the screens right while they are cheap to change, and every later step has something concrete to point at.

## What was produced

Step eight runs on Fable, following the `writing-html-mocks` skill. Mocks are visual work, and this is the second place in the series where a bigger model is worth it.

The output is sixty-five HTML files in `docs/mocks/`, covering sixteen screens in sixty-three states, each in light and dark. One hundred and eight contrast pairs are checked, and all one hundred and eight pass. The commit is `c36b796`.

The sixteen screens fall into three kinds. Eight pages: notes, the note editor, sign in, sign up, account settings, not found, forbidden, and something went wrong. Five dialogs: delete note, account menu, add tag, delete account, and the navigation drawer. And three notifications: toast, banner, and save status.

Every kind has required states. A page needs default, loading, empty and error. A dialog needs default, busy and invalid. A notification needs info, success, warning and danger. The manifest lists every screen and every state, and where a state does not apply, it says why. The note editor has no empty state, because a single note has no collection; the blank note is the new state.

## One cast, one workspace

Every mock shares one person, one workspace and one today. Today is Friday the sixteenth of October, twenty twenty-six. The person is Naomi Adler, with twelve notes and seven tags. The note that is open in almost every mock is Weekly sync, platform team. The note that gets deleted, and undone, is Questions for the landlord. Searching for priya finds two notes; searching for quarterly budget finds none.

This is not decoration. The same names, counts and titles appear in every state of every screen, so the mocks read as one product rather than sixteen sketches. And later, when the app seeds its demo data, it seeds Naomi Adler with the same twelve notes and seven tags, so the running app looks like the mocks.

## A tour

Here is what the mocks look like on screen. The gallery, `index.html`, lists every screen with a live preview and a chip for each of its states. Open the notes page in its default state and you see the desktop layout: a sidebar with search, New note, All notes and the tags; the note list; and the editor with the weekly sync note open. Every mock has a bar at the bottom with its sibling states and a theme toggle, and pressing the t key flips between light and dark. The delete note dialog names the note in its title and starts with focus on Cancel. And the toast with an action shows the eight-second undo after a delete.

## Decisions baked in

The mocks also settle layout and interaction decisions that the specs and designs will quote later.

Layout: on desktop, a sidebar, a three-hundred-and-twenty-pixel note list, and the editor. On tablet, list and editor, with the sidebar in a drawer. On phone, one screen at a time. Dialogs become bottom sheets under six hundred and forty pixels.

Visuals: one indigo accent on cool neutral greys. Borders over shadows. A four-pixel spacing grid. Fourteen-pixel UI text, sixteen-pixel editor text.

Behaviour: one primary action per screen. Destructive actions confirm once with a named danger button, then offer undo for eight seconds. Error states keep the chrome, say what happened, carry a reference code, and offer a retry and a way back.

## Recap

Things to remember from this episode.

Mocks come before frontend code: they are the product on disk before the product exists.

Fable wrote sixty-five files: sixteen screens, sixty-three states, light and dark, one hundred and eight contrast pairs passing.

Every page, dialog and notification has required states, and the manifest says why when one does not apply.

One cast and one workspace, Naomi Adler with twelve notes and seven tags, shared by every mock and later by the demo seed.

Layout, visual and behaviour decisions are settled here, so later steps quote them instead of inventing them.

Next time, step nine: extracting a design system from the mocks. Tokens, foundations and forty-four components.
