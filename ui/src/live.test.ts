import { describe, expect, it } from 'vitest'
import { liveState } from './live'
import type { Status } from './api'

const st = (o: Partial<Status> = {}, git: Partial<NonNullable<Status['git']>> = {}): Status => ({
  index_stale: false, exports_stale: false, embedder_mode: 'hf',
  git: { ahead: 0, behind: 0, dirty_managed: [], dirty_other: [], ...git }, ...o,
})

describe('liveState', () => {
  it('is quiet when everything is live', () => {
    expect(liveState(st())).toEqual({ tone: 'ok', text: 'Everything is live.', action: null })
  })
  it('asks for Publish when exports, index or unshared commits lag', () => {
    expect(liveState(st({ exports_stale: true })).action).toBe('publish')
    expect(liveState(st({ index_stale: true })).action).toBe('publish')
    const s = liveState(st({}, { ahead: 3 }))
    expect(s.action).toBe('publish')
    expect(s.text).toContain('3 saved changes not shared')
  })
  it('offers Get updates when only teammates have changes', () => {
    expect(liveState(st({}, { behind: 2 }))).toMatchObject({ action: 'update', text: 'Teammates have 2 new changes.' })
  })
  it('blocks on library files changed outside Quarry, ahead of everything else', () => {
    const s = liveState(st({ exports_stale: true }, { dirty_managed: ['library/a.json'] }))
    expect(s).toMatchObject({ tone: 'blocked', action: null })
    expect(s.text).toContain('1 library file changed outside Quarry')
  })
  it('ignores code changes outside the library', () => {
    expect(liveState(st({}, { dirty_other: ['ui/src/App.tsx'] })).tone).toBe('ok')
  })
  it('works without git', () => {
    expect(liveState(st({ exports_stale: true, git: null })).action).toBe('publish')
  })
})
