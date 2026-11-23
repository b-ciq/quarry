# Fast Rating Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A bot (Claude) rates and tags every proposed image; curators accept or overrule it at one keystroke per image (or per screen), and their verdicts teach the bot.

**Architecture:** Pure rating logic in `src/quarry/rating.py` (verdict inference, example selection, merging bot output, agreement). The Claude call lives behind a small `Rater` protocol in `src/quarry/rater.py` (real `ClaudeRater`, test `FakeRater`). The workbench gets a rate API module (verdicts, batch verdicts, undo, auto-rate job, summary) and a React **Rate** view with a strong-calls grid and an unsure-calls card.

**Tech Stack:** Python 3.11, FastAPI, `anthropic` SDK (new `rate` extra), Pillow; React 19 + Quantic, vitest.

**Spec:** `docs/superpowers/specs/2026-11-22-fast-rating-design.md` (read it first; this plan argues from it).

## Global Constraints

- Verdicts: `yes` → status `confirmed`; `no` → `retired`; `maybe` → `parked` (new status).
- `parked` is never servable; `is_servable` stays `status == "confirmed"`-gated.
- Every write goes through `validate_sidecar` and is a git commit of exactly the touched sidecars via `gitops.commit_paths`.
- Commit messages: `rate: <verdict> <id>`, `rate: accept <n> strong <verdict>`, `rate: bot rated <n> assets`, `rate: undo <original subject without "rate: ">`.
- Bot never writes a non-empty field, never writes an asset with `rating.human`, never writes a slug outside `taxonomy/vocabulary.json`.
- Model default `claude-opus-5-5`, override env `QUARRY_RATER_MODEL`; `output_config.effort = "low"`; structured output via `output_config.format` JSON schema; server-side fallbacks on (`betas=["server-side-fallback-2026-07-01"]`, `fallbacks="default"`) through `client.beta.messages.create`.
- Credentials: the SDK's default resolution (`ANTHROPIC_API_KEY`, then `ant auth` profile). No credentials → feature off with a reason, workbench otherwise unchanged.
- Tests never call the network: inject `FakeRater` or a stub client.
- Examples per call: max 6; look-alike via the style index only when the index's `embedder_mode` is not `fake`; otherwise most recent human verdicts.
- Grid lane: strong calls only, never `class == "screenshot"`, ≤ 24 tiles per screen.
- Frontend build in `src/quarry/ui/static/` must be rebuilt and committed (CI checks drift).

## Review Focus

1. **Bot returns slugs not in the vocabulary, or the `style` axis has no slugs** → unknown slugs dropped, empty axes omitted from the schema; the sidecar always validates. (Task 2, Task 3)
2. **A curator rates an asset while Auto-rate is mid-run** → the curator's write never 409s on "dirty managed paths"; the bot skips that asset. (Task 4, Task 5)
3. **Yes on an asset missing `license` or Midjourney `generation`** → verdict recorded, status stays `proposed`, response lists it under `needs_details`. (Task 4)
4. **Undo after someone else changed the same sidecar** → 409, file untouched. (Task 4)
5. **One API call fails (refusal, 5xx, bad JSON)** → that asset logged as failed and left unrated; the job continues and reports counts. (Task 5)

---

### Task 1: Schema — `parked` status and the `rating` block

**Files:**
- Modify: `src/quarry/schema.py`
- Test: `tests/test_schema.py`, `tests/test_export_deck.py`

**Interfaces:**
- Produces: `STATUSES == {"proposed", "confirmed", "retired", "parked"}`; `VERDICTS = ("yes", "no", "maybe")`; `STRENGTHS = ("strong", "unsure")`; `"rating"` in `OPTIONAL_KEYS`; `validate_sidecar` checks `rating` shape for every status.

- [ ] **Step 1: Write failing tests** in `tests/test_schema.py`:

