import type { InspirationItem } from './gallery'

export interface DescriberStatus {
  state: 'running' | 'idle' | 'paused' | 'stopped' | 'capped' | 'off' | 'elsewhere'
  reason: string | null
  waiting: number
  current: string | null
  holder: { pid: number; port: number | null } | null
  today: number
  cap: number
  /** Epoch seconds. */
  retry_at: number | null
}

export interface Say {
  text: string
  tryAgain: boolean
}

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`

/** The Inbox strip text, or null when there is nothing to say. `now` is epoch seconds. */
export function describeStrip(s: DescriberStatus, now: number): Say | null {
  switch (s.state) {
    case 'running':
      return s.waiting > 0 || s.current
        ? { text: `Claude: describing ${plural(s.waiting, 'save')}…${s.current ? ` (${s.current} now)` : ''}`, tryAgain: false }
        : null
    case 'elsewhere': {
      const port = s.holder?.port != null ? ` (port ${s.holder.port})` : ''
      return { text: `Claude is describing in another Quarry window${port}. ${plural(s.waiting, 'save')} waiting.`, tryAgain: false }
    }
    case 'off':
      return { text: `Claude is off: ${s.reason ?? 'unavailable'}`, tryAgain: false }
    case 'paused': {
      const retry = s.retry_at != null ? ` Retrying in ${Math.max(1, Math.ceil((s.retry_at - now) / 60))} min.` : ''
      return { text: `Claude paused: ${s.reason ?? 'waiting'}.${retry}`, tryAgain: false }
    }
    case 'stopped':
      return { text: `Claude stopped after 5 failed answers in a row: ${s.reason ?? 'unknown error'}.`, tryAgain: true }
    case 'capped':
      return { text: `Claude reached today's limit of ${s.cap} saves. It continues tomorrow.`, tryAgain: false }
    default:
      return null
  }
}

/** What the Description field says while an item has no description. */
export function placeholderText(item: InspirationItem, s: DescriberStatus | undefined): Say {
  const err = item.describe_error
  if (err?.gave_up) return { text: `Claude gave up: ${err.message}.`, tryAgain: true }
  if (err) return { text: `Claude could not describe this: ${err.message}. It will try again later.`, tryAgain: false }
  if (!s) return { text: 'Waiting for Claude.', tryAgain: false }
  if (s.current === item.id) return { text: 'Claude is describing this…', tryAgain: false }
  if (s.state === 'running' || s.state === 'elsewhere' || s.state === 'idle') return { text: 'Waiting for Claude.', tryAgain: false }
  return { text: `Waiting for Claude (${s.state}${s.reason ? `: ${s.reason}` : ''}).`, tryAgain: false }
}

/** "Nov 25" */
export const botDate = (at: string): string => {
  const d = new Date(at)
  return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}
