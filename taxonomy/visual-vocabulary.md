# CIQ Visual Vocabulary — curator edition

Named style terms for CIQ imagery. Each term is a **recipe with evidence**: a
definition precise enough that two curators tag the same images the same way,
do/don't guidance, exemplar assets that realize it, and how to generate it.

A term earns its place by passing three tests:

1. **Discriminative** — it tags some images and not others ("modern" fails,
   "wireframe-mesh" passes).
2. **Visible** — no interpretation needed; if it's a feeling, it belongs in
   `concepts`, not `style`.
3. **Actionable** — you could write the Midjourney prompt fragment for it.

Terms are **descriptive, not evaluative**: a term names a look; whether that
look is on-brand is carried by which assets realize it — confirmed library
assets vs anti-examples. Tag anti-examples' styles honestly; that is how
agents learn which looks (and which combinations) to avoid.

## Facets

Slugs live flat in `taxonomy/vocabulary.json` (`style` axis); the prefix is
the facet. Per image: exactly one `medium-`, at most one `light-`, up to two
`color-`, up to two `form-`, at most one `comp-`.

| Facet | Names |
|---|---|
| `medium-` | how the image was made or rendered |
| `light-` | the lighting scheme |
| `color-` | the color treatment |
| `form-` | the dominant visual structure or texture |
| `comp-` | composition and cropping |

## Term template

```
## <slug>
**Definition:** one or two sentences a stranger could tag by.
**Do:** what makes a good instance.
**Don't:** the failure modes.
**Exemplars:** confirmed asset ids (candidates noted until confirmed).
**Avoid-examples:** anti-example ids showing this term misused.
**Generate:**
  midjourney: prompt fragment [--sref <code> when minted] [--ar …]
  flora: reference set = exemplars above
  notes: parameters, model quirks; see exemplars' `generation` blocks.
```

---

# Core terms (defined)

## light-dark-field

**Definition:** Near-black ground with the subject rendered in self-emitted
glow; light comes from the subject, not onto it. The house lighting scheme.
**Do:** one dominant hue family in the glow; true darks (not gray); glow
falls off into the field.
**Don't:** flat black backgrounds with an unlit pasted subject; two competing
glow colors of equal weight; washed-out dark gray fields.
**Exemplars (candidates, pending confirmation):** mj-particle-shield,
mj-network-light-trails, mj-holographic-checkmark, mj-quantum-threat-barrier.
**Avoid-examples:** —
**Generate:**
  midjourney: "…, dark background, self-illuminated subject, glow falloff,
  cinematic contrast" — see exemplar `generation.prompt` fields for working
  full prompts.
  flora: reference set = exemplars above.

## form-particle-field

**Definition:** The subject's shape is carried by discrete glowing particles —
sparse at the edges, dense at the core — rather than a texture applied to a
solid.
**Do:** particles form the structure; single hue family; dark field.
**Don't:** confetti multicolor; particles as background noise behind a solid
subject.
**Exemplars (candidates):** mj-particle-shield, mj-particle-firewall.
**Avoid-examples:** —
**Generate:**
  midjourney: "… dissolving into luminous particles, particle density highest
  at the core, dark background, teal glow"
  flora: reference set = exemplars above.

## form-wireframe-mesh

**Definition:** Subjects or surfaces described by visible wireframe/mesh
lines — the geometry is the rendering, not an overlay effect.
**Do:** clean line weight; mesh density carries the form; works with
light-dark-field.
**Don't:** mesh slapped over a photo; grid textures used as wallpaper.
**Exemplars (candidates):** mj-wireframe-developers, bg-mesh.
**Avoid-examples:** —
**Generate:**
  midjourney: "wireframe mesh rendering, visible topology lines, glowing
  edges on dark field"
  flora: reference set = exemplars above.

## form-glass-translucent

