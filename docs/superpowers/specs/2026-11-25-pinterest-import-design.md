# Pinterest Import: one-time pull of Brian's boards into Inspiration

**Date:** 2026-11-25
**Author:** Brian Christensen with Claude
**Status:** Draft for approval
**Depends on:** the inspiration store (`2026-11-24-instagram-capture-design.md`). **Feeds:** the Inspiration describer (`b-ciq/inspiration-auto-describe-tag`, `2026-11-25-inspiration-describer-design.md`), which describes and tags anything in the store.

## Intent

Brian has inspiration pinned on Pinterest boards. They want it in Quarry's Inspiration once, so the describer tags it with the rest. Pinterest is not a long-term source: a custom Quarry pinner will feed the system later. So this is a one-time import, and the only lasting piece is the store learning to hold more than one source.

## Goals

- Every pin on the chosen boards lands in Inspiration with its image or video, the board name, and Pinterest's text for it.
- Pins meet the describer's Source contract, so they are described and tagged with no Pinterest-specific code in the describer.
- The store accepts a second source cleanly, so the future pinner plugs in the same way.
- Claude runs the download and the import for Brian.

## Non-goals

- No scheduled or repeated sync. No watcher.
- No Pinterest API, business account, or app registration.
- No scraping code or Pinterest dependency inside Quarry.
- No Pinterest UI in the workbench (no import button, no Pinterest Capture page).

## Anti-goals

- **Hammering Pinterest.** One pass per board, 1 s between requests, as the old extractor already does.
- **Bypassing the record check.** Pins enter only through `Store.commit` and `validate_inspiration_record`.
- **Breaking Instagram.** Existing `instagram/` records, ids, Capture page and sweep behave exactly as today.
- **Login cookies or pin media in git.**

## Approaches (Brian picked 1)

1. **Two steps (chosen).** Run the existing extractor (`~/Documents/GitHub/Pinterest board  extractor`, `pinterest-dl` 1.1.2) into a staging folder outside Drive, then `quarry import-pinterest <folder>` files each pin into the store. Keeps the scraper, Playwright and the cookies out of Quarry.
2. **One command inside Quarry.** Rejected: puts a scraper and Brian's session into Quarry permanently, for a one-time job.
3. **Throwaway script writing records directly.** Rejected: skips the record check, and the store widening is needed anyway.

## Design

### Download (Claude runs it)

Boards (sections of `ciq-catch-all`): `diagrammatic` (21 pins), `isc-2026` (3), `animations` (10), under `https://www.pinterest.com/bchristensen/ciq-catch-all/<section>/`.

1. **Images and pin data:**
   ```
   pinterest-dl scrape <section-url> -o ~/.cache/quarry/pinterest/<section>/ \
     -c cookies.json -n 1000 --delay 1 --caption json
   ```
   Uses the extractor's own `.venv` and `cookies.json` (valid until May 2027). If the session is rejected, Brian runs `./login.sh` once.
2. **Videos:** a small throwaway script (kept in `.context/`, not in Quarry) reads each pin JSON's `media_stream.video.url`, picks the highest-resolution variant in the HLS master playlist, downloads that variant's single `.cmfv` file (the `EXT-X-MAP` URI) in one request, and remuxes it to `<pin id>.mp4` with ffmpeg `-c copy`. 1 s between pins. *Not* `pinterest-dl --video`; see the spike.

### Spike findings (3 pins from `animations`, 2026-11-25)

