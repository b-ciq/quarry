# Inspiration Describer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A background describer in the workbench has Claude write a description, `style` and `concepts` tags, and suggested new terms for every Inspiration item, from any source, with no button.

**Architecture:** Pure logic (`describer.py`: fingerprint, targets, merge, prompt, Claude call) is separate from the loop (`describer_loop.py`: one-per-Mac lock, settling, backoff, pause/stop, daily cap), which `inspiration_api.py` runs on a daemon thread beside the capture sweeper. The UI reads the new fields from `/api/inspiration`, which it already polls every 5 s.

**Tech Stack:** Python 3.11, FastAPI, `anthropic` SDK (beta messages, server-side fallback), Pillow, imageio-ffmpeg; React + Quantic, Vitest.

**Spec:** `docs/superpowers/specs/2026-11-25-inspiration-describer-design.md`

## Global Constraints

- Run Python tests with `.venv/bin/python -m pytest` (bare `pytest` can't import `tests.inspiration_helpers`). Wrap long runs in `caffeinate -ims`.
- `tests/test_rater.py::test_schema_omits_empty_axes_and_tone_for_non_backgrounds` fails on `main` already (the style vocabulary was seeded in #7). Leave it; don't count it as a regression.
- Model: `QUARRY_RATER_MODEL`, default `claude-opus-5-5`. Call `client.beta.messages.create(..., betas=["server-side-fallback-2026-07-01"], fallbacks="default", output_config={"effort": "low", "format": {"type": "json_schema", "schema": ...}}, max_tokens=16000)`. No `thinking` parameter, and no `maxItems` in the schema.
- Every write to the store goes through `Store.write` under `store_lock()` after a fresh `Store.read`.
- Never write to the real Drive folder from tests. Never start the describer when `QUARRY_FAKE_RATER=1`.
- Facet limits: exactly one `medium-`, ≤1 `light-`, ≤2 `color-`, ≤2 `form-`, ≤1 `comp-`.
- Images: ≤10 per call; fit 768 px, or 512 px when there are more than 4. Video frames come at 25%, 50% and 75% of the video's length.
- Intervals: scan 10 s; settle 60 s; item backoff 1 h; paid tries 3; API pause 60 s doubling to 1800 s; paid-failure streak that stops the describer: 5; lock retry 60 s; unavailable re-check 60 s; daily cap default 150 (`describe_daily_cap`).
- Off switch: `describe_inspiration = false` in `~/.config/quarry/config.toml`, or `QUARRY_DESCRIBE_INSPIRATION=0`.
- UI copy is fixed by the spec's UI section. Use those strings verbatim.
- After changing `ui/src`, run `cd ui && npm run build` and commit `src/quarry/ui/static/`.

## Review Focus

1. **A Drive folder that goes read-only or offline mid-run.** Expect: no tight loop, no crash; the item backs off and the strip still renders. Test: `test_unwritable_record_backs_off_without_calling_again` (Task 3).
2. **A curator rejects an item while Claude is describing it.** Expect: the answer is discarded; nothing is written to a retired record. Test: `test_answer_discarded_when_item_rejected_mid_call` (Task 3).
3. **The config file is malformed TOML.** Expect: the workbench starts and the describer reports `off` with the error. Test: `test_bad_config_reports_off_not_crash` (Task 4).
4. **A 13-slide carousel with videos and no ffmpeg.** Expect: at most 10 images, posters used, text says "first 10 of 13 slides", fingerprint unchanged on rescans. Test: `test_large_carousel_caps_images_and_keeps_fingerprint` (Task 2).
5. **A vocabulary rename while inspiration items carry the slug.** Expect: items and `bot.applied` are renamed, so ownership survives. Test: `test_rename_rewrites_inspiration_and_bot_applied` (Task 5).

---

### Task 1: Pure core: fingerprint, targets, merge, schema checks

**Files:**
- Create: `src/quarry/describer.py`
- Modify: `src/quarry/schema.py` (inside `validate_inspiration_record`, before the `capture` checks)
- Modify: `src/quarry/ui/inspiration_api.py` (replace `_media` with `still_images`)
- Test: `tests/test_describer.py`, `tests/test_schema.py`

**Interfaces:**
- Produces, in `quarry.describer`:
  - `still_images(rec: dict) -> list[str]`: the logic of the current `inspiration_api._media`, moved here.
  - `media_fingerprint(rec: dict) -> str`: 12 hex chars of sha256 over JSON of `[(slide, type, file, poster, sha256)]`, sorted by slide.
  - `capture_time(rec: dict) -> str`: newest `capture.items[].captured_at`, else `source.ingested_at`, else `""`.
  - `is_describe_target(rec: dict) -> bool`.
  - `target_order(recs: list[dict]) -> list[dict]`: by `capture_time` descending, then id.
  - `FACET_LIMITS = {"medium": 1, "light": 1, "color": 2, "form": 2, "comp": 1}`.
  - `trim_style(slugs: list[str]) -> list[str]`.
  - `vocab_digest(vocab: dict) -> str`: 8 hex chars of sha256 over `json.dumps(vocab, sort_keys=True)`.
  - `@dataclass DescribeResult(description: str, style: list[str], concepts: list[str], suggested_slugs: dict[str, list[dict]], images: int, model: str | None = None)`.
  - `apply_description(rec: dict, result: DescribeResult, *, vocab: dict, model: str, now: str) -> dict`: returns a new record.

- [ ] **Step 1: Write failing tests in `tests/test_describer.py`.** Use `make_record` and `item` from `tests.inspiration_helpers`, and give each item a `sha256`.
  - `test_fingerprint_changes_with_media_only`: same fingerprint after editing `description`, `status` or `bot`; different after changing an item's `sha256`, or after adding a slide.
  - `test_target_rules`:
    - no media → False;
    - `retired` → False;
    - `proposed` / `parked` / `confirmed` with media and no `bot` → True;
    - `bot.media == media_fingerprint(rec)` → False;
    - a stale `bot.media` → True;
    - `describe_error.gave_up` → False;
    - gave up plus `describe_requested_at` newer than `describe_error.at` → True;
    - described plus `describe_requested_at` → True.
  - `test_target_order_newest_capture_first`: a record saved long ago but captured today sorts before one saved yesterday and captured yesterday. A record with `saved_at: None` and a date-only `ingested_at` doesn't raise.
  - `test_trim_style_enforces_facets`: `["medium-photo","medium-3d-render","light-backlit","light-high-key","color-duotone","color-monochrome","color-blue-teal","form-wave-flow","comp-negative-space","comp-macro-detail"]` → `["medium-photo","light-backlit","color-duotone","color-monochrome","form-wave-flow","comp-negative-space"]`.
  - `test_apply_fills_empty_fields`: empty record → `description`, `style`, `concepts` set; `bot` has `model`, `at`, `applied`, `answer`, `suggested_slugs`, `images`, `media == media_fingerprint(rec)`, `vocab`; `describe_error` and `describe_requested_at` are removed.
  - `test_apply_keeps_curator_values`: `style` is `["medium-photo"]` and `bot.applied.style` is `["medium-3d-render"]` → `style` stays `["medium-photo"]`; `bot.answer.style` holds the new answer.
  - `test_apply_replaces_claude_owned_values_as_sets`: `style` is `["b","a"]` and `bot.applied.style` is `["a","b"]` (valid slugs) → replaced by the new answer.
  - `test_apply_filters_to_vocab_and_drops_existing_suggestions`: an unknown tag is dropped from `style`/`applied` but kept in `answer`; a suggested slug already in the vocabulary is dropped.
  - `test_applied_is_ownership_reference_after_trim`: run `apply_description` twice with the same over-long style answer and no curator edit. The second run still treats the field as Claude-owned.
- [ ] **Step 2: Add schema tests in `tests/test_schema.py`.**
  - `test_inspiration_bot_shape`: valid `bot` passes.
  - `bot` that isn't a dict fails with an error starting `bot:`.
  - `bot.applied.style` that isn't a list of strings fails.
  - `describe_error` without an int `tries` fails.
  - `describe_requested_at` that isn't a string fails.
  - `description: 3` fails; `style: "x"` fails.
- [ ] **Step 3: Run them.** `.venv/bin/python -m pytest tests/test_describer.py tests/test_schema.py -q`. Expected: the new tests FAIL with ImportError or assertion errors.
- [ ] **Step 4: Implement** the functions above and the schema checks.
  - `apply_description` decides ownership per field: `owned = not cur or set_or_eq(cur, prev_applied)`, where tag lists compare as sets and description as an exact string. `applied` records the value Claude would set for every field, even fields a curator owns.
  - `still_images` replaces `inspiration_api._media`; update its import.
- [ ] **Step 5: Run.** `.venv/bin/python -m pytest tests/test_describer.py tests/test_schema.py tests/test_ui_inspiration.py -q`. Expected: PASS.
- [ ] **Step 6: Commit.** `git commit -m "feat: describer core (fingerprint, targets, merge) and inspiration bot schema"`

### Task 2: Claude call: prompt, schema, images, video frames

**Files:**
- Modify: `src/quarry/describer.py`
- Modify: `src/quarry/media_probe.py` (add `video_frames` after `make_poster`)
- Test: `tests/test_describer_claude.py`, `tests/test_media_probe.py` (create it if absent)

**Interfaces:**
- Consumes: `still_images`, `trim_style`, `DescribeResult` (Task 1); `rater.image_block`, `rater.api_error_code`, `rater.RaterError`, `rater.DEFAULT_MODEL`, `rater.BETAS`.
- Produces:
  - `media_probe.video_frames(video: Path, fractions: tuple[float, ...], dest_dir: Path) -> list[Path]`: one JPEG per fraction, using `probe_video(video).duration`. Raises `MediaError` or `FfmpegMissing`.
  - `describer.describe_schema(vocab: dict) -> dict`.
  - `describer.load_vocab_doc(repo_root: Path) -> str`: the text of `taxonomy/visual-vocabulary.md`, or `""`.
  - `describer.media_inputs(rec: dict, store: Store, frames_dir: Path) -> tuple[list[tuple[Path, str]], int]`: (path, label) pairs in slide order, capped at 10, plus the total slide count. A video slide yields its poster, then its frames, with label `"frames from a video"`. When ffmpeg is missing or fails, the video yields only its poster.
  - `class Describer(Protocol)`: `model: str`; `describe(self, rec: dict, store: Store, vocab: dict, vocab_doc: str) -> DescribeResult`.
  - `class ClaudeDescriber(client=None, model: str | None = None)`, with the same lazy `client` property as `ClaudeRater`.
  - `class FakeDescriber(results: dict[str, DescribeResult] | None = None, fail: dict[str, str] | None = None)`: `fail` maps an id to a `RaterError.code`; `.calls: list[str]`; the default result is `DescribeResult("Fake description.", ["medium-photo"], [], {"style": [], "concepts": []}, 1)`.
  - Constants: `ITEM_CODES = {"refusal", "bad_output", "max_tokens", "bad_request"}`, `LOCAL_CODES = {"image"}`. Everything else is API-wide.

- [ ] **Step 1: Write failing tests.** Copy `StubClient` from `tests/test_rater.py` into the new test file, and seed a real store in `tmp_path` with Pillow JPEGs.
  - `test_schema_shape`:
    - `required` and `additionalProperties: False` on every object;
    - `tags.style.items.enum == vocab["style"]`;
    - the suggested-slug items are objects with `slug` and `definition`;
    - no `maxItems` anywhere (walk the dict).
  - `test_request_shape`:
    - `model`, `betas == BETAS`, `fallbacks == "default"`, `output_config.effort == "low"`;
    - the system text contains the vocabulary doc and is marked `cache_control: {"type": "ephemeral"}`;
    - the user content has one image block per input, and its text includes the caption, `@owner` and "the poster's own words".
  - `test_large_carousel_caps_images_and_keeps_fingerprint`:
    - a 13-slide record with 3 video slides and `video_frames` monkeypatched to raise `FfmpegMissing`;
    - expect 10 image blocks and text containing "first 10 of 13 slides";
    - expect `media_fingerprint(rec)` to be the same before and after.
  - `test_image_size_drops_to_512_above_four`: monkeypatch `describer.image_block` to record `max_px`; 5 images → all 512; 4 → all 768.
  - `test_empty_description_is_bad_output`: output `{"description": "  ", ...}` raises `RaterError` with code `bad_output`.
  - `test_output_trimmed_and_parsed`: an over-long style answer comes back trimmed by `trim_style`; `images` equals the number of image blocks; `model` comes from the response.
  - `test_error_codes`: refusal → `refusal`; `max_tokens` → `max_tokens`; unparseable → `bad_output`; an API error goes through `api_error_code`; an unreadable media file → `image`.
  - In `tests/test_media_probe.py`, `test_video_frames` (skip if `imageio_ffmpeg` isn't installed): build a 2 s clip with ffmpeg `testsrc`, request `(0.25, 0.5, 0.75)`, and expect 3 JPEG files that Pillow opens.
- [ ] **Step 2: Run.** `.venv/bin/python -m pytest tests/test_describer_claude.py tests/test_media_probe.py -q`. Expected: FAIL.
- [ ] **Step 3: Implement.**
  - The system text is instructions + allowed slugs + `# Visual vocabulary\n` + vocab_doc, as one block with `cache_control`.
  - The instructions encode the spec's "Instructions" bullets: no verdict, the facet rules, and kebab-case suggested slugs with a definition.
  - Frames go to `frames_dir / f"{rec['id']}-{slide:02d}-{i}.jpg"`. The caller passes `cache_dir()/"describe-frames"` and clears it after each call.
- [ ] **Step 4: Run** the same command. Expected: PASS.
- [ ] **Step 5: Commit.** `git commit -m "feat: Claude describer request, schema, video frames"`

### Task 3: The loop: lock, settle, backoff, pause, stop, cap

**Files:**
- Create: `src/quarry/describer_loop.py`
- Test: `tests/test_describer_loop.py`

**Interfaces:**
- Consumes: Tasks 1–2; `Store`, `store_lock`, `config_dir`, `cache_dir`, `load_vocabulary`.
- Produces:
  - `class DescriberLoop(store: Store, describer: Describer, repo_root: Path, *, clock: Callable[[], float] = time.time, today: Callable[[], str] = <local date iso>, cap: int = 150, port: int | None = None)`.
  - `.tick() -> None`: one scan and at most one describe. It never raises: it catches everything, logs, and stores the error in `.status()["reason"]`.
  - `.status() -> dict`: `{state, reason, waiting, current, holder, today, cap, retry_at}`, with `state` in `running|idle|paused|stopped|capped|off|elsewhere`.
  - `.resume() -> None`: clears `stopped` and the paid streak.
  - `.close() -> None`: releases the lock.
  - Attributes, for tests and the CLI: `settle_s = 60`, `backoff_s = 3600`, `max_tries = 3`, `stop_streak = 5`.
  - `waiting_count(store: Store) -> int`: a module function, the number of describe targets (used by non-holders too).
  - Lock: `config_dir()/"describer.lock"`, `fcntl.flock(fd, LOCK_EX | LOCK_NB)`. After taking it, the holder writes `{"pid", "port"}` as JSON into the file. A non-holder reads that JSON into `holder` and retries at most every 60 s.
  - Daily counter: `cache_dir()/f"describer-{today}.json"` holding `{"calls": n}`, incremented **before** each call.

- [ ] **Step 1: Write failing tests.**
  - Fixtures: a temp `QUARRY_CONFIG_DIR` and `QUARRY_CACHE_DIR`, a temp store with seeded media records, a fake clock list `[t]` with `clock=lambda: t[0]`, and the repo's real `taxonomy/`.
  - `test_settles_before_describing`: tick at t=0 makes no call; tick at t=61 makes one call, and the record now has `bot`.
  - `test_newest_capture_first_one_per_tick`.
  - `test_second_loop_reports_elsewhere`: loop A takes the lock and loop B is `elsewhere` with `holder.port`. After `A.close()` and t+61, B takes the lock.
  - `test_answer_discarded_when_item_rejected_mid_call`: a `FakeDescriber` subclass sets the record's status to `retired` from inside `describe`. Expect no `bot` written and status still `retired`.
  - `test_media_change_mid_call_discards`: the same, but a slide is added. Expect no `bot`. The item is described once it settles again.
  - `test_paid_failure_counts_tries_then_gives_up`: `fail={"ig-x": "bad_output"}`. Advance 3601 s between attempts. Expect `describe_error.tries` to go 1, 2, 3, with `gave_up: True` at 3, and no 4th call.
  - `test_api_failure_pauses_without_touching_record`: code `rate_limit`. Expect state `paused`, no `describe_error` on the record, `retry_at - now == 60`, then 120 after the next failure, capped at 1800.
  - `test_local_failure_backs_off_without_try`: code `image`. Expect no record change, and no new call until t+3600.
  - `test_paid_streak_stops_until_resume`: 5 different items all fail with `bad_output`. Expect state `stopped` and no more calls; after `resume()`, calls continue.
  - `test_unwritable_record_backs_off_without_calling_again`: monkeypatch `Store.write` to raise `OSError`. Expect one call, then none for the same `(id, fingerprint)` until t+3600.
  - `test_daily_cap_survives_restart`: cap=2 gives 2 calls, then state `capped`. A new `DescriberLoop` on the same day is still capped; the next `today` value resets it.
  - `test_requested_redo_describes_again`: set `describe_requested_at` on a described record. Expect it to be described again and the marker cleared.
  - `test_auth_failures_pause_not_stop`: a describer whose `describe` raises `RaterError(code="auth")` five times is `paused`, not `stopped`, because auth is API-wide.
- [ ] **Step 2: Run.** `.venv/bin/python -m pytest tests/test_describer_loop.py -q`. Expected: FAIL.
- [ ] **Step 3: Implement `DescriberLoop`.** In-memory state:
  - `first_seen: dict[(id, fp), float]`;
  - `backoff: dict[(id, fp), float]`;
  - `pause_until`, `pause_s`;
  - `paid_streak`;
  - `stopped`.

  The write path: under `store_lock()`, `store.read(id)`. If the record is no longer a target, or its fingerprint has changed, discard the answer. Otherwise run `apply_description` with `load_vocabulary(repo_root)` re-read at write time, then `store.write`. A paid failure writes `describe_error` under the lock the same way.
- [ ] **Step 4: Run** the same command. Expected: PASS.
- [ ] **Step 5: Commit.** `git commit -m "feat: describer loop with per-Mac lock, settling, backoff and daily cap"`

### Task 4: Server wiring, guards and API

**Files:**
- Modify: `src/quarry/ui/inspiration_api.py`
- Modify: `src/quarry/ui/app.py` (`create_app` signature; `serve`)
- Test: `tests/test_ui_inspiration.py`, `tests/test_ui_describer.py`

**Interfaces:**
- Consumes: `DescriberLoop`, `waiting_count`, `ClaudeDescriber`, `rater.rater_status`, `capture_api.CONFIG_ERRORS`.
- Produces:
  - `create_app(..., describer: Describer | None = None)` stores it on `app.state.describer`.
  - `inspiration_api.describer_enabled() -> tuple[bool, str | None]`: checks `QUARRY_FAKE_RATER`, the env off switch, then config (catching `CONFIG_ERRORS`).
  - `inspiration_api.start_describer(app, interval: float = 10.0, port: int | None = None) -> threading.Event`: does nothing (returns an event that is already set) when there is no root or when disabled. It builds a `ClaudeDescriber` only if `app.state.describer` is None and `rater_status()["available"]`. Otherwise the thread keeps `app.state.describer_loop = None`, re-checks `rater_status()` every 60 s, and builds the loop once Claude becomes available. Until then the status endpoint reports `off` with the reason.
  - `GET /api/inspiration` adds per item `bot` (`{model, at, suggested_slugs}` or null) and `describe_error` (`{message, tries, gave_up}` or null), plus top-level `describer` (the loop's status, or `{state: "off", reason, waiting: waiting_count(store), ...}`).
  - `POST /api/inspiration/{id}/describe`: under `store_lock`, sets `describe_requested_at = utc_now()` and calls `loop.resume()` if there is a loop. Returns `{"ok": true}`, 404 for an unknown id, 409 when inspiration is off.
  - `serve` calls `inspiration_api.start_describer(app, port=port)` after `start_sweeper`.

- [ ] **Step 1: Write failing tests.**
  - `test_list_includes_bot_and_error_fields`.
  - `test_describer_status_off_without_loop` (shows `waiting` counted from the store).
  - `test_describe_endpoint_sets_marker`, plus 404 for an unknown id.
  - `test_fake_rater_env_never_starts_describer`: `QUARRY_FAKE_RATER=1`; `start_describer` returns an event that is already set, and `app.state.describer_loop is None`.
  - `test_env_off_switch`.
  - `test_bad_config_reports_off_not_crash`: write `config.toml` with `inspiration_dir` valid but the line `describe_inspiration = [` broken. Expect `create_app` to succeed and the describer state to be `off` with a reason. (If the broken TOML also breaks `inspiration_root`, assert instead that the workbench starts and `/api/inspiration` returns 200.)
  - `test_injected_describer_runs_one_tick`: inject a `FakeDescriber`, start with `interval=0.01`, wait until the record has `bot` (poll for up to 2 s; pass `settle_s=0` through a `start_describer(..., settle_s=0)` keyword), then stop.
- [ ] **Step 2: Run.** `.venv/bin/python -m pytest tests/test_ui_inspiration.py tests/test_ui_describer.py -q`. Expected: FAIL.
- [ ] **Step 3: Implement.** The thread loop mirrors `start_sweeper`: `while not stop.is_set(): loop.tick(); stop.wait(interval)`, and it calls `loop.close()` on exit. `start_describer` takes `settle_s: float = 60` and sets it on the loop.
- [ ] **Step 4: Run** the same command, then the full suite: `caffeinate -ims .venv/bin/python -m pytest -q`. Expected: PASS, apart from the known `test_rater` failure.
- [ ] **Step 5: Commit.** `git commit -m "feat: run the inspiration describer in the workbench; describer status and redo API"`

### Task 5: Vocabulary operations include Inspiration

**Files:**
- Modify: `src/quarry/ui/vocab_api.py`
- Modify: `src/quarry/ui/inspiration_api.py` (drop unknown slugs in `_row`)
- Test: `tests/test_ui_vocab.py`

**Interfaces:**
- Consumes: `inspiration_root`, `Store`, `store_lock`; the store root resolved the same way `inspiration_api.mount` does it (None when off).
- Produces:
  - `vocab_api.inspiration_carriers(store, axis, slug) -> list[str]`: ids. Only `style` and `concepts` apply.
  - `vocab_api.rewrite_inspiration(store, axis, slug, target) -> list[str]`: failures as `"id: error"`. It rewrites `rec[axis]` and `rec["bot"]["applied"][axis]` with `_swap`.
  - The vocab response gains `inspiration_rewritten: [ids]` and `inspiration_failed: [str]`.
  - `_row(rec, vocab)` filters `style`/`concepts` to the current vocabulary.

- [ ] **Step 1: Write failing tests.** Seed a temp inspiration root via `QUARRY_INSPIRATION_DIR`, and seed a record with `style: ["form-wave-flow"]` and `bot.applied.style: ["form-wave-flow"]`.
  - `test_rename_rewrites_inspiration_and_bot_applied`.
  - `test_merge_rewrites_inspiration`.
  - `test_delete_blocked_by_inspiration_usage`: 409, with the id in `usage`.
  - `test_inspiration_off_vocab_ops_still_work`.
  - `test_list_hides_unknown_slugs`.
- [ ] **Step 2: Run.** `.venv/bin/python -m pytest tests/test_ui_vocab.py -q`. Expected: FAIL.
- [ ] **Step 3: Implement.**
  - Count inspiration carriers in the delete check.
  - Rewrite inspiration only after `commit_paths` succeeds, under `store_lock`, re-reading each record first.
  - Failures are reported, not rolled back.
- [ ] **Step 4: Run** the same command. Expected: PASS.
- [ ] **Step 5: Commit.** `git commit -m "feat: vocabulary rename, merge and delete cover inspiration tags"`

### Task 6: CLI `quarry describe-inspiration`

**Files:**
- Modify: `src/quarry/cli.py`
- Test: `tests/test_cli_describe.py`

**Interfaces:**
- Consumes: `DescriberLoop`, `ClaudeDescriber`, `inspiration_root`, `rater_status`.
- Produces: `quarry describe-inspiration [--repo .] [--inspiration-dir PATH] [--limit N] [--redo ID]`.
  - Builds a `DescriberLoop` with `settle_s = 0` and ticks until `waiting == 0`, `--limit` calls have been made, or the state is not `running`/`idle`.
  - Prints `described <id>` per success and a final `described N, failed M`.
  - Exit 2 when there is no root, Claude is unavailable, or the lock is held (`another Quarry window is describing (port P)`).
  - `--redo ID` sets `describe_requested_at` first.
  - Tests inject the describer through a module-level `_make_describer` hook.

- [ ] **Step 1: Write failing tests:** `test_cli_describes_waiting`, `test_cli_refuses_when_locked`, `test_cli_redo`, `test_cli_no_root_exits_2`.
- [ ] **Step 2: Run.** `.venv/bin/python -m pytest tests/test_cli_describe.py -q`. Expected: FAIL.
- [ ] **Step 3: Implement** the subcommand next to `import-captures`.
- [ ] **Step 4: Run** the same command. Expected: PASS.
- [ ] **Step 5: Commit.** `git commit -m "feat: quarry describe-inspiration CLI"`

### Task 7: UI: strip, detail panel, Try again

**Files:**
- Create: `ui/src/describe.ts`, `ui/src/describe.test.ts`
- Modify: `ui/src/gallery.ts` (`InspirationItem`), `ui/src/api.ts` (`InspirationList`, `requestDescribe`), `ui/src/views/InspirationArea.tsx`
- Rebuild: `src/quarry/ui/static/`

**Interfaces:**
- Consumes: the Task 4 API shapes.
- Produces:
  - `InspirationItem` gains `bot: { model: string; at: string; suggested_slugs: { style: { slug: string; definition: string }[]; concepts: { slug: string; definition: string }[] } } | null` and `describe_error: { message: string; tries: number; gave_up: boolean } | null`.
  - `DescriberStatus { state: 'running'|'idle'|'paused'|'stopped'|'capped'|'off'|'elsewhere'; reason: string|null; waiting: number; current: string|null; holder: { pid: number; port: number|null }|null; today: number; cap: number; retry_at: number|null }`.
  - `InspirationList` gains `describer: DescriberStatus`.
  - `describeStrip(s: DescriberStatus, now: number): { text: string; tryAgain: boolean } | null`.
  - `placeholderText(item: InspirationItem, s: DescriberStatus): { text: string; tryAgain: boolean }`.
  - `requestDescribe(id: string)`: `POST /api/inspiration/{id}/describe`.

- [ ] **Step 1: Write failing Vitest cases in `ui/src/describe.test.ts`.** Each spec UI string, verbatim:
  - running with waiting 3 and current `ig-a` → `Claude: describing 3 saves… (ig-a now)`;
  - elsewhere with port 8790 and waiting 3 → `Claude is describing in another Quarry window (port 8790). 3 saves waiting.`;
  - off → `Claude is off: <reason>`;
  - paused, retry in 120 s → `Claude paused: <reason>. Retrying in 2 min.`;
  - stopped → `tryAgain: true`;
  - capped with cap 150 → `Claude reached today's limit of 150 saves. It continues tomorrow.`;
  - idle with waiting 0 → `null`;
  - placeholders: current item → `Claude is describing this…`; running → `Waiting for Claude.`; paused → `Waiting for Claude (paused: <reason>).`; error not gave_up → `Claude could not describe this: <msg>. It will try again later.`; gave_up → `Claude gave up: <msg>.` with `tryAgain: true`.
- [ ] **Step 2: Run.** `cd ui && npx vitest run src/describe.test.ts`. Expected: FAIL.
- [ ] **Step 3: Implement `describe.ts`, then wire up `InspirationArea.tsx`.**
  - Strip: an `area-strip` under the Instagram strip, Inbox view only, with a **Try again** button when `tryAgain` is true (it calls `requestDescribe(current?.id ?? first gave-up id)`, then `load()`).
  - Detail: the Description label row shows `described by Claude · <Mon D>` when `bot` is set; the placeholder uses `placeholderText`; a **Claude suggests new terms** field lists `slug: definition` when there are any; **Try again** appears per item when `tryAgain` is true.
  - Delete the old "Not described yet…" string.
  - Read `ui/node_modules/@ctrliq/quantic-playbooks/index.md` before choosing components (per `ui/AGENTS.md`).
- [ ] **Step 4: Verify.** `cd ui && npx vitest run && npm run lint && npm run build`. Expected: all pass; `src/quarry/ui/static/` updated.
- [ ] **Step 5: Commit.** `git add ui/src src/quarry/ui/static && git commit -m "feat: inspiration describer status strip, detail panel and Try again"`

### Task 8: Docs and a real run

**Files:**
- Modify: `docs/onboarding.md` (section 5 "The bot", item 4; the Inspiration parts), `docs/operations.md`

- [ ] **Step 1: Update the docs.**
  - Onboarding: replace "Claude does not describe or tag Inspiration yet." with how the describer works: automatic, one window describes at a time, the strip states, Try again, the daily cap, and the off switch.
  - Operations: add `quarry describe-inspiration`, plus the `describe_inspiration` and `describe_daily_cap` config keys.
- [ ] **Step 2: Real run.**
  - Start `caffeinate -ims .venv/bin/quarry ui --port 8799 --fake-embedder` with real credentials.
  - Confirm the 13 captured saves get described within a few minutes (`/api/inspiration` shows `bot` on them, and `describer.today` equals the number of calls).
  - Take a screenshot of the Inspiration detail panel with a description and tags, and save it to `.context/inspiration-described.png`.
  - Check `usage` in a log line if one is available. Spot-check two descriptions for facet rules.
- [ ] **Step 3: Full verification.** `caffeinate -ims .venv/bin/python -m pytest -q` (only the known `test_rater` failure) and `cd ui && npx vitest run`.
- [ ] **Step 4: Commit.** `git commit -m "docs: inspiration describer in onboarding and operations"`
