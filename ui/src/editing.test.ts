import { describe, expect, it, vi } from 'vitest'
import { splitErrors } from './api'
import { canDiscard, diffDraft, toDraft } from './editing'
import type { Asset } from './state'

const base: Asset = {
  id: 'x', file: 'x.png', status: 'proposed', class: 'background', products: ['rocky'], categories: [],
  verticals: [], concepts: [], style: [], aspect: '16:9', license: 'ciq-original',
  source: { origin: 's', ingested_at: '', sha256: '' }, usage_restrictions: [], description: 'd',
  thumb_url: '', full_url: '',
}

describe('diffDraft', () => {
  it('is empty for an untouched draft', () => {
    expect(diffDraft(base, toDraft(base))).toEqual({})
  })
  it('includes only changed fields', () => {
    const d = toDraft(base)
    d.description = 'new'
    d.tags.products = ['rocky', 'fuzzball']
    expect(diffDraft(base, d)).toEqual({ description: 'new', products: ['rocky', 'fuzzball'] })
  })
  it('sends tone only for backgrounds and never when empty', () => {
    const d = toDraft(base)
    expect(diffDraft(base, d)).toEqual({})
    d.tone = 'dark'
    expect(diffDraft(base, d)).toEqual({ tone: 'dark' })
    const shot = { ...base, class: 'screenshot' }
    expect(diffDraft(shot, d)).toEqual({})
  })
  it('sends screenshot fields only for screenshots', () => {
    const shot = { ...base, class: 'screenshot' }
    const d = toDraft(shot)
    d.product_version = '9.4'
    d.captured_at = '2026-01-01'
    expect(diffDraft(shot, d)).toEqual({ product_version: '9.4', captured_at: '2026-01-01' })
    expect(diffDraft(base, d)).toEqual({})
  })
  it('parses usage restrictions as a trimmed comma list', () => {
    const d = toDraft(base)
    d.usage_restrictions = ' a, b ,,'
    expect(diffDraft(base, d)).toEqual({ usage_restrictions: ['a', 'b'] })
  })
})

describe('canDiscard (navigation guard)', () => {
  it('allows silently when clean, never asking', () => {
    const ask = vi.fn(() => false)
    expect(canDiscard(false, ask)).toBe(true)
    expect(ask).not.toHaveBeenCalled()
  })
  it('asks when dirty and follows the answer', () => {
    expect(canDiscard(true, () => true)).toBe(true)
    expect(canDiscard(true, () => false)).toBe(false)
  })
})

describe('splitErrors', () => {
  it('groups validator strings by leading field', () => {
    const r = splitErrors(["tone: required (dark|light) for background", "products: unknown slug 'x'", 'source.origin: required', 'missing required key: id'])
    expect(r.byField.tone).toHaveLength(1)
    expect(r.byField.products).toHaveLength(1)
    expect(r.byField.source).toEqual(['source.origin: required'])
    expect(r.general).toEqual(['missing required key: id'])
  })
})
