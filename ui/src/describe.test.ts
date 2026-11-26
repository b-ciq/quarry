import { describe, expect, it } from 'vitest'
import { botDate, describeStrip, placeholderText, type DescriberStatus } from './describe'
import type { InspirationItem } from './gallery'

const st = (extra: Partial<DescriberStatus> = {}): DescriberStatus => ({
  state: 'running', reason: null, waiting: 0, current: null, holder: null, today: 0, cap: 150, retry_at: null, ...extra,
})
const item = (extra: Partial<InspirationItem> = {}): InspirationItem => ({
  id: 'ig-x', status: 'proposed', owner: '', caption: '', description: '', style: [], concepts: [],
  source_url: '', saved_at: null, media: [], bot: null, describe_error: null, ...extra,
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
})

describe('placeholderText', () => {
  it('current item', () => {
    expect(placeholderText(item(), st({ current: 'ig-x' }))).toEqual({ text: 'Claude is describing this…', tryAgain: false })
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

describe('botDate', () => {
  it('formats like Nov 25', () => {
    expect(botDate('2026-11-25T12:00:00Z')).toBe('Nov 25')
  })
})
