import { describe, expect, it } from 'vitest'
import { current, initQueue, reviewReducer, type QueueState } from './review'

const q = (ids: string[], index = 0): QueueState => ({ ...initQueue(ids), index })

describe('review queue reducer', () => {
  it('starts at the first item; an empty queue is already exited', () => {
    expect(initQueue(['a', 'b'])).toEqual({ queue: ['a', 'b'], index: 0, exited: false })
    expect(initQueue([]).exited).toBe(true)
  })
  it('next/prev move one step and clamp at the ends', () => {
    let s = q(['a', 'b', 'c'])
    s = reviewReducer(s, { type: 'prev' })
    expect(s.index).toBe(0)
    s = reviewReducer(reviewReducer(s, { type: 'next' }), { type: 'next' })
    expect(current(s)).toBe('c')
    s = reviewReducer(s, { type: 'next' })
    expect(s.index).toBe(2)
    expect(current(reviewReducer(s, { type: 'prev' }))).toBe('b')
  })
  it('confirmed removes the current item and advances to the next one', () => {
    const s = reviewReducer(q(['a', 'b', 'c'], 1), { type: 'confirmed' })
    expect(s.queue).toEqual(['a', 'c'])
    expect(current(s)).toBe('c')
    expect(s.exited).toBe(false)
  })
  it('confirming the last item clamps back to the new last item', () => {
    const s = reviewReducer(q(['a', 'b', 'c'], 2), { type: 'confirmed' })
    expect(s.queue).toEqual(['a', 'b'])
    expect(current(s)).toBe('b')
  })
  it('confirming the only item empties the queue and exits', () => {
    const s = reviewReducer(q(['a']), { type: 'confirmed' })
    expect(s.queue).toEqual([])
    expect(s.exited).toBe(true)
    expect(current(s)).toBeUndefined()
  })
  it('retired behaves like confirmed (leaves the queue)', () => {
    expect(reviewReducer(q(['a', 'b']), { type: 'retired' }).queue).toEqual(['b'])
  })
  it('exit flags exited without touching the queue; later actions are no-ops', () => {
    const s = reviewReducer(q(['a', 'b'], 1), { type: 'exit' })
    expect(s).toEqual({ queue: ['a', 'b'], index: 1, exited: true })
    expect(reviewReducer(s, { type: 'next' })).toBe(s)
    expect(reviewReducer(s, { type: 'confirmed' })).toBe(s)
  })
})
