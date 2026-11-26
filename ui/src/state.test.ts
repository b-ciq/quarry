import { describe, expect, it } from 'vitest'
import { applyFilters, facetCounts, nextImgSrc, ReloadGuard, resolveHits, vocabCounts, vocabGroups, type Asset } from './state'

const mk = (o: Partial<Asset> & { id: string }): Asset => ({
  file: `${o.id}.png`,
  status: 'proposed',
  class: 'background',
  products: [],
  categories: [],
  verticals: [],
  concepts: [],
  style: [],
  aspect: '16:9',
  license: 'ciq-original',
  source: { origin: 'seed', ingested_at: '', sha256: '' },
  usage_restrictions: [],
  description: '',
  thumb_url: `/thumbs/${o.id}.webp`,
  full_url: `/files/${o.id}`,
  ...o,
})

const A = mk({ id: 'a', class: 'lifestyle', status: 'confirmed', products: ['fuzzball', 'rocky'], concepts: ['hpc'], description: 'Scientist at a Workstation' })
const B = mk({ id: 'b', products: ['rocky'], tone: 'dark', concepts: ['security'] })
const C = mk({ id: 'c', status: 'retired', products: ['warewulf-pro'], license: 'licensed' })
const all = [A, B, C]
const ids = (xs: Asset[]) => xs.map((x) => x.id)

describe('applyFilters', () => {
  it('returns everything with no filters and empty q', () => {
    expect(ids(applyFilters(all, {}, ''))).toEqual(['a', 'b', 'c'])
  })
  it('ORs values within one axis', () => {
    expect(ids(applyFilters(all, { status: ['confirmed', 'retired'] }, ''))).toEqual(['a', 'c'])
  })
  it('ANDs across axes', () => {
    expect(ids(applyFilters(all, { status: ['confirmed', 'proposed'], product: ['rocky'] }, ''))).toEqual(['a', 'b'])
    expect(ids(applyFilters(all, { class: ['lifestyle'], product: ['rocky'], tone: ['dark'] }, ''))).toEqual([])
  })
  it('matches multi-valued axes if any value overlaps', () => {
    expect(ids(applyFilters(all, { product: ['fuzzball', 'warewulf-pro'] }, ''))).toEqual(['a', 'c'])
    expect(ids(applyFilters(all, { concepts: ['security'] }, ''))).toEqual(['b'])
  })
  it('treats an empty value list as no constraint', () => {
    expect(ids(applyFilters(all, { status: [] }, ''))).toEqual(['a', 'b', 'c'])
  })
  it('excludes assets missing the axis value (tone)', () => {
    expect(ids(applyFilters(all, { tone: ['dark'] }, ''))).toEqual(['b'])
  })
  it('filters on license', () => {
    expect(ids(applyFilters(all, { license: ['licensed'] }, ''))).toEqual(['c'])
  })
  it('q is a case-insensitive substring over id, description, tags', () => {
    expect(ids(applyFilters(all, {}, 'WORKSTATION'))).toEqual(['a'])
    expect(ids(applyFilters(all, {}, 'warewulf'))).toEqual(['c'])
    expect(ids(applyFilters(all, {}, 'rocky'))).toEqual(['a', 'b'])
    expect(ids(applyFilters(all, {}, '  secur '))).toEqual(['b'])
  })
  it('combines q with filters (AND)', () => {
    expect(ids(applyFilters(all, { product: ['rocky'] }, 'workstation'))).toEqual(['a'])
    expect(ids(applyFilters(all, { status: ['retired'] }, 'workstation'))).toEqual([])
  })
  it('does not mutate input', () => {
    const copy = [...all]
    applyFilters(all, { status: ['retired'] }, 'c')
    expect(all).toEqual(copy)
  })
})

describe('facetCounts', () => {
  it('counts scalar axes, sorted by count desc then value', () => {
    expect(facetCounts(all, 'status')).toEqual([
      { value: 'confirmed', count: 1 },
      { value: 'proposed', count: 1 },
      { value: 'retired', count: 1 },
    ])
    expect(facetCounts(all, 'class')).toEqual([
      { value: 'background', count: 2 },
      { value: 'lifestyle', count: 1 },
    ])
  })
  it('counts each value of multi-valued axes once per asset', () => {
    expect(facetCounts(all, 'product')).toEqual([
      { value: 'rocky', count: 2 },
      { value: 'fuzzball', count: 1 },
      { value: 'warewulf-pro', count: 1 },
    ])
  })
  it('skips assets without a value (tone)', () => {
    expect(facetCounts(all, 'tone')).toEqual([{ value: 'dark', count: 1 }])
  })
  it('returns [] for empty input', () => {
    expect(facetCounts([], 'class')).toEqual([])
  })
})

