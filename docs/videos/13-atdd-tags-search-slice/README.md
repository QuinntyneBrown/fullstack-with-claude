# 13 · ATDD implementation: tags and search

> **Runtime:** ~10 min · **Audience:** developers following the series step by step · **Prerequisites:** episodes 01–12; Node 22 if running Selah

**Video:** [13-atdd-tags-search-slice.mp4](13-atdd-tags-search-slice.mp4) · [Slides](slides.html) · **Audio:** [13-atdd-tags-search-slice.mp3](13-atdd-tags-search-slice.mp3) · [Transcript](script.md)

## Why this video exists

Slice three makes notes findable: the paged list with its loading and failure states, the sidebar tag list and tag filter, live search with highlighted matches, and tagging inside the editor, built under the same ATDD rule. This episode covers what was built, the evidence per requirement, the status after the slice (as of October 2026) and the nine decisions the code forced.

## Learning objectives

By the end, the viewer can:

- List the five pieces of the slice: the list query, tags, the workspace store's filter and view, the list pane, and tags in the editor.
- Explain the keyset cursor on `(updated_at, id)` and how search input is matched literally (`LIKE ? ESCAPE '\'`).
- Explain why the filter lives in the URL and why the server seeds the first page for it.
- Give the status: 172 unit and 280 acceptance tests pass; the account slice remains.

## Key questions

| Question | What a strong answer includes |
|---|---|
| How does a search for `%` stay literal? | `containsPattern` escapes `%`, `_` and `\`; the query uses `LIKE ? ESCAPE '\'`; the test expects both the seeded "80% hydration" recipe and its own note. |
| Why is the filter in the URL? | `?q=` and `?tag=` are the one source, so Back, reload and a shared link keep them; the query is written with `history.replaceState`, so typing never round-trips. |
| Why is the tag picker a popover rather than the shared `Dialog`? | The mocks draw it anchored to "Add tag" with the editor still interactive; it closes on Escape, an outside click and after an attach. |
| What does a malformed tag in the page URL do? | The page ignores it and shows the full list; `GET /api/notes?tag=has%20space` answers 400. |

## Code / assets on screen

| File | What to show |
|---|---|
| `docs/process/13-progress.md` (Selah repo), "Slice 3: tags and search" | What was built (slides 2–6), the requirements tables (slides 7–10), the test counts (slide 11), the decisions (slides 12–14) |

## Run sheet

| Time | Segment | Content |
|---|---|---|
| 00:00–00:33 | Introduction | Slice three as of October 2026; the same rule |
| 00:33–04:00 | What was built | List query, tags, store, list pane, tags in the editor |
| 04:00–07:04 | Requirements | Nine tag and list requirements; the six rows that moved |
| 07:04–07:31 | Status | 172 unit, 280 acceptance; the account slice remains |
| 07:31–09:28 | Decisions | Popover, URL filter, seeded first page, malformed tag, empty tag, chip order, clear name, snippets, literal match |
| 09:28–09:59 | Recap | Things to remember; next: the account slice |

## Demo commands

```
node tools/video-audio/generate-audio.mjs docs/videos/13-atdd-tags-search-slice --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/13-atdd-tags-search-slice
node tools/video-build/build-video.mjs docs/videos/13-atdd-tags-search-slice --check
node tools/video-build/build-video.mjs docs/videos/13-atdd-tags-search-slice --slides-only
node tools/video-build/build-video.mjs docs/videos/13-atdd-tags-search-slice
```

## Pitfalls

- The slice 3 log originally carried an unfilled `__E2E_TOTAL__`; it now reads 280, from a full Playwright run in the Selah repo. If the log changes, recount.
- The 61 runs against 58 new definitions come from the light and dark theme cases.
- L2-027 (empty workspace) is unchanged in this slice and is not narrated as new.
- On a machine low on memory, run the final encode with `FFMPEG_THREADS=2`.

## References

- `docs/process/13-progress.md` in the Selah repo, "Slice 3: tags and search", the log this episode is built from.
