# Inspiration Describer: Claude describes and tags everything in Inspiration

**Date:** 2026-11-25 (revised after adversarial review)
**Author:** Brian Christensen with Claude
**Status:** Draft for approval
**Depends on:** the inspiration store (`2026-11-24-instagram-capture-design.md`), the rater (`2026-11-22-fast-rating-design.md`), the style vocabulary (`taxonomy/vocabulary.json`, `taxonomy/visual-vocabulary.md`).

## Intent

Inspiration exists to define CIQ's visual vocabulary. The plan in `2026-11-22-quarry-design.md` is to VLM-tag the corpus against the controlled vocabulary, then refine terms from tag co-occurrence and browsing. Today nothing is described: the detail panel says "Not described yet. Claude does not describe or tag inspiration yet; that comes next."

This feature makes Claude describe and tag **anything that lands in Inspiration**, from any source, on its own, with no button. Instagram is the only source today. Pinterest and direct uploads come later and must get this for free.

## Goals

- Every Inspiration item with media gets a description, `style` tags and `concepts` tags from Claude, with no curator action.
- It works for any source that writes a record with media to the inspiration store, not just Instagram.
- New items are described within a couple of minutes of landing. The existing backlog is worked through in the background.
- Claude's ideas for missing terms (suggested slugs) are kept on the item, so they can feed vocabulary work.
- Curators see what Claude wrote in the detail panel, and can filter and search by it.

## Non-goals

- **No verdict.** Claude does not say keep, reject or maybe on Inspiration (Brian: "only A for now").
- No editing of the description or tags in the Inspiration panel. That is a separate feature; today the panel is read-only.
- No Pinterest import and no Inspiration upload. Those are separate features. They need only to meet the Source contract.
- No change to how the Library is rated. Library uploads are already described and rated automatically.
- No inspiration search index or embeddings.
- No aggregated "suggested terms" report in the Vocabulary tab. The data is stored so one can be added later.
- No coordination between two Macs describing the same Drive folder (the lock below is per machine).

## Anti-goals (failure even if it works)

- **Overwriting a curator.** Claude never replaces a value a curator set or changed.
- **Runaway spend.** No state (bad key, outage, prompt bug, unwritable record, several workbenches open) may make Claude calls repeat without a bound.
- **Tags outside the vocabulary.** Claude may only pick existing slugs. New ideas go to suggested slugs.
- **Fake output in the real corpus.** Dev and test modes never write to the real Drive folder.
- **Inspiration leaking.** Nothing about this moves inspiration media into git, the index or exports.
- **Blocking the workbench.** The describer must not take the job slot that Publish and Reindex use.

## Constraints

- The store is a Drive-synced folder outside git (`inspiration_store.Store`). Every write takes `store_lock()`, re-reads the record, and writes atomically with `Store.write`.
- **Several workbenches run at once.** `.conductor/settings.toml` has `run_mode = "concurrent"`; every Conductor workspace runs `quarry ui`, and all share `~/.config/quarry/config.toml`, so all point at the same Drive folder. Each workspace may be on a different branch with a different `taxonomy/`.
- The capture sweeper is a daemon thread started in `app.py:serve` (`capture_api.start_sweeper`).
- The Claude call pattern exists in `src/quarry/rater.py`: `beta.messages.create` with server-side fallback, `output_config.format` JSON schema, effort `low`, `QUARRY_RATER_MODEL` (default `claude-opus-5-5`). `rater_status()` says whether Claude is available. The JSON schema format does not support `maxItems`, so list limits are enforced in code.
- Videos are stored as MP4 plus a poster JPEG. ffmpeg comes from `imageio-ffmpeg` (the `inspiration` extra) via `media_probe.ffmpeg_exe()`.
- Every `capture.items` entry carries `sha256` (of the image, or of the MP4 for a video; posters have no hash). All 44 current items have one.
- Records created by the sweep have `source.saved_at: null` and a date-only `ingested_at`.
- Today's corpus: 281 records, 13 captured (27 images, 17 videos, one 13-slide post), none described.

## Approaches considered

1. **Background describer loop (chosen by Brian).** A daemon thread in the workbench server, like the capture sweeper. It scans the store for items that need a description and describes them one at a time. Source-agnostic, covers the backlog, runs with no browser tab open.
2. **Hook each source's write path.** Rejected: every new source has to remember to call it, which breaks "anything".
3. **Browser-driven job like the Library's.** Rejected: it only runs while the tab is open, and it would take the single job slot that Publish needs.

## Design

### Overview