**Definition:** Subjects rendered as translucent glass: refraction, internal
shimmer, edge highlights; you can see into and through the form.
**Do:** macro or close crop; shallow depth; internal luminosity.
**Don't:** cheap plastic-looking transparency; glass as a literal object in a
stock photo.
**Exemplars (candidates):** mj-glass-data-chain, mj-glass-data-chain-2
(real prompt on file: "A close-up, macro shot of a glowing digital chain made
of translucent glass…").
**Avoid-examples:** —
**Generate:**
  midjourney: "macro shot, translucent glass forms, internal glow and
  refraction, shallow depth of field, dark background"
  flora: reference set = exemplars above.

## color-blue-teal

**Definition:** The palette centers on blue→teal/cyan; any second hue is a
small accent, not a co-lead.
**Do:** teal/cyan glow on dark; blue depth gradients.
**Don't:** blue-orange 50/50 "movie poster" grading (tag that
color-warm-orange too and let the pair's track record speak).
**Exemplars (candidates):** mj-waveforms-converging, mj-network-light-trails,
bg-wave.
**Avoid-examples:** —
**Generate:**
  midjourney: "teal and cyan glow, deep blue gradient, dark background"

## comp-negative-space

**Definition:** A deliberate empty region (≥ roughly a third of the frame)
that could hold copy; the subject yields space rather than filling the frame.
**Do:** subject weighted to one side; the empty side truly calm.
**Don't:** busy texture pretending to be empty; centered subjects with thin
margins.
**Exemplars (candidates):** mj-grid-road-calm-path.
**Avoid-examples:** —
**Generate:**
  midjourney: "subject right third, large calm negative space left, room for
  text --ar 16:9"
  notes: decks need left- and right-handed variants; generate both.

---

# Stub terms (slugs live in vocabulary.json; define as first tagged examples accumulate)

- **medium-photo** — straight photography (incl. stock). / **medium-3d-render** —
  CG-rendered scenes and objects. / **medium-flat-illustration** — flat vector
  illustration. / **medium-line-art** — line-drawn, minimal fill.
- **light-soft-studio** — even diffused studio light (lifestyle/headshots). /
  **light-backlit** — rim-lit subject against brighter ground. /
  **light-high-key** — bright field, light tones (the light-tone counterpart
  to dark-field).
- **color-neon-accent** — saturated neon highlights on a muted base. /
  **color-duotone** — two-ink treatment. / **color-monochrome** — single-hue
  or grayscale. / **color-muted-natural** — desaturated realistic color
  (lifestyle). / **color-warm-orange** — warm orange/amber lead.
- **form-circuit-trace** — circuit-board line patterns. / **form-light-trails** —
  long-exposure-style light paths. / **form-wave-flow** — flowing wave/ribbon
  surfaces. / **form-geometric-grid** — regular geometric lattices, roads,
  grids. / **form-bokeh-depth** — heavy defocus discs carrying the depth
  (often co-tags with generic stock looks — honest tagging here is what makes
  anti-examples teachable).
- **comp-centered-subject** — hero centered, symmetric weight. /
  **comp-macro-detail** — extreme close-up, detail as subject. /
  **comp-wide-environment** — wide scene, subject small in context.

---

# Midjourney style references (srefs)

Mint one `--sref` per core look by feeding MJ 3–5 confirmed exemplars; record
it here. An sref is the single highest-leverage consistency tool we have.

| Look | sref | Minted from | Date |
|---|---|---|---|
| light-dark-field + form-particle-field | — | | |
| form-glass-translucent | — | | |
| form-wireframe-mesh | — | | |

# Maintenance

- The rate bot proposes style tags from this controlled list and routes gaps
  to `suggested_slugs` — review those regularly; promote a suggestion when
  roughly five images want it.
- Prune by firing rate: a term on >60% of the corpus is too broad (split it);
  a term at ~0% after 100 images is dead (cut it).
- Rename/merge via the workbench Vocabulary panel (it rewrites sidecars).
- This is the curator edition and may cite inspiration material once the
  inspiration corpus lands. The served edition (`exports/`) must anchor terms
  only with CIQ library assets.
