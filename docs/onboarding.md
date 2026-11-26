# Onboarding: curating brand assets in the Quarry workbench

For curators (no terminal skills needed beyond the steps below). The workbench is a local web app over this git repo.

## 1. Get access

1. Ask Brian for access to the quarry GitHub repo.
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

## 4. The layout

Three tabs across the top:

- **Library**: CIQ's sanctioned brand images, the ones agents use.
- **Inspiration**: outside work you saved (Instagram for now), kept apart from the Library for copyright reasons.
- **Vocabulary**: the shared tag list (see section 7).

Library and Inspiration each have two galleries, plus a third out of the way:

- **Inbox**: new images waiting for your call. The number on the top tab is the Inbox count.
- **Approved**: the sanctioned gallery. In the Library, this is what agents can search once you **Publish**.
- **Rejected** (button on the right of the view bar): images you turned down. Open one and click **Approve instead** to bring it back.

Every gallery has the same filter rail on the left (OR within a group, AND across groups) and the search box at the top.

## 5. Clearing the Inbox

### Adding images

1. Library: click **+ Add images** (or drag files onto the window). Pick a class and source; screenshots need a product. Tick **These are anti-examples** to mark a whole drop.
2. Claude then describes, tags and rates each new image automatically (when the bot is on, see below). A strip at the top of the Inbox shows progress, or "N images haven't been described and rated by Claude yet" with a button to start it.
3. Inspiration: the strip at the top of the Inbox shows how many Instagram saves aren't pulled in yet. **Open next post**, then click the Quarry button in Chrome; the images land in the Inbox within a few seconds. **Manage saves** opens the full capture list (failed captures, add or remove files).

### Deciding

1. Click an image. The panel on the right shows it large, what **Claude says** (keep, reject or maybe, confident or unsure, and why), and the description and tags, which you can edit.
2. **A** approves, **X** rejects, **S** skips. The next image opens by itself. Left/Right arrows move, Esc closes the panel, **Z** undoes the last decision. Shortcuts are ignored while typing and with Cmd/Ctrl/Alt held.
3. Approve saves your edits first. If something required is missing (for example a background's tone, a license, a screenshot's version, or an anti-example's reason), your Yes is recorded but the image stays in the Inbox with a **NEEDS DETAILS** badge and the missing fields marked. Fill them in and approve again.
4. Badges on the thumbnails show Claude's call: **KEEP**, **REJECT**, **MAYBE**, with **?** when it is unsure. Claude's confident calls are listed first.

### Bulk decisions

Filter the Inbox first, for example **Claude says: reject** plus **Claude's confidence: strong**, or a style Claude suggested. Then use **Reject all N shown** or **Approve all N shown...** (approve asks you to confirm). One **Undo** reverses the whole batch.

### The bot

Claude (the rating bot) proposes a verdict, a description and tags for each new Library image.

1. Turn it on: set `ANTHROPIC_API_KEY` in the environment that starts the workbench, or run `ant auth login`. Cost is about 4-5 cents per image.
2. It learns from you. It sees your past verdicts on look-alike images (needs an index built with real embeddings, `quarry index` without `--fake-embedder`; otherwise your most recent verdicts). Its rubric is `taxonomy/rating-guide.md`; it is yours, so edit it when the bot keeps getting something wrong.
3. A run stops by itself after 5 identical failures in a row (for example a bad key). Results are saved 20 at a time.
4. Claude does not describe or tag Inspiration yet.

Every Library decision is a git commit (`rate: yes <id>`, `rate: accept N strong no`, `rate: bot rated N assets`, `rate: undo ...`). The line under the top tabs says whether agents have your latest approvals. When it says they don't, click **Publish**: it pulls teammates' changes, validates, rebuilds search, regenerates `exports/`, updates the deck-builder and shares your changes. Inspiration decisions are saved straight to the Drive folder (`status` in each `save.json`), not to git.

### Anti-examples (what not to do)

Some images are kept to show styles CIQ avoids. Tick **Anti-example** in the editor and write **Why to avoid it** (required before approving; a license is not). In **+ Add images**, tick **These are anti-examples** to mark a whole drop.

- Anti-examples never appear in normal search, the deck-builder export, or `get_asset`. They show an **AVOID** badge in the gallery; filter with **Use: anti-example**.
- Agents read them through `search_anti_examples`, `get_anti_example`, and `check_against_anti_examples` (compares any image's visual style to the set). CLI: `quarry search --anti`, `quarry check-image PATH`.
- Write the reason so an agent can act on it: name the trait to avoid and what to do instead.

## 6. How saving works (git sync)

- Every edit you save is its own git commit under your git identity, touching only `library/`, `taxonomy/`, or `exports/`.
- Nothing reaches teammates or agents until you press **Publish** (pull with rebase, publish, push). If teammates have changes and you have none, the button reads **Get updates**.
- Writes are refused while managed files have uncommitted changes from outside the workbench; commit or discard them first.
- If Publish reports a **conflict**, nothing was pushed and your uncommitted edits are saved in the latest `git stash` entry. Ask your agent to "resolve the quarry sync conflict", then Publish again.
- If the line turns red ("library files changed outside Quarry"), saving is paused until those files are committed or discarded.

## 7. The vocabulary

The controlled vocabulary lives in `taxonomy/vocabulary.json` (one list per axis). Use the **Vocabulary** tab to (click a term to see its images in the Library):

- add a slug (kebab-case),
- rename a slug (rewrites every asset that uses it, one commit),
- merge a slug into another (rewrites carriers, removes the old slug),
- delete a slug (only if no asset uses it; otherwise merge).

A rename or merge is all-or-nothing and is blocked with a 422 if any asset that carries the slug would become invalid (for example a sidecar that is already invalid). Fix that asset first, then retry.

## Fallback

Everything the workbench does has a CLI path; see `docs/operations.md`.
