# 00 · Build a full stack app with Claude Code, hands on

Hi there, and welcome! In the next few minutes you are going to see the whole workflow for building a quality full stack app with Claude Code, from a blank folder to a tested, running product. This is the fast, hands-on version. For every step you get three things: what to type, what to prompt, and how to check that it worked.

You do not need a particular stack. Pick whatever you like, or ask Claude to suggest one. And you do not need any particular feature either. Whatever your app is, the steps are the same. The example app here is called Selah, a small notes app, so you can see real results on screen, and every command and prompt you see came from the real build.

## The map

Here are the fourteen steps. One, the idea. Two, a name. Three, a repo. Four, clone it. Five, add skills. Six, write the agent files. Seven, start a fresh session. Eight, HTML mocks. Nine, a design system. Ten, specs. Eleven, detailed designs. Twelve, estimates. Thirteen, build it test first. Fourteen, record demo videos. The pattern is simple: decide what it is, set up the workspace, design it on paper, then build it with tests. Ready? Let's go!

## Step 1 · The idea

Step one. Open Claude Code and describe your idea in a sentence or two. Name your stack, or say you are open to suggestions. Say whether this is a real product or a reference build.

Here is the prompt from Selah. Build a small full-stack reference web app, and then the stack, and then a note that it is a reference app, not production. Swap in your own stack and your own app, and keep the shape.

Then add a few lines about what the product does, and a line about the look and feel. Selah asked for a crisp modern look, neutral greys, one accent colour, light and dark themes. Check: could a stranger read your idea and know what to build? If yes, you are done.

## Step 2 · A name

Step two, a name. Switch to the strongest model you have, because a good name is worth it. Selah used Opus.

Here is the prompt. What would be a good unique name for a small notes app? Consider a particular meaning or association: biblical, abstract, descriptive. Claude came back with four candidates, Selah, Zikaron, Baruch and Marginalia, each with its meaning. Pick the one that is short and easy to say. Check: say it out loud. If it is awkward, pick another.

## Step 3 · The repo

Step three, make the repo. Type these. G H repo create, then your account slash your project name, then public or private, and a short description. Selah is public, but yours can be private.

## Step 4 · Clone it

Step four, clone it. Type G H repo clone, then the same name, into your projects folder. Git will tell you that you cloned an empty repository. That is exactly what you want.

## Step 5 · Skills

Step five, skills. Skills are folders of instructions that teach Claude how to do one job well. Selah copied ten skills in: writing agent instructions, writing HTML mocks, extracting design systems, writing requirements, writing design documents, estimating designs, recording demo videos, and a few more.

Copy them into two folders, dot claude slash skills, and dot agents slash skills, so more than one coding agent can use them. Then type diff, dash r, between the two folders. If it prints nothing, the copies are identical. Check done.

## Step 6 · Agent files

Step six, agent files. These are the instructions every session reads first. Run the writing agent instructions skill, and describe what the project shall be. Claude writes one main file called AGENTS dot M D, plus tiny pointer files for the other tools. The Claude file contains one line that pulls in the main file.

Selah's main file is one hundred and twenty-five lines. Keep yours under a hundred and fifty, because it rides along with every single turn. Commit it. Check: the guardrails you care about are in there, such as mocks before frontend code and no code without a failing test.

## Step 7 · A fresh session

Step seven, start a fresh session in the repo, so it picks up the skills and the agent file. Prove it. Type claude, dash p, and ask: in two short bullet lists, the names of the skills available to you in this project, and a one-sentence summary of the agent file. Do not use tools. If it lists your skills and summarizes your file, you are ready.

## Step 8 · HTML mocks

Step eight, mocks. This is the step that makes the biggest difference to quality, so give it your strongest model. Selah used Fable. Type slash, then the writing HTML mocks skill, and tell it the look and feel from step one.

It writes static HTML for every page, dialog and notification, in every state: loading, empty, error, success and more. Light and dark, responsive, keyboard friendly. Selah got sixty-five HTML files, sixteen screens, sixty-three states, and every contrast pair passed.

