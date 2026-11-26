import { describe, expect, it } from 'vitest'
import {
  facetGroups, facetKey, filterItems, inboxOrder, inspirationFacets, libraryFacets, libraryText, nextAfter, SUGGESTED,
  viewOf, type Faceting, type InspirationItem,
} from './gallery'
import type { Asset } from './state'
import type { BotRating } from './rating'

const mk = (o: Partial<Asset> & { id: string }): Asset => ({
  file: `${o.id}.png`, status: 'proposed', class: 'hero', products: [], categories: [], verticals: [], concepts: [],
  style: [], aspect: '16:9', license: 'ciq-original', source: { origin: 'seed', ingested_at: '', sha256: '' },
  usage_restrictions: [], description: '', thumb_url: '', full_url: '', ...o,
})
const bot = (verdict: BotRating['verdict'], strength: BotRating['strength'], suggested: Record<string, string[]> = {}): BotRating =>
  ({ verdict, strength, reason: 'r', model: 'm', at: '', examples: [], suggested_slugs: suggested })

const lib: Faceting<Asset> = { facets: libraryFacets, text: libraryText }
const ids = (xs: { id: string }[]) => xs.map((x) => x.id)

describe('viewOf', () => {
  it('maps statuses to the three views', () => {
    expect(['proposed', 'parked', 'confirmed', 'retired'].map(viewOf)).toEqual(['inbox', 'inbox', 'approved', 'rejected'])
  })
})

describe('libraryFacets', () => {
  it("adds Claude's call, confidence and suggestions only in the inbox", () => {
    const a = mk({ id: 'a', concepts: ['hpc'], rating: { bot: bot('no', 'strong', { style: ['glow'] }) } })
    expect(libraryFacets(a)).toEqual(expect.arrayContaining([
      ['Claude says', 'reject'], ["Claude's confidence", 'strong'], [SUGGESTED, 'glow'], ['Concepts', 'hpc'], ['Class', 'hero'],
    ]))
    const approved = libraryFacets({ ...a, status: 'confirmed' })
    expect(approved.some(([g]) => g === 'Claude says' || g === SUGGESTED)).toBe(false)
  })
  it('flags unrated, parked and blocked approvals', () => {
    expect(libraryFacets(mk({ id: 'u' }))).toContainEqual(['Claude says', 'not rated yet'])
    expect(libraryFacets(mk({ id: 'p', status: 'parked' }))).toContainEqual(['Your call', 'maybe (parked)'])
    const blocked = mk({ id: 'b', rating: { human: { verdict: 'yes', by: '', at: '' } } })
    expect(libraryFacets(blocked)).toContainEqual(['Your call', 'approved, needs details'])
  })
})

describe('filterItems', () => {
  const a = mk({ id: 'a', concepts: ['hpc'], style: ['glow'], rating: { bot: bot('no', 'strong') } })
  const b = mk({ id: 'b', concepts: ['security'], rating: { bot: bot('yes', 'unsure') }, description: 'Server room' })
  const c = mk({ id: 'c', concepts: ['hpc', 'security'], rating: { bot: bot('yes', 'strong') } })
  const all = [a, b, c]
  it('ORs within a group and ANDs across groups', () => {
    const sel = new Set([facetKey('Concepts', 'hpc'), facetKey('Concepts', 'security')])
    expect(ids(filterItems(all, lib, sel, ''))).toEqual(['a', 'b', 'c'])
    sel.add(facetKey('Claude says', 'keep'))
    expect(ids(filterItems(all, lib, sel, ''))).toEqual(['b', 'c'])
  })
  it('searches text case-insensitively', () => {
    expect(ids(filterItems(all, lib, new Set(), 'server'))).toEqual(['b'])
  })
})

describe('facetGroups', () => {
  const a = mk({ id: 'a', concepts: ['hpc'], rating: { bot: bot('no', 'strong') } })
  const b = mk({ id: 'b', concepts: ['security'], rating: { bot: bot('yes', 'strong') } })
  it("counts ignore the group's own selection but respect other groups", () => {
    const sel = new Set([facetKey('Concepts', 'hpc')])
    const groups = facetGroups([a, b], lib, sel, '')
    const concepts = groups.find((g) => g.group === 'Concepts')!
    expect(concepts.values.map((v) => [v.value, v.count, v.selected])).toEqual([['hpc', 1, true], ['security', 1, false]])
    const says = groups.find((g) => g.group === 'Claude says')!
    expect(says.values.map((v) => [v.value, v.count])).toEqual([['reject', 1]])
  })
  it('keeps a selected value with no matches so it can be cleared', () => {
    const groups = facetGroups([a], lib, new Set([facetKey('Style', 'gone')]), '')
    expect(groups.find((g) => g.group === 'Style')!.values).toEqual([{ key: facetKey('Style', 'gone'), value: 'gone', count: 0, selected: true }])
  })
  it('drops groups the other selections leave empty', () => {
    const groups = facetGroups([a, b], lib, new Set([facetKey('Concepts', 'nothing')]), '')
    expect(groups.map((g) => g.group)).toEqual(['Concepts'])
  })
  it("orders groups with Claude's first", () => {
    expect(facetGroups([a], lib, new Set(), '').map((g) => g.group).slice(0, 3)).toEqual(['Claude says', "Claude's confidence", 'Class'])
  })
})

describe('inspirationFacets', () => {
  it('uses owner, concepts and style', () => {
    const i: InspirationItem = { id: 'ig-a', status: 'proposed', owner: 'bee', caption: '', description: '', style: ['grid'],
      concepts: ['type'], source_url: '', saved_at: null, media: [], bot: null, describe_error: null }
    expect(inspirationFacets(i)).toEqual([['From', '@bee'], ['Concepts', 'type'], ['Style', 'grid']])
  })
})

describe('inboxOrder', () => {
  it('puts confident calls first, then unsure, then unrated', () => {
    const xs = [mk({ id: 'u' }), mk({ id: 's', rating: { bot: bot('no', 'unsure') } }), mk({ id: 'k', rating: { bot: bot('yes', 'strong') } })]
    expect(ids([...xs].sort(inboxOrder))).toEqual(['k', 's', 'u'])
  })
})

describe('nextAfter', () => {
  const list = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
  it('selects what slid into the removed slot, or the new last item', () => {
    expect(nextAfter(list, new Set(['b']), 1)).toBe('c')
    expect(nextAfter(list, new Set(['c']), 2)).toBe('b')
    expect(nextAfter(list, new Set(['a', 'b', 'c']), 0)).toBeNull()
  })
})
