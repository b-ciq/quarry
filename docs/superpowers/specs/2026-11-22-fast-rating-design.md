# Fast Rating — bot rates, humans check

**Date:** 2026-11-22
**Author:** Brian Christensen with Claude
**Status:** Draft for approval
**Depends on:** workbench v1 (`2026-11-22-workbench-design.md`, merged)
**Research:** `.context/fast-rating-research.md` (local notes; sources listed there)

## Intent

Intake is too slow. 183 assets sit in `proposed` with empty tags and
descriptions; 2 are confirmed. Today a curator opens each one in a full
form editor and types. The tagging bot (`skills/tag-assets`) only runs in a
chat, one asset at a time, waiting for approval.

Flip the work: **a bot rates and tags every new image; Brian and Isabelle
check its work at swipe speed** and correct it, and every correction makes
the bot's next guesses better. The model is Tinder-fast verdicts, borrowed
from AI-assisted labeling (pre-annotate, human approves/rejects/fixes) and
photo-culling tools (AI culls first, "you're checking the AI's homework").

### The decision being made

For each image, one of three verdicts:

| Verdict | Meaning | Status after a human applies it |
|---|---|---|
| **Yes** | On-brand, usable | `confirmed` (must pass `validate_sidecar`) |
| **No** | Not usable | `retired` |
| **Maybe-yes** | Promising, not ready to use | `parked` (new status) |

**Parked (decided by Brian):** out of the library — never servable, not in
search, export, or the review lanes — until someone upgrades it to Yes or
drops it to No. Anti-example stays a separate, deliberate marking for "a
style to avoid"; No is just "not usable".

## Goals

- The bot rates every `proposed` asset: verdict, a strong/unsure flag, a
  one-line reason, plus description and tags (and `tone` for backgrounds).
- Humans check in two lanes: a **grid** for the bot's strong calls (one
  keystroke accepts a whole screen) and a **card** for unsure ones (one key
  per image).
- Fixing is chip-level, never a form: drop a wrong tag, type-ahead to add.
- The bot learns from corrections without a training step: before rating,
  it sees the humans' past verdicts (and reasons) on similar images.
- A visible agreement score shows whether the bot is earning trust.

## Non-goals

- Auto-accept. The bot never changes status on its own in this version.
  Once agreement on strong calls is high, auto-accept is a later, separate
  decision (the score exists to inform it).
- Fine-tuning or a trained classifier. "Learning" is retrieval of past
  human verdicts into the prompt.
- New vocabulary from the bot. Tags are constrained to existing slugs; the
  bot may *suggest* missing slugs in a side list, never write them.
- Mobile/touch swipe gestures. Desktop keyboard first (same as workbench).
- Rating screenshots' `product_version` / `captured_at` reliably — the bot
  may guess; these remain human-checked fields.

## Anti-goals

- A second write path. Bot output and human verdicts write sidecars through
  the existing `mutate` / `validate_sidecar` path and commit like any other
  workbench edit.
- Silent bot changes. Every bot run is a commit (`rate: bot rated 40
  assets`); every bot field is visibly marked as the bot's until a human
  accepts it.
- A slow happy path. If accepting the bot's call ever needs the mouse or
  typing, the design failed.
- A new hot file. Ratings live in each asset's own sidecar so two curators
  rating at once don't conflict (git is the multi-writer system).

## Constraints

- Existing stack: FastAPI backend importing quarry modules, React + Quantic
  frontend, job runner (`src/quarry/ui/jobs.py`), one commit per logical
  action, localhost only.
- Claude API via the official `anthropic` Python SDK, new optional extra
  `rate`. Key from `ANTHROPIC_API_KEY` (or an `ant auth login` profile).
  Brian will get a CIQ key. With no credentials the workbench works as
  today and the Auto-rate button explains why it's off.
- Model: `claude-opus-5-5` by default, overridable with
  `QUARRY_RATER_MODEL`. Effort `low`. Structured output for the result.
  Rough cost: ~10k input tokens per image (the image, a few example
  thumbnails, the rubric) ≈ 4–5¢ per image, so the current 183 is ≈ $9.
  (Corrects the "cent or two" estimate in chat.)
