# Quarry operations

Single source of truth for running the library. Spec: `docs/superpowers/specs/2026-11-22-quarry-design.md`.

## One-time setup

The workbench (`quarry ui`) is the primary curation surface; see `docs/onboarding.md`. The CLI below remains the fallback and the path for automation.

1. `pip install -e ".[dev,ui]"` (`.[ui]` alone is enough to run the workbench; add `.[mcp]` for the MCP server only).
2. Verify real embedders. HFEmbedder has never run against real checkpoints. Before the first real (non-fake) index build: `pip install -e ".[ml]"` then `pytest -m slow`. Do not build a real index until it passes.
3. Seed the deck-builder vocabulary if starting fresh: `quarry seed-deck-builder [--skill-dir DIR]`.

## When to publish

After every curation session (and after any ingest or retire). `quarry publish [--skill-dir DIR] [--fake-embedder]` validates, rebuilds `index/`, regenerates `exports/` and the staleness stamp, and updates the deck-builder. CI fails if `exports/` is stale, so commit the result.

## Collecting assets (all sources use one ingest funnel)

`quarry ingest DIR --class CLS --source ORIGIN [--license LIC] [--license-id ID] [--product P]`

Ingest creates `status=proposed` sidecars. Then curate in the workbench review queue (or with the `tag-assets` skill). The workbench Ingest tab wraps the same funnel.

- Figma: export the designated frames (UI or API) to a drop directory. `--source figma` (or `designer`), `--class` per frame set.
- Adobe Stock: download from license history into a drop directory. Pass `--source adobe-stock --license-id <stock asset id>`.
- Midjourney: use the archive export. `--source midjourney`. Record prompt, model and seed in the sidecar's `generation` block; this is required before a midjourney asset can be confirmed.
- Screenshots: add `--product <slug>`; they nest under `screenshots/<product>/`. Set `product_version` and `captured_at` during curation.

## Instagram saves (inspiration, reference only)

`quarry import-instagram EXPORT.zip`

1. In Instagram, open Accounts Center → Download your information. Choose only Saved, date range All time, format JSON.
2. Run the command on the zip (or the unzipped folder). The files go to `<root>/instagram/<id>/save.json`, where the root is set by `QUARRY_INSPIRATION_DIR` or `inspiration_dir` in `~/.config/quarry/config.toml` (or pass `--inspiration-dir`). Each save becomes one record, holding the link, owner, caption, hashtags, collections and save time.
3. Re-run it on every new export. It skips saves it already has and only adds new ones, plus newly listed collections. It never overwrites curator fields (`status`, `saved_because`, `style`, `concepts`, `description`).

The export has no images of other people's posts, so records start with a pending `capture` block. Nothing that serves assets reads the inspiration folder, and it lives outside the repo so images stay off the shared remote. No bot logs in to Instagram: collection is a manual export, which keeps the account clear of Instagram's automation rules.

## Per-release screenshot checklist

1. `quarry search --class screenshot --product <product> --all-statuses --limit 100 -v`
2. For each result, compare `product_version` with the new release.
3. Re-capture and ingest the new shot, or retire the old one.
4. `quarry validate`, then `quarry publish`.

## Retiring assets

Set `"status": "retired"` in the sidecar. Never delete files. Then publish.

## Workbench notes

- Vocabulary rename/merge rewrites all carrier sidecars and `taxonomy/vocabulary.json` in one commit. It is blocked with HTTP 422 if any carrier sidecar is already invalid (or would become invalid); fix that asset first, then retry. Delete is refused with 409 while any asset uses the slug.
- Edits are local commits; the Sync button pulls (rebase) and pushes. On conflict nothing is pushed and edits are kept in the latest git stash.
- Rate view: the bot needs `ANTHROPIC_API_KEY` (or `ant auth login`) and the `rate` extra; model defaults to `claude-opus-5-5`, override with `QUARRY_RATER_MODEL`. `QUARRY_FAKE_RATER=1` swaps in a fake rater for UI testing (dev only). Each verdict is a `rate: ...` commit. CLI fallback: set `status` (and `rating.human`, see `skills/tag-assets/SKILL.md`) in the sidecar.
- Publish/Re-index buttons run the same code as `quarry publish` / `quarry index`.

## Index and exports

- `index/` is rebuildable and never committed (`quarry index`).
- `exports/` is committed; refresh with `quarry export` or, normally, `quarry publish`.
- Check drift locally: `quarry validate --check-stale` (exit 1 if stale or missing).

## MCP server

`pip install -e ".[mcp]"`, then run `server/quarry_mcp.py` with env `QUARRY_REPO=<repo path>`. Set `QUARRY_FAKE_EMBEDDER=1` only if the index was built with `--fake-embedder`.

## Deck-builder patch

The `spot` kind patch lives in `~/.claude/skills/quantic-deck-builder/src/image_library.py` (backup `.bak` beside it). If the deck-builder gets a canonical repo, upstream this patch there.

## Risks and open items

- Single curator: ingest and curation freeze if Brian is unavailable. Trigger: train a second operator before phase 1.5 exit.
- Hosted-server auth: the conversation with CIQ IT (who may connect; SSO vs shared key) starts now, during phase 1, so it does not stall phase 1.5.
