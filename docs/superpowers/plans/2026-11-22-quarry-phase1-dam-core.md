# Quarry Phase 1 (DAM Core) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A validated, indexed, searchable library of CIQ production imagery with ingest, a local MCP server, and an atomic publish pipeline that exports a valid quantic-deck-builder manifest.

**Architecture:** Files + JSON sidecars in git as the system of record; a rebuildable SQLite index (FTS5 + sqlite-vec with SigLIP/DINO embeddings) for hybrid search; one shared `is_servable` filter at every consumer exit; `quarry publish` keeps sidecars → index → exports → deck-builder bundle consistent atomically.

**Tech Stack:** Python ≥3.11 (src layout, argparse CLI), Pillow, numpy, transformers+torch (lazy-loaded), sqlite-vec, FTS5, `mcp` (FastMCP), pytest.

**Spec:** `docs/superpowers/specs/2026-11-22-quarry-design.md`

## Global Constraints

- Package name `quarry`, src layout (`src/quarry/`), CLI entry point `quarry` via argparse; Python ≥3.11.
- Enums, verbatim from spec: `CLASSES = {"hero", "spot-illustration", "background", "screenshot", "diagram", "lifestyle"}`; `STATUSES = {"proposed", "confirmed", "retired"}`; `TONES = {"dark", "light"}`.
- Servable ≡ `status == "confirmed" and not sidecar.get("usage_restrictions")`. Every consumer-facing exit (search defaults, export, MCP tools) filters through the one shared `is_servable()` — never a reimplementation.
- Deck-builder export entries carry exactly these keys in this order: `["id", "file", "status", "kind", "subkind", "role", "products", "categories", "verticals", "tone", "aspect", "concepts", "description"]`.
- Class→deck-builder mapping (spec table): background→(background, None, background, tone required dark|light); hero→(hero, conceptual, foreground); screenshot→(hero, screenshot, foreground); diagram→(hero, diagram, foreground); lifestyle→(lifestyle, None, foreground); spot-illustration→(spot, None, foreground). Tone stripped for all non-background classes.
- `index/` is gitignored and fully rebuildable. `exports/` is committed and holds `manifest.json`, `STAMP.json`, no image binaries (images copy library→bundle at publish time).
- Library binaries tracked via git LFS (`library/**` image extensions).
- Default embedding checkpoints: SigLIP `google/siglip2-base-patch16-256` (retrieval), DINO `facebook/dinov2-base` (style similarity); both behind an `Embedder` protocol. Unit tests use a deterministic `FakeEmbedder` — no network/model downloads in tests.
- Deck-builder skill dir: env `QUARRY_DECK_SKILL_DIR`, default `~/.claude/skills/quantic-deck-builder`.
- Sidecar is `<image>.json` next to `<image>.<ext>`; ids kebab-case, filename `<id><ext>`.

## Review Focus

Failure modes the spec implies; each line's test is added to the owning task:

