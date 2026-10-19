# 06 · Design system

The mocks exist. Sixty-five files that show what Selah looks like. But a mock is a picture, and code cannot import a picture. Step nine turns the mocks into something code can use: a design system, with named tokens, foundation pages and one page per component. This episode is about what was extracted and why the extraction is a separate step.

## Why extract, and why now

The agent instructions make the design system the source of truth for tokens and components. Tailwind theme values map to those tokens, and a hex code or an arbitrary colour class inside a component is a defect: add the missing token first.

That rule only works if the tokens exist before the first component is written. So the extraction sits between the mocks and the specs. It reads the mocks, which already pass their contrast checks, and writes down every colour, size, radius, shadow and duration they use, under a name. From then on, the name is what the code refers to.

## What was produced

Step nine runs on Sonnet with low effort, following the `extracting-design-systems` skill. Extraction is mechanical work: the decisions were made in the mocks, and the job is to harvest them faithfully and check them. A smaller model at low effort does that well, and the skill's scripts do the checking.

The output is sixty-five pages in `docs/design-system/`: twelve foundations, forty-four components and eight patterns. Two hundred and fifty-four tokens. One hundred and thirty-four contrast pairs, all passing. And a tokens file in the DTCG format, the Design Tokens Community Group standard, so tools outside the repo can read the same values. The commit is `4cb8744`.

The twelve foundations are color, typography, spacing, layout, elevation, shape, motion, iconography, theming, responsive, accessibility and content. The eight patterns cover content tone, data tables and lists, dialogs and overlays, empty and error states, feedback and loading, forms, navigation and page structure, and notifications.

## Tokens in three tiers

The token file explains its own structure at the top, and the structure is the most reusable idea in this episode. Tokens come in three tiers.

Primitives are raw values: the palette and the font stacks. Grey twenty-five through grey nine-fifty, indigo fifty through indigo nine hundred. Components never use a primitive directly.

Semantic tokens are meaning-based aliases that components consume: color, text, space, radius, shadow, duration, ease, z-index and layout. A component asks for the default foreground colour, not for grey eight hundred. Themes override the semantic layer: light is the default, and dark applies with a data-theme attribute, or automatically when the operating system prefers dark.

Component tokens, for buttons and fields and so on, always alias a semantic token.

The primitives carry their reasons too. Grey five hundred is annotated: four and a half to one on white and canvas, for metadata. Grey four-fifty: three to one, for control edges. Those two ratios are the WCAG 2.2 AA thresholds for normal text and for UI component edges, and the contrast check file pairs every foreground token with every background it sits on, with the minimum ratio each pair must meet.

## One page per component

Every one of the forty-four component pages has the same sections: overview, anatomy, variants, sizes, states in both themes, responsive behaviour, theming, accessibility, content, do and don't, tokens, code and sources.

The sources section is the traceability. The button page cites the mocks it was extracted from: the notes page, the note editor and the sign-in page in its submitting state. The dialog page cites the delete-note dialog in its default, busy and failed states.

Six components are marked core set: badge, description list, list, table, progress bar and radio group. No mock uses them yet, but every product needs them, so the pages exist and are documented to the same standard.

## A tour

Here is the design system on screen. The index links every foundation, component and pattern. The button page walks through anatomy, variants and states, with light and dark side by side. And the color foundation shows the grey and indigo ramps with their roles.

## Recap

Things to remember from this episode.

The design system is the source of truth for tokens and components, and a raw colour in a component is a defect.

Sonnet at low effort extracted sixty-five pages: twelve foundations, forty-four components, eight patterns, two hundred and fifty-four tokens, one hundred and thirty-four contrast pairs passing.

Three tiers: primitives, semantic, component. Components consume semantic tokens; themes override them.

Every component page has the same sections, and cites the mocks it came from.

Next time, step ten: the requirements. Eleven high-level, forty-nine detailed, and two hundred and eighty-one acceptance criteria.
