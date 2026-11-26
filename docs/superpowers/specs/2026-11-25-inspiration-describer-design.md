# Inspiration Describer: Claude describes and tags everything in Inspiration

**Date:** 2026-11-25
**Author:** Brian Christensen with Claude
**Status:** Draft for approval
**Depends on:** the inspiration store (`2026-11-24-instagram-capture-design.md`), the rater (`2026-11-22-fast-rating-design.md`), the style vocabulary (`taxonomy/vocabulary.json`, `taxonomy/visual-vocabulary.md`).

## Intent

Inspiration exists to define CIQ's visual vocabulary. The plan in `2026-11-22-quarry-design.md` is to VLM-tag the corpus against the controlled vocabulary, then refine terms from tag co-occurrence and browsing. Today nothing is described: the detail panel says "Not described yet. Claude does not describe or tag inspiration yet; that comes next."

This feature makes Claude describe and tag **anything that lands in Inspiration**, from any source, on its own, with no button. Instagram is the only source today. Pinterest and direct uploads come later and must get this for free.

## Goals

- Every Inspiration item with media gets a description, `style` tags and `concepts` tags from Claude, with no curator action.
- It works for any source that writes a record with media to the inspiration store, not just Instagram.
- New items are described within seconds of landing. The existing backlog is worked through in the background.
- Claude's ideas for missing terms (suggested slugs) are kept on the item, so they can feed vocabulary work.
- Curators see what Claude wrote in the detail panel, and can filter and search by it.

## Non-goals

- **No verdict.** Claude does not say keep, reject or maybe on Inspiration. Brian decided this ("only A for now").
- No editing of the description or tags in the Inspiration panel. That is a separate feature; today the panel is read-only.
- No Pinterest import and no Inspiration upload. Those are separate features. They need only to write records the describer can read (see Source contract).
- No change to the Library. Library uploads are already described and rated automatically.
- No inspiration search index or embeddings.
- No aggregated "suggested terms" report in the Vocabulary tab. The data is stored so one can be added later.

## Anti-goals (failure even if it works)

- **Overwriting a curator.** Claude never replaces a non-empty description or a non-empty tag list.
- **Runaway spend.** A bad key or an outage must not retry every item every few seconds forever.
- **Tags outside the vocabulary.** Claude may only pick existing slugs. New ideas go to suggested slugs.
- **Inspiration leaking.** Nothing about this moves inspiration media into git, the index or exports.
- **Blocking the workbench.** The describer must not take the job slot that Publish and Reindex use.

## Constraints

- The store is a Drive-synced folder outside git (`inspiration_store.Store`). Every write takes `store_lock()`, re-reads the record, and writes atomically with `Store.write`.
- The workbench server is FastAPI. The capture sweeper is already a daemon thread started in `app.py:main` (`capture_api.start_sweeper`).
- The Claude call pattern already exists in `src/quarry/rater.py`: `beta.messages.create` with server-side fallback, `output_config.format` JSON schema, effort `low`, and `QUARRY_RATER_MODEL` (default `claude-opus-5-5`). `rater_status()` says whether Claude is available.
- Videos are stored as MP4 plus a poster JPEG. ffmpeg comes from `imageio-ffmpeg` (the `inspiration` extra) via `media_probe.ffmpeg_exe()`.
- Today's corpus: 281 records, 13 captured (27 images, 17 videos), none described.

## Approaches considered

1. **Background describer loop (chosen by Brian).** A daemon thread in the workbench server, like the capture sweeper. It regularly scans the store for items that have media and no Claude description yet, and describes them one at a time. Because it is source-agnostic, any new source is covered. It also works through the backlog and runs with no browser tab open.
2. **Hook each source's write path.** The sweep, and later Pinterest and upload, call Claude when they save. Rejected: every new source has to remember to call it, which breaks "anything".
3. **Browser-driven job like the Library's.** Rejected: it only runs while the tab is open, and it would take the single job slot that Publish needs.

## Design

### Overview

```
any source ──writes──▶ <root>/<source>/<id>/save.json + media
                                   │
describer thread (every 10 s) ─────┘
  scan store → items with media, status != retired, no `bot` block
  for each, oldest first, one at a time:
    images: every slide (video = poster + 3 frames)  ─▶ Claude
    ◀─ {description, tags.style, tags.concepts, suggested_slugs}
    under store_lock: re-read, fill empty fields, add `bot`, write
/api/inspiration ◀── items now carry Claude's output + describer status
Inspiration panel: description, tags, "described by Claude", suggested terms
```

### Which items get described