1. A confirmed asset with `usage_restrictions` must never appear in default search, export, or MCP results (compliance leak) — Tasks 6, 7, 9.
2. A `retired` asset must vanish from every serving path while its file + sidecar stay in git (history, not deletion) — Tasks 6, 7.
3. A `proposed` asset must be invisible to export and default search (curation gate) — Tasks 6, 7.
4. The generated export must pass the real deck-builder `validate_manifest` — including a `spot` entry and a flattened `screenshots/<product>/` filename (the validator's orphan check iterates flat) — Task 7.
5. Re-ingesting a file whose sha256 already exists in the library must be skipped with a warning, not duplicated — Task 3.

---

### Task 1: Scaffold, vocabulary, sidecar schema + `quarry validate`

**Files:**
- Create: `pyproject.toml`, `.gitignore`, `.gitattributes`, `src/quarry/__init__.py`, `src/quarry/schema.py`, `src/quarry/vocabulary.py`, `src/quarry/cli.py`, `taxonomy/vocabulary.json`, `library/.gitkeep`
- Test: `tests/test_schema.py`, `tests/conftest.py`

**Interfaces:**
- Produces: `schema.CLASSES/STATUSES/TONES` (Global Constraints values); `schema.validate_sidecar(entry: dict, vocab: dict) -> list[str]` (empty = valid); `schema.is_servable(entry: dict) -> bool`; `vocabulary.load_vocabulary(repo_root: Path) -> dict` (keys: products, categories, verticals, concepts, style — lists of kebab slugs); `cli.main(argv) -> int` with subcommand `validate [--repo ROOT]` exiting 1 on any error; `tests/conftest.py` fixture `repo(tmp_path)` building a minimal repo tree (taxonomy + library dirs + helper `add_asset(cls, id, **sidecar_overrides)` that writes a 1px PNG + sidecar).

- [ ] **Step 1: Write failing tests** in `tests/test_schema.py`:

```python
def test_valid_confirmed_background_passes(repo): ...   # tone=dark, license set → []
def test_confirmed_background_without_tone_fails(repo): ...   # "tone" in errors
def test_tone_on_non_background_fails(repo): ...
def test_confirmed_requires_license_and_description(repo): ...
def test_unknown_vocab_slug_fails(repo): ...   # products=["nope"]
def test_screenshot_confirmed_requires_product_version_and_captured_at(repo): ...
def test_proposed_skips_content_rules_but_not_structure(repo): ...  # bad class still fails
def test_is_servable(): ...
    # confirmed+no restrictions → True; proposed → False; retired → False;
    # confirmed+usage_restrictions=["internal-only"] → False
def test_cli_validate_exits_nonzero_on_invalid_sidecar(repo, capsys): ...
```

- [ ] **Step 2: Run tests, verify they fail** — `pytest tests/test_schema.py -v`, expect import errors / failures.
- [ ] **Step 3: Implement.** Sidecar required keys: `id, file, status, class, products, categories, verticals, concepts, style, aspect, license, source, usage_restrictions, description`; optional: `tone, license_expiry, product_version, captured_at, generation`. Content rules (confirmed only, mirroring the deck builder's proposed-vs-confirmed split): license + non-empty description required; tone required iff class=background, forbidden otherwise; product_version+captured_at required for screenshots; every tag slug ∈ vocabulary axis; `source` must contain `origin` and `ingested_at`; generation (prompt/model/seed) required when `source.origin == "midjourney"`. `validate` subcommand walks `library/`, validates every sidecar, reports orphan images (no sidecar) and orphan sidecars (no image).
- [ ] **Step 4: Seed `taxonomy/vocabulary.json`** with exact values — products: `rocky, rlc-pro, rlc-pro-ai, rlc-pro-hardened, rlc-plus, fuzzball, warewulf-pro, apptainer, ascender-pro`; categories: `enterprise-linux, hpc, containers, automation`; verticals: `government, life-sciences, financial-services, manufacturing, higher-education`; concepts: `research, data-analysis, science, compute, people, infrastructure, security`; style: `[]`.
- [ ] **Step 5: `.gitignore`** (`index/`, `__pycache__`, `.venv`, `*.egg-info`) **and `.gitattributes`** (`library/**/*.png`, `*.jpg`, `*.jpeg`, `*.webp` → `filter=lfs diff=lfs merge=lfs -text`); run `git lfs install` (if missing: `brew install git-lfs` first).
- [ ] **Step 6: Run tests, verify pass** — `pytest tests/test_schema.py -v`.
- [ ] **Step 7: Commit** — `feat: quarry scaffold, sidecar schema, vocabulary, validate CLI`.

### Task 2: Seed library from the deck-builder bundle

**Files:**
- Create: `src/quarry/seed.py`
- Modify: `src/quarry/cli.py` (add `seed-deck-builder [--skill-dir PATH]`)
- Test: `tests/test_seed.py` (fixture: a fake skill dir with a 2-entry manifest + bg pngs)

**Interfaces:**
- Consumes: `schema.validate_sidecar`, `vocabulary.load_vocabulary`.
- Produces: `seed.seed_from_deck_builder(repo_root: Path, skill_dir: Path) -> list[Path]` (created sidecar paths).

- [ ] **Step 1: Write failing tests**: manifest images land in `library/lifestyle/<id>.png` with sidecars `status=confirmed, license="ciq-original"`, reverse-mapped class (kind lifestyle→lifestyle, hero/screenshot→screenshot, etc.), concepts/products/verticals carried over, and every produced sidecar passes `validate_sidecar`; files in `brand/assets/backgrounds/bg-*.png` land as `class=background, status=proposed` (tone unknown → curator confirms); running twice is idempotent (skips existing ids).
- [ ] **Step 2: Run, verify fail.**
- [ ] **Step 3: Implement** reverse mapping + copy. The deck builder's cover pool (`cover-pool.json`) stays owned by the deck builder in phase 1 — only image files are imported.
- [ ] **Step 4: Run tests, verify pass.**
- [ ] **Step 5: Run for real**: `quarry seed-deck-builder && quarry validate` — expect 2 confirmed lifestyle + 8 proposed backgrounds, validate exit 0. Commit library files via LFS — `feat: seed library from deck-builder bundle`.

### Task 3: Ingest pipeline

**Files:**
- Create: `src/quarry/ingest.py`
- Modify: `src/quarry/cli.py` (add `ingest DIR --class CLS --source ORIGIN [--license LIC] [--license-id ID]`)
- Test: `tests/test_ingest.py`

**Interfaces:**
- Consumes: `schema.validate_sidecar`.
- Produces: `ingest.ingest_dir(src_dir: Path, repo_root: Path, cls: str, origin: str, license: str | None = None) -> IngestResult` (dataclass: `created: list[Path]`, `skipped: list[tuple[Path, str]]`); `ingest.sha256_file(p: Path) -> str`.

- [ ] **Step 1: Write failing tests**: a PNG in a drop dir becomes `library/<classdir>/<slug>.png` + sidecar `status=proposed` with sha256 in `source`, aspect `"W:H"` computed via Pillow, `ingested_at` ISO date, empty tag arrays; class dir mapping `{hero: heroes, spot-illustration: spots, background: backgrounds, screenshot: screenshots, diagram: diagrams, lifestyle: lifestyle}`; **Review Focus 5:** re-ingesting identical bytes under a new name → `skipped` with reason containing the existing id, no new files; id collision on different content gets `-2` suffix; adobe-stock origin records `license: "adobe-stock:<id>"`; non-image files ignored.
- [ ] **Step 2: Run, verify fail.**
- [ ] **Step 3: Implement.** Dedupe by scanning existing sidecars' `source.sha256`. Screenshots may take `--product` to nest `screenshots/<product>/`.
- [ ] **Step 4: Run tests, verify pass.**
- [ ] **Step 5: Commit** — `feat: ingest pipeline with content-hash dedupe`.

### Task 4: Embedder protocol + HF implementation

**Files:**
- Create: `src/quarry/embeddings.py`
- Test: `tests/test_embeddings.py` (FakeEmbedder only; HF class gets a `@pytest.mark.slow` smoke test, skipped by default)

**Interfaces:**
- Produces: `embeddings.Embedder` protocol — `embed_text(s: str) -> np.ndarray`, `embed_image_retrieval(p: Path) -> np.ndarray` (SigLIP space, shared with text), `embed_image_style(p: Path) -> np.ndarray` (DINO space); all float32, L2-normalized; `.dims -> tuple[int, int]` (retrieval_dim, style_dim). `FakeEmbedder(dim=16)` — deterministic from sha256 of input. `HFEmbedder(retrieval_model=DEFAULT_SIGLIP, style_model=DEFAULT_DINO)` — lazy model load on first call.

- [ ] **Step 1: Write failing tests**: FakeEmbedder determinism (same input → same vector; different → different), normalization (‖v‖≈1), text and image of same content differ, dims respected.
- [ ] **Step 2: Run, verify fail.**
- [ ] **Step 3: Implement** FakeEmbedder + HFEmbedder (transformers AutoModel/AutoProcessor; constants `DEFAULT_SIGLIP = "google/siglip2-base-patch16-256"`, `DEFAULT_DINO = "facebook/dinov2-base"`). Torch/transformers imported inside HFEmbedder methods so FakeEmbedder users never pay the import.
- [ ] **Step 4: Run tests, verify pass.**
- [ ] **Step 5: Commit** — `feat: embedder protocol with SigLIP/DINO implementation`.

### Task 5: Indexer (FTS5 + vectors + thumbnails)

**Files:**
- Create: `src/quarry/indexer.py`, `src/quarry/library.py`
- Modify: `src/quarry/cli.py` (add `index [--fake-embedder]`)
- Test: `tests/test_indexer.py`

**Interfaces:**
- Consumes: `schema`, `embeddings.Embedder`.
- Produces: `library.scan_library(repo_root: Path) -> list[Asset]` (dataclass: `id, path: Path, sidecar: dict`); `indexer.build_index(repo_root: Path, embedder: Embedder, db_path: Path | None = None) -> IndexStats` (counts indexed/thumbnailed) — db default `index/library.db`, thumbnails `index/thumbs/<id>.webp` max side 256. DB tables: `assets(id PRIMARY KEY, json)`, `assets_fts` (FTS5 over id, description, tags — tags = space-joined products+categories+verticals+concepts+style), vec0 tables `vec_retrieval(id TEXT, v float[dim])`, `vec_style(...)`. **All statuses are indexed** (curator search needs proposed/retired); serving-time filtering is the search layer's job.

- [ ] **Step 1: Write failing tests** (FakeEmbedder, `repo` fixture): build creates db + thumbs; FTS row count == asset count; vec tables populated with embedder dims; rebuild from scratch is deterministic (drop db, rebuild, same counts); invalid sidecar aborts the build with its validate errors (index never built from an invalid library).
- [ ] **Step 2: Run, verify fail.**
- [ ] **Step 3: Implement** (sqlite-vec via `sqlite_vec.load(conn)`; build into a temp file then atomic rename over `library.db`).
- [ ] **Step 4: Run tests, verify pass.**
- [ ] **Step 5: Commit** — `feat: SQLite index with FTS5, vectors, thumbnails`.

### Task 6: Hybrid search

**Files:**
- Create: `src/quarry/search.py`
- Modify: `src/quarry/cli.py` (add `search QUERY [--class] [--product] [--tone] [--all-statuses] [--limit N]`)
- Test: `tests/test_search.py`

**Interfaces:**
- Consumes: index schema from Task 5, `embeddings.Embedder`, `schema.is_servable`.
- Produces: `search.search(repo_root: Path, embedder: Embedder, query: str | None, *, cls=None, product=None, tone=None, servable_only=True, limit=10) -> list[Hit]` (dataclass: `id, score, sidecar, thumb_path`); `search.more_like(repo_root, asset_id, *, space="style", servable_only=True, limit=10) -> list[Hit]`.

- [ ] **Step 1: Write failing tests** (FakeEmbedder): FTS exact-term hit — asset described "Fuzzball GA announcement hero" found by `query="fuzzball GA"` ranked first (RRF of BM25 + cosine); structured filters compose (cls+product narrows); **Review Focus 1:** confirmed asset with `usage_restrictions` absent from default results, present with `servable_only=False`; **Review Focus 2:** retired asset absent from default results; **Review Focus 3:** proposed asset absent from default results; `more_like` returns the nearest style-space neighbor and never the query asset itself.
- [ ] **Step 2: Run, verify fail.**
- [ ] **Step 3: Implement.** Merge = reciprocal rank fusion, `score = Σ 1/(60 + rank)` over the BM25 list and the retrieval-vector list; filters applied as SQL on the assets table; servability filtered through `schema.is_servable` on each candidate (one shared function — Global Constraints).
- [ ] **Step 4: Run tests, verify pass.**
- [ ] **Step 5: End-to-end sanity on the real library**: `quarry index --fake-embedder && quarry search "scientist" -v` finds the seeded lifestyle asset. (Real-embedder run is manual, not CI.)
- [ ] **Step 6: Commit** — `feat: hybrid RRF search with servability filtering`.

### Task 7: Deck-builder export + `spot` kind extension

**Files:**
- Create: `src/quarry/export_deck.py`
- Modify: `src/quarry/cli.py` (add `export [--out exports/]`); `~/.claude/skills/quantic-deck-builder/src/image_library.py` (one line: add `"spot"` to `KINDS`)
- Test: `tests/test_export_deck.py`

**Interfaces:**
- Consumes: `library.scan_library`, `schema.is_servable`, `vocabulary.load_vocabulary`.
- Produces: `export_deck.CLASS_TO_KIND: dict[str, tuple[kind, subkind, role]]` (Global Constraints mapping); `export_deck.build_manifest(repo_root: Path) -> dict` (the manifest object); `export_deck.image_copy_plan(repo_root: Path) -> list[tuple[src: Path, bundle_name: str]]` (bundle_name = flattened `<id><ext>`); `export_deck.write_export(repo_root: Path, out_dir: Path) -> Path` (writes `manifest.json` only — no binaries in exports/).

- [ ] **Step 1: Write failing tests**: mapping of each class produces exactly the ENTRY_KEYS keys in order; tone present only on backgrounds; vocab block contains only products/categories/verticals; **Review Focus 1/2/3:** restricted, retired, and proposed assets excluded from the manifest; screenshot at `library/screenshots/fuzzball/x.png` flattens to a root-level unique filename in the copy plan; **Review Focus 4 (integration):** load the real validator via `importlib` from `QUARRY_DECK_SKILL_DIR`, materialize the copy plan into a temp dir beside the generated manifest, assert `validate_manifest(manifest, images_dir=tmp) == []` for a fixture library containing one asset of every class including spot.
- [ ] **Step 2: Run, verify fail** (the integration test fails twice: no exporter, then deck-builder rejects `spot`).
- [ ] **Step 3: Patch the installed deck builder**: add `"spot"` to `KINDS` in `image_library.py:15`. Note in the commit message that this must be upstreamed to the deck-builder's canonical repo if one exists.
- [ ] **Step 4: Implement the exporter.**
- [ ] **Step 5: Run tests, verify pass** — including the integration test against the real, patched validator.
- [ ] **Step 6: Commit** — `feat: deck-builder manifest export with class mapping (adds spot kind upstream)`.

### Task 8: `quarry publish` + staleness check

**Files:**
- Create: `src/quarry/publish.py`
- Modify: `src/quarry/cli.py` (add `publish [--skill-dir PATH] [--fake-embedder]`, `validate --check-stale`)
- Test: `tests/test_publish.py`

**Interfaces:**
- Consumes: everything prior.
- Produces: `publish.sidecar_digest(repo_root: Path) -> str` (sha256 over sorted sidecar paths+contents); `publish.publish(repo_root: Path, embedder: Embedder, skill_dir: Path | None) -> PublishResult` (dataclass: version, counts); `publish.check_stale(repo_root: Path) -> bool` (True when `exports/STAMP.json` digest ≠ current digest).

- [ ] **Step 1: Write failing tests**: publish runs validate→index→export→bundle in order and writes `exports/STAMP.json` (`{"version": <digest[:12]>, "digest": ..., "published_at": ...}`); a validation error aborts before index/export/bundle are touched (all-or-nothing: stage into temp dirs, swap on success); bundle step replaces the skill dir's `brand/assets/images/` contents (manifest + flattened images) and nothing else; a restricted fixture never lands in the bundle (**Review Focus 1**, exit #3); `check_stale` flips true after a sidecar edit and false after publish.
- [ ] **Step 2: Run, verify fail.**
- [ ] **Step 3: Implement.**
- [ ] **Step 4: Run tests, verify pass.**
- [ ] **Step 5: Real run**: `quarry publish --fake-embedder` against the installed skill, then run the deck builder's own validator on its live bundle, then build one real test deck with the quantic-deck-builder skill that places a quarry-published image (the spec's phase-1 success criterion: "renders in a real deck"). Commit (including `exports/`) — `feat: atomic publish pipeline with staleness stamp`.

### Task 9: Local MCP server

**Files:**
- Create: `server/quarry_mcp.py`
- Test: `tests/test_mcp_server.py` (call the tool functions directly against the `repo` fixture with FakeEmbedder)

**Interfaces:**
- Consumes: `search.search`, `search.more_like`, `library.scan_library`, `vocabulary.load_vocabulary`, `schema.is_servable`.
- Produces: FastMCP server `quarry` (stdio) with env `QUARRY_REPO` (repo root), `QUARRY_FAKE_EMBEDDER=1` for tests; tools:
  - `search_assets(query: str, asset_class: str | None = None, product: str | None = None, tone: str | None = None, limit: int = 8) -> str` — JSON list of {id, class, description, tags, aspect, score}.
  - `get_asset(asset_id: str) -> list` — thumbnail as MCP Image (≤256px, the context-bloat guard) + JSON metadata including `"full_res_path"` (absolute) as the fetchable full-res reference.
  - `more_like(asset_id: str, limit: int = 8) -> str`.
  - `list_vocabulary() -> str` — the taxonomy axes (served visual-vocabulary edition arrives in phase 3).

- [ ] **Step 1: Write failing tests**: search_assets returns only servable assets (**Review Focus 1**, exit #2 — restricted/proposed/retired fixtures invisible); get_asset on a non-servable id returns an error string, on a servable id returns thumbnail + metadata with an existing absolute path; list_vocabulary includes all five axes.
- [ ] **Step 2: Run, verify fail.**
- [ ] **Step 3: Implement** (tools are thin wrappers; no search/filter logic lives in the server).
- [ ] **Step 4: Run tests, verify pass.**
- [ ] **Step 5: Manual smoke**: register in Claude Code (`claude mcp add quarry -- python server/quarry_mcp.py` with env) and run one real search. Commit — `feat: local MCP server (search_assets, get_asset, more_like, list_vocabulary)`.

### Task 10: Curation skill, operations doc, CI

**Files:**
- Create: `skills/tag-assets/SKILL.md`, `docs/operations.md`, `README.md`, `.github/workflows/ci.yml`

**Interfaces:**
- Consumes: the CLI surface from all prior tasks (documented, not imported).

- [ ] **Step 1: Write `skills/tag-assets/SKILL.md`** — a Claude Code skill: find `status=proposed` sidecars; for each, Read the image, propose `description` + tags **only from `taxonomy/vocabulary.json` slugs** (propose new slugs to the curator separately, never invent them inline); screenshots additionally need `product_version` + `captured_at`; backgrounds need `tone`; set `status=confirmed` only on explicit curator approval; end every session with `quarry validate` then `quarry publish`.
- [ ] **Step 2: Write `docs/operations.md`** — when to publish (after every curation session); per-source collection steps feeding the one ingest funnel (Figma: export designated frames via UI/API to a drop dir; Adobe Stock: download from license history, pass `--license-id`; Midjourney: archive export, record prompt/model/seed in the sidecar's `generation` block); the per-release screenshot checklist from the spec (query screenshots by product; re-capture or retire); how to retire (set `status=retired`, never delete); single-curator risk + the phase-1.5 second-operator trigger; a reminder that the hosted-auth conversation with CIQ IT starts now (spec: during phase 1).
- [ ] **Step 3: Write `README.md`** — what quarry is (3 lines), install, the CLI verbs, pointer to spec/plan/operations.
- [ ] **Step 4: Write CI** (`.github/workflows/ci.yml`): `pip install -e .[dev]`; `pytest` (slow markers excluded); `quarry validate`; `quarry validate --check-stale` (fails the build when exports/ is stale relative to sidecars — the drift guard).
- [ ] **Step 5: Verify locally**: `pytest -q` green, both validate commands exit 0.
- [ ] **Step 6: Commit** — `docs: curation skill, operations guide, CI drift guard`.
