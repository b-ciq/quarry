---
name: tag-assets
description: Curate quarry brand assets. Use when asked to tag, review, describe, or confirm proposed assets in the quarry library (sidecars with status=proposed).
---

# Tag assets (quarry curation)

Run from the quarry repo root. You propose; the curator decides.

## Steps

1. Find proposed sidecars: `grep -l '"status": "proposed"' $(find library -name '*.json')`.
2. For each sidecar, Read the image next to it (`<id>.<ext>`) and the sidecar JSON.
3. Read `taxonomy/rating-guide.md` (the curators' rubric for Yes / No / Maybe-yes) and `taxonomy/vocabulary.json`. Fill `description` (one or two plain sentences of what the image shows) and tag axes `products`, `categories`, `verticals`, `concepts`, `style`.
4. Show the curator the proposal (id, description, tags). Wait for a reply.
5. Only on explicit curator approval for that asset, set `"status": "confirmed"` and write `rating.human` in the same change. Otherwise leave it `proposed`. If the curator says Maybe-yes, set `"status": "parked"` (out of the library until upgraded or dropped) with `rating.human.verdict` `"maybe"`.
6. End every session: `quarry validate`, then `quarry publish`. Fix any validate error before publishing.

## Rules (these match `src/quarry/schema.py`)

- Tags come ONLY from the slugs in `taxonomy/vocabulary.json`. Never invent a slug inline. If something is missing, list the proposed new slug(s) to the curator separately, at the end; do not write them to a sidecar or edit the vocabulary unasked. An unknown slug fails validation on confirmed assets.
- `description` is required and non-empty for confirmed assets. `license` and `source.origin` / `source.ingested_at` must also be set (ingest fills these; do not change them).
- `class` is fixed at ingest. Do not reclassify without curator approval.
- `background`: `tone` is required (`dark` or `light`). `tone` is NOT allowed on any other class.
- `screenshot`: `product_version` and `captured_at` are required. Ask the curator if you cannot read them from the image.
- Midjourney-sourced assets need `generation` with `prompt`, `model`, `seed`. Ask the curator; never guess.
- `usage_restrictions` non-empty means the asset is never served, even when confirmed. Do not edit it.
- Anti-examples (`"anti_example": true`) show what NOT to do. Confirmed ones need `avoid_reason`: the trait to avoid and what to do instead. They need no `license` and are never served. Mark or unmark an asset as an anti-example only on curator instruction. Tag their `style` honestly; that is how agents learn which styles to avoid.
- `rating.human` = `{"verdict": "yes"|"no"|"maybe", "by": "Name <email>" (from `git config user.name` / `user.email`), "at": UTC ISO seconds ending in `Z`, "reason": optional}`. Write it only with a status change the curator approved (No -> `retired`). Never touch `rating.bot`; the workbench's bot owns it.
- Retire with `"status": "retired"`. Never delete an asset or sidecar.
- Keep ids kebab-case and the file named `<id><ext>`; do not rename.
