import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Alert, Badge, Button, ButtonBar, ButtonBarItem, LucideIconX, Spinner, TabButton, TabPanel, Tabs, Toast,
} from '@ctrliq/quantic-react'
import {
  callErrors, fetchNeedsDetails, patchAsset, type NeedsDetailsError, postUndo, postVerdict, postVerdicts, type Job, type RateSummary,
} from '../api'
import { AssetEditor } from '../components/AssetEditor'
import { JobLog } from '../components/JobLog'
import { RateCard } from '../components/RateCard'
import { StrongGrid } from '../components/StrongGrid'
import { useViewKeys } from '../keys'
import {
  agreementText, cursorIndex, lanes, needsDetails, pickScreen, sameScreen, VERDICT_LABEL,
  type Cursor, type Screen, type Verdict,
} from '../rating'
import type { Asset } from '../state'

export interface RateJob {
  id: string
  running: boolean
  /** Set once the job ends. */
  job?: Job
}

const jobFailures = (job: Job) => Object.keys((job.result?.failed as Record<string, string> | undefined) ?? {}).length

/** One line for a finished Auto-rate run. */
function jobSummary(job: Job): string {
  if (job.state === 'failed') return job.error ?? 'Auto-rate failed.'
  const r = job.result ?? {}
  const failed = jobFailures(job)
  return `${plural(Number(r.rated ?? 0), 'image')} rated, ${failed} failed, ${Number(r.skipped ?? 0)} skipped.`
}

interface Props {
  /** False while another page is showing: the view stays mounted (undo, queued writes) but ignores keys. */
  active: boolean
  assets: Asset[]
  vocabulary: Record<string, string[]>
  summary: RateSummary | null
  summaryError: string | null
  rateJob: RateJob | null
  /** Start Auto-rate on unrated images, or (redo 'unsure') re-rate the bot's unsure calls. */
  onStartRate: (redo?: 'unsure') => void
  onRateJobFinished: (job: Job) => void
  onDismissRateJob: () => void
  rateError: string | null
  onChanged: (asset: Asset) => void
  /** Swap in a saved asset without refreshing anything else (keeps rapid verdicts cheap). */
  onAssetSaved: (asset: Asset) => void
  refreshStatus: () => void
  /** Re-fetch every asset (after batch writes and undo, whose responses carry no sidecars). */
  reloadAssets: () => Promise<void>
  refreshSummary: () => void
  confirmDiscard: () => boolean
  onDirtyChange: (dirty: boolean) => void
  /** Reports the To review count (it excludes verdicts still being saved, unlike a count over assets). */
  onToReviewCount: (n: number) => void
}

type Tab = 'review' | 'needs' | 'parked'
const TABS: Tab[] = ['review', 'needs', 'parked']
/** Transient feedback, shown as a toast so the grid and card never shift under the curator. */
type Notice = { kind: 'error' | 'success' | 'info'; title: string; text?: string; undoCommit?: string }
/** Errors a card shows: from a refused verdict (cleared when a verdict lands) and from a refused edit. */
type CardErrors = Record<string, { verdict: string[]; edit: string[] }>
const fieldOf = (e: string) => e.split(/[:.]/)[0]
const NOTICE_MS = 6000
/** One undoable write. A grid accept is one commit covering many ids. */
interface UndoEntry {
  commit: string
  ids: string[]
  from: 'grid' | 'card' | 'parked'
  verdict: Verdict
}

const WRONG_KEY = 'quarry.rate.wrong'
function loadWrong(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(WRONG_KEY) ?? '[]') as string[]) } catch { return new Set() }
}

