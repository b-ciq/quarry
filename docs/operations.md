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

Ingest creates `status=proposed` sidecars, which show in the workbench's Library Inbox (or curate with the `tag-assets` skill). The workbench's **+ Add images** wraps the same funnel.

- Figma: export the designated frames (UI or API) to a drop directory. `--source figma` (or `designer`), `--class` per frame set.
- Adobe Stock: download from license history into a drop directory. Pass `--source adobe-stock --license-id <stock asset id>`.
- Midjourney: use the archive export. `--source midjourney`. Record prompt, model and seed in the sidecar's `generation` block; this is required before a midjourney asset can be confirmed.
- Screenshots: add `--product <slug>`; they nest under `screenshots/<product>/`. Set `product_version` and `captured_at` during curation.

## Instagram saves (inspiration, reference only)

Inspiration lives outside the repo, in a synced Drive folder, so images stay off the shared remote. Nothing that serves assets reads it. No bot logs in to Instagram: you export once, then click a button on each post yourself.

### One-time setup

1. Create `~/.config/quarry/config.toml` (or set `QUARRY_CONFIG_DIR` to use another folder):

   ```toml
   inspiration_dir = "~/Library/CloudStorage/GoogleDrive-bchristensen@ciq.com/My Drive/Quarry inspiration saves"
   # capture_daily_cap = 40                 # optional, default 40
   # capture_downloads_dir = "~/Downloads/quarry"   # optional, default shown
   # describe_inspiration = false           # optional, false turns the background describer off
   # describe_daily_cap = 150               # optional, default 150 Claude calls a day
   ```

   `QUARRY_INSPIRATION_DIR` overrides `inspiration_dir`. `QUARRY_DESCRIBE_INSPIRATION=0` also turns the describer off.
2. `pip install -e ".[inspiration]"` (adds ffmpeg for video).
3. Load the Chrome extension: `chrome://extensions` → Developer mode → Load unpacked → select `extension/`. Details in `extension/README.md`.
4. Load it from a stable Quarry checkout, not a Conductor workspace. Chrome keeps pointing at the folder, and an archived workspace deletes it.

### Import an export

1. In Instagram, open Accounts Center → Download your information. Choose only Saved, date range All time, format JSON.
2. `quarry import-instagram EXPORT [--inspiration-dir DIR]` on the zip or the unzipped folder.
3. Each save becomes `<root>/instagram/<id>/save.json` with link, owner, caption, hashtags, collections and save time, and a pending `capture` block.
4. Re-run on every new export. It adds only new saves and newly listed collections, and never overwrites curator fields (`status`, `saved_because`, `style`, `concepts`, `description`).

### Capture session

1. `quarry ui`, then open **Inspiration**.
2. Click **Open next post** in the strip at the top of the Inbox. It opens the next pending post in Instagram.
3. Click the Quarry button (or Option+Shift+Q). Wait for the checkmark badge.
4. Repeat. The workbench sweeps `~/Downloads/quarry/` into the store as you go, and the images appear in the Inspiration Inbox. **Manage saves** lists every save with its capture status.
5. After 40 posts opened in a day, Open next post turns off until tomorrow. Change the number with `capture_daily_cap`.

To sweep without the UI: `quarry import-captures [--inspiration-dir DIR] [--downloads DIR]`.

### Describing saves

The workbench has Claude describe and tag saves in the background (needs the same credentials as the rater). One process at a time holds `~/.config/quarry/describer.lock`; other windows show "describing in another Quarry window".

`quarry describe-inspiration [--repo] [--inspiration-dir] [--limit N] [--redo ID]` runs the same work from the command line and stops when nothing is waiting. `--limit N` (1 or more) stops after N Claude calls, `--redo ID` describes that save again. It ignores `describe_inspiration` and the env off switch because you ran it on purpose, but still obeys `describe_daily_cap`. It exits 2 if another window is describing or setup is wrong (no inspiration folder, no credentials), and 0 otherwise, even when it stops early (paused, capped).

### Fixing a capture

1. Wrong or partial files: click the row's **Open** link to open that post, then press the Quarry button again. The re-capture replaces only the slides it brings and keeps the others. **Open** counts against today's cap, like Open next, and is off once the cap is reached.
2. **Remove...**: delete one slide's file, or all files. The save goes back to partial or pending.
3. **Add file**: pick a file, or drop one on the row, to fill in a missing slide.
4. **Unavailable**: mark a deleted or private post so it stops coming up.

### Failed captures

A folder the sweep cannot file moves to `<downloads>/_failed/<folder>/` with a `reason.txt` that says why. Capture the post again, or use Add file on its row.

### Drive sync

The Drive folder syncs deletions both ways. Deleting a file there deletes it everywhere, and Drive trash is the only undo.

## Per-release screenshot checklist

1. `quarry search --class screenshot --product <product> --all-statuses --limit 100 -v`
2. For each result, compare `product_version` with the new release.
3. Re-capture and ingest the new shot, or retire the old one.
4. `quarry validate`, then `quarry publish`.

## Retiring assets

Set `"status": "retired"` in the sidecar. Never delete files. Then publish.

## Workbench notes

- Vocabulary rename/merge rewrites all carrier sidecars and `taxonomy/vocabulary.json` in one commit. It is blocked with HTTP 422 if any carrier sidecar is already invalid (or would become invalid); fix that asset first, then retry. Delete is refused with 409 while any asset uses the slug.
- Edits are local commits; Publish pulls (rebase), publishes and pushes (Get updates only pulls, shown when you have nothing to publish). On conflict nothing is pushed and edits are kept in the latest git stash.
- Rating bot (describes, tags and rates the Library Inbox): needs `ANTHROPIC_API_KEY` (or `ant auth login`) and the `rate` extra; model defaults to `claude-opus-5-5`, override with `QUARRY_RATER_MODEL`. `QUARRY_FAKE_RATER=1` swaps in a fake rater for UI testing (dev only). Each verdict is a `rate: ...` commit. CLI fallback: set `status` (and `rating.human`, see `skills/tag-assets/SKILL.md`) in the sidecar.
- The Publish button runs the same code as `quarry publish`, wrapped in a sync. Re-index alone: `quarry index`.

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
