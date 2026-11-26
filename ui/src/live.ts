// Publishing status in plain words: is everything live for agents, and what one action gets it there.
import type { Status } from './api'

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`

/** What the publishing bar says, most urgent first. */
export function liveState(s: Status): { tone: 'ok' | 'todo' | 'blocked'; text: string; action: 'publish' | 'update' | null } {
  const g = s.git
  if (g && g.dirty_managed.length) {
    return {
      tone: 'blocked',
      text: `${plural(g.dirty_managed.length, 'library file')} changed outside Quarry. Saving is paused until ${g.dirty_managed.length === 1 ? 'it is' : 'they are'} committed or discarded.`,
      action: null,
    }
  }
  const unshared = g?.ahead ?? 0
  if (s.exports_stale || s.index_stale || unshared) {
    const detail = unshared ? ` ${plural(unshared, 'saved change')} not shared with teammates.` : ''
    return { tone: 'todo', text: `Your latest changes aren't live for agents yet.${detail}`, action: 'publish' }
  }
  if (g?.behind) return { tone: 'todo', text: `Teammates have ${plural(g.behind, 'new change')}.`, action: 'update' }
  return { tone: 'ok', text: 'Everything is live.', action: null }
}