```python
def test_parked_is_valid_and_not_servable(repo):
    s = json.loads(repo.add_asset("hero", "h1", status="parked", description="").read_text())
    assert validate_sidecar(s, VOCAB) == []          # parked skips confirmed-only checks
    assert not is_servable(s)

def test_rating_block_shape_checked(repo):
    good = {"bot": {"verdict": "yes", "strength": "strong", "reason": "r", "model": "m", "at": "t",
                    "examples": [], "suggested_slugs": {}},
            "human": {"verdict": "maybe", "by": "A <a@b>", "at": "t"}}
    s = json.loads(repo.add_asset("hero", "h1", rating=good).read_text())
    assert validate_sidecar(s, VOCAB) == []
    s["rating"] = {"bot": {**good["bot"], "verdict": "sure"}}
    assert "rating.bot.verdict: invalid value 'sure'" in validate_sidecar(s, VOCAB)
    s["rating"] = {"bot": {**good["bot"], "strength": "very"}}
    assert "rating.bot.strength: invalid value 'very'" in validate_sidecar(s, VOCAB)
    s["rating"] = "yes"
    assert "rating: must be an object" in validate_sidecar(s, VOCAB)
```

(`VOCAB` = the repo vocabulary loaded the way the file's existing tests do.) In `tests/test_export_deck.py` add `test_parked_not_exported`: a `parked` asset is absent from the export.

- [ ] **Step 2: Run** `.venv/bin/pytest tests/test_schema.py tests/test_export_deck.py -q` → new tests FAIL.
- [ ] **Step 3: Implement** in `schema.py`: add the constants; validate `rating` (object; optional `bot`/`human` objects; `bot.verdict`/`human.verdict` in `VERDICTS`; `bot.strength` in `STRENGTHS`) in the always-run section, before the confirmed-only early return. Error strings exactly as in the tests.
- [ ] **Step 4: Run** the full suite `.venv/bin/pytest -q` → PASS.
- [ ] **Step 5: Commit** `feat(schema): parked status and rating block`.

---

### Task 2: Rating core (pure logic)

**Files:**
- Create: `src/quarry/rating.py`
- Test: `tests/test_rating.py`

**Interfaces:**
- Consumes: `schema.VERDICTS`, `schema.TAG_AXES`, `search.more_like(repo_root, id, space="style", servable_only=False, limit=...)`.
- Produces:
  - `@dataclass RatingResult(verdict: str, strength: str, reason: str, description: str, tags: dict[str, list[str]], tone: str | None, suggested_slugs: dict[str, list[str]])`
  - `human_verdict(sidecar: dict) -> str | None` — `rating.human.verdict` if present; else legacy inference: `confirmed` + `anti_example` → `"no"`, `confirmed` → `"yes"`, `retired` → `"no"`, `parked` → `"maybe"`; `proposed` → `None`.
  - `apply_bot_rating(sidecar: dict, result: RatingResult, *, model: str, examples: list[str], vocab: dict, now: str, redo: bool = False) -> dict`
  - `apply_human_verdict(sidecar: dict, verdict: str, *, by: str, now: str, reason: str | None = None) -> dict` — sets `rating.human`, keeps `rating.bot`; omits `reason` when empty.
  - `select_examples(repo_root: Path, asset_id: str, sidecars: list[dict], *, look_alike: bool, k: int = 6) -> list[dict]`
  - `agreement(sidecars: list[dict], recent: int = 50) -> dict` → `{"recent": {"agreed": int, "total": int}, "strong": {...}, "unsure": {...}}`

- [ ] **Step 1: Write failing tests** in `tests/test_rating.py`:

```python
def test_human_verdict_inference():
    assert human_verdict({"status": "confirmed"}) == "yes"
    assert human_verdict({"status": "confirmed", "anti_example": True}) == "no"
    assert human_verdict({"status": "retired"}) == "no"
    assert human_verdict({"status": "parked"}) == "maybe"
    assert human_verdict({"status": "proposed"}) is None
    assert human_verdict({"status": "confirmed", "rating": {"human": {"verdict": "maybe"}}}) == "maybe"

def test_bot_fills_only_empty_fields_and_drops_unknown_slugs():
    s = {"class": "background", "description": "Human words", "products": [], "concepts": ["people"],
         "categories": [], "verticals": [], "style": []}
    r = RatingResult("yes", "strong", "why", "Bot words", {"products": ["rocky", "nope"], "concepts": ["compute"]},
                     "dark", {})
    out = apply_bot_rating(s, r, model="m", examples=["e1"], vocab=VOCAB, now="T")
    assert out["description"] == "Human words"          # non-empty kept
    assert out["products"] == ["rocky"]                  # unknown slug dropped
    assert out["concepts"] == ["people"]                 # non-empty kept
    assert out["tone"] == "dark"
    assert out["rating"]["bot"] == {"verdict": "yes", "strength": "strong", "reason": "why", "model": "m",
                                    "at": "T", "examples": ["e1"], "suggested_slugs": {}}

def test_tone_only_for_backgrounds():
    out = apply_bot_rating({"class": "hero", **EMPTY}, RESULT_WITH_TONE, model="m", examples=[], vocab=VOCAB, now="T")
    assert "tone" not in out

def test_redo_touches_only_rating_bot():
    out = apply_bot_rating({"class": "hero", **EMPTY}, RESULT, model="m", examples=[], vocab=VOCAB, now="T", redo=True)
    assert out["description"] == "" and out["products"] == [] and out["rating"]["bot"]["verdict"] == RESULT.verdict

def test_select_examples_recent_fallback_balances_yes_and_no():
    # 8 human-rated "yes" (newest first) + 1 old "no"; k=6 → 5 newest yes + the no
    ...
    ids = [e["id"] for e in select_examples(root, "target", sidecars, look_alike=False)]
    assert len(ids) == 6 and "old-no" in ids and "target" not in ids

def test_select_examples_look_alike_uses_style_neighbours(monkeypatch):
    # monkeypatch quarry.rating.more_like to return hits [p3, unrated, p1, p2]; only rated ones kept, in order
    ...
    assert [e["id"] for e in select_examples(root, "t", sidecars, look_alike=True, k=2)] == ["p3", "p1"]

def test_select_examples_falls_back_when_asset_not_in_index(monkeypatch):
    # more_like raises KeyError → recent fallback

def test_agreement_counts_by_strength():
    # 3 assets with bot+human: strong agree, strong disagree, unsure agree; 1 with bot only
    assert agreement(sidecars) == {"recent": {"agreed": 2, "total": 3},
                                   "strong": {"agreed": 1, "total": 2},
                                   "unsure": {"agreed": 1, "total": 1}}
```

- [ ] **Step 2: Run** `.venv/bin/pytest tests/test_rating.py -q` → FAIL (module missing).
- [ ] **Step 3: Implement** `rating.py`. Notes: "recent" ordering is `rating.human.at` desc, legacy (no `rating.human`) after, ordered by `source.ingested_at` desc. Example balancing: take the top k; if no `yes` (or no `no`) is in it but one exists in the pool, replace the last item with the best-ranked missing one. `agreement` uses only assets with both `rating.bot` and `rating.human`, most recent `recent` by `human.at`.
- [ ] **Step 4: Run** `.venv/bin/pytest tests/test_rating.py -q` → PASS.
- [ ] **Step 5: Commit** `feat(rating): verdict inference, example selection, bot merge, agreement`.

---

### Task 3: The rater (Claude call) and the rubric

**Files:**
- Create: `src/quarry/rater.py`, `taxonomy/rating-guide.md`
- Modify: `pyproject.toml` (extra `rate = ["anthropic"]`; add `"anthropic"` to `dev`)
- Test: `tests/test_rater.py`

**Interfaces:**
- Consumes: `rating.RatingResult`, `schema.TAG_AXES`.
- Produces:
  - `class Rater(Protocol)`: `model: str`; `rate(self, image: Path, sidecar: dict, examples: list[dict], vocab: dict, guide: str, repo_root: Path) -> RatingResult`
  - `class RaterError(Exception)` — raised for refusal, API error, or unparseable output.
  - `FakeRater(results: dict[str, RatingResult] | None = None, fail: set[str] = frozenset())` — returns `results[sidecar["id"]]` or a default `RatingResult("maybe", "unsure", "fake", "Fake description.", {}, None, {})`; raises `RaterError` for ids in `fail`; records calls in `.calls: list[str]`.
  - `ClaudeRater(client=None, model: str | None = None)` — `client` defaults to `anthropic.Anthropic()`; model defaults to `os.environ.get("QUARRY_RATER_MODEL", "claude-opus-5-5")`.
  - `rating_schema(vocab: dict, cls: str) -> dict` — JSON schema: `verdict` enum `VERDICTS`, `strength` enum `STRENGTHS`, `reason`, `description`, `tags` object with one array-of-enum property per axis whose vocab is non-empty, `tone` enum `["dark","light"]` only when `cls == "background"`, `suggested_slugs` object of string arrays; `additionalProperties: false` everywhere, all keys required.
  - `image_block(path: Path, max_px: int) -> dict` — Pillow downscale to `max_px` longest side, JPEG, base64 `image` content block. Target 768px; examples 256px.
  - `rater_status() -> dict` → `{"available": bool, "model": str, "reason": str | None}`; unavailable when `anthropic` isn't importable ("install the rate extra: pip install -e '.[rate]'") or no credentials resolve ("set ANTHROPIC_API_KEY or run `ant auth login`").
  - `load_guide(repo_root: Path) -> str` — contents of `taxonomy/rating-guide.md`, or `""`.

- [ ] **Step 1: Write failing tests** in `tests/test_rater.py` (stub client records the request kwargs and returns a canned response object with `.stop_reason` and `.content=[SimpleNamespace(type="text", text=json.dumps(...))]`):

```python
def test_schema_omits_empty_axes_and_tone_for_non_backgrounds():
    sch = rating_schema(VOCAB, "hero")
    assert "style" not in sch["properties"]["tags"]["properties"]      # style vocab is empty today
    assert sch["properties"]["tags"]["properties"]["products"]["items"]["enum"] == VOCAB["products"]
    assert "tone" not in sch["properties"]
    assert "tone" in rating_schema(VOCAB, "background")["properties"]

def test_claude_rater_request_shape(tmp_path):
    stub = StubClient(output={...valid...})
    r = ClaudeRater(client=stub, model="claude-opus-5-5").rate(img, sidecar, examples, VOCAB, "GUIDE", tmp_path)
    kw = stub.last
    assert kw["model"] == "claude-opus-5-5"
    assert kw["output_config"]["effort"] == "low" and kw["output_config"]["format"]["type"] == "json_schema"
    assert kw["betas"] == ["server-side-fallback-2026-07-01"] and kw["fallbacks"] == "default"
    assert "GUIDE" in json.dumps(kw["system"])
    assert sum(b["type"] == "image" for m in kw["messages"] for b in m["content"]) == 1 + len(examples)
    assert r.verdict == "yes"

def test_claude_rater_refusal_raises():
    with pytest.raises(RaterError, match="refus"):
        ClaudeRater(client=StubClient(stop_reason="refusal")).rate(...)

def test_model_env_override(monkeypatch):
    monkeypatch.setenv("QUARRY_RATER_MODEL", "claude-sonnet-5-5")
    assert ClaudeRater(client=StubClient()).model == "claude-sonnet-5-5"

def test_fake_rater_defaults_and_failures(): ...
```

- [ ] **Step 2: Run** `.venv/bin/pip install -q -e '.[dev,ui]' && .venv/bin/pytest tests/test_rater.py -q` → FAIL.
- [ ] **Step 3: Implement** `rater.py`. Request: `client.beta.messages.create(model, max_tokens=4096, betas=[...], fallbacks="default", output_config={"effort": "low", "format": {"type": "json_schema", "schema": rating_schema(...)}}, system=[{"type": "text", "text": <instructions + guide + vocabulary>, "cache_control": {"type": "ephemeral"}}], messages=[...])`. User content: for each example a 256px image block + text `"Example <id>: human verdict <v>. Reason: <reason or avoid_reason or '-'>. Tags: ..."`, then the 768px target image + text with the target's class and any existing description/tags. Instructions define Yes / No / Maybe-yes per the spec table, "strong = you would bet the curators agree", one-line reason, tags only from the given slugs, missing ideas go in `suggested_slugs`. Check `stop_reason` before reading content; catch `anthropic.APIError` and `json.JSONDecodeError` → `RaterError`. Verify SDK call shapes against the claude-api skill's Python docs, not memory.
- [ ] **Step 4: Write** `taxonomy/rating-guide.md`: ≤ 40 lines, headed "What makes a Yes / No / Maybe-yes for CIQ", seeded from the brand intent in `docs/superpowers/specs/2026-11-22-quarry-design.md` and the existing anti-examples' `avoid_reason`s; ends with "Brett and Isabelle own this page. Edit it when the bot keeps getting something wrong."
- [ ] **Step 5: Run** `.venv/bin/pytest -q` → PASS.
- [ ] **Step 6: Commit** `feat(rater): Claude rater behind a Rater protocol, fake for tests, rubric seed`.

---

### Task 4: Human verdict write path (single, batch, undo)

**Files:**
- Modify: `src/quarry/ui/write_api.py`, `src/quarry/ui/gitops.py`
- Create: `src/quarry/ui/rate_api.py` (verdict routes here; Task 5 adds the job/summary)
- Modify: `src/quarry/ui/app.py` (mount `rate_api`)
- Test: `tests/test_ui_rate_write.py`

**Interfaces:**
- Consumes: `rating.apply_human_verdict`, `schema.validate_sidecar`.
- Produces:
  - `gitops.identity(repo) -> str` — `"<user.name> <<user.email>>"` from `git config`.
  - `require_clean_managed` performs its dirty check while holding `app.state.write_lock` (so a bot chunk mid-commit is waited for, not reported as dirt).
  - Existing `confirm` / `retire` routes also write `rating.human` (`yes` / `no`) with `by = gitops.identity`.
  - `POST /api/assets/{id}/verdict` body `{"verdict": "yes"|"no"|"maybe", "reason"?: str}` → 200 `{"asset", "commit", "needs_details": [errors] | null}`; 409 bad status; 422 bad verdict or card-fixable validation errors.
  - `POST /api/verdicts` body `{"verdict", "ids": [...]}` → 200 `{"commit": sha|null, "applied": [ids], "needs_details": {id: [errors]}, "failed": {id: [errors]}}`, one commit for all applied + needs_details.
  - `POST /api/undo` body `{"commit": sha}` → 200 `{"commit": new_sha, "ids": [...]}`; 409 if that commit's subject doesn't start with `rate: ` or any of its sidecars changed since; 404 unknown sha.
  - Allowed-from: `yes` and `maybe` from `{"proposed", "parked"}`; `no` from `{"proposed", "parked", "confirmed"}`.
  - "Card-fixable" fields: `description`, `products`, `categories`, `verticals`, `concepts`, `style`, `tone`. A `yes` whose validator errors are all card-fixable → 422 (status unchanged, nothing written). Any other error → write `rating.human = yes`, keep status `proposed`, return errors in `needs_details`.

- [ ] **Step 1: Write failing tests** in `tests/test_ui_rate_write.py` (use `git_repo`, `TestClient(create_app(git_repo.root))`):

```python
def test_verdict_yes_confirms_and_records_human(git_repo):
    git_repo.add_asset("hero", "h1", status="proposed"); commit(git_repo)
    r = c.post("/api/assets/h1/verdict", json={"verdict": "yes"})
    assert r.status_code == 200 and r.json()["asset"]["status"] == "confirmed"
    assert r.json()["asset"]["rating"]["human"]["by"] == "Test <test@example.com>"
    assert git_repo.git("log", "-1", "--format=%s") == "rate: yes h1\n"

def test_verdict_maybe_parks_and_no_retires(git_repo): ...   # statuses parked / retired; messages "rate: maybe h1", "rate: no h2"

def test_parked_can_be_upgraded(git_repo): ...               # parked + yes → confirmed

def test_yes_with_missing_license_records_needs_details(git_repo):
    git_repo.add_asset("hero", "h1", status="proposed", license=""); commit(git_repo)
    body = c.post("/api/assets/h1/verdict", json={"verdict": "yes"}).json()
    assert body["asset"]["status"] == "proposed" and body["asset"]["rating"]["human"]["verdict"] == "yes"
    assert body["needs_details"] == ["license: required for confirmed assets"]

def test_yes_with_only_card_fixable_errors_is_422_and_untouched(git_repo):
    git_repo.add_asset("background", "b1", status="proposed", tone=drop); commit(git_repo)
    r = c.post("/api/assets/b1/verdict", json={"verdict": "yes"})
    assert r.status_code == 422 and "tone: required (dark|light) for background" in r.json()["errors"]
    assert git_repo.git("status", "--porcelain") == ""

def test_override_reason_stored(git_repo): ...                # reason "too cliché" lands in rating.human.reason

def test_confirm_route_records_human_verdict(git_repo): ...   # existing /confirm writes rating.human.verdict == "yes"

def test_batch_one_commit_and_partial_results(git_repo):
    # h1, h2 ok; h3 missing license → needs_details; b1 missing tone → failed
    body = c.post("/api/verdicts", json={"verdict": "yes", "ids": ["h1", "h2", "h3", "b1"]}).json()
    assert body["applied"] == ["h1", "h2"] and list(body["needs_details"]) == ["h3"] and list(body["failed"]) == ["b1"]
    assert git_repo.git("log", "-1", "--format=%s") == "rate: accept 3 strong yes\n"   # applied + needs_details
    assert git_repo.git("rev-list", "--count", "HEAD").strip() == str(seed_count + 1)

def test_undo_restores_previous_content(git_repo):
    before = path.read_text()
    sha = c.post("/api/assets/h1/verdict", json={"verdict": "no"}).json()["commit"]
    r = c.post("/api/undo", json={"commit": sha})
    assert r.status_code == 200 and path.read_text() == before
    assert git_repo.git("log", "-1", "--format=%s") == "rate: undo no h1\n"

def test_undo_refuses_when_changed_since(git_repo):
    sha = c.post("/api/assets/h1/verdict", json={"verdict": "maybe"}).json()["commit"]
    c.patch("/api/assets/h1", json={"description": "edited later"})
    r = c.post("/api/undo", json={"commit": sha})
    assert r.status_code == 409 and json.loads(path.read_text())["description"] == "edited later"

def test_undo_refuses_non_rate_commits(git_repo): ...         # a "curate: retag" sha → 409
```

- [ ] **Step 2: Run** `.venv/bin/pytest tests/test_ui_rate_write.py -q` → FAIL.
- [ ] **Step 3: Implement.** Extract from `write_api.mount` a reusable `write_sidecars(app, changes: dict[Path, dict], message: str) -> str` (validate already done by caller; write all, one `commit_paths`, roll back all on `GitError`, invalidate cache) and use it from `mutate` and the batch route. Undo: `git show <sha>^:<path>` per sidecar in `git diff-tree --no-commit-id --name-only -r <sha>`; require current file bytes == `git show <sha>:<path>`; write old bytes; commit `rate: undo <subject minus "rate: ">`. All three routes depend on `require_clean_managed`.
- [ ] **Step 4: Run** `.venv/bin/pytest -q` → PASS (existing write tests too).
- [ ] **Step 5: Commit** `feat(ui): verdict, batch verdict and undo endpoints; confirm/retire record human verdicts`.

---

### Task 5: Auto-rate job and Rate summary

**Files:**
- Modify: `src/quarry/ui/rate_api.py`, `src/quarry/ui/app.py`
- Test: `tests/test_ui_rate_job.py`

**Interfaces:**
- Consumes: `Rater`, `FakeRater`, `ClaudeRater`, `rater_status`, `load_guide` (Task 3); `rating.*` (Task 2); `write_sidecars` (Task 4); `JobRunner` via `app.state.jobs`.
- Produces:
  - `create_app(repo_root, fake_embedder=False, skill_dir=None, rater: Rater | None = None)`; `app.state.get_rater()` returns the injected rater, else a lazily built `ClaudeRater`; `app.state.rater_status()` returns `{"available": True, "model": rater.model, "reason": None}` when injected, else `rater_status()`.
  - `POST /api/rate` (query `redo=unsure` optional) → `{"job_id"}`; 409 if a job runs or tree dirty; 503 `{"error": reason}` when rater unavailable.
  - Job result `{"rated": int, "failed": {id: message}, "skipped": int}`; log line per asset `"<id>: <verdict> (<strength>) — <reason>"` or `"<id>: FAILED <message>"`.
  - `GET /api/rate/summary` → `{"waiting_for_bot": int, "to_review": int, "needs_details": int, "parked": int, "agreement": <rating.agreement>, "rater": <rater_status>, "learning": "look-alike" | "recent"}`.
    - `waiting_for_bot`: `proposed`, no `rating.bot`. `to_review`: `proposed`, `rating.bot`, no `rating.human`. `needs_details`: `proposed` with `rating.human.verdict == "yes"`. `learning`: `"look-alike"` iff index exists and `embedder_mode != "fake"`.

- [ ] **Step 1: Write failing tests** in `tests/test_ui_rate_job.py` (reuse `_wait` from `test_ui_jobs.py`):

```python
def test_auto_rate_writes_bot_ratings_in_chunks(git_repo):
    for i in range(25): git_repo.add_asset("hero", f"h{i:02}", status="proposed", description="")
    commit(git_repo)
    c = TestClient(create_app(git_repo.root, rater=FakeRater()))
    s = _wait(c, c.post("/api/rate").json()["job_id"])
    assert s["state"] == "done" and s["result"]["rated"] == 25
    subjects = git_repo.git("log", "--format=%s", "-2").splitlines()
    assert subjects == ["rate: bot rated 5 assets", "rate: bot rated 20 assets"]
    assert json.loads(sidecar("h00").read_text())["rating"]["bot"]["verdict"] == "maybe"

def test_auto_rate_skips_assets_with_human_verdict_or_bot_rating(git_repo): ...

def test_auto_rate_failure_is_reported_and_others_continue(git_repo):
    c = TestClient(create_app(git_repo.root, rater=FakeRater(fail={"h1"})))
    s = _wait(c, c.post("/api/rate").json()["job_id"])
    assert s["result"]["rated"] == 1 and "h1" in s["result"]["failed"]
    assert "rating" not in json.loads(sidecar("h1").read_text())

def test_human_verdict_during_run_wins(git_repo):
    # FakeRater subclass blocks on an Event inside rate("h1"); meanwhile POST verdict yes on h1 → 200 (no 409);
    # release; job result skipped == 1; h1 keeps status confirmed and has no rating.bot

def test_redo_unsure_updates_only_rating_bot(git_repo): ...

def test_rate_unavailable_returns_503(git_repo, monkeypatch):
    monkeypatch.setattr("quarry.ui.rate_api.rater_status", lambda: {"available": False, "model": "m", "reason": "set ANTHROPIC_API_KEY"})
    assert TestClient(create_app(git_repo.root)).post("/api/rate").status_code == 503

def test_summary_counts(git_repo): ...                 # one asset in each bucket; learning == "recent" with no index
```

- [ ] **Step 2: Run** `.venv/bin/pytest tests/test_ui_rate_job.py -q` → FAIL.
- [ ] **Step 3: Implement** the job: snapshot targets; rate with a `ThreadPoolExecutor(max_workers=4)` (API calls outside the lock); collect results in chunks of 20; for each chunk take `write_lock`, re-read every sidecar, drop any that gained `rating.human` or left `proposed` (count `skipped`), apply `apply_bot_rating` (with `redo`), validate, `write_sidecars(..., f"rate: bot rated {n} assets")`. `select_examples` gets `look_alike` from the summary rule and the current sidecars. `now` is UTC ISO-8601 seconds `Z`.
- [ ] **Step 4: Run** `.venv/bin/pytest -q` → PASS.
- [ ] **Step 5: Commit** `feat(ui): auto-rate background job and rate summary`.

---

### Task 6: Frontend rating logic (pure, tested)

**Files:**
- Create: `ui/src/rating.ts`, `ui/src/rating.test.ts`
- Modify: `ui/src/state.ts` (add `rating?: Rating` to `Asset`; `Status` gains `'parked'`), `ui/src/api.ts`

**Interfaces:**
- Produces (`rating.ts`):
  - types `Verdict = 'yes' | 'no' | 'maybe'`, `Rating = { bot?: {...}; human?: {...} }`
  - `lanes(assets: Asset[], wrong: Set<string>): { strong: { verdict: Verdict; ids: string[] }[]; unsure: string[] }` — only `proposed` with `rating.bot` and no `rating.human`; strong groups ordered yes, no, maybe, each chunked to ≤ 24 ids (one group object per screen); screenshots and ids in `wrong` go to `unsure` (wrong ones first, then by id).
  - `cardReducer(s: CardState, a: CardAction): CardState` with `CardState = { queue: string[]; index: number; undo: string[] /* commit shas, newest last */ }` and actions `decided {id, commit}`, `undone {id}`, `next`, `prev` — `decided` removes the id and pushes the commit; `undone` re-inserts the id at the current index and pops.
  - `agreementText(a: Agreement): string` → `"Bot agreed with you on 41 of 50 recent calls · strong calls 96%"`; `"No verdicts yet"` when total is 0; strong part omitted when strong total is 0.
  - `VERDICT_KEYS: Record<string, Verdict> = { y: 'yes', n: 'no', m: 'maybe' }`
- Produces (`api.ts`): `postVerdict(id, verdict, reason?)`, `postVerdicts(verdict, ids)`, `postUndo(commit)`, `startAutoRate(redo?: 'unsure')`, `fetchRateSummary()` with typed results matching Task 4/5 bodies.

- [ ] **Step 1: Write failing tests** in `ui/src/rating.test.ts` covering: strong/unsure split; screenshot forced to unsure; `wrong` ids moved to unsure; 30 strong yes → two screens of 24 and 6; assets with `rating.human` excluded; `cardReducer` decided→undone round trip restores queue and index; `agreementText` three cases above.
- [ ] **Step 2: Run** `npm test --prefix ui` → FAIL.
- [ ] **Step 3: Implement** `rating.ts` and the `api.ts` additions (reuse `send`).
- [ ] **Step 4: Run** `npm test --prefix ui` → PASS.
- [ ] **Step 5: Commit** `feat(ui): rating lanes, card reducer, rate API client`.

---

### Task 7: Rate view, wiring, and build

**Files:**
- Create: `ui/src/views/RateView.tsx`, `ui/src/components/StrongGrid.tsx`, `ui/src/components/RateCard.tsx`
- Modify: `ui/src/App.tsx`, `ui/src/components/IngestDrop.tsx`, `ui/src/styles.css`, `src/quarry/ui/static/` (rebuilt)

**Interfaces:**
- Consumes: everything in Task 6; `TagChips`; the `TYPING` keyboard guard pattern from `ReviewQueue.tsx`.
- Produces: top-bar `Rate (N)` (N = `to_review`) beside the existing Review queue; `RateView` with tabs **To review**, **Needs details (N)**, **Parked (N)**.

Behavior to build (from the spec; keys ignored while typing or with Cmd/Ctrl/Alt):
- Header strip: `agreementText`, learning mode line when `learning === "recent"` ("learning from recent verdicts — build the real index for look-alike learning"), "N waiting for the bot" + **Auto-rate** button (disabled with `rater.reason` as its tooltip/text when unavailable), job progress via existing `JobLog`.
- **StrongGrid** (first, while any strong screen remains): title "Strong Yes (28)", tiles show thumb + bot reason on hover; click or arrows+Space toggles "bot is wrong" (adds to `wrong`); **Enter** → `postVerdicts` for untoggled ids; `failed` ids join `wrong` with their errors shown on the card; commit sha pushed for **Z**.
- **RateCard**: large image (`full_url`), bot verdict + strength + reason, description (D edits inline, saves via `patchAsset`), tag chips (T focuses the chip editor, Esc returns; saves via `patchAsset`), keys **Y / N / M** → `postVerdict`; if the verdict differs from the bot's, show an inline "why?" input first — Enter submits (empty allowed); **Z** → `postUndo(last)`; ←/→ move. 422 shows validator errors under the fields (reuse `splitErrors`). Bot-proposed fields get a "bot" visual marker until a human verdict.
- **Needs details**: list with errors and "Open in editor" (existing `AssetEditor`).
- **Parked**: card with **Y / N** only.
- **IngestDrop**: after a successful ingest, if the rater is available, show "Auto-rate the N new images?" with a button that calls `startAutoRate()`.

- [ ] **Step 1: Implement** the components and wiring (follow the Quantic playbooks installed with the UI for component choice).
- [ ] **Step 2: Run** `npm test --prefix ui && npm run lint --prefix ui && npm run build --prefix ui` → all PASS, static rebuilt.
- [ ] **Step 3: Manual check** with a fake rater: start `QUARRY_FAKE_RATER=1 .venv/bin/quarry ui --fake-embedder --port 8790` (add `QUARRY_FAKE_RATER` env support in `serve()`: injects `FakeRater()`; document it as dev-only), click Auto-rate, accept a strong screen with Enter, Y/N/M a few cards, Z undo once, confirm commits in `git log` and that `git status` is clean. Screenshot to `.context/rate-view.png`.
- [ ] **Step 4: Commit** `feat(ui): Rate view with strong grid and unsure card` (include `src/quarry/ui/static/`).

---

### Task 8: Docs and agent skill

**Files:**
- Modify: `docs/onboarding.md` (new "Rate" section before "First review session"), `README.md` (Workbench paragraph + `rate` extra in Install), `skills/tag-assets/SKILL.md` (write `rating.human` on approval; Maybe-yes → `parked`; read `taxonomy/rating-guide.md`), `.conductor/settings.toml` (setup installs `.[dev,ui]` — already includes `anthropic` via dev; add a comment that `ANTHROPIC_API_KEY` turns the bot on)

- [ ] **Step 1: Write** the onboarding section: what Yes / No / Maybe-yes do; the two lanes; the keys (Y, N, M, T, D, Z, Enter, ←/→, Esc); why to type a reason when overruling; Needs details and Parked tabs; cost note (~4–5¢ per image); how to turn the bot on (key or `ant auth login`).
- [ ] **Step 2: Run** `.venv/bin/pytest -q && .venv/bin/quarry validate` → PASS.
- [ ] **Step 3: Commit** `docs: rate workflow for curators and the tag-assets skill`.
