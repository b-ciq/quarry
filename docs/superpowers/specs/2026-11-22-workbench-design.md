# Quarry Workbench — Curator UI

**Date:** 2026-11-22
**Author:** Brett Christensen with Claude
**Status:** Draft for approval
**Depends on:** phase 1 DAM core (merged; see `2026-11-22-quarry-design.md`)

## Intent

A robust local web UI — the curator's workbench — over the quarry library.
Its job is to let the curators *see* the whole collection at once and refine
it at the speed of clicking: browse, review, retag, confirm, retire, shape
the vocabulary, and publish. It exists because taste can't be developed one
search result at a time; the grid view is how the curator notices what's
missing, what's inconsistent, and whether a vocabulary term means anything.

### Who

Brett (now) and Isabelle (joining within a week), as co-owners. Marketing
is NOT a user of this tool — their surface remains Claude Desktop via MCP
(phase 1.5). A read-only variant for others is a possible future, not this.

### Multi-user model (decided)

No server, no auth, no accounts. Each curator runs the workbench locally
against their own clone; **git is the multi-writer system**:

- Every UI edit writes sidecars through the same validation the CLI uses
  and becomes a git commit under the curator's own git identity — history
  shows who changed what, for free.
- The UI wraps sync: a persistent ahead/behind indicator ("3 commits behind
  origin") and a Sync button (`git pull --rebase` + `git push`). Day-to-day
  curation never needs a terminal.
- Conflicts are rare (different assets = different files). The one hot file
  is `taxonomy/vocabulary.json`, so the UI syncs automatically before any
  vocabulary edit. When a conflict does happen, the UI stops, says so
  plainly, and directs the curator to resolve it with their agent — the
  workbench does not grow a merge tool (anti-goal).

## Goals

- See everything: dense, fast thumbnail grid of the full library with live
  facets (class, product, status, tone, tags, license, source).
- Refine in place: review queue for `proposed` assets; inline editing of
  tags (vocabulary-constrained autocomplete), descriptions, tone,
  screenshot version fields; confirm and retire actions.
- Shape the vocabulary: add/rename/merge/delete slugs with per-term asset
  counts and a "show me every asset carrying this term" view.
- Explore visually: "more like this" from the existing style embeddings.
- Ingest without a terminal: drag-and-drop files onto the UI with
  class/source/license capture, funneling through the existing
  `ingest_dir` pipeline (so Isabelle can add assets day one).
- Operate the pipeline: a Publish button running the existing atomic
  `publish()` with visible log and result; re-index on demand.
- Two-curator co-ownership via git with zero terminal use in the daily loop.

## Non-goals

- Hosting, auth, accounts, or any marketing-facing deployment.
- A git merge/conflict-resolution UI.
- Editing images themselves (crop, color) — files are immutable in v1.
- Mobile layout. Desktop browser only.
- The inspiration corpus (phase 2 of the main roadmap) — though the design
  must not preclude a second corpus appearing later as a separate section.

## Anti-goals

- A second write path. If the UI can produce a sidecar the CLI's
  `validate_sidecar` would reject, the design has failed. All writes go
  through the existing schema/validation code, imported, not reimplemented.
- Silent data changes: every mutation is a commit with a descriptive
  message; nothing edits the working tree without committing.
- A UI that lies about freshness: if the search index or exports are stale
  relative to sidecars, the UI says so (it already can — `check_stale`).

## Constraints

- Stack: FastAPI backend importing quarry modules directly (`search`,
  `scan_library`, `validate_sidecar`, `ingest_dir`, `publish`,
  `check_stale`, vocabulary I/O); Vite + React + Tailwind frontend;
  launched as `quarry ui [--port N]`, binding 127.0.0.1 only. Default port
  fixed (builder picks); the Conductor action uses `$CONDUCTOR_PORT`.
- ~500 assets now, a few thousand eventually; grid must stay instant at
  that scale (virtualized rendering; thumbnails already exist in
  `index/thumbs/`).
- Grid and facets read **live sidecars** (source of truth), not the search
  index — so edits appear instantly without re-indexing. Text/vector search
  and more-like-this use the index, with a visible stale indicator and
  one-click re-index (fake or HF embedder per a config setting).
- Git operations shell out to `git` in the repo; LFS assumed installed
  (setup script handles it).
- Python ≥3.11; node toolchain added as a dev dependency of the repo
  (frontend built to static assets served by FastAPI, so running the UI
  doesn't require node — only developing it does).

## Approaches considered

- **A — FastAPI + React SPA (chosen):** highest UX ceiling (virtualized
  grid, keyboard review flow, live facets), backend reuses tested quarry
  code directly; cost: adds a JS toolchain to a Python repo.
- **B — Server-rendered Python (HTMX/Jinja):** one language, no node, but
  the keyboard-heavy review queue and live faceting fight the architecture;
  permanently a step below "robust."
- **C — Streamlit/Gradio:** fastest to stand up; sluggish image grids and
  rigid layout make it wrong for a daily-driver workbench. Rejected.

## Design

### Views

1. **Library grid** (home): virtualized thumbnail grid; left facet rail
   (class, product, status incl. retired toggle, tone, concepts/style tags,
   license, source origin); top text search (hybrid, via index); click →
   asset detail. Status is visually encoded (proposed = badge, retired =
   dimmed).
2. **Asset detail / editor**: large image, full metadata as an editable
   form — tag fields with vocabulary-constrained autocomplete, description,
   tone (backgrounds only), product_version/captured_at (screenshots),
   usage_restrictions. Actions: Save (validate → write sidecar → commit),
   Confirm (only if validation passes as confirmed), Retire, "More like
   this" strip (style embeddings). Invalid saves show the exact validator
   errors inline.
3. **Review queue**: all `proposed` assets as a worklist; arrow-key
   navigation; same editor embedded; confirm-and-next flow.
4. **Vocabulary panel**: all five axes with per-slug asset counts;
   add slug; rename/merge slug (backend rewrites every affected sidecar +
   vocabulary.json atomically in ONE commit); delete only when count is 0;
   click a slug → grid filtered to it. Syncs from origin before any edit.
5. **Ingest drop zone**: drag files in, pick class (+ product for
   screenshots), source origin, license/license-id; backend runs
   `ingest_dir`; new assets land in the review queue. Dedupe skips are
   reported, not silent.
6. **Operations bar** (persistent): git ahead/behind + Sync button; index
   staleness indicator + Re-index; exports staleness + Publish button with
   live log (runs existing `publish()`); last-publish version stamp.

### API shape (builder refines)

REST under `/api`: `GET /assets` (filter params), `GET /assets/{id}`,
`PATCH /assets/{id}` (metadata edit), `POST /assets/{id}/confirm|retire`,
`GET /assets/{id}/similar`, `GET /search`, `GET/POST/PATCH /vocabulary`,
`POST /ingest` (multipart), `GET /status` (git + staleness),
`POST /sync`, `POST /reindex`, `POST /publish`. Thumbnails and full-res
served as static routes from `index/thumbs/` and `library/`.

### Commit policy (decided)

One commit per logical action: asset save (`curate: retag bg-mesh`),
confirm (`curate: confirm hero-fuzzball-ga`), retire, vocabulary change
(`vocab: merge data-analysis into analytics` — includes all rewritten
sidecars), ingest batch (`ingest: 4 assets from adobe-stock`). The UI
never leaves uncommitted changes behind; on startup it warns if the tree
is dirty and refuses writes until clean (agent/human resolves).

### Builder-check rulings (decided, Claude's calls)

- **Publish flow:** Publish syncs first (`pull --rebase`, clean managed
  paths required), runs `publish()`, auto-commits the changed `exports/`
  files as `publish: <version>`, and pushes. Sync-first makes concurrent
  publishes rare; if one still conflicts, it takes the standard
  stop-and-resolve-with-your-agent path.
- **Dirty-tree scope:** the UI manages only `library/`, `taxonomy/`, and
  `exports/`. Dirtiness checks and commits are scoped to those paths
  (`git add <specific paths>`); unrelated dirt elsewhere in the repo is
  shown as info and never blocks curation.
- **Ingest + LFS:** uploads stage in a temp dir, run through `ingest_dir`,
  and commit whatever succeeded (skips reported). The LFS push happens at
  Sync, not inside the upload request. No artificial size limit.
- **Embedder mode:** `quarry ui --fake-embedder` mirrors the CLI
  convention; the ops bar shows the index's recorded embedder mode, and a
  mode mismatch surfaces the existing actionable error with a
  "re-index as <mode>" button. No new config layer.
- **Grid data:** in-memory sidecar cache invalidated by the UI's own writes
  and by mtime check; external changes (agent edits, git pull) appear after
  Sync or refresh — acceptable.
- **Confirm:** purely a status change gated by the existing
  `validate_sidecar` confirmed-state rules; the UI surfaces its errors
  verbatim. Those rules are final for v1.
- **Vocabulary rename/merge:** per-axis only (axes are separate
  namespaces; the same slug may exist on two axes). Merge dedupes the tag
  on assets that carry both. Retired and proposed assets are rewritten too
  — every sidecar stays valid.
- **Background jobs:** one minimal job abstraction shared by Re-index and
  Publish — start endpoint + polled status/log endpoint. Search stays
  available during a rebuild (the index swap is already atomic; the old
  index serves until the swap).

### Index freshness (decided)

Sidecar edits do NOT auto-reindex (embeddings unchanged by metadata edits
anyway — FTS text is what staleness affects). The ops bar shows staleness;
re-index is one click and runs in the background. Ingest prompts to
re-index since new images need embeddings.

## Rollout

1. Workbench v1 (this doc) on Brett's machine.
2. Isabelle onboarding: repo access, setup script, `quarry ui`, a short
   onboarding page in docs/ written as part of the build; pairing session.
3. Later candidates (explicitly out of v1): read-only shared deployment,
   inspiration-corpus section, bulk operations, saved views.

## Left to the builder

- Exact API schemas, frontend component structure, state management.
- Default port; dev-server vs built-assets workflow details.
- Thumbnail generation for assets ingested but not yet indexed (grid needs
  something to show — on-demand thumb or placeholder; builder picks).
- Git shell-out details and ahead/behind polling cadence.
- Visual design (Quantic-aware styling is welcome but not a requirement
  for v1; function first).
