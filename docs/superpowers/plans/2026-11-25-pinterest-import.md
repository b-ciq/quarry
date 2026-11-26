# Pinterest Import Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Pull Brian's three Pinterest sections (34 pins) into Inspiration once, through a store that now holds more than one source.

**Architecture:** The store gets a source table (origin ↔ id prefix ↔ folder ↔ key field) and routes every path by id prefix; Instagram code keeps using `scan.by_shortcode` unchanged. A new `quarry import-pinterest` reads a folder of `pinterest-dl` output (`<pin id>.json` + image, plus `<pin id>.mp4` from a throwaway fetch script) and commits one record per pin through `Store.commit`. The gallery API and UI learn `origin`.

**Tech Stack:** Python 3.14, FastAPI, Pillow, `imageio-ffmpeg` (via `quarry.media_probe`), pytest; React + Vitest in `ui/`.

**Spec:** `docs/superpowers/specs/2026-11-25-pinterest-import-design.md`

## Global Constraints

- No Pinterest fetching code or dependency in `src/quarry/`. Downloading happens outside Quarry (the extractor's `.venv` and a script in `.context/`).
- Pins enter the store only through `Store.commit` / `Store.write` (which run `validate_inspiration_record`).
- Instagram behavior unchanged: `instagram/` layout, `ig-` ids, `Scan.by_shortcode` (Instagram only), Capture page, sweep, `import-instagram`. All existing tests pass unmodified except where a task says otherwise.
- Pinterest layout: `<root>/pinterest/pin-<pin id>/save.json` + `01.<ext>` (+ `01-poster.jpg` for video).
- Media names must match `MEDIA_NAME_RE` (`jpg|jpeg|png|webp|mp4|mov|webm`); no `.gif` in the store.
- Download pacing: `--delay 1`; one request per video file; 1 s between pins.
- No real pin media or JSON in git; test fixtures are synthetic and generated in the tests.
- Run Python tests with `uv run --extra dev pytest`; long runs under `caffeinate -ims`.

## Review Focus

1. **A pin on two sections** → one record, `collections` lists both section slugs, media not re-copied. (Task 2 test `test_second_board_adds_collection_only`.)
2. **Re-running the import** → nothing changes, reported as unchanged. (Task 2 test `test_rerun_is_unchanged`.)
3. **A video pin whose MP4 is missing** (fetch failed) → imported as an image, listed as a warning. (Task 2 test `test_video_pin_without_mp4_falls_back_to_image`.)
4. **Stray files in the folder** (`.DS_Store`, a `.json` without media, unknown extension) → skipped with a reason, never crash. (Task 2 test `test_missing_media_is_skipped`.)
5. **Instagram lookups never see pins** → Capture page lists and `scan.by_shortcode` exclude Pinterest records. (Task 1 test `test_scan_routes_by_source`.)

---

### Task 1: Store and schema hold more than one source

**Files:**
- Modify: `src/quarry/schema.py` (`INSPIRATION_ID_RE`, `validate_inspiration_record`, new `SOURCES`)
- Modify: `src/quarry/inspiration_store.py` (`Scan`, `Store.scan/read/read_cached/write/media_path`, module docstring)
- Test: `tests/test_inspiration_store.py`, `tests/inspiration_helpers.py`

**Interfaces:**
- Produces:
  - `schema.SOURCES: dict[str, Source]` where `Source = NamedTuple(prefix: str, folder: str, key: str)`; entries `"instagram": Source("ig-", "instagram", "shortcode")`, `"pinterest": Source("pin-", "pinterest", "pin_id")`.
  - `schema.INSPIRATION_ID_RE = r"^(ig|pin)-[a-z0-9]+(-[a-z0-9]+)*$"`; `schema.PIN_ID_RE = r"^\d+$"`.
  - `schema.source_for_id(id: str) -> Source` (raises `ValueError` for an unknown prefix).
  - `Scan.by_source: dict[str, dict[str, str]]` (origin → key → id); `Scan.by_shortcode` stays a plain dict and is the same object as `by_source["instagram"]`; `Scan.readable: list[str]` (every id whose save.json parsed, all sources, scan order).
  - `Store.folder(id: str) -> Path` = `root / source_for_id(id).folder / id`. `Store.dir` stays `root / "instagram"`.
  - `inspiration_helpers.make_pin(pin_id: str) -> dict` (a valid pending Pinterest record; `source.board` = `"https://www.pinterest.com/u/b/s/"`, `collections` `["s"]`).

- [ ] **Step 1: Write failing tests** in `tests/test_inspiration_store.py`:
  - `test_validator_accepts_pinterest_record`: `validate_inspiration_record(make_pin("123")) == []`.
  - `test_validator_pinterest_rules`: errors for `source.pin_id` `"12a"`; for `id` `"pin-999"` with `pin_id` `"123"` (id must equal `"pin-" + pin_id`); for `origin` `"tumblr"`; an Instagram record without `shortcode` still errors; a Pinterest record needs no `shortcode`.
  - `test_write_routes_by_prefix`: `store.write(make_pin("123"))` creates `root/pinterest/pin-123/save.json`; `store.read("pin-123")["source"]["pin_id"] == "123"`; `store.media_path("pin-123", "01.jpg") == root/"pinterest"/"pin-123"/"01.jpg"`.
  - `test_scan_routes_by_source`: with one `ig-aaa` and one `pin-123` written, `scan.by_shortcode == {"AAA": "ig-aaa"}`, `scan.by_source["pinterest"] == {"123": "pin-123"}`, `sorted(scan.readable) == ["ig-aaa", "pin-123"]`.
  - `test_scan_warns_on_strays_in_pinterest`: a `root/pinterest/junk/` folder → a warning containing `"pinterest/: junk"`.
- [ ] **Step 2:** Run `uv run --extra dev pytest tests/test_inspiration_store.py -q` → the new tests FAIL.
- [ ] **Step 3: Implement.** In `validate_inspiration_record`, check origin ∈ `SOURCES`, then the source's key field: Instagram `shortcode` against `SHORTCODE_RE` (unchanged message); Pinterest `pin_id` against `PIN_ID_RE` and `id == "pin-" + pin_id`. In `Store`, replace every `self.dir / id` with `self.folder(id)`; `scan()` loops over `SOURCES.values()`, reading `rec["source"][src.key]` and filling `by_source[origin]`, `readable`, `ids`; warnings name the folder (`f"unexpected entry in {src.folder}/: {name}"`). Also reject a folder whose prefix doesn't match the source it's in (warning, skipped). `new_id`/`id_for_new` stay Instagram-only.
- [ ] **Step 4:** Run `uv run --extra dev pytest -q` → all pass (existing Instagram, capture, sweep and UI tests unchanged).
- [ ] **Step 5: Commit** `feat(inspiration): store holds more than one source (Instagram, Pinterest)`.

### Task 2: `quarry import-pinterest`

**Files:**
- Create: `src/quarry/pinterest.py`
- Modify: `src/quarry/cli.py` (new subcommand next to `import-instagram`)
- Test: `tests/test_pinterest.py`

**Interfaces:**
- Consumes: `Store`, `Store.folder`, `Scan.by_source["pinterest"]`, `store_lock`, `atomic_*` (Task 1); `media_probe.image_size`, `probe_video`, `ffmpeg_exe`, `MediaError`.
- Produces:
  - `import_pinterest(folder: Path, board_url: str, root: Path) -> PinterestResult`
  - `PinterestResult(created: list[str], updated: list[str], unchanged: list[str], skipped: list[tuple[str, str]], warnings: list[str])` (ids or pin ids; skipped = (pin id or file name, reason)).
  - `board_slug(board_url: str) -> str`: last non-empty path segment, lowercased (`".../ciq-catch-all/isc-2026/"` → `"isc-2026"`); `ValueError` if the URL isn't `https://www.pinterest.com/...` or has no segment.
  - CLI: `quarry import-pinterest FOLDER --board URL [--inspiration-dir PATH]`; prints `created N, updated N, unchanged N, skipped N`, skipped and warnings to stderr; exit 2 on `NoInspirationRoot`/`ValueError`.

Input folder contract (from the spike): for each pin, `<pin id>.json` with `id`, `src`, `alt`, `origin`, `resolution`, optional `media_stream.video`; the image `<pin id>.<jpg|jpeg|png|webp|gif>`; optionally `<pin id>.mp4`.

Record built per pin (spec "Record"): `id "pin-<id>"`, `status "proposed"`, `source_url` = JSON `origin` (fallback `https://www.pinterest.com/pin/<id>/`), `source {origin "pinterest", pin_id, kind "image"|"video", board, saved_at null, ingested_at today}`, `owner {}`, `caption` = `alt` or `""`, `hashtags []`, `collections [board_slug]`, curator fields empty, `capture {status "captured", slides_expected 1, items [one item], note ""}`. Item: `slide 1`, `type`, `file`, (`poster` for video), `width`, `height`, (`duration_s` for video), `sha256` of `file`, `method "pinterest-dl"`, `captured_at` now (UTC, `Z`).

Media rules:
- `<id>.mp4` present → video: `01.mp4` (copied as-is; it is already H.264 from the remux) + `01-poster.jpg` from the pin image (re-encoded to JPEG with Pillow if not JPEG).
- Animated GIF (Pillow `n_frames > 1`) → video: `01.mp4` via ffmpeg (`-movflags +faststart -pix_fmt yuv420p -vf scale=trunc(iw/2)*2:trunc(ih/2)*2 -c:v libx264 -crf 18`), poster = first frame as JPEG.
- Still GIF → `01.png` via Pillow. Other images → `01.<ext>` unchanged (`jpeg` stays `jpeg`).
- Stage converted files in `cache_dir()/tmp` and hand `(staged, name)` pairs to `Store.commit`.

- [ ] **Step 1: Write failing tests** in `tests/test_pinterest.py` (fixture builds a folder with Pillow-made JPEG/PNG, a 3-frame animated GIF, a still GIF, and a 1 s MP4 made with `imageio_ffmpeg` `testsrc`, plus matching JSON; root via `tmp_path`):
  - `test_board_slug`: the three real section URLs → `diagrammatic`, `isc-2026`, `animations`; `https://example.com/x/` raises.
  - `test_imports_image_pin`: record `pin-111` with `collections == ["animations"]`, `caption` = alt, `capture.status == "captured"`, item `file == "01.jpg"`, `sha256` equals the file's hash, width/height from the image.
  - `test_imports_video_pin_with_poster`: `pin-222` has `type "video"`, `01.mp4`, `01-poster.jpg`, `duration_s` ≈ 1.0, `source.kind == "video"`.
  - `test_animated_gif_becomes_video` and `test_still_gif_becomes_png`.
  - `test_video_pin_without_mp4_falls_back_to_image`: JSON has `media_stream.video`, no mp4 → image item, and a warning naming the pin id.
  - `test_missing_media_is_skipped`: a JSON with no image → in `skipped` with reason `"no media file"`; `.DS_Store` ignored silently; nothing written for it.
  - `test_rerun_is_unchanged`: second identical run → `unchanged == ["pin-111", ...]`, `created == []`, save.json mtimes unchanged.
  - `test_second_board_adds_collection_only`: same folder, second board URL → `updated`, `collections == ["animations", "diagrammatic"]`, item `sha256` unchanged.
  - `test_cli_import_pinterest`: `main(["import-pinterest", folder, "--board", url, "--inspiration-dir", root])` returns 0 and prints `created 5`.
- [ ] **Step 2:** Run `uv run --extra dev pytest tests/test_pinterest.py -q` → FAIL (module missing).
- [ ] **Step 3: Implement** `src/quarry/pinterest.py` and the CLI branch. Whole run under `store_lock()`, one `scan()` up front, updated in place as records are created (as `import_instagram` does). Existing pin: only merge `collections`; write only if changed.
- [ ] **Step 4:** Run `uv run --extra dev pytest -q` → all pass.
- [ ] **Step 5: Commit** `feat(inspiration): quarry import-pinterest files pinterest-dl output as Inspiration records`.

### Task 3: Gallery shows every source

**Files:**
- Modify: `src/quarry/ui/inspiration_api.py` (`rows`, `_row`)
- Modify: `ui/src/gallery.ts`, `ui/src/views/InspirationArea.tsx`; rebuild `src/quarry/ui/static/`
- Test: `tests/test_ui_inspiration.py`, `ui/src/gallery.test.ts`

**Interfaces:**
- Consumes: `Scan.readable`, `Store.folder` (Task 1); `make_pin` helper.
- Produces: `/api/inspiration` rows gain `origin: "instagram" | "pinterest"` and `collections: string[]`; sort key `saved_at`, else `source.ingested_at`, newest first. UI: `sourceLabel(origin) -> "Instagram" | "Pinterest"`, `fromLine(item) -> string` in `gallery.ts`.

- [ ] **Step 1: Write failing tests.**
  - `tests/test_ui_inspiration.py::test_lists_pins_with_instagram_saves`: an Instagram save (saved_at `2026-01-01…`) and a captured pin (ingested_at `2026-11-25`) → both listed, pin first, pin row `origin == "pinterest"`, `media == ["/inspiration-media/pin-123/01.jpg"]`, and `GET` that media URL returns 200.
  - `tests/test_ui_inspiration.py::test_set_status_on_a_pin`: approving `pin-123` moves it to `confirmed`.
  - `ui/src/gallery.test.ts`: `inspirationFacets` adds `['Source', 'Pinterest']` for a pin and `['Source', 'Instagram']` for a save (existing expectation updated to include it); `fromLine` gives `"@bee · saved 2026-01-01"` for a save and `"Pinterest · animations"` for a pin with no owner.
- [ ] **Step 2:** Run `uv run --extra dev pytest tests/test_ui_inspiration.py -q` and `cd ui && npm test` → new tests FAIL.
- [ ] **Step 3: Implement.** `rows()` iterates `scan.readable`. In the detail panel, the link reads `View on {sourceLabel(item.origin)}` and the From line uses `fromLine(item)`. Inbox empty-state text unchanged.
- [ ] **Step 4:** Run both test suites → PASS; `cd ui && npm run build` succeeds and updates `src/quarry/ui/static/`.
- [ ] **Step 5: Commit** `feat(inspiration): gallery lists Pinterest pins beside Instagram saves`.

### Task 4: Docs

**Files:** `docs/operations.md`, `README.md`

- [ ] **Step 1:** Add "One-time Pinterest import" to `docs/operations.md`: the three steps (pinterest-dl images + JSON, the video fetch script, `quarry import-pinterest`), with the spike's warning that `pinterest-dl --video` mangles Pinterest's byte-range videos. Add `quarry import-pinterest` to the README command list.
- [ ] **Step 2: Commit** `docs: one-time Pinterest import`.

### Task 5: Run it for Brian

Not TDD; Claude runs it. Staging at `~/.cache/quarry/pinterest/<section>/`. Extractor at `~/Documents/GitHub/Pinterest board  extractor` (`X`).

- [ ] **Step 1: Images and JSON**, per section (`diagrammatic`, `isc-2026`, `animations`):
  `"$X/.venv/bin/pinterest-dl" scrape https://www.pinterest.com/bchristensen/ciq-catch-all/<section>/ -o ~/.cache/quarry/pinterest/<section> -c "$X/cookies.json" -n 1000 --delay 1 --caption json`
  Expected: 21, 3 and 10 JSON files. If the session is rejected, stop and ask Brian to run `./login.sh`.
- [ ] **Step 2: Videos.** Write `.context/pinterest/fetch_videos.py` (stdlib + Quarry's ffmpeg path as an argument): for each JSON with `media_stream.video.url`, fetch the master playlist, pick the `#EXT-X-STREAM-INF` with the largest `RESOLUTION` area, fetch that variant playlist, read `#EXT-X-MAP:URI`, download that one file, `ffmpeg -i <file> -c copy -movflags +faststart <pin id>.mp4`, sleep 1 s. Verify each MP4's duration is within 5% of the JSON `duration` (ms); report mismatches.
- [ ] **Step 3: Import** each section: `uv run quarry import-pinterest ~/.cache/quarry/pinterest/<section> --board <section-url>`. Expected total: 34 pins counted, minus any shared across sections.
- [ ] **Step 4: Check** in the workbench (`quarry ui`): Inspiration Inbox shows the pins with images and posters; screenshot to `.context/pinterest-inbox.png`.
- [ ] **Step 5:** Report counts, skips and warnings to Brian. Leave staging in place until Brian says to delete it.
