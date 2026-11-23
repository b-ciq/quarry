// Pure filtering/faceting logic. No React, no DOM: reused by later tasks.

import type { Rating } from './rating'

export type Status = 'proposed' | 'confirmed' | 'retired' | 'parked' | string

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
  product_version?: string
  captured_at?: string
  source: { origin: string; ingested_at: string; sha256: string }
  usage_restrictions: string[]
  description: string
  anti_example?: boolean
  avoid_reason?: string
  generation?: { prompt?: string | null; model?: string | null; seed?: string | number | null }
  thumb_url: string
  full_url: string
  rating?: Rating
}

export const AXES = ['use', 'class', 'status', 'product', 'tone', 'categories', 'verticals', 'concepts', 'style', 'license'] as const
export type Axis = (typeof AXES)[number]

export type Filters = Partial<Record<Axis, string[]>>

export interface FacetCount {
  value: string
  count: number
}

/** All values an asset has on an axis (scalars become one-element lists). */
export function axisValues(a: Asset, axis: Axis): string[] {
  switch (axis) {
    case 'use':
      return [a.anti_example ? 'anti-example' : 'example']
    case 'class':
      return a.class ? [a.class] : []
    case 'status':
      return a.status ? [a.status] : []
    case 'product':
      return a.products ?? []
    case 'tone':
      return a.tone ? [a.tone] : []
    case 'categories':
      return a.categories ?? []
    case 'verticals':
      return a.verticals ?? []
    case 'concepts':
      return a.concepts ?? []
    case 'style':
      return a.style ?? []
    case 'license':
      return a.license ? [a.license] : []
  }
}

function haystack(a: Asset): string {
  return [a.id, a.file, a.description, a.avoid_reason ?? '', a.class, a.status, a.license, a.tone ?? '',
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

/** Vocabulary axis (plural, as in vocabulary.json) to the grid filter axis that selects it. */
export const VOCAB_FILTER_AXIS: Record<string, Axis> = {
  products: 'product',
  categories: 'categories',
  verticals: 'verticals',
  concepts: 'concepts',
  style: 'style',
}

export interface VocabRow {
  slug: string
  count: number
}

/** Per-slug usage over ALL assets (every status); unused slugs get 0, vocabulary order kept. */
export function vocabCounts(assets: Asset[], vocabulary: Record<string, string[]>): Record<string, VocabRow[]> {
  const out: Record<string, VocabRow[]> = {}
  for (const [axis, slugs] of Object.entries(vocabulary)) {
    const field = VOCAB_FILTER_AXIS[axis]
    out[axis] = slugs.map((slug) => ({
      slug,
      count: field ? assets.filter((a) => axisValues(a, field).includes(slug)).length : 0,
    }))
  }
  return out
}

/** Resolve index-search hits to live assets (fresh sidecar data), keeping hit order and dropping unknown ids. */
export function resolveHits(hits: { id: string }[], assets: Asset[]): Asset[] {
  const byId = new Map(assets.map((a) => [a.id, a]))
  return hits.flatMap((h) => { const a = byId.get(h.id); return a ? [a] : [] })
}

/** Next image source after a load error: thumbnail -> full image -> give up (null). */
export function nextImgSrc(current: string, a: Pick<Asset, 'thumb_url' | 'full_url'>): string | null {
  return current === a.thumb_url && a.full_url !== a.thumb_url ? a.full_url : null
}

/**
 * Asset-list reloads race local saves: a reload that started before a save landed carries the old
 * sidecar and would bring a decided card back. Each reload takes a ticket from `begin()`. `accept()`
 * drops a result older than one already applied; `merge()` keeps the local copy of any asset saved
 * after that reload started.
 */
export class ReloadGuard {
  private seq = 0
  private applied = 0
  private savedAt = new Map<string, number>()

  begin(): number {
    return ++this.seq
  }

  /** A write for `id` landed and its result is already in local state. */
  saved(id: string): void {
    this.savedAt.set(id, this.seq)
  }

  accept(ticket: number): boolean {
    if (ticket < this.applied) return false
    this.applied = ticket
    for (const [id, at] of this.savedAt) if (at < ticket) this.savedAt.delete(id) // fresh data covers it
    return true
  }

  merge(ticket: number, fresh: Asset[], current: Asset[]): Asset[] {
    const local = new Map(current.map((a) => [a.id, a]))
    return fresh.map((a) => ((this.savedAt.get(a.id) ?? -1) >= ticket ? (local.get(a.id) ?? a) : a))
  }
}
