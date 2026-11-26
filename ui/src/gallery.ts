// Pure gallery logic shared by the Library and Inspiration areas: which view an item is in,
// its filter facets, and filtering/counting over them. No React, no DOM.
import type { Asset } from './state'

export type View = 'inbox' | 'approved' | 'rejected'
export const VIEWS: View[] = ['inbox', 'approved', 'rejected']
export const VIEW_LABEL: Record<View, string> = { inbox: 'Inbox', approved: 'Approved', rejected: 'Rejected' }

/** confirmed -> Approved, retired -> Rejected, everything else (proposed, parked) waits in the Inbox. */
export function viewOf(status: string): View {
  if (status === 'confirmed') return 'approved'
  if (status === 'retired') return 'rejected'
  return 'inbox'
}

/** One filter value: [group, value]. */
export type Facet = readonly [string, string]
export const facetKey = (group: string, value: string) => `${group}\t${value}`
const groupOf = (key: string) => key.slice(0, key.indexOf('\t'))

export const CLAUDE_SAYS: Record<string, string> = { yes: 'keep', no: 'reject', maybe: 'maybe' }
export const SUGGESTED = 'Claude suggested (not in vocabulary)'

export const GROUP_ORDER = [
  'Claude says', "Claude's confidence", 'Your call', 'Use', 'Class', 'From',
  'Products', 'Categories', 'Verticals', 'Concepts', 'Style', 'Tone', SUGGESTED,
]

export function libraryFacets(a: Asset): Facet[] {
  const out: Facet[] = []
  const bot = a.rating?.bot
  if (viewOf(a.status) === 'inbox') {
    out.push(['Claude says', bot ? CLAUDE_SAYS[bot.verdict] ?? bot.verdict : 'not rated yet'])
    if (bot) out.push(["Claude's confidence", bot.strength])
    if (a.status === 'parked') out.push(['Your call', 'maybe (parked)'])
    if (a.status === 'proposed' && a.rating?.human?.verdict === 'yes') out.push(['Your call', 'approved, needs details'])
    for (const slugs of Object.values(bot?.suggested_slugs ?? {})) for (const s of slugs) out.push([SUGGESTED, s])
  }
  if (a.anti_example) out.push(['Use', 'anti-example'])
  if (a.class) out.push(['Class', a.class])
  for (const v of a.products ?? []) out.push(['Products', v])
  for (const v of a.categories ?? []) out.push(['Categories', v])
  for (const v of a.verticals ?? []) out.push(['Verticals', v])
  for (const v of a.concepts ?? []) out.push(['Concepts', v])
  for (const v of a.style ?? []) out.push(['Style', v])
  if (a.tone) out.push(['Tone', a.tone])
  return out
}

export const libraryText = (a: Asset) =>
  [a.id, a.description, a.avoid_reason ?? '', a.class, a.license, a.rating?.bot?.reason ?? '',
    ...a.products, ...a.categories, ...a.verticals, ...a.concepts, ...a.style].join('\n')

export interface InspirationItem {
  id: string
  status: string
  owner: string
  caption: string
  description: string
  style: string[]
  concepts: string[]
  source_url: string
  saved_at: string | null
  /** Image URLs (video slides as their poster), slide order. */
  media: string[]
}

export function inspirationFacets(i: InspirationItem): Facet[] {
  const out: Facet[] = []
  if (i.owner) out.push(['From', `@${i.owner}`])
  for (const v of i.concepts) out.push(['Concepts', v])
  for (const v of i.style) out.push(['Style', v])
  return out
}

export const inspirationText = (i: InspirationItem) =>
  [i.id, i.owner, i.caption, i.description, ...i.concepts, ...i.style].join('\n')

/** OR within a group, AND across groups. */
export function matchesFacets(facets: Facet[], selected: ReadonlySet<string>): boolean {
  if (selected.size === 0) return true
  const have = new Set(facets.map(([g, v]) => facetKey(g, v)))
  const byGroup = new Map<string, string[]>()
  for (const k of selected) byGroup.set(groupOf(k), [...(byGroup.get(groupOf(k)) ?? []), k])
  return [...byGroup.values()].every((keys) => keys.some((k) => have.has(k)))
}

const textHit = (text: string, q: string) => q.trim() === '' || text.toLowerCase().includes(q.trim().toLowerCase())

export interface Faceting<T> {
  facets: (t: T) => Facet[]
  text: (t: T) => string
}

export function filterItems<T>(items: T[], f: Faceting<T>, selected: ReadonlySet<string>, q: string): T[] {
  return items.filter((t) => textHit(f.text(t), q) && matchesFacets(f.facets(t), selected))
}

export interface FacetValue {
  key: string
  value: string
  count: number
  selected: boolean
}
export interface FacetGroup {
  group: string
  values: FacetValue[]
}

/**
 * Filter groups with counts. A group's counts ignore that group's own selection, so sibling values
 * stay clickable; selected values with no matches still show (count 0) so they can be cleared.
 */
export function facetGroups<T>(items: T[], f: Faceting<T>, selected: ReadonlySet<string>, q: string): FacetGroup[] {
  const searched = items.filter((t) => textHit(f.text(t), q))
  const groups = new Set<string>()
  for (const t of searched) for (const [g] of f.facets(t)) groups.add(g)
  for (const k of selected) groups.add(groupOf(k))
  const ordered = [...groups].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b))
  return ordered.map((group) => {
    const others = new Set([...selected].filter((k) => groupOf(k) !== group))
    const counts = new Map<string, number>()
    for (const t of searched) {
      const facets = f.facets(t)
      if (!matchesFacets(facets, others)) continue
      for (const v of new Set(facets.filter(([g]) => g === group).map(([, v]) => v))) counts.set(v, (counts.get(v) ?? 0) + 1)
    }
    for (const k of selected) if (groupOf(k) === group && !counts.has(k.slice(group.length + 1))) counts.set(k.slice(group.length + 1), 0)
    const values = [...counts]
      .map(([value, count]) => ({ key: facetKey(group, value), value, count, selected: selected.has(facetKey(group, value)) }))
      .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value))
    return { group, values }
  }).filter((g) => g.values.length > 0)
}

function rank(group: string): number {
  const i = GROUP_ORDER.indexOf(group)
  return i < 0 ? GROUP_ORDER.length : i
}

/** Library inbox order: Claude's confident calls first (fastest to clear), then unsure, then unrated. */
export function inboxOrder(a: Asset, b: Asset): number {
  const score = (x: Asset) => (x.rating?.bot ? (x.rating.bot.strength === 'strong' ? 0 : 1) : 2)
  return score(a) - score(b) || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
}

/** After the item at `index` leaves a list, the id to select next: the one that slid into its place. */
export function nextAfter(list: { id: string }[], removed: ReadonlySet<string>, index: number): string | null {
  const rest = list.filter((t) => !removed.has(t.id))
  if (rest.length === 0) return null
  return rest[Math.min(index, rest.length - 1)].id
}
