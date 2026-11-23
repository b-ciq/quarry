import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Badge, Button } from '@ctrliq/quantic-react'
import { useViewKeys } from '../keys'
import { VERDICT_LABEL, type Screen } from '../rating'
import { nextImgSrc, type Asset } from '../state'

/** Clicks this soon after a screen appears are the tail of a double-click on the previous one. */
const CLICK_GUARD_MS = 400

interface Props {
  screen: Screen
  assets: Map<string, Asset>
  /** Strong calls with this verdict across every screen. */
  total: number
  active: boolean
  canUndo: boolean
  /** Accept the untoggled ids; the toggled ones ("bot is wrong") go to the cards. */
  onAccept: (accept: string[], wrong: string[]) => void
  onUndo: () => void
  /** Lane switch, shown at the start of the header row (saves a row so a screen fits). */
  toolbar?: ReactNode
}

function Tile({ a, wrong, focused, onToggle }: { a: Asset; wrong: boolean; focused: boolean; onToggle: () => void }) {
  const [src, setSrc] = useState<string | null>(a.thumb_url)
  const reason = a.rating?.bot?.reason ?? ''
  return (
    <li className={`rate-tile${wrong ? ' rate-tile-wrong' : ''}${focused ? ' rate-tile-focus' : ''}`}>
      <a
        href={a.full_url}
        role="checkbox"
        aria-checked={wrong}
        aria-label={`${a.id}: bot is wrong`}
        title={reason ? `${a.id}: ${reason}` : a.id}
        onClick={(e) => { if (!(e.metaKey || e.ctrlKey || e.shiftKey)) { e.preventDefault(); onToggle() } }}
      >
        {src ? (
          <img src={src} alt={a.description || a.id} decoding="async" onError={() => setSrc(nextImgSrc(src, a))} />
        ) : (
          <span className="tile-placeholder">No preview</span>
        )}
        {reason && <span className="rate-tile-reason">{reason}</span>}
        {wrong && <Badge className="rate-tile-flag" size="sm" color="error">Bot is wrong</Badge>}
      </a>
    </li>
  )
}

/** One screen (≤ 24) of the bot's strong calls: toggle the misses, Enter accepts the rest in one commit. */
export function StrongGrid({ screen, assets, total, active, canUndo, onAccept, onUndo, toolbar }: Props) {
  const [wrong, setWrong] = useState<Set<string>>(new Set())
  const [focus, setFocus] = useState(0)
  const list = useRef<HTMLUListElement>(null)
  // A double-click on Accept must not also accept the next, unseen screen.
  const shownAt = useRef(0)
  useEffect(() => { shownAt.current = performance.now() }, [])
  const ids = screen.ids
  const at = Math.min(focus, ids.length - 1)
  const toggle = (id: string) => setWrong((w) => {
    const next = new Set(w)
    if (!next.delete(id)) next.add(id)
    return next
  })
  const accept = () => {
    const flagged = ids.filter((id) => wrong.has(id))
    onAccept(ids.filter((id) => !wrong.has(id)), flagged)
  }
  const columns = () => {
    const el = list.current
    return el ? Math.max(1, getComputedStyle(el).gridTemplateColumns.split(' ').length) : 1
  }
  const move = (d: number) => setFocus(Math.max(0, Math.min(at + d, ids.length - 1)))

  useViewKeys((e) => {
    switch (e.key) {
      case 'ArrowRight': move(1); return true
      case 'ArrowLeft': move(-1); return true
      case 'ArrowDown': move(columns()); return true
      case 'ArrowUp': move(-columns()); return true
      case ' ': toggle(ids[at]); return true
      case 'Enter': accept(); return true
      case 'z': case 'Z': onUndo(); return true
      default: return false
    }
  }, active)

  const accepting = ids.length - ids.filter((id) => wrong.has(id)).length
  const label = VERDICT_LABEL[screen.verdict]
  return (
    <section className="strong" aria-label={`Strong ${label}`}>
      <div className="lane-head">
        {toolbar}
        <h2>Strong {label} ({total})</h2>
        {total > ids.length && <span className="lane-sub">showing {ids.length}</span>}
        <span className="ops-spacer" />
        <span className="key-hints">
          <kbd>Click</kbd> or <kbd>Space</kbd> bot is wrong · <kbd>←↑↓→</kbd> move · <kbd>Z</kbd> undo
        </span>
        <Button size="sm" variant="outline" disabled={!canUndo} onClick={onUndo}>Undo</Button>
        <Button size="sm" onClick={(e) => { if (e.detail <= 1 && e.timeStamp - shownAt.current >= CLICK_GUARD_MS) accept() }}>
          {accepting ? `Accept ${accepting} as ${label}` : `Send ${ids.length} to cards`} <kbd className="kbd-on-brand">Enter</kbd>
        </Button>
      </div>
      <ul className="strong-grid" ref={list} aria-label={`${ids.length} strong ${label} calls`}>
        {ids.map((id, i) => {
          const a = assets.get(id)
          return a ? (
            <Tile key={id} a={a} wrong={wrong.has(id)} focused={active && i === at}
              onToggle={() => { setFocus(i); toggle(id) }} />
          ) : null
        })}
      </ul>
    </section>
  )
}
