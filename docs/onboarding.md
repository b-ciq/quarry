# Onboarding: curating brand assets in the Quarry workbench

For curators (no terminal skills needed beyond the steps below). The workbench is a local web app over this git repo.

## 1. Get access

1. Ask Brett for access to the quarry GitHub repo.
2. Install `git`, `git-lfs` (`git lfs install`), Python 3.11+, and Node 24 only if you will change the UI source in `ui/`.

## 2. Get a working copy

Option A, Conductor (preferred): add the repo as a workspace. Conductor runs the setup script in `.conductor/settings.toml` for you. It pulls LFS images, creates `.venv`, installs `.[dev,ui]`, and builds the search index (fake embedder, no downloads).

Option B, plain clone:

```
git clone <repo-url> quarry && cd quarry
git lfs pull
python3 -m venv .venv && . .venv/bin/activate
pip install -e ".[dev,ui]"
quarry index --fake-embedder
```

## 3. Start the workbench

- Conductor: run the `ui` action (it serves on `$CONDUCTOR_PORT`).
- Terminal: `quarry ui [--port 8787] [--fake-embedder]`, then open the printed `http://127.0.0.1:<port>`. It only listens on localhost. Use `--fake-embedder` if your index was built with it.

## 4. Rate (the fast way)

A bot (Claude) rates proposed images **Yes**, **No** or **Maybe-yes** and tags them. You check its work in the **Rate (N)** button in the top bar.

- **Yes**: confirmed. **No**: retired. **Maybe-yes**: parked, out of the library until you upgrade it to Yes or drop it to No.
- Screenshots never go in the grid; you see them one by one.

Tabs: **To review**, **Needs details**, **Parked**.

1. **Bot is sure** lane: a grid, split by the bot's verdict (**Strong Yes**, **Strong No**, **Strong Maybe-yes**), up to 24 images per screen. Click an image (or press Space) to mark it "bot is wrong". Arrows move. Press **Enter** to accept all the rest; the "bot is wrong" images move to the unsure lane.
2. **Bot is unsure** lane: one card at a time. **Y** yes, **N** no, **M** maybe-yes, **T** tags, **D** description, **E** editor, **Z** undo, Left/Right arrows move. Holding a key does not repeat the action.
3. When you overrule the bot, a **why?** line appears. Type a short reason and press Enter (empty is fine), or Esc to cancel. Reasons teach the bot the most.
4. **Needs details**: your Yes is recorded, but the asset cannot be confirmed yet because it is missing something the card cannot edit: for example a license, a screenshot's version or capture date, Midjourney details, or an anti-example's reason. It stays proposed and the exact errors are listed. Click **Open in editor**, fill in the missing field, then **Confirm**.
5. **Parked**: Maybe-yes images, one card at a time. Only **Y** (yes) and **N** (no) apply here. The editor also offers **Confirm** and **Retire** for a parked image.

The bot learns from you. It sees your past verdicts on look-alike images (needs an index built with real embeddings, `quarry index` without `--fake-embedder`; otherwise it sees your most recent verdicts). An agreement score shows how often you and the bot match. The bot's rubric is `taxonomy/rating-guide.md`; it is yours, so edit it when the bot keeps getting something wrong.

### Turning the bot on

1. Set `ANTHROPIC_API_KEY` in the environment that starts the workbench, or run `ant auth login`.
2. Click **Auto-rate**. The count shows "N waiting for the bot". Cost is about 4-5 cents per image (183 images is about $9).
3. **Re-rate unsure** asks the bot again about its unsure calls that nobody has judged yet (useful after you edit the rubric or have given it more verdicts to learn from).
4. The run stops by itself after 5 identical failures in a row (for example a bad key). Results are saved 20 at a time: stopping the server mid-run discards results not yet saved (up to 19) plus any calls still in flight, and those images stay waiting for the bot.

Every verdict is a git commit (`rate: yes <id>`, `rate: accept N strong yes`, `rate: bot rated N assets`, `rate: undo ...`). **Sync** shares them (during Auto-rate it waits for the save in progress; if it says busy, try again). Confirming, retiring or restoring in the Review queue or the editor also records your rating.

## 5. First review session

1. Open the **Review queue (N)** button in the top bar. N is the count of `proposed` assets; it is disabled at 0.
2. Each asset opens in the editor. Fix tags (products, categories, verticals, concepts, style) from the controlled vocabulary.
3. Backgrounds need a **tone** (dark or light) before they can be confirmed.
4. Keys: Right/Left arrows move between assets, **C** confirms the current asset and moves on, Esc exits the queue. Shortcuts are ignored with Cmd/Ctrl/Alt held.
5. Confirming validates the sidecar; errors show beside the field. Unsaved edits prompt before you navigate away.
6. When the queue is done, click **Publish** (validates, re-indexes, regenerates `exports/`, updates the deck-builder). **Re-index** only rebuilds the search index.

Other tabs: Library (grid, facets, search), Vocabulary, Ingest (drop images, pick class and source; screenshots need a product).

### Anti-examples (what not to do)

Some images are kept to show styles CIQ avoids. Tick **Anti-example** in the editor and write **Why to avoid it** (required before confirming; a license is not). On the Ingest tab, tick **These are anti-examples** to mark a whole drop.

- Anti-examples never appear in normal search, the deck-builder export, or `get_asset`. They show a red **avoid** badge in the grid; filter with **Use: anti-example**.
- Agents read them through `search_anti_examples`, `get_anti_example`, and `check_against_anti_examples` (compares any image's visual style to the set). CLI: `quarry search --anti`, `quarry check-image PATH`.
- Write the reason so an agent can act on it: name the trait to avoid and what to do instead.

## 6. How saving works (git sync)

- Every edit you save is its own git commit under your git identity, touching only `library/`, `taxonomy/`, or `exports/`.
- Nothing reaches teammates until you press **Sync** (pull with rebase, then push). The status area shows ahead/behind counts.
- Writes are refused while managed files have uncommitted changes from outside the workbench; commit or discard them first.
- If Sync reports a **conflict**, nothing was pushed and your uncommitted edits are saved in the latest `git stash` entry. Ask your agent to "resolve the quarry sync conflict", then Sync again.

## 7. The vocabulary

The controlled vocabulary lives in `taxonomy/vocabulary.json` (one list per axis). Use the **Vocabulary** tab to:

- add a slug (kebab-case),
- rename a slug (rewrites every asset that uses it, one commit),
- merge a slug into another (rewrites carriers, removes the old slug),
- delete a slug (only if no asset uses it; otherwise merge).

A rename or merge is all-or-nothing and is blocked with a 422 if any asset that carries the slug would become invalid (for example a sidecar that is already invalid). Fix that asset first, then retry.

## Fallback

Everything the workbench does has a CLI path; see `docs/operations.md`.