An item is a **describe target** when all of these hold:
- it has at least one still image to show (the same rule as `inspiration_api._media`: an image slide's `file`, or a video slide's `poster`);
- its `status` is `proposed` or `confirmed` (rejected items are skipped to save money);
- it has no `bot` block yet, **or** its media changed since Claude described it (the `bot.media` fingerprint no longer matches; see below);
- it has not given up after repeated failures (see Failures and spend).

*My call:* captures can arrive in pieces (a `partial` capture, a second capture folder merging slides, or Add file / remove slide on the Capture page). Rather than wait for `captured`, which some posts never reach, the describer describes what is there now and describes again when the media changes. The extra call is cheap next to a description of slides that are gone.

Targets are taken newest first by `source.saved_at` (falling back to `ingested_at`), so something you just captured is described before the backlog.

### Source contract

The describer reads records through `Store`. For any future source, it needs only:
- a record that `Store` lists, with `status` and `capture.items` (slides with `type`, `file`, `poster`), and media files the store's `media_path` resolves;
- `description`, `style` and `concepts` fields (empty is fine; missing is treated as empty).

Today `Store` scans only `<root>/instagram/`, and `validate_inspiration_record` requires `origin: instagram`. Widening those is part of the Pinterest or upload feature, not this one. The describer itself must not branch on the source.

### What Claude sees

- **System prompt (cached):** instructions (below), the allowed `style` and `concepts` slugs, and the full text of `taxonomy/visual-vocabulary.md` so tagging follows the facet definitions.
- **Per item:**
  - every slide in order, up to 10 images in total, each downscaled to fit 768 px (or 512 px when there are more than 4 images);
  - for a video slide, the poster plus frames at 25%, 50% and 75% of its length, extracted with ffmpeg into the cache dir and labelled "frames from a video" so Claude can describe motion; with ffmpeg missing or failing, the poster only;
  - text: the source (e.g. "Instagram post by @owner"), the caption and the hashtags, marked as the poster's own words.
- **Instructions:**
  - description: two or three plain sentences. Say what it shows, then what makes it look the way it does (medium, light, color, form, composition, and motion for video). Write for a designer who has not seen it.
  - style: follow the facet rules in the vocabulary doc. Exactly one `medium-`, at most one `light-`, up to two `color-`, up to two `form-`, at most one `comp-`. Leave a facet out when nothing clearly applies.
  - concepts: only when clearly present.
  - suggested_slugs: a missing look or concept, as a kebab-case slug with the facet prefix for style, plus a one-line definition.
  - No verdict, no judgement of quality or brand fit.
- **Output schema:** `{description, tags: {style: [enum], concepts: [enum]}, suggested_slugs: {style: [{slug, definition}], concepts: [{slug, definition}]}}`.
- After the response, the describer enforces the facet limits by keeping the first allowed slug(s) per facet and dropping extras.

### What gets written (`save.json`)

Under `store_lock()`, the describer re-reads the record and checks it is still a target with the same media fingerprint it sent. If not (rejected meanwhile, already described, or the media changed mid-call), it skips; a changed item is picked up on the next scan. Otherwise, for each of `description`, `style`, `concepts`:
- **Claude owns the field** when it is empty, or when it still equals Claude's previous answer in `bot` (nobody changed it). Then it is set to the new answer (tags filtered to slugs in the vocabulary at write time, since a slug may have been renamed or deleted mid-run).
- **A curator owns the field** when it differs from Claude's previous answer. Then it is left alone.

*My call:* this is how a redo (media change, `--redo`, Try again) updates what curators see without ever overwriting their edits.

`bot` is always written (replacing any earlier one):

```json
"bot": {
  "model": "claude-opus-5-5",
  "at": "2026-11-25T23:10:04Z",
  "description": "…",
  "style": ["medium-3d-render", "light-dark-field"],
  "concepts": ["infrastructure"],
  "suggested_slugs": {"style": [{"slug": "form-ribbon", "definition": "…"}], "concepts": []},
  "images": 5,
  "media": ["01.jpg:290d460c…", "02-poster.jpg:57888bb1…"]
}
```