- "Similar images" needs real embeddings. The default setup builds the
  index with the fake embedder, which makes look-alikes random. With a fake
  or missing index, the bot falls back to the most recent human verdicts as
  examples, and the UI says so ("learning from recent verdicts — build the
  real index for look-alike learning").
- Tests never call the API: a `FakeRater` is injected the way
  `FakeEmbedder` is.

## Approaches considered

**Where the bot runs**
- **A — Claude API inside the workbench (chosen by Brian).** One click,
  runs as a background job, no terminal for Isabelle. Costs an API key and
  a few cents per image.
- B — Claude Code batch job via the skill. No key, but started from a
  terminal or Conductor; breaks the "no terminal" promise.
- C — Look-alike matching only. Free and instant, but writes no tags or
  descriptions and has nothing to learn from yet (2 confirmed assets).

**Review screen**
- **A — Two lanes (chosen by Brian): grid for strong calls, card for unsure.**
  Near-identical stock heroes cost one keystroke per screen, not one each.
- B — One card at a time for everything. Simpler, slower on the easy ones.

## Design

### Data: the `rating` block (sidecar, optional)

```json
"rating": {
  "bot": {
    "verdict": "yes|no|maybe",
    "strength": "strong|unsure",
    "reason": "One line, plain English.",
    "model": "claude-opus-5-5",
    "at": "2026-11-22T18:03:00Z",
    "examples": ["adobe-1036498535", "bg-mesh"],
    "suggested_slugs": {"concepts": ["cloud"]}
  },
  "human": {
    "verdict": "yes|no|maybe",
    "by": "Isabelle <isabelle@ciq.com>",
    "at": "2026-11-22T18:10:00Z",
    "reason": "Optional; asked for only when overruling the bot."
  }
}
```

- `rating` is in `OPTIONAL_KEYS`; `validate_sidecar` checks its shape
  (verdict/strength enums) but never requires it.
- `bot.examples` records which past verdicts the bot was shown (audit and
  debugging of "why did it think that").
- The bot also writes `description`, tag axes, and `tone` (backgrounds)
  directly on the sidecar while it is `proposed`. Which fields came from the
  bot is known from `rating.bot` being present and `rating.human` absent;
  the UI marks them as bot-proposed until a human verdict lands.
- `human.by` comes from git `user.name`/`user.email`, matching commit
  authorship.
- Bot never overwrites fields on an asset that already has a human verdict
  or is not `proposed`.

### Status: `parked`

- Added to `STATUSES`. Validation treats it like `proposed` (no
  confirmed-only checks). `is_servable` already requires `confirmed`, so
  search, export and MCP exclude it with no change; verify each path.
- Transitions: `proposed → confirmed|retired|parked`;
  `parked → confirmed|retired` (via Y / N in the Parked view). The existing
  `restore` endpoint is unchanged (`retired → confirmed`); parked needs no
  restore because it moves only by a new verdict. A new verdict overwrites
  `rating.human` (git keeps the history).
- Library grid gets a **Parked (N)** facet value and a filtered view where
  Y / N work the same as in the card lane.

### The rater (`src/quarry/rate.py`)

One function, `rate_asset(repo, asset_id, rater, examples) -> RatingResult`,
and a batch driver used by the job.

Per image, the prompt contains:
1. The rubric: `taxonomy/rating-guide.md` — a short, human-edited
   "what makes a Yes / No / Maybe-yes for CIQ" page. Seeded by the builder
   from the brand intent in the main spec and the anti-examples' reasons;
   Brian and Isabelle own it after that.
2. The vocabulary (allowed slugs per axis) and class rules (tone for
   backgrounds, etc.).
3. Up to 6 examples: human-rated assets nearest in style space (DINO
   index), each as a small thumbnail + human verdict + human reason (if
   any) + tags. Fallback when no real index: the 6 most recent human
   verdicts. Include at least one Yes and one No when available. Confirmed
   anti-examples are eligible as "No"-flavored examples with their
   `avoid_reason`.
4. The image itself (downscaled to the thumb/preview size, not full-res).

Output (structured, schema-enforced): verdict, strength, reason,
description, tags per axis (enum-constrained to vocabulary), tone when
background, suggested_slugs. "Strong" is instructed as "you would bet the
curators agree"; it is not trusted blindly — the agreement score measures it.

Cache the stable prefix (rubric + vocabulary) with prompt caching; the
examples and image vary per call.

### Background job: Auto-rate

- `POST /api/rate` starts a job on the existing `JobRunner` (one job at a
  time, shared with reindex/publish). Requires a clean managed tree like
  other writes.
- Rates every `proposed` asset without `rating.bot`. `?redo=unsure`
  re-rates bot-unsure assets that have no human verdict yet (useful after
  a batch of corrections taught it more).
- Calls run with modest concurrency (builder picks, ~4). Results are
  written and committed in chunks (e.g. every 20) so a long run shows
  progress in the grid and a crash loses little: `rate: bot rated 20
  assets`.
- Job log shows per-asset verdicts and failures; failures (refusal, API
  error, invalid output) leave the asset unrated and are reported, not
  retried forever.
- After an ingest, the UI offers "Auto-rate the N new images?".

### Review screen: **Rate** view (replaces "Review queue" as the main entry)

Top bar button **Rate (N)**, N = proposed assets with a bot rating and no
human verdict. Unrated proposed assets show as "N waiting for the bot" with
an Auto-rate button.

**Lane 1 — Bot is sure (grid).** Strong calls grouped by verdict:
"Strong Yes (28)", then "Strong No (12)", then "Strong Maybe-yes (n)". Each
group shows a screen of large thumbnails (≤ ~24, fits without scrolling),
bot reason on hover. Click (or arrow + Space) toggles a tile to
**"bot is wrong"**. **Enter** applies the group's verdict to every
untoggled tile in one commit (`rate: accept 27 strong yes`); toggled tiles
drop into Lane 2 for a proper look. Yes-acceptance runs confirm validation
per asset; any that fail (e.g. missing tone) also drop to Lane 2 with the
error shown.

**Lane 2 — Bot is unsure (card).** One large image. Under it: bot verdict
+ reason, description, tag chips (bot-proposed styling).

```
┌──────────────────────────────────────────────┐
│                  [ image ]                   │
├──────────────────────────────────────────────┤
│ Bot: Maybe-yes · unsure — "on-brand palette, │
│      but stock-photo handshake feels cliché" │
│ "Two engineers at a server rack..."          │
│ [datacenter ×] [people ×] [hpc ×]  + add     │
├──────────────────────────────────────────────┤
│  Y yes   N no   M maybe-yes   T fix tags  Z undo │
└──────────────────────────────────────────────┘
```

Keys: **Y / N / M** apply a verdict and advance; **T** focuses the chip
editor (Esc returns); **D** edits the description inline; **Z** undoes the
last verdict (in either lane); **←/→** move without deciding. When the human
verdict differs from the bot's, a one-line optional "why?" field appears
inline and is skippable with Enter — those reasons are what the bot learns
the most from.

**Undo:** reverts the last verdict by writing back the prior sidecar state
as a new commit (`rate: undo yes on <id>`), never by rewriting history.

**Agreement score** (status strip in the Rate view): "Bot agreed with you
on 41 of 50 recent calls · strong calls 96%". Computed from sidecars with
both `bot` and `human` verdicts. Per-lane numbers so you can see if
"strong" means anything.

### Commits

- Human verdict on one asset: `rate: yes adobe-1036498535`.
- Grid accept: one commit for the group.
- Bot run chunks: `rate: bot rated 20 assets`.
- Undo: `rate: undo <verdict> <id>`.

### Builder-check rulings (Claude's calls; Brian to check)

1. **Every verdict counts, wherever it's made.** The shared `transition`
   path in `write_api.py` writes `rating.human` on confirm / retire / park,
   so the old Review queue and editor teach the bot too. The `tag-assets`
   skill does the same. Assets confirmed or retired before this feature
   (no `rating` block) count as human examples, verdict inferred from
   status (confirmed → yes, retired → no, confirmed anti-example → no with
   its `avoid_reason`).
2. **Yes that can't be confirmed from the card.** Some assets fail confirm
   on fields the card can't edit (dry run today: 14 Midjourney assets
   missing `generation`, 7 Figma assets missing `license`). Y still
   records `rating.human = yes`, the asset stays `proposed`, and it moves
   to a **Needs details (N)** list with the exact validator errors and an
   "Open in editor" button. It leaves the Rate queue so it never blocks
   the flow. Screenshots never enter the grid lane (always the card), so
   the bot's guessed `product_version` / `captured_at` are always seen.
