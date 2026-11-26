import { describe, expect, it } from 'vitest'
import { botDate, describeStrip, placeholderText, suggestedTerms, type DescriberStatus } from './describe'
import type { InspirationItem } from './gallery'

const st = (extra: Partial<DescriberStatus> = {}): DescriberStatus => ({
  state: 'running', reason: null, waiting: 0, current: null, holder: null, today: 0, cap: 150, retry_at: null, ...extra,
})
const item = (extra: Partial<InspirationItem> = {}): InspirationItem => ({
  id: 'ig-x', status: 'proposed', owner: '', caption: '', description: '', style: [], concepts: [],
  source_url: '', saved_at: null, media: [], origin: 'instagram', collections: [], bot: null, describe_error: null, ...extra,
})

describe('describeStrip', () => {
  it('running', () => {
    expect(describeStrip(st({ waiting: 3, current: 'ig-a' }), 0)).toEqual({ text: 'Claude: describing 3 saves… (ig-a now)', tryAgain: false })
  })
  it('running without a current item or with one save', () => {
    expect(describeStrip(st({ waiting: 1 }), 0)?.text).toBe('Claude: describing 1 save…')
  })
  it('elsewhere', () => {
    expect(describeStrip(st({ state: 'elsewhere', waiting: 3, holder: { pid: 1, port: 8790 } }), 0)?.text)
      .toBe('Claude is describing in another Quarry window (port 8790). 3 saves waiting.')
  })
  it('off', () => {
    expect(describeStrip(st({ state: 'off', reason: 'no key' }), 0)?.text).toBe('Claude is off: no key')
  })
  it('paused with retry', () => {
    expect(describeStrip(st({ state: 'paused', reason: 'rate limit', retry_at: 1120 }), 1000)?.text)
      .toBe('Claude paused: rate limit. Retrying in 2 min.')
  })
  it('stopped offers Try again', () => {
    const r = describeStrip(st({ state: 'stopped', reason: 'boom' }), 0)
    expect(r?.tryAgain).toBe(true)
    expect(r?.text).toBe('Claude stopped after 5 failed answers in a row: boom.')
  })
  it('capped', () => {
    expect(describeStrip(st({ state: 'capped' }), 0)?.text).toBe("Claude reached today's limit of 150 saves. It continues tomorrow.")
  })
  it('idle with nothing waiting is silent', () => {
    expect(describeStrip(st({ state: 'idle', waiting: 0 }), 0)).toBeNull()
  })
  it('idle after an error says why', () => {
    expect(describeStrip(st({ state: 'idle', waiting: 2, reason: 'ValueError: bad describer counter' }), 0))
      .toEqual({ text: 'Claude: ValueError: bad describer counter', tryAgain: false })
  })
  it('a reason only speaks when idle', () => {
    expect(describeStrip(st({ state: 'running', waiting: 0, reason: 'old' }), 0)).toBeNull()
  })
})

describe('placeholderText', () => {
  it('current item', () => {
    expect(placeholderText(item(), st({ current: 'ig-x' }))).toEqual({ text: 'Claude is describing this…', tryAgain: false })
  })
  it('current item wins over an earlier error', () => {
    const err = { message: 'bad json', tries: 1, gave_up: false }
    expect(placeholderText(item({ describe_error: err }), st({ current: 'ig-x' })))
      .toEqual({ text: 'Claude is describing this…', tryAgain: false })
  })
  it('a gave-up item being described again (after Try again) says so', () => {
    const err = { message: 'bad json', tries: 3, gave_up: true }
    expect(placeholderText(item({ describe_error: err }), st({ current: 'ig-x' })))
      .toEqual({ text: 'Claude is describing this…', tryAgain: false })
  })
  it('running', () => {
    expect(placeholderText(item(), st()).text).toBe('Waiting for Claude.')
  })
  it('elsewhere', () => {
    expect(placeholderText(item(), st({ state: 'elsewhere' })).text).toBe('Waiting for Claude.')
  })
  it('paused', () => {
    expect(placeholderText(item(), st({ state: 'paused', reason: 'rate limit' })).text).toBe('Waiting for Claude (paused: rate limit).')
  })
  it('error, not given up', () => {
    expect(placeholderText(item({ describe_error: { message: 'bad json', tries: 1, gave_up: false } }), st()))
      .toEqual({ text: 'Claude could not describe this: bad json. It will try again later.', tryAgain: false })
  })
  it('gave up', () => {
    expect(placeholderText(item({ describe_error: { message: 'bad json', tries: 3, gave_up: true } }), st()))
      .toEqual({ text: 'Claude gave up: bad json.', tryAgain: true })
  })
})

describe('suggestedTerms', () => {
  const bot = (suggested_slugs: unknown) => ({ model: 'm', at: '2026-11-25T00:00:00Z', suggested_slugs }) as InspirationItem['bot']
  it('lists both axes, keyed by axis', () => {
    const terms = suggestedTerms(item({ bot: bot({ style: [{ slug: 'x', definition: 'a' }], concepts: [{ slug: 'x', definition: 'b' }] }) }))
    expect(terms.map((t) => t.key)).toEqual(['style:x', 'concepts:x'])
    expect(terms[1]).toEqual({ key: 'concepts:x', axis: 'concepts', slug: 'x', definition: 'b' })
  })
  it('never crashes on a partial bot block', () => {
    expect(suggestedTerms(item())).toEqual([])
    expect(suggestedTerms(item({ bot: bot(undefined) }))).toEqual([])
    expect(suggestedTerms(item({ bot: bot(null) }))).toEqual([])
    expect(suggestedTerms(item({ bot: bot({ style: 'junk' }) }))).toEqual([])
    expect(suggestedTerms(item({ bot: bot({ concepts: [null, { slug: 'y', definition: 'd' }] }) })).map((t) => t.slug)).toEqual(['y'])
  })
})

describe('botDate', () => {
  it('formats like Nov 25', () => {
    expect(botDate('2026-11-25T12:00:00Z')).toBe('Nov 25')
  })
})
