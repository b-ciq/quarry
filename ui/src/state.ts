// Pure filtering/faceting logic. No React, no DOM: reused by later tasks.

export type Status = 'proposed' | 'confirmed' | 'retired' | string

export interface Asset {
  id: string
  file: string
  status: Status
  class: string
  products: string[]
  categories: string[]
  verticals: string[]
  concepts: string[]
  style: string[]
  aspect: string
  license: string
  tone?: string
  source: { origin: string; ingested_at: string; sha256: string }
  usage_restrictions: string[]
  description: string
  thumb_url: string
  full_url: string
}

export const AXES = ['class', 'status', 'product', 'tone', 'concepts', 'license'] as const
export type Axis = (typeof AXES)[number]

export type Filters = Partial<Record<Axis, string[]>>

export interface FacetCount {
  value: string
  count: number
}

/** All values an asset has on an axis (scalars become one-element lists). */
export function axisValues(a: Asset, axis: Axis): string[] {
  switch (axis) {
    case 'class':
      return a.class ? [a.class] : []
    case 'status':
      return a.status ? [a.status] : []
    case 'product':
      return a.products ?? []
    case 'tone':
      return a.tone ? [a.tone] : []
    case 'concepts':
      return a.concepts ?? []
    case 'license':
      return a.license ? [a.license] : []
  }
}

function haystack(a: Asset): string {
  return [a.id, a.file, a.description, a.class, a.status, a.license, a.tone ?? '',
    ...a.products, ...a.categories, ...a.verticals, ...a.concepts, ...a.style]
    .join('\n')
    .toLowerCase()
}

/** AND across axes, OR within an axis; `q` is a case-insensitive substring. */
export function applyFilters(assets: Asset[], filters: Filters, q: string): Asset[] {
  const needle = q.trim().toLowerCase()
  const active = AXES.flatMap((axis) => {
    const want = filters[axis]
    return want && want.length ? [{ axis, want }] : []
  })
  return assets.filter((a) => {
    for (const { axis, want } of active) {
      const have = axisValues(a, axis)
      if (!want.some((w) => have.includes(w))) return false
    }
    return needle === '' || haystack(a).includes(needle)
  })
}

/** Value counts for one axis, most common first (ties alphabetical). */
export function facetCounts(assets: Asset[], axis: Axis): FacetCount[] {
  const counts = new Map<string, number>()
  for (const a of assets) {
    for (const v of new Set(axisValues(a, axis))) counts.set(v, (counts.get(v) ?? 0) + 1)
  }
  return [...counts]
    .map(([value, count]) => ({ value, count }))
    .sort((x, y) => y.count - x.count || x.value.localeCompare(y.value))
}