```
any source ──writes──▶ <root>/<source>/<id>/save.json + media
                                   │
describer thread, one per Mac ─────┘   (holds ~/.config/quarry/describer.lock)
  every 10 s: scan store → targets (see below), most recently captured first
  for each target that has been stable for 60 s, one at a time, under the daily cap:
    images: slides (video = poster + 3 frames) + caption  ─▶ Claude
    ◀─ {description, tags.style, tags.concepts, suggested_slugs}
    under store_lock: re-read; same fingerprint? merge, write `bot`
/api/inspiration ◀── items carry Claude's output + describer status
Inspiration panel: description, tags, "described by Claude", suggested terms
```

### One describer per Mac

The describer thread first takes a **non-blocking** `flock` on `~/.config/quarry/describer.lock` and holds it for the life of the thread. If another process holds it, this workbench doesn't describe; it retries the lock every minute (so a new holder takes over when that window closes) and reports `state: "elsewhere"`. The lock file holds the holder's pid and port, written after locking, so the strip can say "Claude is describing in another Quarry window (port 8790)". `quarry describe-inspiration` takes the same lock and refuses to run if it can't.

Whichever workbench holds the lock uses its own checkout's `taxonomy/`. To make that visible, `bot.vocab` records a short digest of `vocabulary.json` used, and the strip shows which workspace is describing. *My call:* keep it on by default (Brian asked for automatic) rather than opt-in, now that only one process can spend.

**Dev and test safety:** the describer does not start when `QUARRY_FAKE_RATER=1` (that dev mode would write fake descriptions into the real folder). Tests inject a `FakeDescriber` and a temp store via `create_app`.

**Off switch:** `describe_inspiration = false` in `~/.config/quarry/config.toml`, or `QUARRY_DESCRIBE_INSPIRATION=0`. Config read errors are caught (as `capture_api` does with `CONFIG_ERRORS`) and treated as "off, with the error shown", never a crash.

### Which items get described

The **media fingerprint** is one pure function of the record: a short hash of every `capture.items` entry's `(slide, type, file, poster, sha256)`, in slide order. It never depends on what was actually sent to Claude (the 10-image cap, video frames, or ffmpeg availability), so it only changes when the media changes.

An item is a **describe target** when all of these hold:
- it has at least one still image (the rule in `inspiration_api._media`: an image slide's `file`, or a video slide's `poster`);
- its `status` is not `retired` (so `proposed`, `parked` and `confirmed` all count; rejected items are skipped to save money);
- **either** it has no `bot` block, **or** `bot.media` differs from the current fingerprint, **or** it has `describe_requested_at` (set by Try again or `--redo`);
- it is not marked given-up (`describe_error.gave_up`) unless `describe_requested_at` is newer;
- it is not in the in-memory backoff (below).

**Settling:** a target is described only after its fingerprint has been the same for 60 seconds (tracked in memory: first time this process saw this fingerprint). Captures can arrive in pieces (a `partial` capture, a second capture folder merging slides, Add file / remove slide), and this stops each piece from costing a full call. Waiting for `capture.status == "captured"` was rejected because some posts never reach it.

**Order:** most recently captured first, by the newest `capture.items[].captured_at` (falling back to `source.ingested_at`, then the id), so a save just captured is described before the backlog even if it was saved on Instagram long ago.

### Source contract

The describer reads records through `Store`. For any future source, a record needs:
- `status`, and `capture.items` with `slide`, `type`, `file` / `poster`, and `sha256`, with media files `Store.media_path` resolves;
- `description`, `style` and `concepts` (empty or missing is fine).

Today `Store` scans only `<root>/instagram/`, and `validate_inspiration_record` requires `origin: instagram`. Widening those is part of the Pinterest or upload feature. The describer itself must not branch on the source.

### What Claude sees

- **System prompt (cached):** instructions (below), the allowed `style` and `concepts` slugs, and the full text of `taxonomy/visual-vocabulary.md` so tagging follows the facet definitions.
- **Per item:**
  - slides in order, up to 10 images in total, each downscaled to fit 768 px (512 px when there are more than 4 images); for a post with more slides, the first 10 slides' images, and the text says "first N of M slides";
  - for a video slide, the poster plus frames at 25%, 50% and 75% of its length, extracted with ffmpeg into the cache dir and labelled "frames from a video" so Claude can describe motion; with ffmpeg missing or failing, the poster only (this counts toward the 10);
  - text: the source (e.g. "Instagram post by @owner"), the caption and the hashtags, marked as the poster's own words.
- **Instructions:**
  - description: two or three plain sentences. Say what it shows, then what makes it look the way it does (medium, light, color, form, composition, and motion for video). Write for a designer who has not seen it.
  - style: follow the facet rules in the vocabulary doc: exactly one `medium-`, at most one `light-`, up to two `color-`, up to two `form-`, at most one `comp-`. Leave a facet out when nothing clearly applies.
  - concepts: only when clearly present.
  - suggested_slugs: a missing look or concept, as a kebab-case slug (with the facet prefix for style) plus a one-line definition.
  - No verdict, no judgement of quality or brand fit.
