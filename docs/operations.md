# Quarry operations

Single source of truth for running the library. Spec: `docs/superpowers/specs/2026-11-22-quarry-design.md`.

## One-time setup

1. `pip install -e ".[dev]"` (add `.[mcp]` for the MCP server only).
2. Verify real embedders. HFEmbedder has never run against real checkpoints. Before the first real (non-fake) index build: `pip install -e ".[ml]"` then `pytest -m slow`. Do not build a real index until it passes.
3. Seed the deck-builder vocabulary if starting fresh: `quarry seed-deck-builder [--skill-dir DIR]`.

## When to publish

After every curation session (and after any ingest or retire). `quarry publish [--skill-dir DIR] [--fake-embedder]` validates, rebuilds `index/`, regenerates `exports/` and the staleness stamp, and updates the deck-builder. CI fails if `exports/` is stale, so commit the result.

## Collecting assets (all sources use one ingest funnel)

`quarry ingest DIR --class CLS --source ORIGIN [--license LIC] [--license-id ID] [--product P]`

Ingest creates `status=proposed` sidecars. Then curate with the `tag-assets` skill.

- Figma: export the designated frames (UI or API) to a drop directory. `--source figma` (or `designer`), `--class` per frame set.
- Adobe Stock: download from license history into a drop directory. Pass `--source adobe-stock --license-id <stock asset id>`.
- Midjourney: use the archive export. `--source midjourney`. Record prompt, model and seed in the sidecar's `generation` block; this is required before a midjourney asset can be confirmed.
- Screenshots: add `--product <slug>`; they nest under `screenshots/<product>/`. Set `product_version` and `captured_at` during curation.

## Per-release screenshot checklist

1. `quarry search --class screenshot --product <product> --all-statuses --limit 100 -v`
2. For each result, compare `product_version` with the new release.
3. Re-capture and ingest the new shot, or retire the old one.
4. `quarry validate`, then `quarry publish`.

## Retiring assets

Set `"status": "retired"` in the sidecar. Never delete files. Then publish.

## Index and exports

- `index/` is rebuildable and never committed (`quarry index`).
- `exports/` is committed; refresh with `quarry export` or, normally, `quarry publish`.
- Check drift locally: `quarry validate --check-stale` (exit 1 if stale or missing).

## MCP server

`pip install -e ".[mcp]"`, then run `server/quarry_mcp.py` with env `QUARRY_REPO=<repo path>`. Set `QUARRY_FAKE_EMBEDDER=1` only if the index was built with `--fake-embedder`.

## Deck-builder patch

The `spot` kind patch lives in `~/.claude/skills/quantic-deck-builder/src/image_library.py` (backup `.bak` beside it). If the deck-builder gets a canonical repo, upstream this patch there.

## Risks and open items

- Single curator: ingest and curation freeze if Brett is unavailable. Trigger: train a second operator before phase 1.5 exit.
- Hosted-server auth: the conversation with CIQ IT (who may connect; SSO vs shared key) starts now, during phase 1, so it does not stall phase 1.5.
