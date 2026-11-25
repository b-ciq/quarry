# Quarry — Agent-First Brand Library for CIQ

**Date:** 2026-11-22
**Author:** Brian Christensen (bchristensen@ciq.com) with Claude
**Status:** Draft for approval

## Intent

Quarry is CIQ's canonical, agent-operated visual asset system. It does three
jobs, in order of build priority:

1. **DAM** — one organized, tagged, searchable library of CIQ's real
   production imagery (hero images, spot illustrations, branded backgrounds,
   product screenshots for every CIQ product, technical and concept
   diagrams), served to marketing and to builder tools so they can self-serve.
2. **Inspiration collector** — a separate corpus of examples harvested from
   Pinterest, Instagram, and the web, auto-categorized and tagged by AI, used
   to define and refine CIQ's visual vocabulary. Inspiration is reference
   only — never shipped, due to copyright and because CIQ wants a unique take.
3. **Vocabulary → generation** — a written, example-anchored brand visual
   vocabulary distilled from both corpora, refined over time, that eventually
   drives on-brand generation of new assets (the Ramp "Brand as
   Infrastructure" pattern: designer-made exemplars + per-format skills +
   automated checks; taste stays human, repetition becomes software).

### Why

- Marketing currently can't self-serve imagery; assets are scattered across
  Figma, an Adobe Stock collection, and Midjourney, with no index.
- The Quantic deck builder (and future builders: solution briefs, web pages)
  needs a shared image source instead of a tarball bundled per skill. Today
  the deck builder's library holds 2 images and 8 backgrounds.
- CIQ's look and feel is being defined now; a tagged inspiration corpus plus
  a controlled vocabulary makes that definition repeatable and refinable
  instead of living in one person's head.

### Who uses it

- **Brian (brand steward)** — operates quarry through Claude Code: ingest,
  tag, curate, define vocabulary.
- **Marketing** — consumes through Claude Desktop (or any MCP-capable agent):
  "find me a dark background for a Fuzzball deck" and get files back. No
  terminal, no web UI required.
- **Builder tools** — the Quantic deck builder and future builders query
  quarry programmatically for confirmed assets.

## Goals

- One source of truth for all CIQ visual assets, with every asset carrying
  structured metadata (taxonomy tags, description, license/provenance).
- Search that works the way people ask: by product, concept, mood, kind,
  tone, and visual similarity ("more like this one").
- Marketing self-serve via Claude Desktop with zero new UI to learn.
- The deck builder keeps working day one; its manifest becomes a consumer
  view of quarry, not a separate library.
- A living visual-vocabulary document grounded in tagged examples.
- Everything inspectable and versioned: files + sidecars + git, no SaaS
  lock-in.

## Non-goals

- A web UI for browsing (agent access covers the stated need; a UI can be
  added later without rearchitecting because the data is files + an index).