- **Session works.** No login needed.
- **Per-pin JSON** (`<pin id>.json`): `id`, `src` (the `originals/` image URL), `alt` (Pinterest's alt text), `origin` (the pin URL), `resolution {x, y}`, and for video pins `media_stream.video {url (HLS master), resolution, duration (ms)}`. **No title, description, pinner or board.** So `caption` = `alt`, `owner` is left empty, and the board comes from the command line.
- **Images** are Pinterest's `originals` (here 640–1200 px wide).
- **`pinterest-dl --video` is broken for these pins.** Pinterest serves each variant as one `.cmfv` file read by byte ranges; pinterest-dl ignores the ranges and appends the whole file once per segment (a 13.8 s video came out 96 s, 7 copies) and hung on a third pin. ffmpeg's own HLS reader also misread it (2 s). Downloading the `.cmfv` once and remuxing gives the right video (17.28 s, 720×720 H.264) from one request.
- **Video quality:** the HLS ladder tops out around 720 px even when the JSON reports a 4K source. That is the best Pinterest offers. Videos had no audio track.
- **ffmpeg:** not on `PATH`; Quarry's bundled `imageio-ffmpeg` binary is used.
- All three `animations` pins are videos.

### Import: `quarry import-pinterest <folder> --board <section-url> [--inspiration-dir PATH]`

For each pin in the folder, under `store_lock()`:
- **Find or create** the record by pin id. A pin already present (re-run, or pinned to two boards) gets the board added to `collections` and nothing else changes.
- **Media:** a still image becomes `01.jpg|png|webp`. A pin with `<pin id>.mp4` becomes a video: `01.mp4` plus `01-poster.jpg` (Pinterest's own cover image, the downloaded `src`). A video pin whose MP4 is missing falls back to its image and is listed. An animated GIF becomes an MP4 plus poster, so motion is kept the way Instagram reels are; a still GIF becomes a PNG. *(Claude's call: the store doesn't allow `.gif`, and the describer extracts frames from video.)*
- **Record:**
  ```json
  {
    "id": "pin-229824387230353302",
    "status": "proposed",
    "source_url": "https://www.pinterest.com/pin/229824387230353302/",
    "source": {"origin": "pinterest", "pin_id": "229824387230353302", "kind": "image",
               "board": "<board url>", "saved_at": null, "ingested_at": "2026-11-25"},
    "owner": {},
    "caption": "<alt text>",
    "hashtags": [], "collections": ["diagrammatic"],
    "saved_because": "", "concepts": [], "style": [], "description": "",
    "capture": {"status": "captured", "slides_expected": 1,
                "items": [{"slide": 1, "type": "image", "file": "01.jpg", "width": 0, "height": 0,
                           "sha256": "…", "method": "pinterest-dl", "captured_at": "…"}], "note": ""}
  }
  ```
- A pin whose file is missing or unreadable is skipped and listed at the end. The command prints counts: created, already present, skipped.
- The staging folder is left in place; Claude deletes it after Brian has looked.

### Store learns a second source

- **Layout:** `<root>/<origin>/<id>/`. The id prefix decides the folder: `ig-` → `instagram/`, `pin-` → `pinterest/`. One table maps origin ↔ prefix ↔ folder, so the pinner later adds one row.
- **`Store`:** `scan()` walks every source folder. `read`, `write`, `commit` and `media_path` resolve the folder from the id. Lookups stay per source: Instagram by shortcode as today, Pinterest by pin id.
- **Schema:** `INSPIRATION_ID_RE` accepts `ig-` and `pin-`. `source.origin` must be `instagram` or `pinterest`. `source.shortcode` is required for Instagram; `source.pin_id` (digits) for Pinterest.
- **Inspiration gallery** (`/api/inspiration`): lists records from every source, adds `origin` to each row, and sorts by `saved_at`, falling back to `ingested_at`.
- **Capture page and sweep** stay Instagram-only: they ignore non-Instagram records.

### Working with the describer branch

The describer design leaves exactly this widening "to the Pinterest or upload feature" and requires that it not branch on source. Pins satisfy its Source contract (`status`, `capture.items` with `slide`, `type`, `file`/`poster`, `sha256`). Both branches touch `schema.py` and `inspiration_api.py`; whichever merges second rebases. This change keeps its edits there small.

### Docs

`docs/operations.md`: a short "One-time Pinterest import" section. `README.md`: the new command.

### Testing

- Unit: id/origin/pin-id schema rules; `Store` routing by id prefix and scanning both folders; Instagram behavior unchanged (existing tests pass).
- Importer, against a small fixture folder shaped like the spike's output (synthetic, no real pins in git): create, re-run is a no-op, second board adds to `collections`, GIF and video handling, a missing file is skipped.
- Gallery API lists both sources.
- Real run: Claude imports the boards into the Drive folder and shows the Inspiration page with a screenshot.

## Left to the builder

- The exact pinterest-dl JSON field mapping (from the spike).
- Whether the shared folder table lives in `schema.py` or `inspiration_store.py`.