`bot` keeps Claude's own answer even where a curator's value won, so the two can be compared later. `bot.media` is the fingerprint of what Claude saw: each still image name with its `sha256` from `capture.items` (or the file's size and mtime when there is no hash). `validate_inspiration_record` gains a shape check for `bot`, and for `description` (string), `style` and `concepts` (lists of strings) when present.

### Failures and spend

- **One item fails** (refusal, unreadable image, cut off, bad output): the error is saved on the record as `describe_error: {code, message, tries, at}`, so it survives restarts. It is retried after 1 hour, up to 3 tries in total. After the third it gives up, and the panel says so with a **Try again** button (`POST /api/inspiration/{id}/describe`, which clears `describe_error`). `quarry describe-inspiration --redo ID` does the same. A success clears `describe_error`. *My call:* this caps what a bad item can cost, and saves failures on the record rather than in memory.
- **The same failure 5 times in a row** (keyed on `RaterError.code`, the same rule as the Library job): the describer pauses for 15 minutes, and the Inbox strip shows "Claude paused: <reason>". This covers a bad key or an outage.
- **Claude unavailable** (`rater_status()` says no key or no SDK): the describer idles and re-checks every minute. The strip shows "Claude is off: <reason>".
- Items are described one at a time. At roughly 5–20 cents a save (more slides cost more), the 13 captured saves cost about $1–2, and the full 281 would cost about $20–40 once all are captured.
- **Off switch:** `describe_inspiration = false` in `~/.config/quarry/config.toml`, or `QUARRY_DESCRIBE_INSPIRATION=0`, stops the thread from starting.

### Where the code goes

- `src/quarry/describer.py` (new): `Describer` protocol, `ClaudeDescriber` (built on rater.py's helpers: `image_block`, `api_error_code`, `RaterError`, the same client and model settings), `FakeDescriber` for tests, `DescribeResult`, `is_describe_target`, `apply_description` (the pure merge), and video frame extraction (or put frame extraction in `media_probe.py` next to `make_poster`).
- `src/quarry/ui/inspiration_api.py`: `start_describer(app)` thread (next to the store it already owns), and new fields on `/api/inspiration`.
- `src/quarry/ui/app.py`: start the describer in `main` beside the sweeper. `create_app` accepts an injected describer for tests, like `rater`.
- `src/quarry/cli.py`: `quarry describe-inspiration [--limit N] [--redo ID]`, the terminal path for the same work (every workbench action has one, per `docs/operations.md`).
- `src/quarry/schema.py`: `bot` shape check.
- UI (`ui/src/…`, then rebuild `src/quarry/ui/static/`), described below.
- Docs: `docs/onboarding.md` (replace "Claude does not describe or tag Inspiration yet") and `docs/operations.md`.

### API changes

`POST /api/inspiration/{id}/describe` clears `describe_error` and marks the item for a fresh description, so the describer picks it up on its next scan.

`GET /api/inspiration` adds:
- per item: `bot` (null, or `{model, at, suggested_slugs}`) and `describe_error` (null, or `{message, tries, gave_up}`);
- at the top level: `describer: {state: "running"|"idle"|"paused"|"off", reason, waiting, current}`, where `waiting` counts the describe targets.

### UI

Inbox strip, under the Instagram strip, shown only when there is something to say:

```
Claude: describing 3 saves… (ig-dffgwfneuen now)
Claude is off: set ANTHROPIC_API_KEY or run `ant auth login`
Claude paused: auth error on 5 saves in a row. Retrying at 15:42.
```

Detail panel:

```
Description                      described by Claude · Nov 25
  A dark-field 3D render of glass ribbons ...
Tags
  [medium-3d-render] [light-dark-field] [form-glass-translucent] [infrastructure]
Claude suggests new terms
  form-ribbon: long folded bands of material ...
```

- With no description yet, the placeholder reads "Claude is describing this…" (running), "Waiting for Claude (off: <reason>)", or "Claude could not describe this: <error>. It will try again later." or, after 3 tries, "Claude gave up: <error>" with a Try again button
- The Inbox polls every 5 s already, so new descriptions appear without a reload.
- Filters already cover `Style` and `Concepts`, and search already covers the description, so tagged items become filterable without changes.

### Testing

- Unit: target selection (incl. media fingerprint change and the give-up cap), newest-first order, the merge (fills empty fields, replaces fields that still match Claude's last answer, never touches curator-changed fields, filters to vocabulary, enforces facet limits), the `bot` schema check, video frame extraction (with ffmpeg present), the prompt/schema builder.
- Loop: with `FakeDescriber` and a temp store, new records get described, rejected ones are skipped, a record changed mid-call is re-checked under the lock, 5 identical failures pause, per-item failures back off.
- API: the new fields on `/api/inspiration`.
- UI: the strip and placeholder text logic as pure functions with Vitest, like `capture.test.ts`.
- One manual run against the real Drive folder on the 13 captured saves, with a screenshot.

## Left to the builder

- Exact intervals (10 s scan, 1 h item retry, 15 min pause) can be tuned.
- Whether video frame extraction lives in `describer.py` or `media_probe.py`.
- Whether `ClaudeDescriber` shares a base with `ClaudeRater` or calls the shared helpers.
- The precise prompt wording, within the instructions above.
