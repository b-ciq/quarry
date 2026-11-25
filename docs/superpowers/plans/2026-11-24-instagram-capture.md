# Instagram Capture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Brian clicks a Quarry button in Chrome on an Instagram post. Every image and video of that post is saved, filed into their Google Drive inspiration folder, and attached to the right save record. A workbench Capture page paces the 281-save backlog.

**Architecture:**
- **Inspiration store:** a small Python module owns the inspiration root (Drive folder), records (`<root>/instagram/<id>/save.json`), a cross-process lock and atomic writes.
- **Button:** a Manifest V3 extension reads the post's embedded page data, verifies the shortcode, and saves the files through `chrome.downloads` into `~/Downloads/quarry/<shortcode>__<time>/`, with `capture.json` written last.
- **Sweep:** files finished download folders into the store. It runs in the workbench and as a CLI.
- **Capture page:** a new workbench page lists saves, opens the next post, enforces the daily cap, and handles fix-ups.

**Tech Stack:**
- Python 3.11+, FastAPI and Starlette middleware, Pillow, `imageio-ffmpeg` (new), `tomllib`, `fcntl`.
- React + `@ctrliq/quantic-react` + vitest for the frontend.
- Plain-JS Chrome MV3 for the extension, tested with `node --test`.

**Spec:** `docs/superpowers/specs/2026-11-24-instagram-capture-design.md`

## Global Constraints

**The Instagram rule**
- Nothing in Quarry or the extension opens, scrolls, advances, retries or fetches Instagram on its own. Every Instagram request follows a click by Brian.

**Storage and paths**
- The inspiration root comes from `QUARRY_INSPIRATION_DIR`, else `inspiration_dir` in `<config dir>/config.toml`. The config dir is `QUARRY_CONFIG_DIR`, defaulting to `~/.config/quarry`.
- There is never a fallback to the repo.
- Temp files go in `<cache dir>/tmp`. The cache dir is `QUARRY_CACHE_DIR`, defaulting to `~/.cache/quarry`. Temp files are never created inside the root, except as a dot-named file during a cross-volume move.
- The lock file is `<config dir>/inspiration.lock`, taken with `fcntl.flock`. Every write to the root holds it.
- Layout: `<root>/instagram/<id>/save.json`, plus media named `NN.<ext>` and `NN-poster.jpg`, where NN is the two-digit slide number.
- The downloads folder is `capture_downloads_dir` in config, defaulting to `~/Downloads/quarry`. Per-capture folders are named `<shortcode>__<yyyymmddThhmmss>`. Failed folders move to `<downloads>/_failed/<folder>/`, with `reason.txt`.

**Records**
- Ids are `ig-<lowercased shortcode, non-alphanumerics → '-'>`, with `-2`, `-3` and so on added on a clash.
- Records are found by the exact, case-sensitive `source.shortcode`, never by id.
- `capture.status` takes exactly `pending`, `partial`, `captured` or `unavailable`.
- Capture code writes only the `capture` block (plus the fields of a newly created record). It never writes `status`, `saved_because`, `concepts`, `style` or `description`.

**Settings and copy**
- The daily cap is `capture_daily_cap` in config, default **40**. The text shown at the cap is exactly: `That's enough for today. Pick up tomorrow.`
- The badge text after a shortcode mismatch is exactly: `Reload the page (⌘R) and press again.`