describe('vocabCounts', () => {
  it('counts every status, keeps vocabulary order, zero for unused slugs', () => {
    const vocab = { products: ['rocky', 'fuzzball', 'unused'], concepts: ['hpc', 'security'], other: ['x'] }
    const r = vocabCounts(all, vocab)
    expect(r.products).toEqual([{ slug: 'rocky', count: 2 }, { slug: 'fuzzball', count: 1 }, { slug: 'unused', count: 0 }])
    expect(r.concepts).toEqual([{ slug: 'hpc', count: 1 }, { slug: 'security', count: 1 }])
    expect(r.other).toEqual([{ slug: 'x', count: 0 }])
  })
  it('filters on categories/verticals/style axes', () => {
    const d = mk({ id: 'd', style: ['flat'] })
    expect(ids(applyFilters([d, A], { style: ['flat'] }, ''))).toEqual(['d'])
  })
})

describe('vocabGroups', () => {
  it('splits style into facets in facet order, strips the prefix, keeps strays under Other', () => {
    const rows = ['color-duotone', 'medium-photo', 'odd-one', 'comp-macro-detail', 'medium-line-art'].map((slug) => ({ slug, count: 0 }))
    const g = vocabGroups('style', rows)
    expect(g.map((x) => x.label)).toEqual(['Medium', 'Color', 'Composition', 'Other'])
    expect(g[0].rows.map((r) => [r.slug, r.label])).toEqual([['medium-photo', 'photo'], ['medium-line-art', 'line-art']])
    expect(g[3].rows[0].label).toBe('odd-one')
  })
  it('leaves other axes as one unlabeled group', () => {
    const g = vocabGroups('concepts', [{ slug: 'hpc', count: 3 }])
    expect(g).toEqual([{ label: null, rows: [{ slug: 'hpc', count: 3, label: 'hpc' }] }])
  })
})

describe('resolveHits / nextImgSrc', () => {
  it('keeps hit order and drops unknown ids', () => {
    const a = mk({ id: 'a' }), b = mk({ id: 'b' })
    expect(resolveHits([{ id: 'b' }, { id: 'zz' }, { id: 'a' }], [a, b])).toEqual([b, a])
  })
  it('falls back thumb -> full -> null', () => {
    const a = { thumb_url: '/thumbs/x.webp', full_url: '/files/x' }
    expect(nextImgSrc(a.thumb_url, a)).toBe('/files/x')
    expect(nextImgSrc(a.full_url, a)).toBeNull()
  })
})

describe('use facet (anti-examples)', () => {
  const assets = [mk({ id: 'good' }), mk({ id: 'bad', anti_example: true, avoid_reason: 'lens flare' })]
  it('splits example vs anti-example', () => {
    expect(facetCounts(assets, 'use')).toEqual([
      { value: 'anti-example', count: 1 }, { value: 'example', count: 1 },
    ])
    expect(applyFilters(assets, { use: ['anti-example'] }, '').map((a) => a.id)).toEqual(['bad'])
  })
  it('free-text search matches the avoid reason', () => {
    expect(applyFilters(assets, {}, 'flare').map((a) => a.id)).toEqual(['bad'])
  })
})

describe('ReloadGuard', () => {
  const v = (id: string, description: string) => mk({ id, description })
  it('keeps an asset saved after the reload started', () => {
    const g = new ReloadGuard()
    const t = g.begin()
    g.saved('a') // verdict landed while the reload was in flight
    expect(g.accept(t)).toBe(true)
    const out = g.merge(t, [v('a', 'stale'), v('b', 'fresh')], [v('a', 'saved'), v('b', 'old')])
    expect(out.map((a) => a.description)).toEqual(['saved', 'fresh'])
  })
  it('takes the reload for an asset saved before it started', () => {
    const g = new ReloadGuard()
    g.saved('a')
    const t = g.begin()
    expect(g.accept(t)).toBe(true)
    expect(g.merge(t, [v('a', 'server')], [v('a', 'local')])[0].description).toBe('server')
  })
  it('drops a reload that finishes after a newer one was applied', () => {
    const g = new ReloadGuard()
    const older = g.begin()
    const newer = g.begin()
    expect(g.accept(newer)).toBe(true)
    expect(g.accept(older)).toBe(false)
  })
  it('a later reload no longer protects a save it already includes', () => {
    const g = new ReloadGuard()
    const t1 = g.begin()
    g.saved('a')
    const t2 = g.begin()
    expect(g.accept(t1)).toBe(true)
    expect(g.merge(t1, [v('a', 'stale')], [v('a', 'saved')])[0].description).toBe('saved')
    expect(g.accept(t2)).toBe(true)
    expect(g.merge(t2, [v('a', 'server')], [v('a', 'saved')])[0].description).toBe('server')
  })
})