- **Output schema:** its own schema (not `rating_schema`): `{description: string, tags: {style: [enum], concepts: [enum]}, suggested_slugs: {style: [{slug, definition}], concepts: [{slug, definition}]}}`, with `required` and `additionalProperties: false` on every object.
- **After the response:** an empty or whitespace description is `bad_output`. Tags are filtered to the current vocabulary and trimmed to the facet limits (first slugs win); suggested slugs that already exist in the vocabulary are dropped.

### What gets written (`save.json`)

Under `store_lock()`, the describer re-reads the record and checks it is still a target with the **same fingerprint** it sent. If not (rejected meanwhile, described by someone else, media changed mid-call), it discards the answer; a changed item is picked up again once it settles.

Then for each of `description`, `style`, `concepts`, decide who owns the field:
- **Claude owns it** when it is empty, or when it equals what Claude last applied (`bot.applied`; tag lists compared as sets). Set it to the new answer.
- **A curator owns it** otherwise. Leave it alone.

This lets a redo (media change, Try again, `--redo`) update what curators see while never touching anything a curator changed. If a curator happens to set exactly Claude's value, Claude keeps ownership, which is harmless because the values are the same.

`bot` is written (replacing any earlier one), and `describe_requested_at` and `describe_error` are removed:

```json
"bot": {
  "model": "claude-opus-5-5",
  "at": "2026-11-25T23:10:04Z",
  "applied": {"description": "…", "style": ["medium-3d-render", "light-dark-field"], "concepts": ["infrastructure"]},
  "answer": {"description": "…", "style": ["medium-3d-render", "light-dark-field", "light-backlit"], "concepts": ["infrastructure"]},
  "suggested_slugs": {"style": [{"slug": "form-ribbon", "definition": "…"}], "concepts": []},
  "images": 5,
  "media": "a1b2c3d4e5f6",
  "vocab": "9f8e7d6c"
}
```

- `applied` is exactly what this run wrote, or would have written, to each field after filtering and trimming. It is the ownership reference.
- `answer` is Claude's raw tags and description, for comparing against curators later.
- `validate_inspiration_record` gains shape checks for `bot`, `describe_error`, `describe_requested_at`, and for `description` (string), `style` and `concepts` (lists of strings) when present. Existing writers (importer, sweep, capture fix-ups) already re-read records and keep unknown keys, and the importer never touches description or tags.

### Vocabulary changes reach Inspiration

