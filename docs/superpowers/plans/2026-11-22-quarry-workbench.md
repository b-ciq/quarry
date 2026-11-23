# Quarry Workbench Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A local two-curator web workbench (`quarry ui`) over the quarry library: browse/facet grid, review queue, metadata editing, vocabulary management, drag-drop ingest, and git-wrapped sync/reindex/publish.

**Architecture:** FastAPI backend in `src/quarry/ui/` importing the existing quarry modules (no reimplemented validation/search/publish logic); git is the multi-writer layer (every mutation = a scoped commit; sync = pull --rebase + push); Vite+React+TS+Tailwind frontend in `ui/` building to committed static assets so running needs no node.

**Tech Stack:** FastAPI + uvicorn (new `ui` extra), httpx TestClient for backend tests, Vite + React + TypeScript + Tailwind, vitest for frontend logic tests.

**Spec:** `docs/superpowers/specs/2026-11-22-workbench-design.md` (layout reference: the approved spike, `.context/prototype/` — gitignored, may be absent; match its layout from the spec's Views section, not by reading it)

## Global Constraints

- Server binds `127.0.0.1` ONLY; default port `8787`; CLI `quarry ui [--port N] [--fake-embedder]`.
- All sidecar writes go through `schema.validate_sidecar` before touching disk; an invalid write returns HTTP 422 with the validator's error strings verbatim and leaves file + git untouched.
- UI-managed paths are exactly `library/`, `taxonomy/`, `exports/`. Every mutation commits ONLY the paths it touched (`git add <paths>`); unrelated dirt never blocks curation and is never swept into a commit.
- Commit messages: `curate: retag <id>`, `curate: confirm <id>`, `curate: retire <id>`, `vocab: <action> <slug>`, `ingest: <n> assets from <origin>`, `publish: <version>`.
- Sync = `git pull --rebase` then `git push`; a conflict aborts cleanly (rebase --abort), returns a "resolve with your agent" error, and never leaves a mid-rebase tree.
- Vocabulary writes sync first; rename/merge rewrites every affected sidecar (all statuses) + `vocabulary.json` in ONE commit, staged all-or-nothing.
- Grid/facets read live sidecars via an mtime-invalidated cache — never the search index; search/similar use the index and report staleness.
- One background job at a time (reindex, publish); a second start returns 409.
- Frontend builds to `src/quarry/ui/static/` (committed); `ui/` holds the Vite source. Node is a dev-time dependency only.
- Existing enums/paths from phase 1 hold (see `2026-11-22-quarry-phase1-dam-core.md` Global Constraints); deck-builder skill dir env `QUARRY_DECK_SKILL_DIR`.

## Review Focus

1. A PATCH with data the validator rejects must 422 and leave the sidecar bytes and git log unchanged — Task 4.
2. A UI commit made while an unrelated file is dirty must contain only the touched paths — Task 3.
3. Vocabulary merge must rewrite all affected sidecars + vocab in one commit, atomically; a mid-rewrite failure leaves the tree clean — Task 5.
4. Confirming an asset that fails confirmed-state rules (e.g. background without tone) must be blocked with the validator errors verbatim — Task 4.
5. Re-uploading bytes already in the library must report the skip and create no commit — Task 6.

---

### Task 1: UI package scaffold, `quarry ui`, status endpoint

**Files:**
- Create: `src/quarry/ui/__init__.py`, `src/quarry/ui/app.py`, `src/quarry/ui/static/index.html` (placeholder)
- Modify: `src/quarry/cli.py` (add `ui` subcommand), `pyproject.toml` (extra `ui = ["fastapi", "uvicorn", "python-multipart"]`; add `fastapi`, `httpx`, `python-multipart` to dev)
- Test: `tests/test_ui_app.py`

**Interfaces:**
- Produces: `app.create_app(repo_root: Path, fake_embedder: bool = False) -> FastAPI` (app factory used by every later API task and all tests); `GET /api/status` → `{"index_stale": bool, "exports_stale": bool, "embedder_mode": "fake"|"hf"|null (index meta), "git": null}` (git block filled by Task 3); `GET /` serves `static/index.html`; CLI `ui` runs uvicorn on 127.0.0.1.

- [ ] **Step 1: Write failing tests** (httpx/TestClient against `create_app(repo.root)` using the existing `repo` fixture): `test_root_serves_index_html`, `test_status_reports_staleness` (no stamp → exports_stale true; after a fake publish-ish stamp → false), `test_status_reports_embedder_mode_from_index_meta` (build index with FakeEmbedder → "fake"), `test_cli_ui_flag_parsing` (argparse accepts `--port`/`--fake-embedder`; don't start the server).
- [ ] **Step 2: Run, verify fail.**
- [ ] **Step 3: Implement** (reuse `publish.check_stale`, index meta read; uvicorn run with `host="127.0.0.1"`).
- [ ] **Step 4: Run tests, verify pass; full suite.**
- [ ] **Step 5: Commit** — `feat(ui): app scaffold, quarry ui command, status endpoint`.

### Task 2: Library cache + read API

**Files:**
- Create: `src/quarry/ui/cache.py`, `src/quarry/ui/read_api.py`
- Modify: `src/quarry/ui/app.py` (mount router)
- Test: `tests/test_ui_read.py`

**Interfaces:**
- Consumes: `library.scan_library`, `search.search`/`more_like`, `vocabulary.load_vocabulary`, `embeddings.FakeEmbedder/HFEmbedder`.
- Produces: `cache.LibraryCache(repo_root)` — `.assets() -> list[dict]` (sidecar + `"id"`), `.get(id) -> dict | None`, `.invalidate()`; auto-invalidates when any sidecar mtime/set changes. Endpoints: `GET /api/assets?class=&product=&status=&tone=&tag=&q=` (substring q over id/description/tags; returns full sidecars + `thumb_url`/`full_url`), `GET /api/assets/{id}`, `GET /api/assets/{id}/similar?limit=` (index; 409-style error JSON when index missing), `GET /api/search?q=` (hybrid via index + `stale` flag), `GET /api/vocabulary`, `GET /thumbs/{id}.webp`, `GET /files/{id}` (full-res; servable and non-servable both allowed — this is the curator's tool).

- [ ] **Step 1: Write failing tests**: assets list matches fixture library incl. proposed/retired (curator sees everything); filter combos narrow; `q` substring hits description; cache invalidates after an external sidecar edit (write file, next request reflects it); `/thumbs/` 200 for indexed asset; similar excludes self; unknown id → 404 JSON.
- [ ] **Step 2: Run, verify fail.**
- [ ] **Step 3: Implement.** Path-traversal safety: ids resolved via cache lookup only, never from user paths.
- [ ] **Step 4: Verify pass; full suite.**
- [ ] **Step 5: Commit** — `feat(ui): library cache and read API`.

### Task 3: Git operations layer + sync endpoint

**Files:**
- Create: `src/quarry/ui/gitops.py`
- Modify: `src/quarry/ui/app.py`, `src/quarry/ui/read_api.py` (status git block)
- Test: `tests/test_ui_gitops.py` (fixture: temp bare "origin" + two clones, tiny committed library)

**Interfaces:**
- Produces: `gitops.MANAGED = ("library", "taxonomy", "exports")`; `managed_status(repo) -> ManagedStatus` (dataclass: `dirty_managed: list[str]`, `dirty_other: list[str]`, `ahead: int`, `behind: int`); `commit_paths(repo, paths: list[str], message: str) -> str` (sha; stages ONLY `paths`); `sync(repo) -> SyncResult` (dataclass: `pulled: int, pushed: int, conflict: bool, message: str`); `POST /api/sync`; `GET /api/status` now includes `git: {ahead, behind, dirty_managed, dirty_other}`.

- [ ] **Step 1: Write failing tests**: ahead/behind counts correct across the two clones; **Review Focus 2:** `commit_paths` with an unrelated dirty file (e.g. `notes.txt`) commits only the given sidecar (assert `git show --stat` contains exactly it, and notes.txt still dirty); sync pulls the other clone's commit and pushes local ones; conflicting edits to the same sidecar → `conflict=True`, tree clean (`rebase --abort` ran, no `.git/rebase-merge`), message mentions resolving with the agent.
- [ ] **Step 2: Run, verify fail.**
- [ ] **Step 3: Implement** (subprocess git, `-C repo`, never `git add -A`).
- [ ] **Step 4: Verify pass; full suite.**
- [ ] **Step 5: Commit** — `feat(ui): scoped git layer and sync endpoint`.

### Task 4: Asset write API

**Files:**
- Create: `src/quarry/ui/write_api.py`
- Modify: `src/quarry/ui/app.py`
- Test: `tests/test_ui_write.py` (git-enabled repo fixture: `repo` + `git init` + initial commit helper in conftest)

**Interfaces:**
- Consumes: `schema.validate_sidecar`, `cache.invalidate`, `gitops.commit_paths`, `gitops.managed_status`.
- Produces: `PATCH /api/assets/{id}` (body: editable fields only — description, products, categories, verticals, concepts, style, tone, product_version, captured_at, usage_restrictions; id/file/class/source immutable → 422 if attempted); `POST /api/assets/{id}/confirm`; `POST /api/assets/{id}/retire`; `POST /api/assets/{id}/restore` (retired→confirmed, re-validated). Each success returns the updated sidecar + commit sha. Every write endpoint first checks `managed_status().dirty_managed`: if managed paths already hold uncommitted changes (someone edited outside the UI without committing), return 409 telling the curator to resolve them — the design's dirty-tree rule, scoped to managed paths only.

- [ ] **Step 1: Write failing tests**: PATCH description → sidecar file updated (sorted keys + trailing newline, matching existing style), commit `curate: retag <id>` exists, cache reflects it; **Review Focus 1:** PATCH with unknown vocab slug → 422 listing the validator error, file bytes identical, `git log` unchanged; **Review Focus 4:** confirm on toneless background → 422 with the exact validator strings, status still proposed; confirm on valid proposed asset → status confirmed + commit `curate: confirm <id>`; retire keeps file, sets status, commits; immutable-field PATCH → 422.
- [ ] **Step 2: Run, verify fail.**
- [ ] **Step 3: Implement** (validate the WHOLE candidate sidecar post-merge, not just changed fields).
- [ ] **Step 4: Verify pass; full suite.**
- [ ] **Step 5: Commit** — `feat(ui): asset write API with validated, scoped commits`.

### Task 5: Vocabulary write API

**Files:**
- Create: `src/quarry/ui/vocab_api.py`
- Modify: `src/quarry/ui/app.py`
- Test: `tests/test_ui_vocab.py` (two-clone fixture from Task 3 for the sync-first behavior)

**Interfaces:**
- Consumes: `vocabulary.load_vocabulary`, `gitops.sync`, `gitops.commit_paths`, `schema.validate_sidecar`.
- Produces: `POST /api/vocabulary/{axis}` (add slug), `POST /api/vocabulary/{axis}/{slug}/rename` (body: new), `POST /api/vocabulary/{axis}/{slug}/merge` (body: into), `DELETE /api/vocabulary/{axis}/{slug}` (409 unless usage count 0). All four sync first (conflict → 409 with the resolve-with-agent message). Rename/merge returns `{commit, rewritten: [ids]}`.

- [ ] **Step 1: Write failing tests**: add slug then PATCH an asset with it succeeds; **Review Focus 3:** merge rewrites every carrier incl. a retired and a proposed asset + vocab in ONE commit (assert single new commit whose stat lists vocab + exactly the carrier sidecars), and an asset carrying both src and dst ends with one deduped tag; injected failure mid-rewrite (monkeypatch write of the 2nd sidecar to raise) → tree clean, no commit, no partial file changes; delete with count>0 → 409; rename to an existing slug → 409 (suggest merge); sync-first: slug added in clone B is visible in A after A's vocab edit (A pulled first).
- [ ] **Step 2: Run, verify fail.**
- [ ] **Step 3: Implement** (stage rewrites in memory, write all files, commit; on any exception `git checkout -- <paths>` the touched files).
- [ ] **Step 4: Verify pass; full suite.**
- [ ] **Step 5: Commit** — `feat(ui): vocabulary API with atomic rename/merge`.

### Task 6: Ingest API

**Files:**
- Create: `src/quarry/ui/ingest_api.py`
- Modify: `src/quarry/ui/app.py`
- Test: `tests/test_ui_ingest.py`

**Interfaces:**
- Consumes: `ingest.ingest_dir`, `gitops.commit_paths`, `cache.invalidate`.
- Produces: `POST /api/ingest` multipart — files + form fields `asset_class`, `origin`, `license` (optional), `license_id` (optional), `product` (screenshots). Stages uploads in a temp dir, runs `ingest_dir`, commits created files as `ingest: <n> assets from <origin>`, returns `{created: [ids], skipped: [{file, reason}]}`. No commit when nothing created.

- [ ] **Step 1: Write failing tests**: two PNGs → two proposed sidecars + library files + one commit listing exactly those paths, response ids match; **Review Focus 5:** re-uploading identical bytes → `skipped` names the existing id, `created` empty, NO new commit (`git log` count unchanged); screenshot class without product → 422; non-image upload → skipped, not crash.
- [ ] **Step 2: Run, verify fail.**
- [ ] **Step 3: Implement** (temp dir per request, cleaned in `finally`).
- [ ] **Step 4: Verify pass; full suite.**
- [ ] **Step 5: Commit** — `feat(ui): drag-drop ingest endpoint`.

### Task 7: Job runner + reindex + publish endpoints

**Files:**
- Create: `src/quarry/ui/jobs.py`
- Modify: `src/quarry/ui/app.py`
- Test: `tests/test_ui_jobs.py`

**Interfaces:**
- Consumes: `indexer.build_index`, `publish.publish`, `gitops.sync`, `gitops.commit_paths`, embedder selection from app factory.
- Produces: `jobs.JobRunner` — `.start(name: str, fn: Callable[[Log], Any]) -> str | None` (None when busy), `.status(job_id) -> {state: "running"|"done"|"failed", log: list[str], result, error}`; one at a time. `POST /api/reindex` (uses app's embedder mode); `POST /api/publish` — job: sync (conflict → fail with message) → `publish()` → `commit_paths(exports/..., "publish: <version>")` → push; `GET /api/jobs/{id}`. Second start while busy → 409.

- [ ] **Step 1: Write failing tests**: reindex job completes, status transitions running→done, log non-empty, index rebuilt (meta present); concurrent second job → 409; publish job (temp skill dir + two-clone fixture) produces exports commit `publish: <ver>` and pushes it (visible in other clone after its pull); failing job (monkeypatched publish raise) → state failed with error, no exports commit.
- [ ] **Step 2: Run, verify fail.**
- [ ] **Step 3: Implement** (single worker thread; log via thread-safe append).
- [ ] **Step 4: Verify pass; full suite.**
- [ ] **Step 5: Commit** — `feat(ui): job runner with reindex and publish`.

### Task 8: Frontend scaffold + library grid (read-only)

**Files:**
- Create: `ui/` Vite project (package.json, vite.config.ts building to `../src/quarry/ui/static`, tailwind config, `src/main.tsx`, `src/api.ts`, `src/state.ts`, `src/views/Grid.tsx`, `src/components/FacetRail.tsx`, `src/components/OpsBar.tsx` stub)
- Modify: `.gitignore` (`ui/node_modules`), `src/quarry/ui/static/*` (built output, committed)
- Test: `ui/src/state.test.ts` (vitest)

**Interfaces:**
- Consumes: Task 1–3 endpoints (`/api/status`, `/api/assets`, `/api/vocabulary`, `/thumbs/`).
- Produces: `state.ts` pure functions later tasks reuse — `applyFilters(assets, filters, q)`, `facetCounts(assets, axis)`, types `Asset`, `Filters`. Layout per spec Views §1: dark theme, dense virtualized grid (virtualization may be CSS `content-visibility` or a list lib — builder picks), facet rail with counts, search box, status badges (proposed badge, retired dimmed), Library/Review-queue mode toggle (queue wired in Task 9), ops bar showing live `/api/status` (sync/jobs buttons wired in Task 10).

- [ ] **Step 1: Scaffold Vite project; verify `npm run build` emits into `src/quarry/ui/static/` and `quarry ui` serves it.**
- [ ] **Step 2: Write failing vitest tests** for `applyFilters` (multi-axis AND, within-axis OR, q substring) and `facetCounts`.
- [ ] **Step 3: Run, verify fail; implement state.ts; verify pass.**
- [ ] **Step 4: Build Grid/FacetRail/OpsBar against the real API; manual check: `quarry ui` shows the live library styled per the approved spike.**
- [ ] **Step 5: `npm run build`; commit source + built static** — `feat(ui): React grid, facets, search (read-only)`.

### Task 9: Frontend editor drawer + review queue

**Files:**
- Create: `ui/src/views/AssetDetail.tsx`, `ui/src/views/ReviewQueue.tsx`, `ui/src/components/TagChips.tsx`
- Modify: `ui/src/views/Grid.tsx`, `src/quarry/ui/static/*` (rebuild)
- Test: `ui/src/review.test.ts` (vitest: queue reducer)

**Interfaces:**
- Consumes: Task 4 write endpoints, Task 2 similar endpoint, `state.ts` types.
- Produces: detail drawer per spec Views §2 (editable form, vocabulary-constrained chip autocomplete — unknown slug offers "propose to curator" copy, never writes; 422 errors rendered verbatim beside fields); review queue per §3 (arrow keys, C confirm-and-next, Esc exit; position indicator); "more like this" strip.

- [ ] **Step 1: Write failing vitest tests** for the review-queue reducer (next/prev clamping, confirm advances, empty queue exits).
- [ ] **Step 2: Implement reducer; verify pass.**
- [ ] **Step 3: Build components; manual check against live API: edit→save commits, invalid confirm shows validator errors inline, keyboard flow works.**
- [ ] **Step 4: Rebuild static; full backend suite still green; commit** — `feat(ui): asset editor and keyboard review queue`.

### Task 10: Frontend vocabulary panel, ingest dropzone, ops bar actions

**Files:**
- Create: `ui/src/views/VocabPanel.tsx`, `ui/src/components/IngestDrop.tsx`, `ui/src/components/JobLog.tsx`
- Modify: `ui/src/components/OpsBar.tsx`, `src/quarry/ui/static/*` (rebuild)

**Interfaces:**
- Consumes: Tasks 5–7 endpoints.
- Produces: vocabulary panel per spec §4 (counts, rename/merge/add/delete with confirm dialogs, click-slug→filtered grid); drag-drop ingest per §5 (class/source/license form, skip report shown); ops bar per §6 (ahead/behind + Sync, staleness indicators, Re-index, Publish with streaming JobLog polling `/api/jobs/{id}`; conflict message rendered prominently with the resolve-with-agent text).

- [ ] **Step 1: Build the three surfaces against the live API.**
- [ ] **Step 2: Manual end-to-end on the real library:** ingest a test PNG via drag-drop → appears in review queue → confirm → re-index → publish → `quarry validate --check-stale` fresh; sync round-trip against origin.
- [ ] **Step 3: Rebuild static; full suite; commit** — `feat(ui): vocabulary panel, ingest dropzone, ops actions`.

### Task 11: Onboarding docs, Conductor action, CI

**Files:**
- Create: `docs/onboarding.md`
- Modify: `README.md`, `docs/operations.md`, `.conductor/settings.toml` (add `[scripts.run.ui]` with `$CONDUCTOR_PORT`, `available_in = ["local"]`), `.github/workflows/ci.yml`

**Interfaces:**
- Consumes: everything prior (documented).

- [ ] **Step 1: Write `docs/onboarding.md`** — Isabelle's path: repo access → clone (or Conductor workspace) → setup script → `quarry ui` → first review session walkthrough; git-sync mental model (every edit is a commit under your name; Sync button; conflicts go to your agent); where the vocabulary lives.
- [ ] **Step 2: Update README (ui extra, `quarry ui`) and operations.md (workbench is the primary curation surface; CLI remains the fallback).**
- [ ] **Step 3: Conductor action**: `command = ".venv/bin/quarry ui --port $CONDUCTOR_PORT"`, `available_in = ["local"]`, icon "layout-grid"; keep `test` as default.
- [ ] **Step 4: CI**: install `.[dev,ui]`; run full pytest; add a job step `npm ci && npm run build --prefix ui` and fail if the build output differs from the committed `static/` (drift guard for the committed dist).
- [ ] **Step 5: Verify locally (`pytest -q`, both validate commands); commit** — `docs(ui): onboarding, Conductor action, CI dist guard`.
