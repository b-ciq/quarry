/** Pure logic for the Capture page: ordering, the next post to open, the daily cap and row labels. */

export type CaptureStatus = 'pending' | 'partial' | 'captured' | 'unavailable'
export type CaptureFilter = CaptureStatus | 'all'

export interface CaptureSlide {
  slide: number
  type: string
}

export interface CaptureItem {
  id: string
  shortcode: string
  source_url: string
  kind: string
  /** Instagram username, '' when the record has none. */
  owner: string
  saved_at: string | null
  /** Newest captured_at among the slides. */
  captured_at: string | null
  status: CaptureStatus
  slides_expected: number | null
  slides: CaptureSlide[]
}

export interface CaptureToday {
  opened: number
  cap: number
}

export interface CaptureList {
  enabled: boolean
  setup: string | null
  counts: Record<CaptureStatus, number>
  today: CaptureToday
  items: CaptureItem[]
  failed: { folder: string; reason: string }[]
  warnings: string[]
}

export const CAP_MESSAGE = "That's enough for today. Pick up tomorrow."
export const NOTHING_LEFT = 'Nothing left to capture'
export const FILTERS: CaptureFilter[] = ['pending', 'partial', 'captured', 'unavailable', 'all']

const sortKey = (i: CaptureItem) => i.saved_at ?? i.captured_at ?? ''

/** Newest first by saved_at, falling back to captured_at; undated items last. Returns a new array. */
export function sortItems(items: CaptureItem[]): CaptureItem[] {
  return [...items].sort((a, b) => {
    const ka = sortKey(a)
    const kb = sortKey(b)
    return ka === kb ? 0 : ka < kb ? 1 : -1
  })
}

/** The newest pending save, or null when none is left. */
export function nextPending(items: CaptureItem[]): CaptureItem | null {
  return sortItems(items).find((i) => i.status === 'pending') ?? null
}

export const capReached = (today: CaptureToday): boolean => today.opened >= today.cap

export function statusLabel(item: CaptureItem): string {
  const n = item.slides.length
  switch (item.status) {
    case 'captured':
      return `captured ${n}`
    case 'partial':
      return `partial ${n}/${item.slides_expected ?? '?'}`
    default:
      return item.status
  }
}

export const filterItems = (items: CaptureItem[], filter: CaptureFilter): CaptureItem[] =>
  filter === 'all' ? items : items.filter((i) => i.status === filter)

/** The date part of saved_at (records store ISO timestamps), or '' when unknown. */
export const savedDate = (item: CaptureItem): string => (item.saved_at ?? '').slice(0, 10)
