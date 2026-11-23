import { describe, expect, it, vi } from 'vitest'
import { splitErrors } from './api'
import { canDiscard, diffDraft, toDraft, withSlug } from './editing'
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

describe('diffDraft anti-example', () => {
  it('sends the flag and reason together when turning it on', () => {
    const d = toDraft(base)
    d.anti_example = true
    d.avoid_reason = 'too busy'
    expect(diffDraft(base, d)).toEqual({ anti_example: true, avoid_reason: 'too busy' })
  })
  it('sends only the flag when turning it off', () => {
    const anti = { ...base, anti_example: true, avoid_reason: 'too busy' }
    const d = toDraft(anti)
    expect(diffDraft(anti, d)).toEqual({})
    d.anti_example = false
    expect(diffDraft(anti, d)).toEqual({ anti_example: false })
  })
  it('sends a changed reason alone', () => {
    const anti = { ...base, anti_example: true, avoid_reason: 'too busy' }
    const d = toDraft(anti)
    d.avoid_reason = 'cluttered'
    expect(diffDraft(anti, d)).toEqual({ avoid_reason: 'cluttered' })
  })
})

describe('diffDraft license and generation', () => {
  it('sends a trimmed license', () => {
    const d = toDraft(base)
    d.license = ' adobe-stock:1 '
    expect(diffDraft(base, d)).toEqual({ license: 'adobe-stock:1' })
  })
  it('sends generation only for midjourney, with a numeric seed and nulls for blanks', () => {
    const mj: Asset = { ...base, source: { ...base.source, origin: 'midjourney' }, generation: { prompt: 'p', model: null, seed: null } }
    expect(diffDraft(mj, toDraft(mj))).toEqual({})
    const d = toDraft(mj)
    d.generation = { prompt: 'p', model: 'v6', seed: '42' }
    expect(diffDraft(mj, d)).toEqual({ generation: { prompt: 'p', model: 'v6', seed: 42 } })
    const other = toDraft(base)
    other.generation = { prompt: 'x', model: '', seed: '' }
    expect(diffDraft(base, other)).toEqual({})
  })
})

describe('withSlug', () => {
  it('adds once and removes, never mutating', () => {
    const tags = ['hpc']
    expect(withSlug(tags, 'cloud', true)).toEqual(['hpc', 'cloud'])
    expect(withSlug(tags, 'hpc', true)).toEqual(['hpc'])
    expect(withSlug(tags, 'hpc', false)).toEqual([])
    expect(withSlug(undefined, 'x', true)).toEqual(['x'])
    expect(tags).toEqual(['hpc'])
  })
  it('chains: two quick edits both survive when each builds on the last', () => {
    const afterAdd = withSlug(['hpc'], 'cloud', true)
    expect(withSlug(afterAdd, 'hpc', false)).toEqual(['cloud'])
  })
})
