# Quarry — Agent-First Brand Library for CIQ

**Date:** 2026-11-22
**Author:** Brett Christensen (bchristensen@ciq.com) with Claude
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

- **Brett (brand steward)** — operates quarry through Claude Code: ingest,
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
- Generation in the first two phases.
- Automated harvesting bots for Pinterest/Instagram (semi-manual collection
  with agent tagging on arrival is fine and avoids ToS trouble).

## Anti-goals (failure even if it "works")

- Inspiration images leaking into anything marketing can grab or a builder
  can place. The partition must be structural, not a tag.
- A taxonomy so large or ad-hoc that tagging becomes inconsistent —
  the vocabulary is controlled and admin-edited, like the deck builder's
  `vocab` block today.
- Assets served without license/provenance metadata.
- A system only Brett can operate.

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
    vocabulary.json         # controlled tag axes (admin-edited)
    visual-vocabulary.md    # the living brand vocabulary document
  index/                    # gitignored; rebuilt from sidecars + embeddings
    quarry.db               # SQLite + sqlite-vec
  skills/                   # Claude Code skills (ingest, tag, curate, search)
  server/                   # MCP server
  exports/                  # generated consumer views (e.g. deck-builder manifest)
```

**The partition is structural:** the MCP server and all consumer-facing
query paths mount `library/` only. `inspiration/` is reachable solely
through curator skills run in this repo. (Builder's call on exact
enforcement: separate server tool namespaces at minimum; the production
search code never indexes `inspiration/`.)

### Metadata schema (sidecar JSON, superset of deck-builder entry)

Per asset: `id`, `file`, `status` (proposed|confirmed), `class` (hero |
spot-illustration | background | screenshot | diagram | lifestyle),
`products[]`, `categories[]`, `verticals[]`, `concepts[]`, `tone`,
`aspect`, `description` (required when confirmed), **`license`** (required:
e.g. adobe-stock:<license-id>, ciq-original, midjourney, commissioned),
`source` (where it came from, when ingested), `style[]` (vocabulary terms —
links assets to the visual vocabulary), and optional `usage_restrictions`
(empty today; reserved for future restricted classes like employee
portraits — the server excludes restricted assets from general serving).
Inspiration sidecars add
`source_url`, `saved_because`, and never carry a servable license.

`taxonomy/vocabulary.json` extends the deck builder's current vocab
(products/categories/verticals seeded from its manifest) with `concepts`
and `style` axes. Vocabulary edits are curator-only; tagging validates
against it, exactly like `image_library.py` does today.

### Index & search

- SQLite database rebuilt deterministically from sidecars (`quarry index`).
- Embeddings: SigLIP (or equivalent image-text model) per asset for
  text→image search ("lonely server room at night") and image→image
  similarity; stored in sqlite-vec. Clustering over inspiration embeddings
  proposes style groupings the curator names into vocabulary terms — this
  is the vocabulary-building engine.
- Structured filters (class, product, tone, license, status) combine with
  vector search. Model choice and exact pipeline left to builder.

### Serving

- **MCP server** (`server/`): tools like `search_assets`, `get_asset`
  (returns image + metadata), `list_vocabulary`. Confirmed, licensed,
  `library/` assets only. Runs locally for Brett; hosted (CIQ infra —
  builder/implementation decides where) for marketing's Claude Desktop.
  Phase 1 may start local-only.
- **Python API**: the deck builder (and future builders) import or shell to
  quarry for lookup. Near-term bridge: `exports/` generates the deck
  builder's existing `manifest.json` format so decks work with zero
  deck-builder changes; direct querying replaces that later.
- **File delivery** (Claude's call): an MCP image inlined in chat isn't a
  usable deliverable, so `get_asset` returns metadata + preview **plus a
  fetchable full-res reference** — a local path when the server runs
  locally, a signed download URL from a lightweight authenticated file
  endpoint when hosted. Builder skills (deck builder etc.) place files
  directly and don't need this path.
- **Deck builder distribution**: the deck builder is a skill marketing
  installs, with assets bundled inside it. The export bridge therefore
  includes a **re-bundle/publish step** (regenerate manifest + copy
  confirmed images into the skill bundle) whenever quarry's confirmed set
  changes, until builders query quarry directly. Bundle size caps how many
  assets ride along — another reason direct querying replaces the bridge.

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

`taxonomy/visual-vocabulary.md` is the deliverable the whole inspiration
side exists for: named style terms (e.g. "mono-duotone photography",
"wireframe-mesh backgrounds"), each with a definition, do/don't guidance,
linked inspiration examples, and linked CIQ assets that realize the term.
Embedding clusters propose candidate terms; the curator names, merges, and
prunes. Builders and (later) generation consume this document as the brand
contract.

### Phases

1. **DAM core** — repo scaffold, schema, taxonomy seed from deck-builder
   vocab, ingest skills for Figma/Adobe Stock/Midjourney, index + search,
   local MCP server, deck-builder manifest export. Success: Brett finds any
   production asset by asking; deck builder consumes the export.
2. **Inspiration + vocabulary** — inspiration ingest, clustering,
   `visual-vocabulary.md` v1; hosted MCP so marketing self-serves. Success:
   a marketing person in Claude Desktop gets the right image in one ask;
   vocabulary doc exists with ≥ a handful of named, example-anchored terms.
3. **Generation** — per-class exemplar files, generation skills gated by the
   vocabulary, pre-delivery checks, gap-logging loop (Ramp pattern).
   Scoped in its own design doc when phase 2 stabilizes.

## Decided (and by whom)

- Approach A over B/C — Brett.
- Access is agent-first (Claude Desktop / MCP), no web UI — Brett.
- Quarry is the system of record; Figma/Adobe Stock/Midjourney stay as
  sources, not storage — Brett (sources named), Claude (system-of-record
  call).
- Git LFS first, bucket only if scale demands — Claude's call. Corpus is
  under ~500 images today (Brett), so LFS is comfortable for phase 1.
- Licensing: stock images are org-wide-use at CIQ; no per-person or per-use
  restrictions today — Brett. Future employee portraits WILL carry usage
  restrictions, so the schema includes an optional `usage_restrictions`
  field from day one and the server filters on it; no restricted assets
  exist until portraits arrive.
- Seed taxonomy from the deck builder's existing vocab; export bridge keeps
  the deck builder unchanged initially — Claude's call.
- Hard structural partition of inspiration vs production — Brett (copyright
  requirement), structure Claude's call.
- Phasing DAM → vocabulary → generation — Claude's call, Brett saw and
  approved the ordering in approach A.

## Deferred decisions

- **Hosted-server auth** (who may connect: all CIQ vs. marketing; SSO vs.
  shared key) — policy decision, needed before phase 2 planning, not before.
- **Curator redundancy** (Claude's call for now): phases 1–2 assume Brett is
  the sole curator; skills are documented and deterministic so another
  technical person could take over. Curation from Claude Desktop (no
  terminal) is a possible later addition, not a phase 1–2 requirement.

## Left to the builder

- Embedding model choice and indexing pipeline details.
- MCP server framework and tool signatures; hosting target for phase 2.
- Exact sidecar JSON schema details and validation implementation.
- Figma/Adobe Stock/Midjourney export mechanics.
- Clustering method for vocabulary proposals.
- Repo hygiene: LFS patterns, index gitignore, CI validation of sidecars.
