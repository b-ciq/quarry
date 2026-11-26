import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Alert, Badge, Button, SplitterGroup, SplitterPane } from '@ctrliq/quantic-react'
import { fetchCapture, fetchInspiration, markOpened, setInspirationStatus, type InspirationList } from '../api'
import { CAP_MESSAGE, capReached, nextPending, type CaptureList } from '../capture'
import { FilterRail } from '../components/FilterRail'
import { ThumbGrid } from '../components/ThumbGrid'
import {
  facetGroups, filterItems, inspirationFacets, inspirationText, nextAfter, viewOf,
  type Faceting, type InspirationItem, type View,
} from '../gallery'
import { useViewKeys } from '../keys'
import { CaptureView } from './CaptureView'
import { NoticeBar, type Notice, ViewBar } from './ViewBar'

const FACETING: Faceting<InspirationItem> = { facets: inspirationFacets, text: inspirationText }
const POLL_MS = 5000
const STATUS_FOR: Record<'yes' | 'no', 'confirmed' | 'retired'> = { yes: 'confirmed', no: 'retired' }
const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`

interface UndoEntry {
  label: string
  /** Status each id had before the change. */
  from: { id: string; from: string }[]
}

export function InspirationArea({ active, q, onInboxCount }: { active: boolean; q: string; onInboxCount: (n: number) => void }) {
  const [data, setData] = useState<InspirationList | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [capture, setCapture] = useState<CaptureList | null>(null)
  const [view, setView] = useState<View>('inbox')
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [showSaves, setShowSaves] = useState(false)
  const [notice, setNotice] = useState<Notice | null>(null)
  const [busy, setBusy] = useState(false)
  const undoStack = useRef<UndoEntry[]>([])
  const [undoLabel, setUndoLabel] = useState<string | null>(null)

  const load = useCallback(() => {
    void Promise.all([fetchInspiration(), fetchCapture()]).then(([r, c]) => {
      if (r.ok) { setData(r.data); setLoadError(null) } else setLoadError(r.error)
      if (c.ok) setCapture(c.data)
    })
  }, [])
  useEffect(load, [load])
  // New captures arrive from the Chrome extension in the background: refresh while this area is shown.
  useEffect(() => {
    if (!active || showSaves) return
    load()
    const t = setInterval(load, POLL_MS)
    return () => clearInterval(t)
  }, [active, showSaves, load])

  const items = useMemo(() => data?.items ?? [], [data])
  const counts = useMemo(() => {
    const c: Record<View, number> = { inbox: 0, approved: 0, rejected: 0 }
    for (const i of items) c[viewOf(i.status)] += 1
    return c
  }, [items])
  useEffect(() => { onInboxCount(counts.inbox) }, [counts.inbox, onInboxCount])
  const inView = useMemo(() => items.filter((i) => viewOf(i.status) === view), [items, view])
  const list = useMemo(() => filterItems(inView, FACETING, selected, q), [inView, selected, q])
  const groups = useMemo(() => facetGroups(inView, FACETING, selected, q), [inView, selected, q])
  const current = list.find((i) => i.id === selectedId) ?? null
  const filtering = selected.size > 0 || q.trim() !== ''

  const switchView = (v: View) => { if (v !== view) { setView(v); setSelected(new Set()); setSelectedId(null) } }
  const move = (d: number) => {
    if (!list.length) return
    const i = list.findIndex((x) => x.id === selectedId)
    setSelectedId(list[Math.max(0, Math.min(list.length - 1, i < 0 ? 0 : i + d))].id)
  }

  const apply = async (status: 'proposed' | 'confirmed' | 'retired', ids: string[], label: string) => {
    setBusy(true)
    setNotice(null)
    const r = await setInspirationStatus(status, ids)
    setBusy(false)
    if (!r.ok) { setNotice({ kind: 'error', text: `Could not ${label}: ${r.error}` }); return null }
    const failed = Object.entries(r.data.failed)
    if (failed.length) setNotice({ kind: 'warning', text: `${plural(failed.length, 'save')} not changed: ${failed.map(([id, e]) => `${id} (${e})`).join('; ')}` })
    const changed = new Map(r.data.items.map((i) => [i.id, i]))
    setData((d) => (d ? { ...d, items: d.items.map((i) => changed.get(i.id) ?? i) } : d))
    return r.data
  }

  const decide = async (verdict: 'yes' | 'no', ids: string[]) => {
    const word = verdict === 'yes' ? 'approve' : 'reject'
    const label = ids.length === 1 ? `${word} ${ids[0]}` : `${word} ${plural(ids.length, 'save')}`
    const i = list.findIndex((x) => x.id === ids[0])
    const r = await apply(STATUS_FOR[verdict], ids, label)
    if (!r || !r.applied.length) return
    undoStack.current.push({ label, from: r.applied })
    setUndoLabel(label)
    setSelectedId(ids.length === 1 ? nextAfter(list, new Set(ids), i) : null)
    if (ids.length > 1) setNotice({ kind: 'success', text: `${word === 'approve' ? 'Approved' : 'Rejected'} ${plural(r.applied.length, 'save')}.` })
  }

  const bulk = (verdict: 'yes' | 'no') => {
    const ids = list.map((i) => i.id)
    if (verdict === 'yes' && !window.confirm(`Approve all ${ids.length} shown?`)) return
    void decide(verdict, ids)
  }

  const undo = async () => {
    const top = undoStack.current.at(-1)
    if (!top || busy) return
    // Each id goes back to the status it had; group by status so it is one call per status.
    const byStatus = new Map<string, string[]>()
    for (const { id, from } of top.from) byStatus.set(from, [...(byStatus.get(from) ?? []), id])
    for (const [status, ids] of byStatus) {
      if (!(await apply(status as 'proposed' | 'confirmed' | 'retired', ids, `undo ${top.label}`))) return
    }
    undoStack.current.pop()
    setUndoLabel(undoStack.current.at(-1)?.label ?? null)
    setNotice({ kind: 'success', text: `Undone: ${top.label}.` })
    if (top.from.length === 1 && viewOf(top.from[0].from) === view) setSelectedId(top.from[0].id)
  }

  useViewKeys((e) => {
    switch (e.key) {
      case 'ArrowRight': case 'ArrowDown': move(1); return true
      case 'ArrowLeft': case 'ArrowUp': move(-1); return true
      case 'Escape': if (current) { setSelectedId(null); return true } return false
      case 'z': case 'Z': if (undoLabel) { void undo(); return true } return false
    }
    if (view !== 'inbox' || !current || busy) return false
    const k = e.key.toLowerCase()
    if (k === 'a') { void decide('yes', [current.id]); return true }
    if (k === 'x') { void decide('no', [current.id]); return true }
    if (k === 's') { move(1); return true }
    return false
  }, active && !showSaves)

  if (showSaves) {
    return (
      <div className="area">
        <div className="view-bar">
          <Button size="sm" variant="ghost" onClick={() => setShowSaves(false)}>Back to Inspiration</Button>
        </div>
        <main className="main"><CaptureView /></main>
      </div>
    )
  }

  if (data && !data.enabled) {
    return <div className="area"><main className="main"><p className="capture-setup">{data.setup}</p></main></div>
  }

  const notPulled = capture ? capture.counts.pending + capture.counts.partial : 0
  const next = capture ? nextPending(capture.items) : null
  const atCap = capture ? capReached(capture.today) : false
  const opened = (shortcode: string) => {
    void markOpened(shortcode).then((r) => { if (!r.ok) setNotice({ kind: 'error', text: `${shortcode}: ${r.error}` }) })
  }

  const empty = !data ? (loadError ? `Could not load inspiration: ${loadError}` : 'Loading...')
    : filtering ? 'Nothing matches these filters.'
      : view === 'inbox' ? 'Inbox zero. Pull in Instagram saves with Open next post and the Quarry button in Chrome.'
        : view === 'approved' ? 'Nothing approved yet. Approve saves from the Inbox.' : 'Nothing rejected.'

  return (
    <div className="area">
      <ViewBar
        view={view}
        counts={counts}
        onView={switchView}
        shown={list.length}
        total={inView.length}
        filtering={filtering}
        onClear={() => setSelected(new Set())}
        bulk={view === 'inbox' && filtering && list.length > 0 && !busy ? bulk : null}
        undoLabel={undoLabel}
        onUndo={() => void undo()}
      />
      <NoticeBar notice={notice} onClose={() => setNotice(null)} />
      {view === 'inbox' && capture?.enabled && (
        <div className="area-strip">
          <span>
            <strong>Instagram saves:</strong> {plural(notPulled, 'saved post')} not pulled in yet.
            <span className="strip-dim"> Open a post, then click the Quarry button in Chrome. It lands here.</span>
          </span>
          <span className="spacer" />
          <span className="strip-dim" title="Posts opened today, against the daily cap">today {capture.today.opened}/{capture.today.cap}</span>
          {atCap ? <Button size="sm" variant="outline" disabled>{CAP_MESSAGE}</Button>
            : next && (
              <Button size="sm" as="a" href={next.source_url} target="quarry-capture"
                onClick={() => opened(next.shortcode)} onAuxClick={(e) => { if (e.button === 1) opened(next.shortcode) }}>
                Open next post
              </Button>
            )}
          <Button size="sm" variant="ghost" onClick={() => setShowSaves(true)}>Manage saves</Button>
        </div>
      )}
      {data && data.warnings.length > 0 && view === 'inbox' && (
        <div className="notice-bar"><Alert type="warning">{plural(data.warnings.length, 'warning')}: {data.warnings.slice(0, 3).join('; ')}</Alert></div>
      )}
      <div className="body">
        <SplitterGroup resizable split="18% 82%">
          <SplitterPane variant="solid" minSize={12} maxSize={35}>
            <FilterRail groups={groups} onToggle={(k, on) => setSelected((s) => { const n = new Set(s); if (on) n.add(k); else n.delete(k); return n })} />
          </SplitterPane>
          <SplitterPane minSize={50} maxSize={100}>
            <SplitterGroup resizable split="60% 40%" collapseBelow="560px">
              <SplitterPane minSize={30}>
                <main className="main" aria-label={`Inspiration ${view}`}>
                  {list.length === 0 ? <p className="empty">{empty}</p> : (
                    <ThumbGrid
                      items={list.map((i) => ({ id: i.id, src: i.media[0], alt: i.caption || i.id,
                        badge: i.media.length > 1 ? { text: `${i.media.length} SLIDES`, tone: 'note' as const } : undefined }))}
                      selectedId={selectedId}
                      onSelect={setSelectedId}
                      label={`${list.length} saves`}
                    />
                  )}
                </main>
              </SplitterPane>
              <SplitterPane collapsed={!current} minSize={25} maxSize={70}>
                {current && <InspirationDetail key={current.id} item={current} view={view} busy={busy}
                  onDecide={(v) => void decide(v, [current.id])} onSkip={() => move(1)} />}
              </SplitterPane>
            </SplitterGroup>
          </SplitterPane>
        </SplitterGroup>
      </div>
    </div>
  )
}

function InspirationDetail({ item, view, busy, onDecide, onSkip }: {
  item: InspirationItem
  view: View
  busy: boolean
  onDecide: (v: 'yes' | 'no') => void
  onSkip: () => void
}) {
  const [slide, setSlide] = useState(0)
  const tags = [...item.concepts, ...item.style]
  return (
    <aside className="detail" aria-label="Save details">
      <div className="editor">
        <a href={item.media[slide]} target="_blank" rel="noreferrer" className="editor-image" title="Open full size">
          <img src={item.media[slide]} alt={item.caption || item.id} />
        </a>
        {item.media.length > 1 && (
          <ul className="similar-strip" aria-label="Slides">
            {item.media.map((m, i) => (
              <li key={m} className={i === slide ? 'slide-on' : undefined}>
                <a href={m} onClick={(e) => { e.preventDefault(); setSlide(i) }} aria-label={`Slide ${i + 1}`}><img src={m} alt="" loading="lazy" /></a>
              </li>
            ))}
          </ul>
        )}
        <div className="editor-form">
          <div className="editor-head">
            <h2>{item.id}</h2>
            <Badge size="sm" color={view === 'approved' ? 'success' : view === 'inbox' ? 'warning' : 'gray'}>
              {view === 'inbox' ? 'in inbox' : view}
            </Badge>
          </div>
          <div className="editor-actions decide-actions">
            {view === 'inbox' && (
              <>
                <Button size="sm" disabled={busy} onClick={() => onDecide('yes')}>Approve <kbd>A</kbd></Button>
                <Button size="sm" variant="outline" destructive disabled={busy} onClick={() => onDecide('no')}>Reject <kbd>X</kbd></Button>
                <Button size="sm" variant="outline" disabled={busy} onClick={onSkip}>Skip <kbd>S</kbd></Button>
              </>
            )}
            {view === 'approved' && <Button size="sm" variant="outline" destructive disabled={busy} onClick={() => onDecide('no')}>Reject</Button>}
            {view === 'rejected' && <Button size="sm" variant="outline" disabled={busy} onClick={() => onDecide('yes')}>Approve instead</Button>}
            <Button size="sm" variant="ghost" as="a" href={item.source_url} target="_blank">View on Instagram</Button>
          </div>
          <div className="field">
            <span className="field-label">From</span>
            <p>{item.owner ? `@${item.owner}` : 'unknown'}{item.saved_at ? ` · saved ${item.saved_at.slice(0, 10)}` : ''}</p>
          </div>
          {item.caption && (
            <div className="field">
              <span className="field-label">Caption</span>
              <p className="caption">{item.caption}</p>
            </div>
          )}
          <div className="field">
            <span className="field-label">Description</span>
            <p className={item.description ? undefined : 'strip-dim'}>
              {item.description || 'Not described yet. Claude does not describe or tag inspiration yet; that comes next.'}
            </p>
          </div>
          {tags.length > 0 && (
            <div className="field">
              <span className="field-label">Tags</span>
              <p>{tags.map((t) => <Badge key={t} size="sm" color="gray">{t}</Badge>)}</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