Here is what the mocks look like on screen. First, a gallery with a live preview of every screen, and a chip for every state. Scroll down and you can see just how many there are. Now open the notes page, with the sidebar, the list and the editor all in place. Hover around and get a feel for the layout. Press t to flip between light and dark, and press it again to flip back. Next, a delete dialog, with focus on the safe button, so nobody deletes by accident. And last, a toast with an undo action that waits eight seconds, so a slip is never a disaster. Click around your own mocks like this, and fix anything you do not like now, while it is cheap.

## Step 9 · Design system

Step nine, a design system. Switch to a lighter model and low effort, because the mocks already hold the answers. Type slash, then the extracting design systems skill. It pulls the colours, type, spacing and components out of your mocks into one documented system. Selah got sixty-five pages and two hundred and fifty-four tokens, with every contrast pair checked.

Here is a quick tour. Start at the index, and scroll through the foundations. Then open the button component and see every variant and state, written down once. Then the colour page, with the tokens for light and dark. Check: from now on, nothing gets a one-off colour.

## Step 10 · Specs

Step ten, specs. Type slash, then the writing requirements skill. Claude writes high-level requirements, then detailed ones, each with Given, When, Then acceptance criteria. Selah got eleven high-level and forty-nine detailed requirements, with two hundred and eighty-one acceptance criteria.

Read a few. Each criterion should be something a test can prove. Delete a note, then undo within eight seconds, and the same note comes back. That kind of sentence turns into a test later. Check: if a criterion is vague, fix it now.

## Step 11 · Detailed designs

Step eleven, detailed designs. Type slash, then the writing design documents skill. For every feature you get a short design document, with a context diagram, a class diagram and a sequence diagram. Selah got twenty-eight designs and a hundred and sixty diagrams.

Here is a sequence diagram for deleting a note and undoing it. You can trace every request from the screen to the data and back. Check: every design points back to the requirement it satisfies.

## Step 12 · Estimates

Step twelve, estimates. Type slash, then the estimating designs skill. You get one table per area with developer days per design. Selah came out at ninety-nine days, far more than a small notes app should need.

So Claude offered descope candidates, and you decide. Selah kept all twenty-eight designs. Check: you are choosing scope with open eyes before writing any code.

## Step 13 · Build it, test first

Step thirteen, the build, and this is where all that preparation pays off. The rule is one sentence: no code without a failing acceptance test.

Work in slices. Prompt Claude like this: implement the next slice from the estimates, one acceptance criterion at a time. Write the failing end-to-end test first, then the code that makes it pass, then run unit tests, end-to-end tests, the type check and the linter, and update the progress log.

Every test names the requirement it proves. Selah built slice zero, the foundation, and then its feature slices one at a time. Check after every slice: all tests green, typecheck clean, lint clean, and the log updated. At this point Selah has one hundred and seventy-two unit tests and two hundred and eighty acceptance tests passing.

Here is the running app, signed in and ready to go. Start with the list of notes, and open one to see it in the editor. Now click the search box and type a word, and watch the list narrow to the matches. Take a moment to enjoy that. Press escape to clear it and bring everything back. Now press new note, and type a title and some text. Pause for a second, and watch it say Saved, all by itself, with no save button. Then press add tag, type a name, and press enter. The tag appears on the note and in the sidebar. That is your app, built step by step, and checked at every step.

## Step 14 · Demo videos

Step fourteen, show it off. Type slash, then the recording demo videos skill. It discovers your apps, runs them locally, and produces narrated, captioned recordings with a way to re-run them. Run it once your slices are done.

## Recap

That is the whole workflow! Decide the idea, name it, make the repo, clone it. Add the skills, write the agent files, start fresh. Mock every state, extract the design system, write testable specs, design each feature, estimate. Then build one slice at a time, test first, and record the demo.

Now go build something. Thanks for watching!