3. **The bot never overwrites a non-empty field.** On first rating it
   fills only empty description / tags / tone. `?redo=unsure` updates
   only `rating.bot` (verdict, strength, reason, examples), never fields.
   So any human edit, made anywhere, survives every bot run. No per-field
   provenance needed.
4. **Rating while the bot runs is allowed.** The job writes and commits
   each chunk inside the shared `write_lock`, re-reads each sidecar and
   skips any that gained a human verdict since the job started. Human
   writes wait for the lock (a chunk commit is sub-second). Undo and grid
   accept write against the current sidecar, so bot commits landing in
   between are harmless.
5. **Newly ingested images and look-alikes.** Auto-rate does not reindex
   first. Assets missing from the style index use the most-recent-verdicts
   fallback for examples.

### What stays

- The existing Review queue / asset editor remain for deep edits (the card
  links to "open in editor"). The `tag-assets` skill stays as the
  chat-based fallback, updated to read/write the `rating` block.

## Rollout

1. Build behind the `rate` extra; no key = feature politely off.
2. Brian runs Auto-rate on the 183, works both lanes, writes the first
   rubric edits from what the bot got wrong.
3. Isabelle onboarding gains a "Rate" section in `docs/onboarding.md`.
4. Watch the agreement score; revisit auto-accept for strong calls when it
   is consistently high (separate decision).

## Left to the builder

- Exact prompt wording and the seed `rating-guide.md` (short; Brian edits).
- Concurrency level, chunk size, retry policy for 429/5xx (SDK defaults are
  fine to start).
- Frontend component structure; reuse `TagChips`, keyboard guard pattern
  from `ReviewQueue.tsx`, and `review.ts` reducer style.
- Thumbnail size sent to the API (trade cost vs. judgment; start ~512px).
- How to render "bot-proposed" styling within Quantic.
