import { describe, expect, it } from 'vitest'
import { CAP_MESSAGE, capReached, filterItems, nextPending, openTitle, savedDate, sortItems, statusLabel, type CaptureItem } from './capture'

const mk = (shortcode: string, extra: Partial<CaptureItem> = {}): CaptureItem => ({
  id: `ig-${shortcode.toLowerCase()}`,
  shortcode,
  source_url: `https://www.instagram.com/p/${shortcode}/`,
  kind: 'post',
  owner: 'someone',
  saved_at: null,
  captured_at: null,
  status: 'pending',
  slides_expected: null,
  slides: [],
  ...extra,
})
const slides = (n: number) => Array.from({ length: n }, (_, i) => ({ slide: i + 1, type: 'image' }))

describe('sortItems', () => {
  it('orders by saved_at, newest first', () => {
    const out = sortItems([
      mk('a', { saved_at: '2026-11-20T10:00:00Z' }),
      mk('b', { saved_at: '2026-11-23T10:00:00Z' }),
      mk('c', { saved_at: '2026-11-22T10:00:00Z' }),
    ])
    expect(out.map((i) => i.shortcode)).toEqual(['b', 'c', 'a'])
  })
  it('falls back to captured_at when saved_at is missing, and puts undated items last', () => {
    const out = sortItems([
      mk('none'),
      mk('old', { saved_at: '2026-11-01T00:00:00Z' }),
      mk('cap', { captured_at: '2026-11-10T00:00:00Z' }),
      mk('new', { saved_at: '2026-11-20T00:00:00Z' }),
    ])
    expect(out.map((i) => i.shortcode)).toEqual(['new', 'cap', 'old', 'none'])
  })
  it('does not mutate its input', () => {
    const input = [mk('a', { saved_at: '2026-01-01' }), mk('b', { saved_at: '2026-02-01' })]
    sortItems(input)
    expect(input.map((i) => i.shortcode)).toEqual(['a', 'b'])
  })
})

describe('nextPending', () => {
  it('skips captured, partial and unavailable items and returns the newest pending one', () => {
    const items = [
      mk('cap', { status: 'captured', saved_at: '2026-11-25' }),
      mk('part', { status: 'partial', saved_at: '2026-11-24' }),
      mk('gone', { status: 'unavailable', saved_at: '2026-11-23' }),
      mk('older', { saved_at: '2026-11-20' }),
      mk('newer', { saved_at: '2026-11-22' }),
    ]
    expect(nextPending(items)?.shortcode).toBe('newer')
  })
  it('returns null when nothing is pending', () => {
    expect(nextPending([mk('a', { status: 'captured' }), mk('b', { status: 'unavailable' })])).toBeNull()
    expect(nextPending([])).toBeNull()
  })
})

describe('capReached', () => {
  it('is true at the cap', () => expect(capReached({ opened: 40, cap: 40 })).toBe(true))
  it('is true past the cap', () => expect(capReached({ opened: 41, cap: 40 })).toBe(true))
  it('is false under the cap', () => expect(capReached({ opened: 39, cap: 40 })).toBe(false))
})

describe('statusLabel', () => {
  it('says pending', () => expect(statusLabel(mk('a'))).toBe('pending'))
  it('counts captured slides', () => expect(statusLabel(mk('a', { status: 'captured', slides: slides(3) }))).toBe('captured 3'))
  it('shows partial against the expected count', () =>
    expect(statusLabel(mk('a', { status: 'partial', slides: slides(5), slides_expected: 8 }))).toBe('partial 5/8'))
  it('shows partial with an unknown expected count', () =>
    expect(statusLabel(mk('a', { status: 'partial', slides: slides(2) }))).toBe('partial 2/?'))
  it('says unavailable', () => expect(statusLabel(mk('a', { status: 'unavailable' }))).toBe('unavailable'))
})

describe('filterItems', () => {
  const items = [mk('p'), mk('c', { status: 'captured' }), mk('x', { status: 'partial' }), mk('u', { status: 'unavailable' })]
  it('keeps only the chosen status', () => {
    expect(filterItems(items, 'pending').map((i) => i.shortcode)).toEqual(['p'])
    expect(filterItems(items, 'partial').map((i) => i.shortcode)).toEqual(['x'])
  })
  it('keeps everything for all', () => expect(filterItems(items, 'all')).toHaveLength(4))
})

describe('savedDate', () => {
  it('shows the date part of saved_at', () => expect(savedDate(mk('a', { saved_at: '2026-11-23T08:15:00Z' }))).toBe('2026-11-23'))
  it('is blank without saved_at', () => expect(savedDate(mk('a'))).toBe(''))
})

describe('openTitle', () => {
  it('names the post while under the cap', () => {
    expect(openTitle(mk('AbC_1'), { opened: 3, cap: 40 })).toBe('Open AbC_1 on Instagram')
  })
  it('gives the cap copy once the cap is reached', () => {
    expect(openTitle(mk('AbC_1'), { opened: 40, cap: 40 })).toBe(CAP_MESSAGE)
  })
})
