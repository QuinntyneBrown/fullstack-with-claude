# 12 · ATDD implementation: the notes slice

> **Runtime:** ~10.5 min · **Audience:** developers following the series step by step · **Prerequisites:** episodes 01–11; Node 22 if running Selah

**Video:** [12-atdd-notes-slice.mp4](12-atdd-notes-slice.mp4) · [Slides](slides.html) · **Audio:** [12-atdd-notes-slice.mp3](12-atdd-notes-slice.mp3) · [Transcript](script.md)

## Why this video exists

Slice two is the notes themselves: create, open, edit, autosave, delete, undo, copy and offline device retention, built under the same ATDD rule as the earlier slices. This episode covers what was built, the evidence per requirement, the status after the slice (as of October 2026) and the six decisions the code forced.

## Learning objectives

By the end, the viewer can:

- List the six pieces of the slice: the data layer, the endpoints, the workspace store, the list and editor screens, autosave with device retention, and the seeded test harness.
- Explain how a monotonic client revision and a single conditional `UPDATE` make the newest save win.
- Explain soft delete with an 8-second server-side undo window.
- Give the status: 132 unit and 219 acceptance tests pass.

## Key questions

| Question | What a strong answer includes |
|---|---|
| How does the server stop a slow, older save overwriting newer text? | Each edit sets `rev = max(previous + 1, Date.now())`; the update applies only when `rev > client_rev`. |
| How does undo work? | Soft delete sets `deleted_at`; reads exclude it at once; restore clears it only within 8,000 ms; every write purges expired rows. |
| What happens to text when a save meets a 401 or the network is gone? | It stays in the device copy and is offered after sign-in or reconnect (newer than the server's version). |
| Why does each notes test use its own account? | `POST /api/harness/seed` creates a throwaway seeded account, so tests can create, edit and delete in parallel without touching the shared demo account. |

## Code / assets on screen

| File | What to show |
|---|---|
| `docs/process/13-progress.md` (Selah repo), "Slice 2: notes" | What was built (slides 2–6), the requirements tables (slides 7–9), the test counts and remaining work (slide 10), the decisions (slides 11–12) |

## Run sheet

| Time | Segment | Content |
|---|---|---|
| 00:00–00:32 | Introduction | Slice two as of October 2026; the same rule |
| 00:32–03:52 | What was built | Data layer, endpoints, store, screens, autosave and device copy, harness |
| 03:52–07:31 | Requirements | Eight notes requirements with evidence; the rows that moved |
| 07:31–08:06 | Status | 132 unit, 219 acceptance; what remains |
| 08:06–09:51 | Decisions | Soft delete, monotonic revision, store, device-copy mock, seeded tests, controller |
| 09:51–10:25 | Recap | Things to remember; next: tags and search |

## Demo commands

```
node tools/video-audio/generate-audio.mjs docs/videos/12-atdd-notes-slice --dry-run
node tools/video-audio/generate-audio.mjs docs/videos/12-atdd-notes-slice
node tools/video-build/build-video.mjs docs/videos/12-atdd-notes-slice --check
node tools/video-build/build-video.mjs docs/videos/12-atdd-notes-slice --slides-only
node tools/video-build/build-video.mjs docs/videos/12-atdd-notes-slice
```

## Pitfalls

- The log for this slice gives test counts and the remaining requirement ranges but no done/remaining totals, so the script states none; do not add a total without recounting from the requirements tables.
- The script names no new identifiers beyond those already in the lexicon.
- The closing "Next" slide is short (about 4 seconds) because the recap's last sentence carries its cue.
- On a machine low on memory, run the final encode with `FFMPEG_THREADS=2`.

## References

- `docs/process/13-progress.md` in the Selah repo, "Slice 2: notes", the log this episode is built from.