**Hosts, origins and headers**
- Allowed hosts are `127.0.0.1`, `localhost` and `testserver` (the last for FastAPI's TestClient).
- Dev origins are `http://localhost:5173` and `http://127.0.0.1:5173`.
- All workbench responses carry `Referrer-Policy: no-referrer`.

**Dependencies and build**
- Add the `inspiration = ["imageio-ffmpeg"]` extra, and add `imageio-ffmpeg` to `dev`.
- The frontend build is committed: after any `ui/` change, run `npm ci --prefix ui && npm run build --prefix ui` and commit `src/quarry/ui/static/`.

**Long runs**
- Wrap long test runs in `caffeinate -ims`, because the Mac sleeps during long runs.

## Review Focus

1. **A capture folder still downloading when the sweep runs.** A `.crdownload` file is present, or a file listed in `capture.json` is missing. Expected: the folder is left alone, not failed. Test: `test_sweep_skips_unfinished_folders` (Task 3).
2. **A Drive conflict copy or stray file sits next to a record**, such as `save (1).json`, `.DS_Store`, or a half-moved dot file. Expected: it is ignored for lookups and listed as a warning, and the importer never adds it as an id. Test: `test_scan_ignores_conflict_copies_and_strays` (Task 1).
3. **Re-capturing a post whose earlier capture was partial or bad.** Expected: slides it brings replace the same slide numbers, other slides are kept, and the status is recomputed. Test: `test_recapture_replaces_slides_and_keeps_others` (Task 3).
4. **A capture arrives for a save not in the export.** A later `import-instagram` run then contains it. Expected: one record, never two. Export fields are filled in, and the capture block is untouched. Test: `test_import_after_capture_merges_by_shortcode` (Task 2).
5. **A cross-site page POSTs to the workbench**, or a DNS-rebinding host reads it. Expected: 403 for the cross-site POST and 400 for the bad host. Requests with no Origin header (CLI, tests) still work. Test: `test_cross_site_post_refused` and `test_unknown_host_refused` (Task 4).

---

### Task 0: Spike: prove page data, downloads, and Drive behaviour (needs Brian at Chrome)

This is a throwaway spike. Its outputs are the notes file and the synthetic fixtures; everything in `.context/` is discarded. **Stop after this task and report to Brian** if any of these hold:
- no video file with audio is present in the page data for any of the 3 reels;
- recording would be the only path for most reels;
- `chrome.downloads` prompts on every file.

**Files:**
- Create: `.context/spike-ext/manifest.json`, `.context/spike-ext/sw.js` (throwaway, not committed)
- Create: `docs/superpowers/notes/2026-11-24-capture-spike.md`
- Create: `extension/test/fixtures/image-post.json`, `carousel-mixed.json`, `reel.json` (synthetic, see Step 4)

- [ ] **Step 1: Capture page data from 3 saves.** Brian picks one single-image post, one mixed carousel (images and a video) and one reel from the export.
  - On each, after a fresh load (⌘R), Brian runs this in the DevTools console. It reads the page, sends nothing, and copies the result to the clipboard:

```js
copy(JSON.stringify([...document.querySelectorAll('script[type="application/json"]')].map(s => s.textContent).filter(t => t.includes(location.pathname.split('/').filter(Boolean).pop()))))
```

  - Brian pastes each result into `.context/spike/<kind>.json`.
  - Expected: each file is non-empty.
- [ ] **Step 2: Find the media data.** Search each dump for the shortcode and record in the notes:
  - the JSON path to the post object;
  - the field holding the shortcode;
  - the slide list;
  - per-slide media id;
  - image candidates (with width and height);
  - video files (URL, width, height, and whether audio is included);
  - the cover image;
  - owner username and full name;
  - caption.

  Also record the image and video resolutions found.
- [ ] **Step 3: Test downloads and Drive.**
  1. Load `.context/spike-ext` unpacked. Its service worker, on action click, calls `chrome.downloads.download({url: <an image URL from Step 2>, filename: 'quarry/spike__test/01.jpg', saveAs: false, conflictAction: 'overwrite'})`, and then a `data:application/json,…` download to `quarry/spike__test/capture.json`.
  2. Record whether Chrome prompted, and whether both files landed in `~/Downloads/quarry/spike__test/`.
  3. Write `a.txt` into the Drive root and `os.replace` a new version over it. Using the Drive tool, record whether the file id is unchanged and versions are kept.
  4. Note whether `os.replace` from `~/.cache/quarry/tmp` into the root raises `EXDEV`.
- [ ] **Step 4: Write synthetic fixtures.** For each kind, write a minimal JSON array of strings with the same nesting and field names as the real dump.
  - Use fake shortcodes (`FAKEimg1`, `FAKEcar1`, `FAKEreel1`), fake URLs (`https://scontent.cdninstagram.com/fake/…`) and fake captions.
  - The carousel has 3 slides, in order image, video, image.
  - No real third-party content goes in the repo.
- [ ] **Step 5: Commit notes and fixtures.**

```bash
git add docs/superpowers/notes/2026-11-24-capture-spike.md extension/test/fixtures/
git commit -m "Spike notes: Instagram page-data shape, downloads, Drive replace"
```

---

### Task 1: Inspiration store (root, lock, atomic writes, validator)

**Files:**
- Create: `src/quarry/inspiration_store.py`
- Modify: `src/quarry/schema.py` (add `CAPTURE_STATUSES` and `validate_inspiration_record`)
- Test: `tests/test_inspiration_store.py`

**Interfaces:**
- Produces, in `quarry.inspiration_store`:
  - `class NoInspirationRoot(RuntimeError)`. Its message says how to set the root: `set QUARRY_INSPIRATION_DIR or inspiration_dir in ~/.config/quarry/config.toml`.
  - `config_dir() -> Path`, `cache_dir() -> Path`, `load_config() -> dict` (returns `{}` when there is no file).
  - `inspiration_root(explicit: Path | None = None) -> Path`. Precedence: explicit > env > config. Raises `NoInspirationRoot`, also when the folder doesn't exist.
  - `capture_downloads_dir() -> Path` and `daily_cap() -> int`.
  - `store_lock()`: a context manager taking an exclusive `fcntl.flock` on `config_dir()/"inspiration.lock"`.
  - `atomic_write_bytes(dest: Path, data: bytes) -> None` and `atomic_move(src: Path, dest: Path) -> None`. Both stage through `cache_dir()/"tmp"` and use `os.replace`. On `EXDEV`, they copy to `dest.parent/f".{dest.name}.part"`, then `os.replace`.
  - `@dataclass Scan`: `by_shortcode: dict[str, str]` (shortcode → id), `ids: set[str]`, `warnings: list[str]`.
  - `class Store(root: Path)`, with `.dir = root / "instagram"` and these methods:
    - `.scan() -> Scan`. It parses `save.json` files, cached by `(path, st_mtime_ns)`.
    - `.read(id: str) -> dict`.
    - `.write(record: dict) -> Path`. It validates, raising `ValueError` listing the errors, then writes `save.json` atomically.
    - `.new_id(shortcode: str, scan: Scan) -> str`.
    - `.media_path(id: str, filename: str) -> Path`. It refuses (`ValueError`) any filename not matching `^\d{2}(-poster)?\.(jpg|jpeg|png|webp|mp4|mov|webm)$`, and any result outside `.dir / id`.
- Produces, in `quarry.schema`:
  - `CAPTURE_STATUSES = ("pending", "partial", "captured", "unavailable")`;
  - `validate_inspiration_record(rec: dict) -> list[str]`.

- [ ] **Step 1: Write the failing tests.**

```python
def test_root_precedence_and_refusal(tmp_path, monkeypatch):
    monkeypatch.setenv("QUARRY_CONFIG_DIR", str(tmp_path / "cfg"))
    monkeypatch.delenv("QUARRY_INSPIRATION_DIR", raising=False)
    with pytest.raises(NoInspirationRoot, match="QUARRY_INSPIRATION_DIR"):
        inspiration_root()
    (tmp_path / "cfg").mkdir(); (tmp_path / "a").mkdir(); (tmp_path / "b").mkdir()
    (tmp_path / "cfg" / "config.toml").write_text(f'inspiration_dir = "{tmp_path / "a"}"\ncapture_daily_cap = 7\n')
    assert inspiration_root() == tmp_path / "a" and daily_cap() == 7
    monkeypatch.setenv("QUARRY_INSPIRATION_DIR", str(tmp_path / "b"))
    assert inspiration_root() == tmp_path / "b"
    assert inspiration_root(tmp_path / "a") == tmp_path / "a"

def test_daily_cap_defaults_to_40(tmp_path, monkeypatch):
    monkeypatch.setenv("QUARRY_CONFIG_DIR", str(tmp_path / "none"))
    assert daily_cap() == 40 and capture_downloads_dir() == Path.home() / "Downloads" / "quarry"

def test_write_validates_and_read_round_trips(store):  # fixture: Store on tmp root, env dirs in tmp
    rec = make_record("DfaKjbkkZB8")                   # helper in the test module: a minimal valid record
    store.write(rec)
    assert store.read("ig-dfakjbkkzb8") == rec
    with pytest.raises(ValueError, match="capture.status"):
        store.write({**rec, "capture": {**rec["capture"], "status": "done"}})

def test_scan_ignores_conflict_copies_and_strays(store):
    store.write(make_record("Abc"))
    d = store.dir / "ig-abc"
    (d / "save (1).json").write_text("{}"); (d / ".DS_Store").write_text(""); (store.dir / "junk.txt").write_text("")
    s = store.scan()
    assert s.by_shortcode == {"Abc": "ig-abc"} and s.ids == {"ig-abc"}
    assert any("save (1).json" in w for w in s.warnings) and any("junk.txt" in w for w in s.warnings)

def test_new_id_handles_case_clash(store):
    store.write(make_record("AbC"))
    assert store.new_id("abc", store.scan()) == "ig-abc-2"

def test_media_path_is_bounded(store):
    assert store.media_path("ig-abc", "02-poster.jpg") == store.dir / "ig-abc" / "02-poster.jpg"
    for bad in ("../x.jpg", "1.jpg", "02.exe", "save.json"):
        with pytest.raises(ValueError):
            store.media_path("ig-abc", bad)

def test_validator_rules():
    rec = make_record("X1")
    assert validate_inspiration_record(rec) == []
    assert "license: not allowed on inspiration records" in validate_inspiration_record({**rec, "license": "x"})
    dup = {**rec, "capture": {**rec["capture"], "items": [item(1), item(1)]}}
    assert any("duplicate slide 1" in e for e in validate_inspiration_record(dup))

def test_lock_is_exclusive_across_processes(store):
    # spawn `python -c` that takes store_lock() and sleeps 1s; the parent's store_lock() must wait ≥ 0.8s
```

  Use these minimal record shapes for `make_record` and `item`:

```python
def make_record(code): return {"id": f"ig-{code.lower()}", "status": "proposed",
    "source_url": f"https://www.instagram.com/p/{code}/",
    "source": {"origin": "instagram", "shortcode": code, "kind": "post", "saved_at": None, "ingested_at": "2026-11-24"},
    "owner": {}, "caption": "", "hashtags": [], "collections": [], "saved_because": "",
    "concepts": [], "style": [], "description": "",
    "capture": {"status": "pending", "slides_expected": None, "items": [], "note": ""}}
def item(n, type="image"): return {"slide": n, "media_id": f"m{n}", "type": type,
    "file": f"{n:02d}.jpg", "method": "page-data", "captured_at": "2026-11-24T00:00:00Z"}
```

- [ ] **Step 2: Run the tests.** `.venv/bin/python -m pytest tests/test_inspiration_store.py -q`. Expected: they FAIL, with an ImportError.
- [ ] **Step 3: Implement** the Interfaces above.
  - The validator checks:
    - `id` matches `^ig-[a-z0-9]+(-[a-z0-9]+)*$`;
    - `status` is in `STATUSES`;
    - `source.origin == "instagram"`, and `source.shortcode` matches `^[A-Za-z0-9_-]+$`;
    - `source_url` is a non-empty str;
    - there is no `license` key;
    - `capture.status` is in `CAPTURE_STATUSES`;
    - `slides_expected` is an int ≥ 1 or None;
    - items have a unique `slide` ≥ 1, a `type` of `image` or `video`, and `file` and `poster` that pass the media-name pattern.
  - `scan` treats anything other than `<dir>/<id>/save.json` (with a valid id) as a warning, except dot-files directly inside a save folder, which are ignored silently.
- [ ] **Step 4: Run the tests.** Same command. Expected: PASS.
- [ ] **Step 5: Commit.** `git add src/quarry/inspiration_store.py src/quarry/schema.py tests/test_inspiration_store.py && git commit -m "Inspiration store: Drive root, lock, atomic writes, record validator"`

---

### Task 2: Importer writes into the store

**Files:**
- Modify: `src/quarry/instagram.py` (writes through `Store`, new layout, wider URL pattern, `capture` block)
- Modify: `src/quarry/cli.py` (`import-instagram EXPORT [--inspiration-dir DIR]`, dropping `--repo`)
- Modify: `tests/test_instagram.py`

**Interfaces:**
- Consumes: from Task 1, `Store`, `inspiration_root`, `store_lock`, `NoInspirationRoot`.
- Produces: `import_instagram(export: Path, root: Path) -> ImportResult`. Its signature changes from `repo_root` to `root`, and the result fields stay the same. New records carry `"capture": {"status": "pending", "slides_expected": None, "items": [], "note": ""}` and no `file` or `image_status`.

- [ ] **Step 1: Update the tests** so every fixture writes into `tmp_path / "root"`, and sidecars are read from `root / "instagram" / <id> / "save.json"`. Add these tests:

```python
def test_url_forms(tmp_path):
    posts = [_item("https://www.instagram.com/someuser/p/UserForm1/", 1), _item("https://www.instagram.com/reels/Reels2/", 2)]
    assert [s.shortcode for s in parse_export(_zip(tmp_path / "e.zip", posts))] == ["UserForm1", "Reels2"]

def test_import_after_capture_merges_by_shortcode(tmp_path):
    root = tmp_path / "root"; store = Store(root)
    rec = make_capture_created("DfaKjbkkZB8")  # test helper: make_record + via:"capture", capture.status "captured", one item
    store.write(rec)
    res = import_instagram(_zip(tmp_path / "e.zip", NEW_FORMAT), root)
    assert len(res.updated) == 1 and len(res.created) == 1
    merged = store.read(rec["id"])
    assert merged["capture"] == rec["capture"] and merged["caption"] == "I’m testing"
    assert merged["source"]["saved_at"] == "2026-11-24T03:14:32Z"

def test_cli_requires_a_root(tmp_path, monkeypatch, capsys):
    monkeypatch.setenv("QUARRY_CONFIG_DIR", str(tmp_path / "cfg")); monkeypatch.delenv("QUARRY_INSPIRATION_DIR", raising=False)
    assert main(["import-instagram", str(_zip(tmp_path / "e.zip", NEW_FORMAT))]) == 2
    assert "QUARRY_INSPIRATION_DIR" in capsys.readouterr().err
```

  Also update `test_cli` to pass `--inspiration-dir`. Assert that `import-instagram` no longer accepts `--repo`.
- [ ] **Step 2: Run the tests.** `.venv/bin/python -m pytest tests/test_instagram.py -q`. Expected: the new and updated tests FAIL.
- [ ] **Step 3: Implement.**
  - Change `POST_URL_RE` to `r"instagram\.com/(?:[A-Za-z0-9._]+/)?(p|reels?|tv)/([A-Za-z0-9_-]+)"`.
  - `import_instagram` holds `store_lock()` around the whole merge. It uses `store.scan()` for lookups and `store.new_id`. For each existing record it re-reads with `store.read` just before merging, and writes with `store.write`.
  - The CLI resolves the root with `inspiration_root(args.inspiration_dir)`. On `NoInspirationRoot`, it prints the message to stderr and exits 2. Its success line becomes `files are in <root>/instagram/`.
- [ ] **Step 4: Run the tests.** Same command. Expected: PASS. Then run the full suite: `caffeinate -ims .venv/bin/python -m pytest -q`. Expected: all pass.
- [ ] **Step 5: Commit.** `git commit -am "import-instagram writes into the Drive inspiration store"`

---

### Task 3: Media checks and the sweep (`quarry import-captures`)

**Files:**
- Create: `src/quarry/media_probe.py`, `src/quarry/capture_sweep.py`
- Modify: `src/quarry/cli.py` (`import-captures [--inspiration-dir DIR] [--downloads DIR]`)
- Modify: `pyproject.toml` (`inspiration` extra; `imageio-ffmpeg` added to `dev`)
- Test: `tests/test_capture_sweep.py`

**Interfaces:**
- Consumes: from Task 1, `Store`, `store_lock`, `atomic_move`, `capture_downloads_dir`.
- Produces, in `quarry.media_probe`:
  - `class MediaError(ValueError)`;
  - `@dataclass VideoInfo(width: int, height: int, duration_s: float, has_audio: bool, codec: str)`;
  - `image_size(p: Path) -> tuple[int, int]`, which verifies with Pillow;
  - `probe_video(p: Path) -> VideoInfo`, which parses the stderr of `imageio_ffmpeg.get_ffmpeg_exe() -i p`;
  - `make_poster(video: Path, dest: Path) -> None`, which takes the first frame as a JPEG;
  - `assemble_mp4(video: Path, audio: Path | None, dest: Path) -> None`. It writes an MP4 with H.264 video (stream copy when the input is already H.264, otherwise `libx264 -crf 18 -pix_fmt yuv420p`) and AAC audio when audio is given, plus `-movflags +faststart`. *(Spike ruling: Instagram's 1080p DASH video is VP9, which Finder and QuickLook may not play.)*
- Produces, in `quarry.capture_sweep`:
  - `@dataclass SweepResult`: `filed: list[str]` (ids) and `failed: list[tuple[str, str]]` (folder name, reason);
  - `is_finished(folder: Path) -> bool`;
  - `sweep(downloads: Path, store: Store) -> SweepResult`.

  This is the `capture.json` contract that Task 6 writes:

```json
{"version": 1, "shortcode": "FAKEcar1", "page_url": "https://www.instagram.com/p/FAKEcar1/",
 "kind": "post", "slides_expected": 3, "owner": {"username": "u", "name": "U"}, "caption": "…",
 "captured_at": "2026-11-26T18:02:11Z",
 "items": [{"slide": 1, "media_id": "m1", "type": "image", "file": "01.jpg", "method": "page-data"},
           {"slide": 2, "media_id": "m2", "type": "video", "parts": {"video": "02.video.mp4", "audio": "02.audio.mp4"},
            "poster": "02-poster.jpg", "method": "page-data"}]}
```

  - `slides_expected` may be `null`. `method` is `page-data`, `recording` or `manual`.
  - **A video item carries exactly one of these:**
    - `file`: a single progressive MP4, such as `"02.mp4"`;
    - `parts`: the separate DASH video track, plus the audio track or `null` for a silent video.

    The sweep turns either one into the final `NN.mp4` with `assemble_mp4`. A `file` that is already H.264 is moved as is. Part files exist only in the downloads folder; the store only ever holds `NN.mp4`.

- [ ] **Step 1: Write the failing tests.** The test module makes media with Pillow (JPEG) and with ffmpeg: `-f lavfi -i testsrc=size=320x240:duration=1 -f lavfi -i sine=duration=1 -shortest out.mp4`. Its `capture_folder(downloads, shortcode, items, slides_expected)` helper writes the media, then `capture.json`. `img(n, color=...)` and `vid(n)` build item specs, `pixel()` reads the centre pixel, and `make_mp4` wraps the ffmpeg command, all as module helpers.

```python
def test_probe_video_reports_size_duration_audio(tmp_path):
    v = make_mp4(tmp_path / "a.mp4", audio=True); info = probe_video(v)
    assert (info.width, info.height, info.has_audio) == (320, 240, True) and 0.8 < info.duration_s < 1.3
    assert probe_video(make_mp4(tmp_path / "b.mp4", audio=False)).has_audio is False
    with pytest.raises(MediaError): probe_video(write(tmp_path / "c.mp4", b"not a video"))

def test_sweep_files_a_new_capture_and_creates_record(store, downloads):
    capture_folder(downloads, "FAKEcar1", [img(1), vid(2), img(3)], slides_expected=3)
    res = sweep(downloads, store)
    rec = store.read("ig-fakecar1")
    assert res.filed == ["ig-fakecar1"] and rec["capture"]["status"] == "captured"
    assert rec["source"]["via"] == "capture" and rec["source"]["saved_at"] is None and rec["status"] == "proposed"
    v = rec["capture"]["items"][1]
    assert v["type"] == "video" and v["has_audio"] is True and v["poster"] == "02-poster.jpg"
    assert (store.dir / "ig-fakecar1" / "02-poster.jpg").exists() and not any(downloads.iterdir())

def test_sweep_skips_unfinished_folders(store, downloads):
    f = capture_folder(downloads, "FAKEimg1", [img(1)], slides_expected=1)
    (f / "01.jpg").rename(f / "01.jpg.crdownload")
    assert sweep(downloads, store).filed == [] and f.exists()
    (f / "capture.json").unlink(); (f / "01.jpg.crdownload").rename(f / "01.jpg")
    assert sweep(downloads, store).filed == [] and f.exists()

def test_unknown_or_short_slide_count_is_partial(store, downloads):
    capture_folder(downloads, "FAKEcar1", [img(1)], slides_expected=3); sweep(downloads, store)
    assert store.read("ig-fakecar1")["capture"]["status"] == "partial"
    capture_folder(downloads, "FAKEimg1", [img(1)], slides_expected=None); sweep(downloads, store)
    assert store.read("ig-fakeimg1")["capture"]["status"] == "partial"

def test_recapture_replaces_slides_and_keeps_others(store, downloads):
    capture_folder(downloads, "FAKEcar1", [img(1, color="red"), img(2)], slides_expected=3); sweep(downloads, store)
    capture_folder(downloads, "FAKEcar1", [img(1, color="blue"), img(3)], slides_expected=3); sweep(downloads, store)
    items = store.read("ig-fakecar1")["capture"]["items"]
    assert [i["slide"] for i in items] == [1, 2, 3] and store.read("ig-fakecar1")["capture"]["status"] == "captured"
    assert pixel(store.dir / "ig-fakecar1" / "01.jpg") == BLUE

def test_dash_parts_are_joined_into_h264_mp4(store, downloads):
    # parts: a VP9-only video track (ffmpeg -c:v libvpx-vp9) and an AAC-only audio track
    capture_folder(downloads, "FAKEreel1", [vid_parts(1, audio=True)], slides_expected=1); sweep(downloads, store)
    item = store.read("ig-fakereel1")["capture"]["items"][0]
    info = probe_video(store.dir / "ig-fakereel1" / "01.mp4")
    assert item["file"] == "01.mp4" and info.codec == "h264" and info.has_audio is True
    assert not list((store.dir / "ig-fakereel1").glob("*.video.mp4"))

def test_silent_dash_video_has_no_audio(store, downloads):
    capture_folder(downloads, "FAKEcar1", [vid_parts(1, audio=False)], slides_expected=1); sweep(downloads, store)
    assert store.read("ig-fakecar1")["capture"]["items"][0]["has_audio"] is False

def test_bad_media_goes_to_failed_with_reason(store, downloads):
    f = capture_folder(downloads, "FAKEreel1", [vid(1)], slides_expected=1); (f / "01.mp4").write_bytes(b"junk")
    res = sweep(downloads, store)
    assert res.failed and (downloads / "_failed" / f.name / "reason.txt").read_text().startswith("01.mp4:")
    assert store.scan().by_shortcode == {}

def test_capture_never_touches_curator_fields(store, downloads):
    rec = make_record("FAKEimg1"); rec.update(status="confirmed", saved_because="texture", style=["grain"]); store.write(rec)
    capture_folder(downloads, "FAKEimg1", [img(1)], slides_expected=1); sweep(downloads, store)
    after = store.read("ig-fakeimg1")
    assert (after["status"], after["saved_because"], after["style"]) == ("confirmed", "texture", ["grain"])

def test_cli_import_captures(tmp_path, monkeypatch, capsys): ...  # prints "filed 1, failed 0"
```

- [ ] **Step 2: Run the tests.** `.venv/bin/pip install -e ".[dev]" && .venv/bin/python -m pytest tests/test_capture_sweep.py -q`. Expected: FAIL, with an ImportError.
- [ ] **Step 3: Implement.**
  - `is_finished`: `capture.json` parses, every listed `file`, `parts.video`, `parts.audio` and `poster` exists, and no `*.crdownload` file is present.
  - `sweep` works on finished folders, oldest first, each under `store_lock()`:
    1. Validate every file: images with `image_size`, videos with `probe_video`. On the first failure, move the folder to `_failed/<name>/` and write `reason.txt` as `<file>: <error>`.
    2. Find the record by shortcode, or create one with `new_id`.
    3. For each item, make a poster if none was supplied, then `atomic_move` the files into `media_path`.
    4. Merge items by `slide`, replacing same-numbered slides, and record width, height, `sha256`, `duration_s` and `has_audio`.
    5. Set `slides_expected` from the capture when it isn't null.
    6. Status is `captured` iff `slides_expected` is an int and slides 1..N are all present. Otherwise `partial`.
    7. `store.write`, then delete the folder.

    A new record takes `owner` and `caption` from `capture.json`, `source.kind` from `kind`, and `source_url` from `page_url`.
- [ ] **Step 4: Run the tests.** Same command. Expected: PASS.
- [ ] **Step 5: Commit.** `git add -A src/quarry tests/test_capture_sweep.py pyproject.toml && git commit -m "Capture sweep: file downloaded captures into the inspiration store"`

---

### Task 4: Workbench hardening (host, origin, referrer)

**Files:**
- Create: `src/quarry/ui/security.py`
- Modify: `src/quarry/ui/app.py` (call `security.install(app)` in `create_app`)
- Test: `tests/test_ui_security.py`

**Interfaces:**
- Produces: `install(app: FastAPI) -> None`, using the hosts and origins in Global Constraints.

- [ ] **Step 1: Write the failing tests.**

```python
def test_unknown_host_refused(repo):
    c = TestClient(create_app(repo.root))
    assert c.get("/api/status", headers={"host": "evil.example"}).status_code == 400
    assert c.get("/api/status", headers={"host": "127.0.0.1:8787"}).status_code == 200

def test_cross_site_post_refused(git_repo):
    c = TestClient(create_app(git_repo.root))
    r = c.post("/api/ingest", headers={"origin": "https://evil.example"}, data={"asset_class": "hero", "origin": "x"})
    assert r.status_code == 403 and r.json()["error"] == "cross-site request refused"

def test_same_origin_dev_origin_and_no_origin_allowed(git_repo):
    c = TestClient(create_app(git_repo.root))
    for h in ({}, {"origin": "http://testserver"}, {"origin": "http://localhost:5173"}):
        assert c.post("/api/ingest", headers=h, data={"asset_class": "hero", "origin": "x"}).status_code == 422  # reached the handler

def test_referrer_policy_header(repo):
    assert TestClient(create_app(repo.root)).get("/").headers["referrer-policy"] == "no-referrer"
```

- [ ] **Step 2: Run the tests.** `.venv/bin/python -m pytest tests/test_ui_security.py -q`. Expected: FAIL.
- [ ] **Step 3: Implement.**
  - Add `TrustedHostMiddleware`.
  - Add an HTTP middleware. For POST, PUT, PATCH and DELETE that carry an `Origin` header, it allows the request only if the Origin equals `f"http://{request.headers['host']}"` or is in the dev origins. Otherwise it returns a 403 JSON `{"error": "cross-site request refused"}`.
  - The same middleware sets `Referrer-Policy: no-referrer` on every response.
- [ ] **Step 4: Run the tests.** Run the new tests, then `caffeinate -ims .venv/bin/python -m pytest -q` (the existing UI tests must still pass). Expected: PASS.
- [ ] **Step 5: Commit.** `git add src/quarry/ui/security.py src/quarry/ui/app.py tests/test_ui_security.py && git commit -m "Workbench: refuse foreign hosts and cross-site writes; no-referrer"`

---

### Task 5: Capture API and background sweeper

**Files:**
- Create: `src/quarry/ui/capture_api.py`
- Modify: `src/quarry/ui/app.py` (`capture_api.mount(app)`; `serve()` starts the sweeper)
- Test: `tests/test_ui_capture.py`

**Interfaces:**
- Consumes:
  - from Task 1: `Store`, `inspiration_root`, `NoInspirationRoot`, `store_lock`, `daily_cap`, `cache_dir`;
  - from Task 3: `sweep`, `capture_downloads_dir`, and `image_size`/`probe_video` from `media_probe`.
- Produces:
  - `mount(app: FastAPI) -> None`. It resolves the root once at mount. With no root, `app.state.capture_root` is `None`.
  - `start_sweeper(app: FastAPI, interval: float = 5.0) -> threading.Event`. It returns the stop event. It does nothing when there's no root, and never runs in tests unless called.
  - These routes:
    - `GET /api/capture` returns:

```json
{"enabled": true, "setup": null,
 "counts": {"pending": 0, "partial": 0, "captured": 0, "unavailable": 0},
 "today": {"opened": 0, "cap": 40},
 "items": [{"id": "…", "shortcode": "…", "source_url": "…", "kind": "reel", "owner": "username",
            "saved_at": "…|null", "captured_at": "…|null", "status": "pending", "slides_expected": null,
            "slides": [{"slide": 1, "type": "image"}]}],
 "failed": [{"folder": "…", "reason": "…"}], "warnings": ["…"]}
```

      With no root, it returns `enabled: false`, `setup` set to the `NoInspirationRoot` message, and the rest empty.
    - `POST /api/capture/{shortcode}/opened` adds the shortcode to today's opened set, stored in `cache_dir()/"capture-opens.json"` as `{"date": "YYYY-MM-DD", "opened": [...]}` in local time. Re-opening the same shortcode doesn't count twice. If the shortcode is new and the cap is reached, it returns a 429 with `{"error": "That's enough for today. Pick up tomorrow."}`.
    - `POST /api/capture/{shortcode}/unavailable` sets `capture.status` to `unavailable`.
    - `DELETE /api/capture/{shortcode}/items/{slide}` and `DELETE /api/capture/{shortcode}/items` delete files and items, then recompute the status. With no items left, the status is `pending`.
    - `POST /api/capture/{shortcode}/files` takes a multipart `file` with an optional `slide`, defaulting to the next free slide. It validates the file like the sweep does, stores it with method `manual`, and recomputes the status.
  - Every mutation holds `store_lock()`, returns `{"item": <the list row>}`, gives 404 for an unknown shortcode, and gives 409 `{"error": setup}` when there's no root.

- [ ] **Step 1: Write the failing tests.** Fixtures set `QUARRY_CONFIG_DIR`, `QUARRY_CACHE_DIR` and `QUARRY_INSPIRATION_DIR` to tmp, and seed records with the Task 1 `make_record`.

```python
def test_list_counts_and_sort(client, store): ...  # newest saved_at first; captured_at fallback when saved_at is null
def test_disabled_without_root(repo, monkeypatch):  # no env root → enabled False, setup mentions QUARRY_INSPIRATION_DIR,
    ...                                             # POST unavailable → 409, GET /api/status still 200
def test_daily_cap(client, store, monkeypatch):
    monkeypatch.setenv("QUARRY_INSPIRATION_DIR", ...)  # with config capture_daily_cap = 2
    assert client.post("/api/capture/A/opened").status_code == 200
    assert client.post("/api/capture/A/opened").status_code == 200   # same post, not counted twice
    assert client.post("/api/capture/B/opened").json()["today"] == {"opened": 2, "cap": 2}
    r = client.post("/api/capture/C/opened")
    assert r.status_code == 429 and r.json()["error"] == "That's enough for today. Pick up tomorrow."
def test_opens_reset_on_a_new_day(client, store): ...  # write capture-opens.json with yesterday's date → opened == 0
def test_unavailable_remove_and_add_file(client, store): ...  # remove last item → pending; add_file → method "manual", slide 1
def test_failed_folders_and_warnings_listed(client, store, downloads): ...
def test_start_sweeper_files_a_capture(app, downloads, store): ...  # interval=0.1; wait ≤ 3s for the record to appear; stop event
```

- [ ] **Step 2: Run the tests.** `.venv/bin/python -m pytest tests/test_ui_capture.py -q`. Expected: FAIL.
- [ ] **Step 3: Implement** the Interfaces above. The sweeper is a daemon thread that loops `sweep(...)` every `interval` and logs exceptions without dying. `serve()` calls `start_sweeper(app)` after `create_app`.
- [ ] **Step 4: Run the tests.** Same command, then the full suite under `caffeinate -ims`. Expected: PASS.
- [ ] **Step 5: Commit.** `git add src/quarry/ui/capture_api.py src/quarry/ui/app.py tests/test_ui_capture.py && git commit -m "Workbench capture API, daily cap, and background sweeper"`

---

### Task 6: The Quarry button (Chrome extension)

**Files:**
- Create: `extension/manifest.json`, `extension/service-worker.js`, `extension/content.js`, `extension/lib/postdata.js`, `extension/README.md` (how to load it unpacked)
- Test: `extension/test/postdata.test.js` (uses the Task 0 fixtures)

**Interfaces:**
- Consumes:
  - the Task 3 `capture.json` contract;
  - the Task 0 notes, for the page-data paths.
- Produces: `extension/lib/postdata.js`, a classic script that sets `globalThis.QuarryPostData` and does `module.exports` when `module` exists. It provides:
  - `shortcodeFromUrl(url: string) -> {shortcode, kind} | null`. It accepts the same forms as the importer's `POST_URL_RE`, mapping kind `p` → `post`, `reel`/`reels` → `reel`, and `tv` → `video`.
  - `findPost(jsonTexts: string[], shortcode: string) -> Post | null`. `Post` is `{shortcode, owner: {username, name}, caption, slides: [{media_id, type, image: {url, width, height}, video: {url, width, height, has_audio} | null}]}`. It returns null unless the post object's own shortcode equals the argument.
  - `planCapture(post: Post, {kind, pageUrl, now: Date}) -> {folder, files: [{url, filename}], manifest}`.
    - `folder` is `` `${shortcode}__${yyyymmddThhmmss}` `` in UTC.
    - For each image slide, take the largest `image_versions2` candidate as `NN.jpg`.
    - For each video slide, parse `video_dash_manifest` (spike notes).
      - Take the video Representation with the greatest `height` (ties broken by `bandwidth`) as `NN.video.mp4`, and the audio Representation, if any, as `NN.audio.mp4`. The item gets `parts`.
      - Never choose by bandwidth alone: on real carousels, 1080p has a lower bandwidth than 720p.
      - If there is no manifest or no video Representation, take the largest `video_versions` entry as `NN.mp4`, and the item gets `file`.
      - Either way, take the slide's largest image as `NN-poster.jpg`.
    - Slides come from `carousel_media` in order. A non-carousel post is one slide.
    - `manifest` follows the `capture.json` contract, with `slides_expected = post.slides.length`.
  - `badgeFor(state) -> {text, title}`. It covers `saving n/m`, `done`, `mismatch`, `not-a-post` and `error`. The mismatch title is exactly `Reload the page (⌘R) and press again.`

- [ ] **Step 1: Write the failing tests** using `node:test` and `assert`.

```js
test('shortcodeFromUrl accepts all forms', () => {
  assert.deepEqual(shortcodeFromUrl('https://www.instagram.com/u.ser/p/AbC_1-x/?img_index=2'), {shortcode: 'AbC_1-x', kind: 'post'})
  assert.deepEqual(shortcodeFromUrl('https://www.instagram.com/reels/R1/'), {shortcode: 'R1', kind: 'reel'})
  assert.equal(shortcodeFromUrl('https://www.instagram.com/explore/'), null)
})
test('findPost verifies the shortcode', () => {
  assert.equal(findPost(load('carousel-mixed.json'), 'FAKEcar1').slides.length, 3)
  assert.equal(findPost(load('carousel-mixed.json'), 'SOMEOTHER'), null)
})
test('planCapture picks largest image, audio video, posters, ordered names', () => {
  const p = planCapture(findPost(load('carousel-mixed.json'), 'FAKEcar1'), {kind: 'post', pageUrl: 'https://www.instagram.com/p/FAKEcar1/', now: new Date('2026-11-26T18:02:11Z')})
  assert.equal(p.folder, 'FAKEcar1__20261126T180211')
  assert.deepEqual(p.files.map(f => f.filename), ['01.jpg', '02.video.mp4', '02.audio.mp4', '02-poster.jpg', '03.jpg'])
  assert.match(p.files[1].url, /car1-s2-1080p/)   // highest resolution, despite lower bandwidth
  assert.equal(p.manifest.slides_expected, 3)
  assert.deepEqual(p.manifest.items.map(i => i.type), ['image', 'video', 'image'])
})
test('mismatch badge copy', () => assert.equal(badgeFor({kind: 'mismatch'}).title, 'Reload the page (⌘R) and press again.'))
```

  Also add tests that:
  - the image-post and reel fixtures each plan exactly one slide;
  - the reel picks `dash-reel1-1080p` and its audio;
  - `findPost(load('reel.json'), 'OTHERreel9')` resolves only to the decoy, never to `FAKEreel1`'s media;
  - a post with no `video_dash_manifest` falls back to the largest `video_versions` entry as `NN.mp4`.
- [ ] **Step 2: Run the tests.** `node --test 'extension/test/*.test.js'`. Expected: FAIL.
- [ ] **Step 3: Implement.**
  - **`manifest.json`:** MV3, `name: "Quarry button"`.
    - `permissions: ["downloads", "scripting", "activeTab"]`.
    - `host_permissions: ["https://www.instagram.com/*", "https://*.cdninstagram.com/*", "https://*.fbcdn.net/*"]`.
    - `action`, and `commands._execute_action` with the suggested key `Alt+Shift+Q`.
    - `background.service_worker`.
  - **`service-worker.js`:**
    1. `action.onClicked` → `chrome.scripting.executeScript({files: ['lib/postdata.js', 'content.js']})` on the active tab. `content.js` returns `{status, plan}`, using `shortcodeFromUrl(location.href)` and `findPost` over the `script[type="application/json"]` texts.
    2. Download each file in order with `chrome.downloads.download({url, filename: 'quarry/' + folder + '/' + filename, saveAs: false, conflictAction: 'overwrite'})`, waiting for `state.current === 'complete'` via `downloads.onChanged`.
    3. Then download the manifest as a `data:application/json;charset=utf-8,` URL named `capture.json`.
    4. Update the badge per file.
    5. There are no retries. On any failure, set the `error` badge and stop.
  - Nothing runs except on a click.
- [ ] **Step 4: Run the tests.** `node --test 'extension/test/*.test.js'`. Expected: PASS.
- [ ] **Step 5: Manual check with Brian.**
  1. Load `extension/` unpacked.
  2. With `quarry ui` running and a root configured, capture the 3 spike posts.
  3. Expected: the workbench shows them `captured` within about 10 seconds, with correct slide counts.
  4. A post reached by in-app navigation shows the mismatch badge until it is reloaded.
- [ ] **Step 6: Commit.** `git add extension && git commit -m "Quarry button: Chrome extension that saves a post's media for the sweep"`

---

### Task 7: Capture page (workbench frontend)

**Files:**
- Create: `ui/src/capture.ts`, `ui/src/capture.test.ts`, `ui/src/views/CaptureView.tsx`
- Modify: `ui/src/api.ts` (capture client), `ui/src/App.tsx` (`Page` gains `'capture'`; add a "Capture" ButtonBarItem after Ingest)
- Modify: `src/quarry/ui/static/` (rebuilt)

**Interfaces:**
- Consumes: the Task 5 routes and JSON shapes.
- Produces:
  - in `ui/src/api.ts`: `fetchCapture()`, `markOpened(shortcode)`, `markUnavailable(shortcode)`, `removeSlide(shortcode, slide)`, `removeAll(shortcode)` and `addCaptureFile(shortcode, file, slide?)`. Each returns `{ok: true, data} | {ok: false, status, error}`.
  - in `ui/src/capture.ts`: `sortItems(items)`, `nextPending(items) -> CaptureItem | null`, `capReached(today) -> boolean`, `statusLabel(item) -> string`. `statusLabel` gives `pending`, `captured N`, `partial N/M`, `partial N/?` or `unavailable`.

- [ ] **Step 1: Write the failing vitest tests** in `ui/src/capture.test.ts`:
  - `sortItems` orders by `saved_at` descending, falling back to `captured_at`;
  - `nextPending` skips captured, partial and unavailable items, and returns the first pending one in sorted order;
  - `capReached({opened: 40, cap: 40})` is true;
  - `statusLabel` produces each of its five forms.
- [ ] **Step 2: Run the tests.** `npm test --prefix ui`. Expected: FAIL.
- [ ] **Step 3: Implement.** Follow `ui/AGENTS.md`, and read the playbook index before choosing components.
  - **Header:** counts plus `today N/cap`.
  - **Open next:** a real `<a href={next.source_url} target="quarry-capture">`, so the browser opens it on Brian's click. Its `onClick` fires `markOpened` (fire-and-forget).
    - At the cap, it is a disabled button with the exact cap copy.
    - With no pending items, it is disabled with "Nothing left to capture".
  - **Status filter:** pending (default), partial, captured, unavailable, all.
  - **Rows:** id, owner, kind, saved date, `statusLabel`, and actions (Unavailable, Remove…, Add file). Add file uses a file input and drag-and-drop.
  - **Banners:** failed folders and warnings, shown as Alerts.
  - **Disabled state:** when `enabled` is false, the page shows the `setup` text and nothing else.
  - **Polling:** `fetchCapture` every 3 s, only while the Capture page is shown.
- [ ] **Step 4: Run the tests and build.** `npm test --prefix ui && npm ci --prefix ui && npm run build --prefix ui`. Expected: tests pass and the build succeeds. Then run `quarry ui` against a tmp root with seeded records, open the Capture page, and save a screenshot to `.context/capture-page.png`.
- [ ] **Step 5: Commit.** `git add ui/src src/quarry/ui/static && git commit -m "Workbench Capture page: pending list, Open next, daily cap, fix-ups"`

---

### Task 8 (conditional, skipped per spike): Player-recording fallback

**Build this only if** Task 0 found a spike reel without a video file that has audio, or later if more than 5% of captured reels have no video file. Otherwise skip the task and note the decision in the spike notes.

**Files:**
- Create: `extension/lib/recorder.js`
- Modify: `extension/content.js`, `extension/service-worker.js`
- Test: `extension/test/recorder.test.js` (pure helpers only)

**Interfaces:**
- Produces:
  - `wrapDetected(prevTime, curTime, duration) -> boolean`: true when playback jumps back by more than half the duration.
  - `durationOk(recorded, expected) -> boolean`: within 5%.
  - `pickMime(isTypeSupported) -> string`: prefers `video/mp4;codecs=avc1,mp4a`, falling back to `video/mp4`. Otherwise it throws `Error('MP4 recording unsupported')`.

- [ ] **Step 1: Write the failing tests** for the three helpers, covering boundary values at exactly 5% and at a jump of half the duration.
- [ ] **Step 2: Run** `node --test 'extension/test/*.test.js'`. Expected: FAIL.
- [ ] **Step 3: Implement.**
  - Recording is used when a video slide has no video URL.
  - On the click, it sets `currentTime = 0`, unmutes, plays at `playbackRate 1`, and waits for `playing`.
  - It records `video.captureStream()` with `MediaRecorder` at `videoBitsPerSecond: 8_000_000` until `wrapDetected`.
  - It discards the recording on `visibilitychange` to hidden, a `stalled` or `waiting` event longer than 2 s, `pagehide`, or `video.mediaKeys !== null`.
  - It checks `durationOk`.
  - The hand-off to downloads uses the method the Task 0 notes established. The item's `method` is `recording`.
- [ ] **Step 4: Run the tests, then a manual check on a reel without a file.** Expected: the tests pass, and the sweep files an MP4 that plays in QuickLook, with a duration within 5%.
- [ ] **Step 5: Commit.** `git commit -am "Quarry button: player-recording fallback for reels without a file"`

---

### Task 9: Docs

**Files:**
- Modify: `docs/operations.md` (replace the "Instagram saves" section)
- Modify: `README.md` (CLI list and install extras)
- Modify: `.gitignore` (comment and patterns)
- Modify: `docs/superpowers/specs/2026-11-22-quarry-design.md` (partition section)

- [ ] **Step 1: Write the docs.**
  - **`operations.md`:**
    1. One-time setup: `config.toml` with `inspiration_dir` set to Brian's Drive path, `pip install -e ".[inspiration]"`, and loading `extension/` unpacked.
    2. Importing an export: `quarry import-instagram EXPORT`.
    3. A capture session: `quarry ui` → Capture → Open next → click the button. Cap 40 a day.
    4. Fixing a capture: re-capture, Remove, Add file, Unavailable.
    5. Where failed captures go.
    6. The fact that the Drive folder syncs deletions.
  - **`README.md`:** `quarry import-instagram EXPORT [--inspiration-dir]`, `quarry import-captures [--inspiration-dir] [--downloads]`, and the `inspiration` extra.
  - **`.gitignore`:** change the comment to say inspiration lives outside the repo and these patterns are a safety net. Add `inspiration/**/*.webm`, `*.avif` and `*.heic`.
  - **Main spec:** in the repo-layout block and the partition bullets, add a note that inspiration now lives in an external root (see the 2026-11-24 capture spec) and its records are not in git.
- [ ] **Step 2: Verify.**
  - `git grep -n "inspiration/instagram" -- docs src README.md` returns no stale repo-path instructions.
  - `.venv/bin/quarry validate` prints `ok`.
  - `caffeinate -ims .venv/bin/python -m pytest -q && npm test --prefix ui && node --test 'extension/test/*.test.js'` all pass.
- [ ] **Step 3: Commit.** `git add docs README.md .gitignore && git commit -m "Docs: inspiration root, capture sessions, extension setup"`

---

## Order and gates

- **Sequence:** Task 0, then 1, 2, 3, 4, 5, 6, 7, then (8), then 9.
- **Independent tasks:** 4 can run any time after 0, and 6 (except its manual Step 5) needs only Task 0 and the Task 3 contract.
- **Gates:** Task 0 is a hard gate with Brian. Task 6 Step 5 and Task 7 Step 4 need the real workbench and Chrome.
