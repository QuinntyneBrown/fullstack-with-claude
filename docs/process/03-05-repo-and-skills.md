# Steps 3 to 5 · Repo, clone, skills

**Step 3, create the repo:**
`gh repo create QuinntyneBrown/selah --public --description "Selah: a small notes app, the reference app for the Full stack with Claude video series"`

**Step 4, clone it empty:**
`gh repo clone QuinntyneBrown/selah selah` into `C:\projects`. Git reports "You appear to have cloned an empty repository."

**Step 5, copy the skills in:** all 10 skills from `QuinntyneBrown/agent-toolkit` (`skills/*`) are copied into both `.claude/skills/` and `.agents/skills/`. `diff -r` between the two folders is empty.

Skills: creating-narrated-videos, estimating-designs, extracting-design-systems, recording-demo-videos, writing-agent-instructions, writing-design-documents, writing-feature-prompts, writing-html-mocks, writing-requirements, writing-screen-composition.
