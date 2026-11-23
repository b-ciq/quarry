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

## 4. First review session

1. Open the **Review queue (N)** button in the top bar. N is the count of `proposed` assets; it is disabled at 0.
2. Each asset opens in the editor. Fix tags (products, categories, verticals, concepts, style) from the controlled vocabulary.
3. Backgrounds need a **tone** (dark or light) before they can be confirmed.
4. Keys: Right/Left arrows move between assets, **C** confirms the current asset and moves on, Esc exits the queue. Shortcuts are ignored with Cmd/Ctrl/Alt held.
5. Confirming validates the sidecar; errors show beside the field. Unsaved edits prompt before you navigate away.
6. When the queue is done, click **Publish** (validates, re-indexes, regenerates `exports/`, updates the deck-builder). **Re-index** only rebuilds the search index.

Other tabs: Library (grid, facets, search), Vocabulary, Ingest (drop images, pick class and source; screenshots need a product).

## 5. How saving works (git sync)

- Every edit you save is its own git commit under your git identity, touching only `library/`, `taxonomy/`, or `exports/`.
- Nothing reaches teammates until you press **Sync** (pull with rebase, then push). The status area shows ahead/behind counts.
- Writes are refused while managed files have uncommitted changes from outside the workbench; commit or discard them first.
- If Sync reports a **conflict**, nothing was pushed and your uncommitted edits are saved in the latest `git stash` entry. Ask your agent to "resolve the quarry sync conflict", then Sync again.

## 6. The vocabulary

The controlled vocabulary lives in `taxonomy/vocabulary.json` (one list per axis). Use the **Vocabulary** tab to:

- add a slug (kebab-case),
- rename a slug (rewrites every asset that uses it, one commit),
- merge a slug into another (rewrites carriers, removes the old slug),
- delete a slug (only if no asset uses it; otherwise merge).

A rename or merge is all-or-nothing and is blocked with a 422 if any asset that carries the slug would become invalid (for example a sidecar that is already invalid). Fix that asset first, then retry.

## Fallback

Everything the workbench does has a CLI path; see `docs/operations.md`.
