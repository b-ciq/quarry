# quarry

CIQ's agent-first brand asset library: a git repo of images plus JSON sidecars, with hybrid (text + vector) search.
Agents find, curate and serve assets through a CLI and a local MCP server.
It also exports a manifest the Quantic deck builder consumes.

## Install

```
python -m venv .venv && . .venv/bin/activate
pip install -e ".[dev,ui]"  # tests + workbench; add .[mcp] for the server, .[inspiration] for Instagram video capture, .[ml] for real embeddings, .[rate] for the Claude rating bot (dev already includes it)
```

Library images use git LFS (`git lfs install`).

## CLI

- `quarry validate [--repo] [--check-stale]`
- `quarry seed-deck-builder [--skill-dir]`
- `quarry ingest DIR --class CLS --source ORIGIN [--license LIC] [--license-id ID] [--product P] [--anti-example]`
- `quarry import-instagram EXPORT [--inspiration-dir]` (Instagram saves → the external inspiration root, metadata only)
- `quarry import-captures [--inspiration-dir] [--downloads]` (file Quarry button captures into the inspiration root)
- `quarry import-pinterest FOLDER --board URL [--inspiration-dir]` (one-time: file a folder of pinterest-dl output into the inspiration root)
- `quarry index [--fake-embedder]`
- `quarry search QUERY [--class] [--product] [--tone] [--all-statuses] [--anti] [--limit] [--fake-embedder]`
- `quarry check-image PATH [--limit] [--fake-embedder]`
- `quarry export [--out]`
- `quarry publish [--skill-dir] [--fake-embedder]`
- `quarry ui [--repo] [--port] [--fake-embedder]`

## Workbench

`quarry ui` serves the local curation workbench (127.0.0.1 only; default port 8787): three tabs (Library, Inspiration, Vocabulary). Library and Inspiration each have an Inbox (new images; a Claude bot describes, tags and proposes keep/reject for Library images; you approve with A or reject with X) and an Approved gallery, both with facet filters. Set `ANTHROPIC_API_KEY` for the bot; dev-only `QUARRY_FAKE_RATER=1` tries the UI without a key; rubric in `taxonomy/rating-guide.md`. Also: asset editor, vocabulary editor, + Add images, and a one-line publishing status with one button (Publish: pull teammates' changes, rebuild search and exports, push). Needs the `ui` extra. Backend: `src/quarry/ui/` (FastAPI). Frontend source: `ui/` (Vite + React + Quantic); the build is committed in `src/quarry/ui/static/`, so running the UI needs no Node. After changing `ui/`, run `npm ci --prefix ui && npm run build --prefix ui` and commit `src/quarry/ui/static/` (CI fails on drift). Tests: `npm test --prefix ui`. Onboarding: `docs/onboarding.md`.

## Anti-examples

An asset with `"anti_example": true` shows a style to avoid. Confirmed anti-examples need `avoid_reason` (no license required). They are never servable: excluded from search, `get_asset`, `more_like` and the deck export. They are reachable only via `quarry search --anti`, `quarry check-image`, and the MCP tools `search_anti_examples`, `get_anti_example`, `check_against_anti_examples`.

MCP server: `server/quarry_mcp.py` (env `QUARRY_REPO`, `QUARRY_FAKE_EMBEDDER`).

## Generated directories

- `index/` is rebuildable and never committed.
- `exports/` is committed and kept fresh via `quarry publish`. CI fails when it is stale.

## Docs

- Spec: `docs/superpowers/specs/2026-11-22-quarry-design.md`
- Plan: `docs/superpowers/plans/2026-11-22-quarry-phase1-dam-core.md`
- Onboarding (curators): `docs/onboarding.md`
- Operations: `docs/operations.md`
- Curation skill: `skills/tag-assets/SKILL.md`