const add = (s: Set<string>, ids: string[]) => new Set([...s, ...ids])
const remove = (s: Set<string>, ids: string[]) => { const n = new Set(s); ids.forEach((id) => n.delete(id)); return n }
const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`

export function RateView({
  active, assets, vocabulary, summary, summaryError, rateJob, onStartRate, onRateJobFinished, onDismissRateJob,
  rateError, onChanged, onAssetSaved, refreshStatus, reloadAssets, refreshSummary, confirmDiscard, onDirtyChange, onToReviewCount,
}: Props) {
  const [tab, setTab] = useState<Tab>('review')
  const [laneChoice, setLaneChoice] = useState<'sure' | 'unsure' | null>(null)
  /** Ids the curator flagged "bot is wrong" in the grid: they go to the cards. */
  const [wrong, setWrong] = useState<Set<string>>(loadWrong)
  /** Ids with a write in flight: hidden so the next card or screen shows at once. */
  const [pending, setPending] = useState<Set<string>>(new Set())
  const [cardErrors, setCardErrors] = useState<CardErrors>({})
  const setErrors = (id: string, kind: 'verdict' | 'edit', list: string[]) =>
    setCardErrors((m) => ({ ...m, [id]: { verdict: m[id]?.verdict ?? [], edit: m[id]?.edit ?? [], [kind]: list } }))
  const errorsOf = (id: string) => [...new Set([...(cardErrors[id]?.verdict ?? []), ...(cardErrors[id]?.edit ?? [])])]
  /** Each asset as it will be once its queued edits land: what the card shows and edits build on. */
  const [expected, setExpected] = useState<Record<string, Asset>>({})
  const expectedRef = useRef(expected) // read by handlers that run before the next render
  const editsInFlight = useRef<Record<string, number>>({})
  const [screen, setScreen] = useState<Screen | null>(null)
  /** Bumped only for a new grid screen, so a screen losing a tile keeps its "bot is wrong" toggles. */
  const [screenKey, setScreenKey] = useState(0)
  const [cursor, setCursor] = useState<Cursor>({ id: null, index: 0 })
  const [parkedCursor, setParkedCursor] = useState<Cursor>({ id: null, index: 0 })
  const [notice, setNotice] = useState<Notice | null>(null)
  const [editorId, setEditorId] = useState<string | null>(null)
  const [showLog, setShowLog] = useState(false)
  const [needsErrors, setNeedsErrors] = useState<Record<string, NeedsDetailsError[]>>({})
  const undoStack = useRef<UndoEntry[]>([])
  const [undoDepth, setUndoDepth] = useState(0)
  const [undoTop, setUndoTop] = useState<string | null>(null)
  const syncUndo = () => { setUndoDepth(undoStack.current.length); setUndoTop(undoStack.current.at(-1)?.commit ?? null) }

  // Writes run one at a time, in key order: a verdict never overtakes the edit typed before it,
  // and Z always undoes the newest landed write.
  const chain = useRef<Promise<unknown>>(Promise.resolve())
  const [saving, setSaving] = useState(0)
  const enqueue = useCallback((task: () => Promise<void>) => {
    setSaving((n) => n + 1)
    const p = chain.current.then(task)
    chain.current = p
      .catch((e: Error) => setNotice({ kind: 'error', title: 'Something went wrong', text: e.message }))
      .finally(() => setSaving((n) => n - 1))
  }, [])
  // Status and summary are refreshed once the writes go quiet, not per write: at keystroke speed a
  // per-write refresh floods the browser's connection pool and starves the verdict queue.
  const refreshTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const scheduleRefresh = useCallback(() => {
    clearTimeout(refreshTimer.current)
    refreshTimer.current = setTimeout(() => { refreshSummary(); refreshStatus() }, 800)
  }, [refreshSummary, refreshStatus])
  useEffect(() => () => clearTimeout(refreshTimer.current), [])

  // Verdicts are shown as done before the server has them; closing the tab now would drop them.
  useEffect(() => {
    if (!saving) return
    const warn = (e: BeforeUnloadEvent) => e.preventDefault()
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [saving])

  const byId = useMemo(() => new Map(assets.map((a) => [a.id, a])), [assets])
  const visible = useMemo(() => assets.filter((a) => !pending.has(a.id)), [assets, pending])
  const { strong, unsure } = useMemo(() => lanes(visible, wrong), [visible, wrong])
  const strongTotal = (v: Verdict) => strong.filter((s) => s.verdict === v).reduce((n, s) => n + s.ids.length, 0)
  const strongCount = strong.reduce((n, s) => n + s.ids.length, 0)
  useEffect(() => { onToReviewCount(strongCount + unsure.length) }, [onToReviewCount, strongCount, unsure.length])
  const parked = useMemo(() => visible.filter((a) => a.status === 'parked').map((a) => a.id).sort(), [visible])
  const needs = useMemo(() => visible.filter(needsDetails), [visible])
  const needsKey = needs.map((a) => a.id).join(',')

  // Keep the shown grid screen stable (see pickScreen); adjust during render, no effect round-trip.
  const shown = pickScreen(screen, strong)
  if (shown !== screen) {
    if (!sameScreen(screen, shown)) setScreenKey((k) => k + 1)
    setScreen(shown)
  }
  const lane = shown === null ? 'unsure' : unsure.length === 0 ? 'sure' : (laneChoice ?? 'sure')

  const cardIdx = cursorIndex(unsure, cursor)
  const cardId = unsure[cardIdx]
  const parkedIdx = cursorIndex(parked, parkedCursor)
  const parkedId = parked[parkedIdx]

  // Leaving the page closes the editor (App already asked about unsaved edits).
  const [wasActive, setWasActive] = useState(active)
  if (wasActive !== active) {
    setWasActive(active)
    if (!active) setEditorId(null)
  }

  useEffect(() => {
    if (!active || tab !== 'needs') return
    let live = true
    fetchNeedsDetails().then((r) => { if (live && r.ok) setNeedsErrors(r.data) })
    return () => { live = false }
  }, [active, tab, needsKey])

  // Preload the next cards' images so Y/N/M never waits on the network.
  useEffect(() => {
    if (!active) return
    const q = tab === 'parked' ? parked : unsure
    const i = tab === 'parked' ? parkedIdx : cardIdx
    for (const id of q.slice(i + 1, i + 3)) {
      const a = byId.get(id)
      if (a) new Image().src = a.full_url
    }
  }, [active, tab, unsure, parked, cardIdx, parkedIdx, byId])

  // "Bot is wrong" flags outlive a reload; ids that got a verdict drop out.
  useEffect(() => {
    if (!assets.length) return
    const open = [...wrong].filter((id) => { const a = byId.get(id); return a?.status === 'proposed' && !a.rating?.human })
    localStorage.setItem(WRONG_KEY, JSON.stringify(open))
  }, [wrong, assets.length, byId])

  // Errors stay until closed; everything else fades so it never piles up.
  useEffect(() => {
    if (!notice || notice.kind === 'error') return
    const t = setTimeout(() => setNotice((n) => (n === notice ? null : n)), NOTICE_MS)
    return () => clearTimeout(t)
  }, [notice])

  const pushUndo = (e: UndoEntry) => { undoStack.current.push(e); syncUndo() }

  const decide = (id: string, verdict: Verdict, reason: string | undefined, from: 'card' | 'parked') => {
    const idx = from === 'parked' ? parkedIdx : cardIdx
    ;(from === 'parked' ? setParkedCursor : setCursor)({ id: null, index: idx })
    setPending((p) => add(p, [id]))
    setNotice(null)
    enqueue(async () => {
      const r = await postVerdict(id, verdict, reason)
      if (r.ok) {
        onAssetSaved(r.data.asset)
        setErrors(id, 'verdict', [])
        setWrong((w) => remove(w, [id]))
        pushUndo({ commit: r.data.commit, ids: [id], from, verdict })
        if (r.data.needs_details) {
          setNotice({ kind: 'info', title: 'Moved to Needs details', text: `${id}: Yes recorded. Missing: ${r.data.needs_details.join('; ')}`, undoCommit: r.data.commit })
        }
      } else {
        const errors = callErrors(r)
        setErrors(id, 'verdict', errors.length ? errors : [r.error])
        setNotice({ kind: 'error', title: `Could not record ${VERDICT_LABEL[verdict]}`, text: `${id}: ${r.error}. Fix it on the card and try again.` })
        ;(from === 'parked' ? setParkedCursor : setCursor)({ id, index: idx })
        if (from === 'parked') setTab('parked')
        else { setTab('review'); setLaneChoice('unsure') }
      }
      setPending((p) => remove(p, [id]))
      scheduleRefresh()
    })
  }

  const accept = (s: Screen, ids: string[], flagged: string[]) => {
    setWrong((w) => add(w, flagged))
    setNotice(flagged.length && !ids.length ? { kind: 'info', title: `${plural(flagged.length, 'image')} sent to the cards` } : null)
    if (!ids.length) return
    setPending((p) => add(p, ids))
    enqueue(async () => {
      const r = await postVerdicts(s.verdict, ids)
      if (r.ok) {
        const failed = r.data.failed
        const needsIds = Object.keys(r.data.needs_details)
        setWrong((w) => add(w, Object.keys(failed)))
        setCardErrors((m) => {
          const n = { ...m }
          for (const [fid, errs] of Object.entries(failed)) n[fid] = { verdict: errs, edit: m[fid]?.edit ?? [] }
          return n
        })
        if (r.data.commit) pushUndo({ commit: r.data.commit, ids: [...r.data.applied, ...needsIds], from: 'grid', verdict: s.verdict })
        const parts: string[] = []
        if (needsIds.length) parts.push(`${needsIds.length} moved to Needs details`)
        if (Object.keys(failed).length) parts.push(`${Object.keys(failed).length} need a fix on the card`)
        if (flagged.length) parts.push(`${flagged.length} flagged for a closer look`)
        setNotice({
          kind: Object.keys(failed).length ? 'error' : 'success',
          title: r.data.commit ? `Accepted ${r.data.applied.length} as ${VERDICT_LABEL[s.verdict]}` : 'Nothing accepted',
          text: parts.length ? `${parts.join(', ')}.` : undefined,
          undoCommit: r.data.commit ?? undefined,
        })
      } else {
        setNotice({ kind: 'error', title: 'Could not accept the screen', text: r.error })
      }
      await reloadAssets()
      setPending((p) => remove(p, ids))
      scheduleRefresh()
    })
  }

  const undo = () => {
    if (!undoStack.current.length) return
    enqueue(async () => {
      const top = undoStack.current.at(-1)
      if (!top) return
      const r = await postUndo(top.commit)
      if (r.ok || (r.status >= 400 && r.status < 500)) { undoStack.current.pop(); syncUndo() }
      if (!r.ok) {
        setNotice({ kind: 'error', title: 'Could not undo', text: r.error })
        return
      }
      await reloadAssets()
      setCardErrors((m) => { const n = { ...m }; top.ids.forEach((id) => { if (n[id]) n[id] = { ...n[id], verdict: [] } }); return n })
      const first = top.ids[0] ?? null
      if (top.from === 'grid') {
        setTab('review'); setLaneChoice('sure'); setScreen({ verdict: top.verdict, ids: top.ids }); setScreenKey((k) => k + 1)
      } else if (top.from === 'parked') {
        setTab('parked'); setParkedCursor({ id: first, index: 0 })
      } else {
        setTab('review'); setLaneChoice('unsure'); setCursor({ id: first, index: 0 })
      }
      const what = top.ids.length === 1 ? top.ids[0] : plural(top.ids.length, 'image')
      setNotice({ kind: 'success', title: 'Undone', text: `${VERDICT_LABEL[top.verdict]} on ${what} is back for review.` })
      scheduleRefresh()
    })
  }

  const edit = (id: string, change: (latest: Asset) => Record<string, unknown>) => {
    const base = expectedRef.current[id] ?? byId.get(id)
    if (!base) return
    const fields = change(base)
    expectedRef.current = { ...expectedRef.current, [id]: { ...base, ...fields } as Asset }
    setExpected(expectedRef.current)
    editsInFlight.current[id] = (editsInFlight.current[id] ?? 0) + 1
    enqueue(async () => {
      const r = await patchAsset(id, fields)
      editsInFlight.current[id] -= 1
      if (r.ok) {
        onAssetSaved(r.asset)
        const fixed = (e: string) => Object.keys(fields).includes(fieldOf(e))
        setCardErrors((m) => (m[id] ? { ...m, [id]: { verdict: m[id].verdict.filter((e) => !fixed(e)), edit: m[id].edit.filter((e) => !fixed(e)) } } : m))
      } else {
        setErrors(id, 'edit', r.errors.length ? r.errors : [r.error])
        setNotice({ kind: 'error', title: 'Edit not saved', text: `${id}: ${r.errors.join('; ') || r.error}` })
      }
      // Once nothing is queued (or the server refused), the saved asset is the truth again.
      if (!r.ok || editsInFlight.current[id] === 0) {
        const { [id]: _, ...rest } = expectedRef.current
        expectedRef.current = rest
        setExpected(rest)
      }
    })
  }

  const openEditor = (id: string) => { setEditorId(id); setNotice(null) }
  const closeEditor = () => { if (confirmDiscard()) setEditorId(null) }
  useViewKeys((e) => { if (e.key !== 'Escape') return false; closeEditor(); return true }, active && editorId !== null)

  const selectTab = (t: Tab) => {
    setTab(t)
    ;(document.activeElement as HTMLElement | null)?.blur() // arrows belong to the lanes, not the tab strip
  }
  const selectLane = (l: 'sure' | 'unsure') => {
    setLaneChoice(l)
    ;(document.activeElement as HTMLElement | null)?.blur()
  }

  const waiting = summary?.waiting_for_bot ?? 0
  const rater = summary?.rater
  const running = !!rateJob?.running
  /** Bot-unsure calls nobody has judged yet: what "Re-rate unsure" would send back to the bot. */
  const unsureBot = useMemo(
    () => assets.filter((a) => a.status === 'proposed' && a.rating?.bot?.strength === 'unsure' && !a.rating.human).length,
    [assets],
  )
  const editing = editorId ? byId.get(editorId) : undefined
  const keysOn = active && !editing

  const reviewBody = () => {
    if (!shown && unsure.length === 0) {
      return (
        <div className="rate-empty">
          <h2>All caught up</h2>
          <p className="empty">
            {waiting > 0
              ? `${plural(waiting, 'image')} still waiting for the bot. Run Auto-rate to queue them here.`
              : 'Nothing left for you to check. New images land here once Auto-rate has looked at them.'}
          </p>
          {(needs.length > 0 || parked.length > 0) && (
            <div className="rate-empty-actions">
              {needs.length > 0 && <Button size="sm" variant="outline" onClick={() => selectTab('needs')}>Needs details ({needs.length})</Button>}
              {parked.length > 0 && <Button size="sm" variant="outline" onClick={() => selectTab('parked')}>Parked ({parked.length})</Button>}
            </div>
          )}
        </div>
      )
    }
    const laneSwitch = (
      <ButtonBar size="sm" aria-label="Lane" className="lane-switch">
        <ButtonBarItem active={lane === 'sure'} disabled={!shown} onClick={() => selectLane('sure')}>
          Bot is sure ({strongCount})
        </ButtonBarItem>
        <ButtonBarItem active={lane === 'unsure'} disabled={unsure.length === 0} onClick={() => selectLane('unsure')}>
          Bot is unsure ({unsure.length})
        </ButtonBarItem>
      </ButtonBar>
    )
    return (
      <>
        {lane === 'sure' && shown ? (
          <StrongGrid
            key={`${shown.verdict}:${screenKey}`}
            screen={shown}
            assets={byId}
            total={strongTotal(shown.verdict)}
            active={keysOn && tab === 'review'}
            canUndo={undoDepth > 0}
            onAccept={(ids, flagged) => accept(shown, ids, flagged)}
            onUndo={undo}
            toolbar={laneSwitch}
          />
        ) : cardId && byId.get(cardId) ? (
          <RateCard
            key={cardId}
            asset={expected[cardId] ?? byId.get(cardId)!}
            vocabulary={vocabulary}
            verdicts={['yes', 'no', 'maybe']}
            errors={errorsOf(cardId)}
            position={{ index: cardIdx, total: unsure.length }}
            active={keysOn && tab === 'review'}
            canUndo={undoDepth > 0}
            onVerdict={(v, why) => decide(cardId, v, why, 'card')}
            onMove={(d) => {
              const i = Math.max(0, Math.min(cardIdx + d, unsure.length - 1))
              setCursor({ id: unsure[i], index: i })
            }}
            onUndo={undo}
            onEdit={(change) => edit(cardId, change)}
            onOpenEditor={() => openEditor(cardId)}
            toolbar={laneSwitch}
          />
        ) : null}
      </>
    )
  }

  const needsBody = () => needs.length === 0 ? (
    <div className="rate-empty">
      <h2>Nothing needs details</h2>
      <p className="empty">A Yes that cannot be confirmed from the card (say, a missing license) shows up here with what is missing.</p>
    </div>
  ) : (
    <ul className="needs-list" aria-label="Needs details">
      {needs.map((a) => (
        <li key={a.id} className="needs-row">
          <img src={a.thumb_url} alt={a.description || a.id} loading="lazy" />
          <div className="needs-info">
            <strong>{a.id}</strong>
            <span className="editor-meta">{a.class} / {a.source?.origin} / {a.license || 'no license'}</span>
            {(needsErrors[a.id] ?? []).map((e) => (
              <p key={e.error} className="field-error">
                {e.error}{!e.editable && <span className="field-hint"> (not editable here: set it in {a.id}.json)</span>}
              </p>
            ))}
          </div>
          <Button size="sm" variant="outline" onClick={() => openEditor(a.id)}>Open in editor</Button>
        </li>
      ))}
    </ul>
  )

  const parkedBody = () => {
    const a = parkedId ? byId.get(parkedId) : undefined
    if (!a) {
      return (
        <div className="rate-empty">
          <h2>Nothing parked</h2>
          <p className="empty">Maybe-yes images wait here, out of the library, until someone says Yes or No.</p>
        </div>
      )
    }
    return (
      <RateCard
        key={a.id}
        asset={expected[a.id] ?? a}
        vocabulary={vocabulary}
        verdicts={['yes', 'no']}
        errors={errorsOf(a.id)}
        position={{ index: parkedIdx, total: parked.length }}
        active={keysOn && tab === 'parked'}
        canUndo={undoDepth > 0}
        onVerdict={(v, why) => decide(a.id, v, why, 'parked')}
        onMove={(d) => {
          const i = Math.max(0, Math.min(parkedIdx + d, parked.length - 1))
          setParkedCursor({ id: parked[i], index: i })
        }}
        onUndo={undo}
        onEdit={(change) => edit(a.id, change)}
        onOpenEditor={() => openEditor(a.id)}
      />
    )
  }

  return (
    <div className="rate">
      <div className="rate-strip" role="region" aria-label="Rating status">
        <div className="rate-strip-text">
          <strong>{summary ? agreementText(summary.agreement) : summaryError ? 'Rating status unavailable' : 'Loading...'}</strong>
          {summary?.learning === 'recent' && (
            <span className="editor-meta">Learning from recent verdicts — build the real index for look-alike learning.</span>
          )}
          {summaryError && <span className="field-error">{summaryError}</span>}
        </div>
        <span className="ops-spacer" />
        {rateJob?.job && (
          <span className="rate-last-run">
            <Badge size="sm" color={rateJob.job.state === 'failed' || jobFailures(rateJob.job) > 0 ? 'warning' : 'success'}>
              Auto-rate {rateJob.job.state === 'failed' ? 'stopped' : 'done'}
            </Badge>
            <span className="editor-meta">{jobSummary(rateJob.job)}</span>
            <Button size="sm" variant="ghost" onClick={() => setShowLog((v) => !v)}>{showLog ? 'Hide log' : 'Log'}</Button>
            <Button icon size="sm" variant="ghost" onClick={() => { setShowLog(false); onDismissRateJob() }}>
              <LucideIconX size="xs" />
              <span className="sr-only">Dismiss Auto-rate result</span>
            </Button>
          </span>
        )}
        {saving > 0 && (
          <span className="rate-saving">
            <Spinner size="xs" label="Saving changes" /> Saving {plural(saving, 'change')}...
          </span>
        )}
        <span className="rate-waiting">{plural(waiting, 'image')} waiting for the bot</span>
        <Button
          size="sm"
          variant="outline"
          disabled={!rater?.available || running || unsureBot === 0}
          title="Ask the bot again about its unsure calls that nobody has judged yet"
          onClick={() => onStartRate('unsure')}
        >
          Re-rate unsure ({unsureBot})
        </Button>
        <Button size="sm" disabled={!rater?.available || running || waiting === 0} onClick={() => onStartRate()}>
          {running ? 'Auto-rating...' : 'Auto-rate'}
        </Button>
        {rater && !rater.available && <span className="editor-meta rate-off">{rater.reason}</span>}
      </div>
      {rateError && <div className="rate-notice"><Alert type="error">{rateError}</Alert></div>}
      {rateJob && (rateJob.running || showLog) && (
        <div className="rate-notice rate-job">
          <JobLog key={rateJob.id} jobId={rateJob.id} name="Auto-rate" onFinished={onRateJobFinished} />
        </div>
      )}

      {notice && active && (
        <div className="rate-toasts">
          <Toast open type={notice.kind} onClose={() => setNotice(null)}>
            <span slot="title">{notice.title}</span>
            {notice.text}
            {notice.undoCommit && undoTop === notice.undoCommit && (
              <Button slot="action" size="sm" variant="ghost" onClick={undo}>Undo</Button>
            )}
          </Toast>
        </div>
      )}

      {editing ? (
        <div className="review rate-editor">
          <div className="review-bar">
            <Button size="sm" variant="outline" onClick={closeEditor}>Back to rating</Button>
            <span className="review-keys">Esc: back to rating.</span>
          </div>
          <AssetEditor
            key={editing.id}
            asset={editing}
            vocabulary={vocabulary}
            onChanged={onChanged}
            onDirtyChange={onDirtyChange}
            onTransition={() => { setEditorId(null); refreshSummary() }}
          />
        </div>
      ) : (
        <Tabs size="sm" className="rate-tabs" selectedIndex={TABS.indexOf(tab)} onTabSelected={(e) => selectTab(TABS[e.detail.index])}>
          <TabButton index={0}>To review ({strongCount + unsure.length})</TabButton>
          <TabButton index={1}>Needs details ({needs.length})</TabButton>
          <TabButton index={2}>Parked ({parked.length})</TabButton>
          <TabPanel index={0}>{tab === 'review' && reviewBody()}</TabPanel>
          <TabPanel index={1}>{tab === 'needs' && needsBody()}</TabPanel>
          <TabPanel index={2}>{tab === 'parked' && parkedBody()}</TabPanel>
        </Tabs>
      )}
    </div>
  )
}
