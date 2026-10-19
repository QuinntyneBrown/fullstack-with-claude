# 08 · Detailed designs

> **Runtime:** ~6 min · **Audience:** developers following the series step by step · **Prerequisites:** episodes 01–07

**Video:** [08-detailed-designs.mp4](08-detailed-designs.mp4) · [Slides](slides.html) · **Audio:** [08-detailed-designs.mp3](08-detailed-designs.mp3) · [Transcript](script.md)

## Why this video exists

Step 11 says how each requirement is built: 28 designs in five subsystems, with 160 PlantUML diagrams. The episode shows how the designs are organised, walks through one of them (delete and undo) from dialog to database, and explains why designs must exist before anything can be estimated.

## Learning objectives

By the end, the viewer can:

- Give the output: 28 designs, 160 diagrams, every L2 mapped to a design.
- Name the five subsystems and say why platform is built first.
- Describe the fixed shape of a design: overview and terms, description citing criteria, requirements table, diagrams.
- Read the delete-and-undo slice: dialog, hook, three routes, repository functions, purge.
- Explain the `<TO SUPPLY>` marker and why designs come before estimates.

## Key questions

| Question | What a strong answer includes |
|---|---|
| How are the designs organised? | Five subsystems that are also the vertical slices: auth (5), notes (4), tags and search (4), account (4), platform (11). |
| What is in one design? | Overview and terms, a description where every sentence cites a criterion, a requirements table, and C4 context, container, component, class and sequence diagrams. |
| What does delete and undo contain? | An alert dialog with focus on Cancel, a hook, a soft-delete route, a restore route within 8,000 ms, a finalise route, and a purge before every write. |
| Why designs before estimates? | A design turns a requirement into a parts list, and the parts list is what the estimate prices. |

## Code / assets on screen

| File | What to show |
|---|---|
| `docs/process/08-12-artifacts.md` | Model, counts, PlantUML version and commit `2234a91` (slide 2) |
| `docs/detailed-designs/README.md` (Selah repo) | The "realized by one or more designs" promise and three index rows (slide 3) |
| `docs/detailed-designs/notes/delete-and-undo/README.md` (Selah repo) | The slice and the `<TO SUPPLY>` sentence (slides 7, 10) |
| `assets/c4-component.png`, `assets/sequence-delete-note.png` | Copied from that design's `diagrams/` folder (slides 8, 9) |

## Run sheet

| Time | Segment | Content |
|---|---|---|
| 00:00–00:27 | Introduction | Twenty-eight designs, one hundred and sixty diagrams |
| 00:28–01:15 | Output | Sonnet and the skill; the index promise |
| 01:15–02:09 | Subsystems | Auth, notes, tags and search, account; platform first |
| 02:10–03:35 | One design | Delete and undo: the shape, the slice from dialog to database |
| 03:36–04:35 | Diagrams | C4 component view; delete sequence; open points marked |
| 04:36–04:57 | Why | Designs before estimates |
| 04:58–05:49 | Recap | Things to remember; next: estimates |

## Demo commands

```
node tools/video-audio/generate-audio.mjs docs/videos/08-detailed-designs --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/08-detailed-designs
node tools/video-build/build-video.mjs docs/videos/08-detailed-designs --check
node tools/video-build/build-video.mjs docs/videos/08-detailed-designs --slides-only
node tools/video-build/build-video.mjs docs/videos/08-detailed-designs
```

## Pitfalls

- The two PNGs in `assets/` are copies of rendered diagrams from the Selah repo; if the designs are re-rendered, copy them again rather than editing them.
- The sequence diagram is wide; slide 9 sets its width to 1640 px and `--check` confirms it stays out of the caption zone.
- `C4` and `PlantUML` are in the pronunciation lexicon.

## References

- `docs/process/08-12-artifacts.md`, the log for steps 8 to 12.
- C4 model: https://c4model.com/
- PlantUML: https://plantuml.com/
