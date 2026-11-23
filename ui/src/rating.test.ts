import { describe, expect, it } from 'vitest'
import {
  agreementText, botProposed, cursorIndex, differsFromBot, lanes, needsDetails, pickScreen, sameScreen, VERDICT_KEYS, type Rating,
} from './rating'
import type { Asset } from './state'

const bot = (verdict: 'yes' | 'no' | 'maybe', strength: 'strong' | 'unsure'): Rating => ({
  bot: { verdict, strength, reason: '', model: 'm', at: 't', examples: [], suggested_slugs: {} },
})
const mk = (id: string, rating?: Rating, extra: Partial<Asset> = {}): Asset =>
  ({ id, status: 'proposed', class: 'hero', rating, ...extra }) as Asset

describe('lanes', () => {
  it('splits strong and unsure, ordering verdicts yes, no, maybe', () => {
    const out = lanes(
      [mk('c', bot('maybe', 'strong')), mk('b', bot('no', 'strong')), mk('a', bot('yes', 'strong')), mk('u', bot('yes', 'unsure'))],
      new Set(),
    )
    expect(out.strong.map((g) => g.verdict)).toEqual(['yes', 'no', 'maybe'])
    expect(out.unsure).toEqual(['u'])
  })
  it('forces screenshots to unsure', () => {
    const out = lanes([mk('s', bot('yes', 'strong'), { class: 'screenshot' })], new Set())
    expect(out.strong).toEqual([])
    expect(out.unsure).toEqual(['s'])
  })
  it('moves wrong ids to unsure, wrong first then by id', () => {
    const out = lanes([mk('a', bot('yes', 'strong')), mk('b', bot('yes', 'strong')), mk('c', bot('yes', 'unsure')), mk('d', bot('no', 'strong'))], new Set(['d', 'b']))
    expect(out.strong).toEqual([{ verdict: 'yes', ids: ['a'] }])
    expect(out.unsure).toEqual(['b', 'd', 'c'])
  })
  it('chunks 30 strong yes into 24 + 6', () => {
    const assets = Array.from({ length: 30 }, (_, i) => mk(`id${String(i).padStart(2, '0')}`, bot('yes', 'strong')))
    const out = lanes(assets, new Set())
    expect(out.strong.map((g) => g.ids.length)).toEqual([24, 6])
    expect(out.strong.every((g) => g.verdict === 'yes')).toBe(true)
  })
  it('excludes human-rated, non-proposed and unrated assets', () => {
    const human: Rating = { ...bot('yes', 'strong'), human: { verdict: 'yes', by: 'x', at: 't' } }
    const out = lanes([mk('h', human), mk('r', bot('yes', 'strong'), { status: 'retired' }), mk('n')], new Set())
    expect(out).toEqual({ strong: [], unsure: [] })
  })
})

describe('agreementText', () => {
  const z = { agreed: 0, total: 0 }
  it('shows recent and strong', () => {
    expect(agreementText({ recent: { agreed: 41, total: 50 }, strong: { agreed: 24, total: 25 }, unsure: z })).toBe(
      'Bot agreed with you on 41 of 50 recent calls · strong calls 96%',
    )
  })
  it('adds the unsure lane when it has verdicts', () => {
    expect(agreementText({ recent: { agreed: 41, total: 50 }, strong: { agreed: 24, total: 25 }, unsure: { agreed: 7, total: 10 } })).toBe(
      'Bot agreed with you on 41 of 50 recent calls · strong calls 96% · unsure 70%',
    )
    expect(agreementText({ recent: { agreed: 1, total: 2 }, strong: z, unsure: { agreed: 1, total: 2 } })).toBe(
      'Bot agreed with you on 1 of 2 recent calls · unsure 50%',
    )
  })
  it('omits strong when none', () => {
    expect(agreementText({ recent: { agreed: 3, total: 4 }, strong: z, unsure: z })).toBe('Bot agreed with you on 3 of 4 recent calls')
  })
  it('handles no verdicts', () => {
    expect(agreementText({ recent: z, strong: z, unsure: z })).toBe('No verdicts yet')
  })
})

it('VERDICT_KEYS maps keys', () => {
  expect(VERDICT_KEYS).toEqual({ y: 'yes', n: 'no', m: 'maybe' })
})

describe('card helpers', () => {
  const human = (verdict: 'yes' | 'no' | 'maybe'): Rating => ({ ...bot('no', 'unsure'), human: { verdict, by: 'b', at: 't' } })
  it('botProposed until a human verdict', () => {
    expect(botProposed(mk('a', bot('yes', 'unsure')))).toBe(true)
    expect(botProposed(mk('a', human('yes')))).toBe(false)
    expect(botProposed(mk('a'))).toBe(false)
  })
  it('differsFromBot only when a bot verdict exists and differs', () => {
    expect(differsFromBot(mk('a', bot('yes', 'unsure')), 'yes')).toBe(false)
    expect(differsFromBot(mk('a', bot('yes', 'unsure')), 'no')).toBe(true)
    expect(differsFromBot(mk('a'), 'no')).toBe(false)
  })
  it('needsDetails is a proposed asset with a human yes', () => {
    expect(needsDetails(mk('a', human('yes')))).toBe(true)
    expect(needsDetails(mk('a', human('yes'), { status: 'confirmed' }))).toBe(false)
    expect(needsDetails(mk('a', human('maybe')))).toBe(false)
  })
  it('cursorIndex follows the id, else keeps the slot clamped', () => {
    expect(cursorIndex(['a', 'b', 'c'], { id: 'c', index: 0 })).toBe(2)
    expect(cursorIndex(['a', 'c'], { id: 'b', index: 1 })).toBe(1)
    expect(cursorIndex(['a'], { id: 'z', index: 5 })).toBe(0)
    expect(cursorIndex([], { id: null, index: 3 })).toBe(0)
  })
})

describe('sameScreen', () => {
  it('is the same screen while some of its ids remain, same verdict', () => {
    expect(sameScreen({ verdict: 'yes', ids: ['a', 'b'] }, { verdict: 'yes', ids: ['b'] })).toBe(true)
    expect(sameScreen({ verdict: 'yes', ids: ['a'] }, { verdict: 'yes', ids: ['c'] })).toBe(false)
    expect(sameScreen({ verdict: 'yes', ids: ['a'] }, { verdict: 'no', ids: ['a'] })).toBe(false)
    expect(sameScreen(null, { verdict: 'yes', ids: ['a'] })).toBe(false)
    expect(sameScreen({ verdict: 'yes', ids: ['a'] }, null)).toBe(false)
  })
})

describe('pickScreen', () => {
  const s1 = { verdict: 'yes' as const, ids: ['a', 'b'] }
  it('takes the first strong screen when there is none', () => {
    expect(pickScreen(null, [s1])).toBe(s1)
    expect(pickScreen(null, [])).toBeNull()
  })
  it('keeps the shown screen even if lanes regroup', () => {
    const prev = { verdict: 'yes' as const, ids: ['b', 'c'] }
    expect(pickScreen(prev, [{ verdict: 'yes', ids: ['a', 'b', 'c'] }])).toBe(prev)
  })
  it('drops ids that left and moves on once empty', () => {
    expect(pickScreen({ verdict: 'yes', ids: ['a', 'x'] }, [s1])).toEqual({ verdict: 'yes', ids: ['a'] })
    expect(pickScreen({ verdict: 'no', ids: ['x'] }, [s1])).toBe(s1)
    expect(pickScreen({ verdict: 'no', ids: ['a'] }, [s1])).toBe(s1)
  })
})
