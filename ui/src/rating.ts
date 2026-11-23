// Pure rating logic: grid/card lanes, card cursor, grid screens, agreement text.
import type { Asset } from './state'

export type Verdict = 'yes' | 'no' | 'maybe'

export interface BotRating {
  verdict: Verdict
  strength: 'strong' | 'unsure'
  reason: string
  model: string
  at: string
  examples: string[]
  suggested_slugs: Record<string, string[]>
}
export interface HumanRating {
  verdict: Verdict
  by: string
  at: string
  reason?: string
}
export interface Rating {
  bot?: BotRating
  human?: HumanRating
}

export const VERDICT_KEYS: Record<string, Verdict> = { y: 'yes', n: 'no', m: 'maybe' }

export const SCREEN_SIZE = 24
const ORDER: Verdict[] = ['yes', 'no', 'maybe']
const byId = (a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0)

export function lanes(
  assets: Asset[],
  wrong: Set<string>,
): { strong: { verdict: Verdict; ids: string[] }[]; unsure: string[] } {
  const strongBy: Record<Verdict, string[]> = { yes: [], no: [], maybe: [] }
  const wrongIds: string[] = []
  const unsureIds: string[] = []
  for (const a of assets) {
    const bot = a.rating?.bot
    if (a.status !== 'proposed' || !bot || a.rating?.human) continue
    if (wrong.has(a.id)) wrongIds.push(a.id)
    else if (bot.strength === 'strong' && a.class !== 'screenshot') strongBy[bot.verdict].push(a.id)
    else unsureIds.push(a.id)
  }
  const strong: { verdict: Verdict; ids: string[] }[] = []
  for (const verdict of ORDER) {
    const ids = strongBy[verdict].sort(byId)
    for (let i = 0; i < ids.length; i += SCREEN_SIZE) strong.push({ verdict, ids: ids.slice(i, i + SCREEN_SIZE) })
  }
  return { strong, unsure: [...wrongIds.sort(byId), ...unsureIds.sort(byId)] }
}

const clamp = (i: number, len: number) => Math.max(0, Math.min(i, len - 1))

export interface AgreementCount {
  agreed: number
  total: number
}
export interface Agreement {
  recent: AgreementCount
  strong: AgreementCount
  unsure: AgreementCount
}

const pct = (c: AgreementCount) => `${Math.round((100 * c.agreed) / c.total)}%`

export function agreementText(a: Agreement): string {
  if (a.recent.total === 0) return 'No verdicts yet'
  const parts = [`Bot agreed with you on ${a.recent.agreed} of ${a.recent.total} recent calls`]
  if (a.strong.total > 0) parts.push(`strong calls ${pct(a.strong)}`)
  if (a.unsure.total > 0) parts.push(`unsure ${pct(a.unsure)}`)
  return parts.join(' · ')
}

export const VERDICT_LABEL: Record<Verdict, string> = { yes: 'Yes', no: 'No', maybe: 'Maybe-yes' }

/** The bot's fields (description, tags, tone) are its proposal until a human verdict lands. */
export const botProposed = (a: Asset): boolean => !!a.rating?.bot && !a.rating?.human

/** Overruling the bot is what it learns most from, so only then do we ask "why?". */
export const differsFromBot = (a: Asset, verdict: Verdict): boolean =>
  !!a.rating?.bot && a.rating.bot.verdict !== verdict

/** Yes said, but confirm is blocked by fields the card cannot edit. */
export const needsDetails = (a: Asset): boolean => a.status === 'proposed' && a.rating?.human?.verdict === 'yes'

export interface Cursor {
  id: string | null
  index: number
}

/** Card position: stay on the same asset while it is in the queue; once it leaves, the slot it held. */
export function cursorIndex(queue: string[], c: Cursor): number {
  const at = c.id === null ? -1 : queue.indexOf(c.id)
  return at >= 0 ? at : clamp(c.index, queue.length)
}

export interface Screen {
  verdict: Verdict
  ids: string[]
}

/**
 * The grid screen to show. A screen stays put (minus ids that left the lane) so background bot commits
 * never reshuffle tiles under the curator; once it empties, the next strong screen takes over.
 */
/** Whether `next` is `prev` minus some ids (the same screen), rather than a new one. */
export const sameScreen = (prev: Screen | null, next: Screen | null): boolean =>
  !!prev && !!next && prev.verdict === next.verdict && next.ids.some((id) => prev.ids.includes(id))

export function pickScreen(prev: Screen | null, strong: Screen[]): Screen | null {
  if (prev) {
    const live = new Set(strong.flatMap((s) => (s.verdict === prev.verdict ? s.ids : [])))
    const ids = prev.ids.filter((id) => live.has(id))
    if (ids.length === prev.ids.length && ids.length > 0) return prev
    if (ids.length > 0) return { verdict: prev.verdict, ids }
  }
  return strong[0] ?? null
}
