# quarry

CIQ's agent-first brand asset library: a git repo of images plus JSON sidecars, with hybrid (text + vector) search.
Agents find, curate and serve assets through a CLI and a local MCP server.
It also exports a manifest the Quantic deck builder consumes.

## Install

```
python -m venv .venv && . .venv/bin/activate
pip install -e ".[dev]"     # tests; add .[mcp] for the server, .[ml] for real embeddings
```

Library images use git LFS (`git lfs install`).

## CLI

- `quarry validate [--repo] [--check-stale]`
- `quarry seed-deck-builder [--skill-dir]`
- `quarry ingest DIR --class CLS --source ORIGIN [--license LIC] [--license-id ID] [--product P]`
- `quarry index [--fake-embedder]`
- `quarry search QUERY [--class] [--product] [--tone] [--all-statuses] [--limit] [--fake-embedder]`
- `quarry export [--out]`
- `quarry publish [--skill-dir] [--fake-embedder]`

MCP server: `server/quarry_mcp.py` (env `QUARRY_REPO`, `QUARRY_FAKE_EMBEDDER`).

## Generated directories

- `index/` is rebuildable and never committed.
- `exports/` is committed and kept fresh via `quarry publish`. CI fails when it is stale.

## Docs

- Spec: `docs/superpowers/specs/2026-11-22-quarry-design.md`
- Plan: `docs/superpowers/plans/2026-11-22-quarry-phase1-dam-core.md`
- Operations: `docs/operations.md`
- Curation skill: `skills/tag-assets/SKILL.md`
