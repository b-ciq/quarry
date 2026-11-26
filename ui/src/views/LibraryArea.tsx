import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Alert, Button, Spinner, SplitterGroup, SplitterPane } from '@ctrliq/quantic-react'
import { postUndo, postVerdicts, type Job, type RateSummary } from '../api'
import { AssetEditor, type Decision, type EditorHandle } from '../components/AssetEditor'
import { FilterRail } from '../components/FilterRail'
import { JobLog } from '../components/JobLog'
import { ThumbGrid, type Thumb } from '../components/ThumbGrid'
import {
  CLAUDE_SAYS, facetGroups, filterItems, inboxOrder, libraryFacets, libraryText, nextAfter, viewOf,
  type Faceting, type View,
} from '../gallery'
import { useViewKeys } from '../keys'
import type { Asset } from '../state'
import { ViewBar, type Notice, NoticeBar } from './ViewBar'

export interface RateJob {
  id: string
  running: boolean
  /** Set once the job ends. */
  job?: Job
}

const FACETING: Faceting<Asset> = { facets: libraryFacets, text: libraryText }
const TONE = { yes: 'keep', no: 'reject', maybe: 'maybe' } as const
const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`

function thumbOf(a: Asset, view: View): Thumb {
  const bot = a.rating?.bot
  let badge: Thumb['badge']
  if (view === 'inbox') {
    if (a.status === 'proposed' && a.rating?.human?.verdict === 'yes') badge = { text: 'NEEDS DETAILS', tone: 'note' }
    else if (a.status === 'parked') badge = { text: 'PARKED', tone: 'note' }
    else if (bot) badge = { text: `${CLAUDE_SAYS[bot.verdict].toUpperCase()}${bot.strength === 'strong' ? '' : '?'}`, tone: TONE[bot.verdict] }
  }
  if (a.anti_example) badge = { text: 'AVOID', tone: 'reject' }
  return { id: a.id, src: a.thumb_url, fallback: a.full_url, alt: a.description || a.id, badge }
}

interface Props {
  active: boolean
  assets: Asset[]
  loaded: boolean
  loadError: string | null
  vocabulary: Record<string, string[]>
  q: string
  summary: RateSummary | null
  rateJob: RateJob | null
  rateError: string | null
  onStartRate: () => void
  onRateJobFinished: (job: Job) => void
  onDismissRateJob: () => void
  onChanged: (asset: Asset) => void
  reloadAssets: () => Promise<void>
  refreshAfterWrite: () => void
  confirmDiscard: () => boolean
  onDirtyChange: (dirty: boolean) => void
  /** A filter to open from elsewhere (the Vocabulary page); `n` changes on every request. */
  openFilter: { key: string; view: View; n: number } | null
}

export function LibraryArea({
  active, assets, loaded, loadError, vocabulary, q, summary, rateJob, rateError, onStartRate, onRateJobFinished,
  onDismissRateJob, onChanged, reloadAssets, refreshAfterWrite, confirmDiscard, onDirtyChange, openFilter,
}: Props) {
  const [view, setView] = useState<View>('inbox')
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [notice, setNotice] = useState<Notice | null>(null)
  const [busy, setBusy] = useState(false)
  const [showLog, setShowLog] = useState(false)
  const undoStack = useRef<{ commit: string; ids: string[]; label: string }[]>([])
  const [undoLabel, setUndoLabel] = useState<string | null>(null)
  const editor = useRef<EditorHandle>(null)

  // Adjust during render (no effect round-trip) when a new filter request arrives.
  const [handled, setHandled] = useState(openFilter?.n ?? 0)
  if (openFilter && openFilter.n !== handled) {
    setHandled(openFilter.n)
    setView(openFilter.view)
    setSelected(new Set([openFilter.key]))
    setSelectedId(null)
  }

  const counts = useMemo(() => {
    const c: Record<View, number> = { inbox: 0, approved: 0, rejected: 0 }
    for (const a of assets) c[viewOf(a.status)] += 1
    return c
  }, [assets])
  const inView = useMemo(() => {
    const xs = assets.filter((a) => viewOf(a.status) === view)
    return view === 'inbox' ? xs.sort(inboxOrder) : xs
  }, [assets, view])
  const list = useMemo(() => filterItems(inView, FACETING, selected, q), [inView, selected, q])
  const groups = useMemo(() => facetGroups(inView, FACETING, selected, q), [inView, selected, q])
  const current = list.find((a) => a.id === selectedId) ?? null
  const filtering = selected.size > 0 || q.trim() !== ''

  // Preload the next image so A / X never waits on the network.
  useEffect(() => {
    const i = list.findIndex((a) => a.id === selectedId)
    const next = list[i + 1]
    if (i >= 0 && next) new Image().src = next.full_url
  }, [list, selectedId])

  const switchView = (v: View) => {
    if (v === view || !confirmDiscard()) return
    setView(v); setSelected(new Set()); setSelectedId(null)
  }
  const select = (id: string | null) => { if (id === selectedId || confirmDiscard()) setSelectedId(id) }
  const move = (d: number) => {
    if (!list.length) return
    const i = list.findIndex((a) => a.id === selectedId)
    select(list[Math.max(0, Math.min(list.length - 1, i < 0 ? 0 : i + d))].id)
  }

  const pushUndo = (commit: string, ids: string[], label: string) => {
    undoStack.current.push({ commit, ids, label })
    setUndoLabel(label)
  }

  const decided = useCallback((d: Decision) => {
    if (d.needsDetails) {
      pushUndo(d.commit, [d.asset.id], `approve ${d.asset.id}`)
      return // stays selected so the missing fields can be filled in
    }
    const i = list.findIndex((a) => a.id === d.asset.id)
    setSelectedId(nextAfter(list, new Set([d.asset.id]), i))
    pushUndo(d.commit, [d.asset.id], `${d.verdict === 'yes' ? 'approve' : 'reject'} ${d.asset.id}`)
    refreshAfterWrite()
  }, [list, refreshAfterWrite])

  const transitioned = (a: Asset) => {
    const i = list.findIndex((x) => x.id === a.id)
    setSelectedId(nextAfter(list, new Set([a.id]), i))
    refreshAfterWrite()
  }

  const bulk = async (verdict: 'yes' | 'no') => {
    const ids = list.map((a) => a.id)
    if (!ids.length) return
    if (verdict === 'yes' && !window.confirm(`Approve all ${ids.length} shown? Agents can use them as soon as you publish.`)) return
    setBusy(true)
    setNotice(null)
    const r = await postVerdicts(verdict, ids)
    setBusy(false)
    if (!r.ok) { setNotice({ kind: 'error', text: `Bulk ${verdict === 'yes' ? 'approve' : 'reject'} failed: ${r.error}` }); return }
    const { applied, needs_details, failed, commit } = r.data
    const word = verdict === 'yes' ? 'Approved' : 'Rejected'
    const extra = [
      Object.keys(needs_details).length ? `${Object.keys(needs_details).length} still need details` : '',
      Object.keys(failed).length ? `${Object.keys(failed).length} couldn't be changed (open them to see why)` : '',
    ].filter(Boolean).join('; ')
    if (commit) pushUndo(commit, [...applied, ...Object.keys(needs_details)], `${verdict === 'yes' ? 'approve' : 'reject'} ${plural(applied.length, 'image')}`)
    setNotice({ kind: Object.keys(failed).length ? 'warning' : 'success', text: `${word} ${plural(applied.length, 'image')}.${extra ? ` ${extra}.` : ''}` })
    setSelectedId(null)
    await reloadAssets()
    refreshAfterWrite()
  }

  const undo = async () => {
    const top = undoStack.current.at(-1)
    if (!top || busy) return
    setBusy(true)
    const r = await postUndo(top.commit)
    setBusy(false)
    if (r.ok || (r.status >= 400 && r.status < 500)) {
      undoStack.current.pop()
      setUndoLabel(undoStack.current.at(-1)?.label ?? null)
    }
    if (!r.ok) { setNotice({ kind: 'error', text: `Could not undo: ${r.error}` }); return }
    setNotice({ kind: 'success', text: `Undone: ${top.label}. ${top.ids.length === 1 ? "It's" : "They're"} back in the Inbox.` })
    await reloadAssets()
    if (view === 'inbox' && top.ids.length === 1) setSelectedId(top.ids[0])
    refreshAfterWrite()
  }

  useViewKeys((e) => {
    switch (e.key) {
      case 'ArrowRight': case 'ArrowDown': move(1); return true
      case 'ArrowLeft': case 'ArrowUp': move(-1); return true
      case 'Escape': if (current) { select(null); return true } return false
      case 'z': case 'Z': if (undoLabel) { void undo(); return true } return false
    }
    if (view !== 'inbox' || !current) return false
    const k = e.key.toLowerCase()
    if (k === 'a') { void editor.current?.decide('yes'); return true }
    if (k === 'x') { void editor.current?.decide('no'); return true }
    if (k === 's') { move(1); return true }
    return false
  }, active)

  const waiting = summary?.waiting_for_bot ?? 0
  const rater = summary?.rater
  const running = !!rateJob?.running
  const rateStrip = view === 'inbox' && (waiting > 0 || rateJob || rateError) && (
    <div className="area-strip" role="status">
      {running ? (
        <>
          <Spinner size="sm" />
          <span>Claude is describing, tagging and rating new images. They appear here as each batch finishes.</span>
          <span className="spacer" />
          <Button size="sm" variant="ghost" onClick={() => setShowLog((s) => !s)}>{showLog ? 'Hide log' : 'Show log'}</Button>
        </>
      ) : rateJob?.job ? (
        <>
          <span>{rateJob.job.state === 'failed' ? `Claude stopped: ${rateJob.job.error ?? 'unknown error'}` : `Claude finished: ${plural(Number(rateJob.job.result?.rated ?? 0), 'image')} described and rated.`}</span>
          <span className="spacer" />
          <Button size="sm" variant="ghost" onClick={() => setShowLog((v) => !v)}>{showLog ? 'Hide log' : 'Show log'}</Button>
          <Button size="sm" variant="ghost" onClick={onDismissRateJob}>Dismiss</Button>
        </>
      ) : waiting > 0 ? (
        <>
          <span><strong>{plural(waiting, 'image')}</strong> {waiting === 1 ? "hasn't" : "haven't"} been described and rated by Claude yet.</span>
          <span className="spacer" />
          {rater?.available === false
            ? <span className="strip-dim">Claude is off: {rater.reason}</span>
            : <Button size="sm" onClick={onStartRate}>Describe and rate them</Button>}
        </>
      ) : null}
      {rateError && <Alert type="error">{rateError}</Alert>}
    </div>
  )

  const empty = !loaded ? 'Loading...'
    : loadError ? `Could not load the library: ${loadError}`
      : filtering ? 'Nothing matches these filters.'
        : view === 'inbox' ? 'Inbox zero. Add images with + Add images, then let Claude describe and rate them.'
          : view === 'approved' ? 'Nothing approved yet. Approve images from the Inbox.' : 'Nothing rejected.'

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
      {rateStrip}
      {/* Always mounted while there is a job (in any view): it is what notices the job ending. */}
      {rateJob && (
        <div className="strip-log" hidden={!showLog || view !== 'inbox'}>
          <JobLog key={rateJob.id} jobId={rateJob.id} name="Describe and rate" onFinished={onRateJobFinished} />
        </div>
      )}
      <div className="body">
        <SplitterGroup resizable split="18% 82%">
          <SplitterPane variant="solid" minSize={12} maxSize={35}>
            <FilterRail groups={groups} onToggle={(k, on) => setSelected((s) => { const n = new Set(s); if (on) n.add(k); else n.delete(k); return n })} />
          </SplitterPane>
          <SplitterPane minSize={50} maxSize={100}>
            <SplitterGroup resizable split="60% 40%" collapseBelow="560px">
              <SplitterPane minSize={30}>
                <main className="main" aria-label={`Library ${view}`}>
                  {list.length === 0 ? <p className="empty">{empty}</p>
                    : <ThumbGrid items={list.map((a) => thumbOf(a, view))} selectedId={selectedId} onSelect={select} label={`${list.length} images`} />}
                </main>
              </SplitterPane>
              <SplitterPane collapsed={!current} minSize={25} maxSize={70}>
                {current && (
                  <aside className="detail" aria-label="Image details">
                    <AssetEditor
                      key={current.id}
                      ref={editor}
                      asset={current}
                      vocabulary={vocabulary}
                      onChanged={onChanged}
                      onDecided={decided}
                      onSkip={() => move(1)}
                      onTransition={(_verb, a) => transitioned(a)}
                      onDirtyChange={onDirtyChange}
                      onOpenSimilar={(id) => {
                        const a = assets.find((x) => x.id === id)
                        if (!a || !confirmDiscard()) return
                        const v = viewOf(a.status)
                        if (v !== view) { setView(v); setSelected(new Set()) }
                        setSelectedId(id)
                      }}
                    />
                  </aside>
                )}
              </SplitterPane>
            </SplitterGroup>
          </SplitterPane>
        </SplitterGroup>
      </div>
    </div>
  )
}