- Replacing Figma as a design workspace or Adobe Stock as a licensing source.
- Generation before the vocabulary stabilizes (it's the final phase).
- Automated harvesting bots for Pinterest/Instagram (semi-manual collection
  with agent tagging on arrival is fine and avoids ToS trouble).

## Anti-goals (failure even if it "works")

- Inspiration images leaking into anything marketing can grab or a builder
  can place. The partition must be structural, not a tag.
- A taxonomy so large or ad-hoc that tagging becomes inconsistent —
  the vocabulary is controlled and admin-edited, like the deck builder's
  `vocab` block today.
- Assets served without license/provenance metadata.
- A system only Brian can operate.

## Constraints

- Production sources today: a subset in **Figma** (API export is clean), a
  collection in **Adobe Stock** (download via license history; license
  metadata must come along), and generations in **Midjourney** (archive
  export). Inspiration sources: **Pinterest** and **Instagram** boards/saves.
- Consumers use **Claude Desktop / MCP**; the serving layer must be an MCP
  server (remote for marketing) and a Python-importable library (for builder
  skills like the deck builder).
- Must interoperate with the existing Quantic deck builder, whose
  `image_library.py` validates a manifest with kinds
  (`background|hero|lifestyle`), hero subkinds
  (`screenshot|diagram|conceptual`), roles, tones, a `proposed→confirmed`
  status workflow, and vocab axes (`products`, `categories`, `verticals`).
- Relationship to the Quantic design hub/design system is intentionally
  loose for now: quarry owns imagery; Quantic owns tokens/components/layout.
  The vocabulary doc should reference Quantic tokens where they overlap
  (color, type) rather than duplicate them.

## Approaches considered

- **A — Agent-first library repo (chosen).** A git repo as the system of
  record: metadata, sidecars, taxonomy, and skills in git; large binaries in
  git LFS initially (bucket later if scale demands); SQLite + vector
  embeddings as a rebuildable search index; an MCP server for consumers.
  Chosen because it is agent-native, versioned, extends the proven
  deck-builder manifest pattern, and has no per-seat cost or schema lock-in.
- **B — Buy the DAM, build the brain.** Frontify/Air for storage and
  serving (Frontify ships an MCP server), custom collector + vocabulary on
  top. Rejected: generic tagging, taxonomy trapped in vendor schema, awkward
  inspiration/production partition, agents second-class, per-seat cost. Only
  worth revisiting if marketing later needs a visual browsing UI.
- **C — Grow it inside the deck builder.** Rejected: a tarball inside one
  skill can't be shared by future builders or Claude Desktop, and an
  inspiration corpus doesn't belong in a distributed bundle.

## Design

### Repo layout (system of record)

```
quarry/
  library/                  # PRODUCTION — the DAM. Servable.
    heroes/  spots/  backgrounds/  screenshots/<product>/  diagrams/  lifestyle/
    <asset>.png + <asset>.json    # sidecar: metadata (schema below)
  inspiration/              # REFERENCE ONLY — never served to consumers.
    <source>/<board-or-theme>/
    <item>.jpg + <item>.json      # sidecar incl. source URL, why saved
  taxonomy/
    vocabulary.json         # controlled tag axes — THE single writable vocab
    visual-vocabulary.md    # curator edition (may link inspiration)
  exports/visual-vocabulary.md  # served edition (CIQ assets only, generated)
  index/                    # gitignored; rebuilt from sidecars + embeddings
    library.db              # production index — the ONLY db that ships/hosts
    inspiration.db          # inspiration index — never leaves this repo
  skills/                   # Claude Code skills (ingest, tag, curate, search)
  server/                   # MCP server
  exports/                  # generated consumer views (e.g. deck-builder manifest)
```

**The partition is structural — not delegated to the builder:**

- Two indexes. `library.db` holds only `library/` assets; `inspiration.db`
  is built and queried only by curator skills in this repo. The hosted
  deployment is built from `library/` artifacts + `library.db` + the served
  vocabulary edition — inspiration content physically isn't present, so a
  tool-routing bug or prompt injection cannot serve it.
- Two vocabulary editions. The curator edition may link inspiration
  examples. The **served** edition (`exports/visual-vocabulary.md`) anchors
  every term only with CIQ `library/` assets; a term with no production
  anchor yet is listed as "aspirational — no production anchor." It is
  generated, and CI rejects it if it contains `inspiration/` paths or
  pinterest/instagram/x.com URLs.
- Inspiration binaries stay out of the shared remote (private store or
  narrower-access LFS bucket; sidecar metadata may live in git), so cloning
  the repo is not itself redistribution of copyrighted material.

### Metadata schema (sidecar JSON)

Per asset: `id`, `file`, `status` (proposed | confirmed | **retired** —
retired entries stay in history, every serving path excludes them), `class`
(hero | spot-illustration | background | screenshot | diagram | lifestyle),
`products[]`, `categories[]`, `verticals[]`, `concepts[]`, `tone`
(dark|light, backgrounds only), `aspect`, `description` (required when
confirmed), **`license`** (required: e.g. adobe-stock:<license-id>,
ciq-original, midjourney, commissioned) with optional `license_expiry`,
`source` (origin + ingest date), `style[]` (vocabulary terms — links assets
to the visual vocabulary), and optional `usage_restrictions` (empty today;
reserved for future restricted classes like employee portraits).

Class-specific requirements:

- `screenshot`: **`product_version` and `captured_at` required** — product
  UI rots; without these, stale screenshots are unfindable. Operations
  include a per-release checklist item: query screenshots by product,
  re-capture or retire.
- Midjourney-sourced assets: capture `prompt`, `model`, and seed at ingest
  (the archive export has them; phase 3 generation needs to know how the
  good ones were made).

**`usage_restrictions` is enforced at every consumer-facing exit** — MCP
serving, Python API default queries, `exports/` generation, re-bundle —
via one shared filter function, with a CI test that a restricted fixture
never appears in any generated export. Not just the server.

Inspiration sidecars add `source_url`, `saved_because`, and never carry a
servable license.

**`taxonomy/vocabulary.json` is the only writable vocabulary from phase 1
on.** It seeds from the deck builder's current vocab
(products/categories/verticals) and adds `concepts` and `style` axes. The
deck builder's bundled vocab block becomes generated output of the export
(emitted together with the images so they can't skew), and the deck-builder
repo gets a note saying so. Vocabulary edits are curator-only; tagging
validates against it, exactly like `image_library.py` does today.

### Index & search

- SQLite databases rebuilt deterministically from sidecars (`quarry index`).
- **Two embedding models, by role** (a design decision, not the builder's —
  the vocabulary loop's feasibility depends on it): SigLIP (image-text) for
  text→image retrieval ("lonely server room at night"); a DINO-family model
  (pure visual) for style similarity and clustering — CLIP-family
  embeddings cluster by subject, not style, which is exactly the wrong
  behavior for vocabulary work.
- Hybrid search: FTS5 (BM25) over ids/descriptions/tags combined with
  vector search and structured filters (class, product, tone, license,
  status) — exact-term asks ("the Fuzzball GA hero") are where pure vector
  search fails.
- **Tagging trust**: before auto-tags are trusted in the index, a small
  ground-truth eval set (~50 hand-tagged assets) measures VLM tagging
  accuracy against the controlled vocabulary (the Microsoft ISE pattern
  from the research).

### Serving

- **MCP server** (`server/`): tools like `search_assets`, `get_asset`
  (metadata + small thumbnail preview — full-res only ever by
  reference/URL, so a 500-asset library doesn't eat the conversation's
  context), `list_vocabulary` (serves the served vocabulary edition only).
  Confirmed, licensed, unrestricted `library/` assets only. Runs locally
  for Brian in phase 1; hosted for marketing in phase 1.5.
- **File delivery** (Claude's call): an MCP image inlined in chat isn't a
  usable deliverable, so `get_asset` returns metadata + thumbnail **plus a
  fetchable full-res reference** — a local path when the server runs
  locally, a signed download URL from a lightweight authenticated file
  endpoint when hosted.
- **Marketer onboarding**: the hosted connector is distributed as an
  org-level Claude Desktop MCP configuration, not per-person setup — named
  in phase 1.5 scope.

### Reaching decks (the path that must not dead-end)

The deck builder is a skill marketing installs with assets bundled inside;
its `image_library.py` resolves images only from the bundled manifest. A
file a marketer downloads via MCP is invisible to it — so MCP chat delivery
alone does NOT satisfy "self-serve into deliverables." Two mechanisms,
sequenced:

1. **Phase 1 — export bridge.** `exports/` generates the deck builder's
   `manifest.json` + image set; the publish pipeline re-bundles them into
   the skill. Mapping table (quarry class → deck-builder entry):

   | quarry class | kind | subkind | role | tone |
   |---|---|---|---|---|
   | background | background | — | background | required dark\|light |
   | hero | hero | conceptual | foreground | stripped |
   | screenshot | hero | screenshot | foreground | stripped |
   | diagram | hero | diagram | foreground | stripped |
   | lifestyle | lifestyle | — | foreground | stripped |
   | spot-illustration | **spot** (new kind) | — | foreground | stripped |

   `spot-illustration` has no deck-builder kind today, and small inline art
   is a named requirement — so phase 1 includes a small, owned extension to
   the deck builder's `KINDS` (add `spot`) rather than silently dropping
   the class. The exporter flattens `screenshots/<product>/x.png` into
   unique root filenames (the validator's orphan check iterates flat) and
   projects/strips fields to satisfy `validate_manifest` exactly; CI runs
   the deck builder's own validator against every export.
2. **Phase 1.5 — quarry-aware deck builder.** `image_library.py` learns to
   resolve an id not found in the bundle by querying quarry (local clone or
   hosted MCP, with a synced cache dir). This replaces re-bundle-and-
   reinstall as the freshness mechanism; the bundle becomes a snapshot
   fallback carrying an export timestamp the skill can report when stale.

**Acceptance test for self-serve (phase 1.5 exit): a marketer's ask in
Claude Desktop ends with the image placed in a generated deck** — not
merely downloaded.

### The publish pipeline (consistency by construction)

Sidecars, two indexes, exports, served vocabulary, and the skill bundle are
five representations with one human operator — drift is the steady state
unless publishing is atomic. One command, `quarry publish`, runs
all-or-nothing: validate sidecars → rebuild indexes → regenerate exports +
served vocabulary → re-bundle deck-builder assets → (phase 1.5+) redeploy
hosted data, stamping one version into the export and bundle. CI fails when
`exports/` is stale relative to sidecars. Operations doc says when to run
it: after every curation session.

### Ingestion (per source, semi-manual + agent tagging)

1. **Figma** — export via Figma API from designated library pages/frames.
2. **Adobe Stock** — download licensed assets from license history; capture
   license IDs into sidecars.
3. **Midjourney** — archive export; tag provenance `midjourney`.
4. **Pinterest/Instagram (inspiration)** — manual save to a drop folder (or
   board export where possible); an ingest skill moves files into
   `inspiration/`, auto-tags with Claude vision against the vocabulary,
   records source URLs.

Every ingest path funnels through one skill: dedupe (content hash), tag
proposal by Claude vision constrained to the controlled vocabulary, sidecar
written as `proposed`; curator review flips to `confirmed`.

### The vocabulary loop (phase 2 core)

The visual vocabulary is the deliverable the whole inspiration side exists
for: named style terms (e.g. "mono-duotone photography", "wireframe-mesh
backgrounds"), each with a definition, do/don't guidance, linked examples,
and linked CIQ assets that realize the term. Two editions (see partition):
the curator edition may cite inspiration; builders and generation consume
only the served edition.

**The v1 loop is curator-led, not clustering-led.** At a few hundred
semi-manually collected images, embedding clusters group by subject, not
style — unusable as the primary engine. Instead: seed style terms from the
standard style dimensions (lighting, cropping, texture, color treatment,
illustration language), VLM-tag the corpus against that controlled enum,
and let the curator refine terms from tag co-occurrence and browsing.
DINO-embedding clustering is a **discovery assist** that proposes candidate
groupings; revisit it as a primary proposal source when the inspiration
corpus passes ~1–2k items.

### Phases

Marketing self-serve is the #1 pain, so hosting is its own phase and is not
chained to inspiration/vocabulary work.

1. **DAM core** — repo scaffold, schema + validation, taxonomy seed from
   deck-builder vocab (quarry becomes the writable vocab), ingest skills
   for Figma/Adobe Stock/Midjourney, hybrid index + search, local MCP
   server, `quarry publish` pipeline incl. deck-builder export + the `spot`
   kind extension. Success: Brian finds any production asset by asking; a
   published export passes the deck builder's own validator and renders in
   a real deck. **The hosted-auth policy conversation with CIQ IT starts
   during this phase.**
2. **Phase 1.5: Hosted self-serve** — hosted MCP + authenticated file
   endpoint, org-level Claude Desktop connector rollout, quarry-aware deck
   builder (bundle fallback → quarry query). Success: **a marketer's ask in
   Claude Desktop ends with the image placed in a generated deck.**
3. **Inspiration + vocabulary** — inspiration ingest + partition
   infrastructure, curator-led vocabulary v1 (clustering as discovery
   assist), served vocabulary edition + CI leak checks. Success: vocabulary
   exists with ≥ a handful of named terms, each anchored by CIQ assets or
   explicitly marked aspirational.
4. **Generation** — per-class exemplar files, generation skills gated by the
   vocabulary, pre-delivery checks, gap-logging loop (Ramp pattern).
   Scoped in its own design doc when the vocabulary stabilizes.

## Decided (and by whom)

- Approach A over B/C — Brian.
- Access is agent-first (Claude Desktop / MCP), no web UI — Brian.
- Quarry is the system of record; Figma/Adobe Stock/Midjourney stay as
  sources, not storage — Brian (sources named), Claude (system-of-record
  call).
- Git LFS first, bucket only if scale demands — Claude's call. Corpus is
  under ~500 images today (Brian), so LFS is comfortable for phase 1.
- Licensing: stock images are org-wide-use at CIQ; no per-person or per-use
  restrictions today — Brian. Future employee portraits WILL carry usage
  restrictions, so the schema includes an optional `usage_restrictions`
  field from day one, enforced at every consumer-facing exit; no restricted
  assets exist until portraits arrive.
- Seed taxonomy from the deck builder's existing vocab; export bridge keeps
  the deck builder unchanged initially — Claude's call.
- Hard structural partition of inspiration vs production — Brian (copyright
  requirement), structure Claude's call.
- Phasing DAM → hosted self-serve → vocabulary → generation — Claude's
  call, revised after adversarial review to pull marketing self-serve ahead
  of inspiration/vocabulary work.
- Deck-builder `spot` kind extension, quarry-aware fallback resolution, and
  the `quarry publish` atomic pipeline — Claude's calls from the
  adversarial review (full review: `.context/adversarial-review.md`).

## Deferred decisions & accepted risks

- **Hosted-server auth** (who may connect: all CIQ vs. marketing; SSO vs.
  shared key) — policy decision; the conversation starts during phase 1 so
  it can't stall phase 1.5.
- **Single-curator risk (accepted, with trigger):** phases 1–1.5 assume
  Brian is the sole curator and operator; the `quarry publish` pipeline and
  operations doc keep the procedure out of one person's head, but if Brian
  is unavailable, ingest/curation freeze. Accepted short-term; **trigger: a
  second trained operator before phase 1.5 exit.** Curation from Claude
  Desktop (no terminal) is a possible later addition, not a requirement.

## Left to the builder

- Indexing pipeline details and exact model checkpoints (roles are fixed:
  SigLIP-family for retrieval, DINO-family for style similarity).
- MCP server framework and tool signatures; hosting target for phase 1.5.
- Exact sidecar JSON schema details and validation implementation.
- Figma/Adobe Stock/Midjourney export mechanics.
- Clustering method used by the discovery assist.
- Repo hygiene: LFS patterns, index gitignore.