Today the Vocabulary tab's rename, merge and delete (`vocab_api.py`) only look at Library sidecars. Once Inspiration carries tags, that leaves dead slugs behind. So:
- **rename and merge** also rewrite `style` / `concepts` in inspiration records (and in `bot.applied`, so ownership survives), under `store_lock`, after the git commit succeeds; failures are reported, not rolled back (the store is outside git);
- **delete**'s "in use" check also counts inspiration records;
- `/api/inspiration` drops slugs not in the current vocabulary when reading, as a safety net (for example after another branch's rename).

### Failures and spend

Failures are sorted by `RaterError.code`:
- **Item-specific, paid** (`refusal`, `bad_output`, `max_tokens`, `bad_request`): costs one try for that item. The error is saved on the record as `describe_error: {code, message, tries, at, gave_up}`. Retried after 1 hour, 3 tries in total, then `gave_up`. The panel shows it with a **Try again** button.
- **Item-specific, local** (image can't be read or decoded, Drive file online-only, ffmpeg error on the poster): no try is used and nothing is written. The item goes into the in-memory backoff for 1 hour.
- **API-wide** (`auth`, `permission`, `rate_limit`, `overloaded`, `connection`, `server`, `not_found`): no try is used and nothing is written to the record. The whole describer pauses (1 minute, doubling to 30 minutes max), and the strip shows "Claude paused: <reason>".
- **Stop on a paid streak:** 5 paid failures in a row (any item) **stops** the describer until the workbench restarts or someone presses Try again. This catches a prompt or schema bug that would otherwise bill every item three times.
- **Unwritable record:** if writing the result or the error fails (validation, Drive offline), the item goes into the in-memory backoff for 1 hour. The backoff is keyed on `(id, fingerprint)`, so it holds even when nothing can be saved.
- **Daily cap:** at most `describe_daily_cap` calls per day (config, default 150), counted in `cache_dir()/describer-<date>.json` so restarts don't reset it. At the cap the strip says so and the describer waits for tomorrow.
- **Claude unavailable** (`rater_status()` says no key or no SDK): idle, re-check every minute, strip shows "Claude is off: <reason>".

**Cost:** a slide costs about 600 input tokens at 768 px. With effort `low`, a save is roughly 2–6 cents; the worst case for one call (16,000 output tokens) is about 32 cents. The 13 captured saves cost well under $1; all 281 would be roughly $6–17. The daily cap bounds the worst day at about $50, and realistically under $10.

### Where the code goes

- `src/quarry/describer.py` (new): `Describer` protocol, `ClaudeDescriber` (reusing rater.py's `image_block`, `api_error_code`, `RaterError`, client and model settings), `FakeDescriber`, `DescribeResult`, `media_fingerprint`, `is_describe_target`, `apply_description` (the pure merge), the prompt and schema builders, and the loop state (`DescriberLoop`: lock, settle map, backoff, pause, daily cap) written so it can be driven tick by tick in tests.
- `src/quarry/media_probe.py`: `video_frames(video, fractions, dest_dir)` next to `make_poster`.
- `src/quarry/ui/inspiration_api.py`: start/stop of the describer thread, `POST /api/inspiration/{id}/describe`, and the new fields on `/api/inspiration`.
- `src/quarry/ui/app.py`: `serve` starts the describer beside the sweeper; `create_app` accepts an injected describer.
- `src/quarry/ui/vocab_api.py`: inspiration-aware rename, merge and delete.
- `src/quarry/cli.py`: `quarry describe-inspiration [--repo PATH] [--inspiration-dir PATH] [--limit N] [--redo ID]`. `--repo` (default: current checkout) supplies `taxonomy/`.
- `src/quarry/schema.py`: the new shape checks.
- UI in `ui/src/…`, then rebuild `src/quarry/ui/static/`.
- Docs: `docs/onboarding.md` (replace "Claude does not describe or tag Inspiration yet") and `docs/operations.md`.

### API changes

- `POST /api/inspiration/{id}/describe`: sets `describe_requested_at` (and clears a stopped describer). The describer picks it up on its next scan.
- `GET /api/inspiration` adds:
  - per item: `bot` (null, or `{model, at, suggested_slugs}`) and `describe_error` (null, or `{message, tries, gave_up}`);
  - top level: `describer: {state, reason, waiting, current, holder, today, cap}` where `state` is one of `running`, `idle`, `paused`, `stopped`, `capped`, `off`, `elsewhere`; `current` is the id being described; `holder` names the window describing when `elsewhere`. `waiting` is computed from the store by any process, so it is right even in a window that isn't describing.

### UI

Inbox strip, under the Instagram strip, shown only when there is something to say:

```
Claude: describing 3 saves… (ig-dffgwfneuen now)
Claude is describing in another Quarry window (port 8790). 3 saves waiting.
Claude is off: set ANTHROPIC_API_KEY or run `ant auth login`
Claude paused: rate limit. Retrying in 2 min.
Claude stopped after 5 failed answers in a row: <reason>. [Try again]
Claude reached today's limit of 150 saves. It continues tomorrow.
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

With no description yet, the placeholder reads:
- "Claude is describing this…" only when `describer.current` is this item;
- "Waiting for Claude." when the describer is running or elsewhere;
- "Waiting for Claude (<state>: <reason>)." when it is off, paused, stopped or capped;
- "Claude could not describe this: <error>. It will try again later." or, after 3 tries, "Claude gave up: <error>." with a **Try again** button.

The Inbox already polls every 5 s, so new descriptions appear without a reload. The Style and Concepts filters and description search already exist.

### Testing

- Unit:
  - fingerprint (stable across what-was-sent, changes with media);
  - target rules (status, `bot`, fingerprint change, `describe_requested_at`, gave-up);
  - ordering by newest `captured_at`;
  - the merge (fills empty, replaces Claude-owned values compared as sets, never touches curator-changed values, filters to vocabulary, enforces facet limits, `applied` vs `answer`);
  - schema checks;
  - `video_frames` (with ffmpeg present);
  - the prompt and schema builders.
- Loop, ticked by hand with `FakeDescriber`, a temp store and a fake clock:
  - settling;
  - one-per-Mac lock (a second loop reports `elsewhere`);
  - re-check under the lock discards a stale answer;
  - error classes (paid tries and give-up, local backoff, API-wide pause, paid-streak stop);
  - unwritable record backoff;
  - daily cap across a restart;
  - the `QUARRY_FAKE_RATER` and off-switch guards.
- Vocabulary: rename, merge and delete see inspiration records.
- API: the new fields and the describe endpoint.
- UI: the strip and placeholder text as pure functions with Vitest, like `capture.test.ts`.
- One manual run against the real Drive folder on the 13 captured saves, with a screenshot.

## Left to the builder

- Exact intervals and the default daily cap can be tuned.
- Whether `ClaudeDescriber` shares a base with `ClaudeRater` or calls the shared helpers.
- The precise prompt wording, within the instructions above.
