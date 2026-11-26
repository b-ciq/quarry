import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button, ButtonBar, ButtonBarItem, Dialog, DialogTitle, TextInput } from '@ctrliq/quantic-react'
import {
  fetchAssets, fetchRateSummary, fetchStatus, fetchVocabulary, startAutoRate,
  type Job, type RateSummary, type Status,
} from './api'
import { IngestDrop } from './components/IngestDrop'
import { OpsBar } from './components/OpsBar'
import { canDiscard } from './editing'
import { facetKey, libraryFacets, viewOf } from './gallery'
import { ReloadGuard, type Asset } from './state'
import { InspirationArea } from './views/InspirationArea'
import { LibraryArea, type RateJob } from './views/LibraryArea'
import { VocabPanel } from './views/VocabPanel'

type Area = 'library' | 'inspiration' | 'vocabulary'

/** Vocabulary axis (as the Vocabulary page names it) to the Library filter group. */
const AXIS_GROUP: Record<string, string> = {
  product: 'Products', categories: 'Categories', verticals: 'Verticals', concepts: 'Concepts', style: 'Style',
}

export function App() {
  const [area, setArea] = useState<Area>('library')
  const [assets, setAssets] = useState<Asset[]>([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<Status | null>(null)
  const [statusError, setStatusError] = useState<string | null>(null)
  const [vocabulary, setVocabulary] = useState<Record<string, string[]>>({})
  const [q, setQ] = useState('')
  const [summary, setSummary] = useState<RateSummary | null>(null)
  const [rateJob, setRateJob] = useState<RateJob | null>(null)
  const [rateError, setRateError] = useState<string | null>(null)
  const [adding, setAdding] = useState(false)
  const [inspirationInbox, setInspirationInbox] = useState(0)
  const [openFilter, setOpenFilter] = useState<{ key: string; view: 'inbox' | 'approved'; n: number } | null>(null)

  const refreshStatus = useCallback(() => {
    fetchStatus().then((s) => { setStatus(s); setStatusError(null) }).catch((e: Error) => setStatusError(e.message))
  }, [])
  const refreshSummary = useCallback(() => {
    fetchRateSummary().then((r) => { if (r.ok) setSummary(r.data) })
  }, [])

  // A reload in flight when a verdict lands must not bring the decided image back.
  const [reloads] = useState(() => new ReloadGuard())
  const reloadAssets = useCallback(() => {
    const ticket = reloads.begin()
    return fetchAssets()
      .then((a) => {
        if (reloads.accept(ticket)) setAssets((cur) => reloads.merge(ticket, a, cur))
        setError(null)
      })
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoaded(true))
  }, [reloads])

  const refresh = useCallback(() => {
    void reloadAssets()
    fetchVocabulary().then(setVocabulary).catch(() => setVocabulary({}))
    refreshStatus()
    refreshSummary()
  }, [refreshStatus, refreshSummary, reloadAssets])
  useEffect(refresh, [refresh])
  // The server fetches upstream lazily; poll so ahead/behind and staleness stay current.
  useEffect(() => {
    const t = setInterval(refreshStatus, 30000)
    return () => clearInterval(t)
  }, [refreshStatus])

  // Status and summary refresh once writes go quiet, not per keystroke verdict.
  const refreshTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const refreshAfterWrite = useCallback(() => {
    clearTimeout(refreshTimer.current)
    refreshTimer.current = setTimeout(() => { refreshSummary(); refreshStatus() }, 800)
  }, [refreshSummary, refreshStatus])

  // Claude commits in chunks: pull them in while it runs so the Inbox fills up.
  useEffect(() => {
    if (!rateJob?.running) return
    const t = setInterval(() => { void reloadAssets(); refreshSummary() }, 5000)
    return () => clearInterval(t)
  }, [rateJob?.running, reloadAssets, refreshSummary])

  const startRate = useCallback(async () => {
    setRateError(null)
    const r = await startAutoRate()
    if (r.ok) setRateJob({ id: r.data.job_id, running: true })
    else setRateError(`Claude did not start: ${r.error}`)
  }, [])
  const rateFinished = useCallback((job: Job) => {
    setRateJob((cur) => (cur ? { ...cur, running: false, job } : cur))
    refresh()
  }, [refresh])

  const onAssetSaved = useCallback((a: Asset) => {
    reloads.saved(a.id)
    setAssets((xs) => xs.map((x) => (x.id === a.id ? a : x)))
  }, [reloads])
  const onChanged = useCallback((a: Asset) => { onAssetSaved(a); refreshAfterWrite() }, [onAssetSaved, refreshAfterWrite])

  const dirtyRef = useRef(false)
  const onDirtyChange = useCallback((d: boolean) => { dirtyRef.current = d }, [])
  const confirmDiscard = useCallback(() => {
    if (!canDiscard(dirtyRef.current, () => window.confirm('You have unsaved changes. Discard them?'))) return false
    dirtyRef.current = false // accepted: a follow-up close event must not ask again
    return true
  }, [])
  useEffect(() => {
    const warn = (e: BeforeUnloadEvent) => { if (dirtyRef.current) e.preventDefault() }
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [])

  // Dragging files over the Library opens Add images, so they can be dropped straight in.
  useEffect(() => {
    if (area !== 'library') return
    const onDrag = (e: DragEvent) => { if (e.dataTransfer?.types.includes('Files')) setAdding(true) }
    window.addEventListener('dragenter', onDrag)
    return () => window.removeEventListener('dragenter', onDrag)
  }, [area])

  const libraryInbox = useMemo(() => assets.filter((a) => viewOf(a.status) === 'inbox').length, [assets])

  const goArea = (a: Area) => {
    if (a === area || !confirmDiscard()) return
    setArea(a)
  }

  return (
    <div className="app">
      <header className="topbar">
        <h1>Quarry</h1>
        <ButtonBar aria-label="Area">
          <ButtonBarItem active={area === 'library'} onClick={() => goArea('library')}>Library{libraryInbox ? ` (${libraryInbox})` : ''}</ButtonBarItem>
          <ButtonBarItem active={area === 'inspiration'} onClick={() => goArea('inspiration')}>Inspiration{inspirationInbox ? ` (${inspirationInbox})` : ''}</ButtonBarItem>
          <ButtonBarItem active={area === 'vocabulary'} onClick={() => goArea('vocabulary')}>Vocabulary</ButtonBarItem>
        </ButtonBar>
        {area !== 'vocabulary' && (
          <div className="search">
            <TextInput
              type="search"
              aria-label={`Search ${area}`}
              placeholder="Search descriptions, tags and captions"
              value={q}
              onValueChanged={(e) => setQ(e.detail.value)}
            />
          </div>
        )}
        <span className="spacer" />
        {area === 'library' && <Button size="sm" onClick={() => setAdding(true)}>+ Add images</Button>}
      </header>
      <OpsBar status={status} error={statusError} onRefresh={refresh} />

      {/* Areas stay mounted (hidden) so undo, filters and a running Claude job survive switching. */}
      <div className="area-host" hidden={area !== 'library'}>
        <LibraryArea
          active={area === 'library' && !adding}
          assets={assets}
          loaded={loaded}
          loadError={error}
          vocabulary={vocabulary}
          q={q}
          summary={summary}
          rateJob={rateJob}
          rateError={rateError}
          onStartRate={() => void startRate()}
          onRateJobFinished={rateFinished}
          onDismissRateJob={() => setRateJob(null)}
          onChanged={onChanged}
          reloadAssets={reloadAssets}
          refreshAfterWrite={refreshAfterWrite}
          confirmDiscard={confirmDiscard}
          onDirtyChange={onDirtyChange}
          openFilter={openFilter}
        />
      </div>
      <div className="area-host" hidden={area !== 'inspiration'}>
        <InspirationArea active={area === 'inspiration'} q={q} onInboxCount={setInspirationInbox} />
      </div>
      {area === 'vocabulary' && (
        <main className="main">
          <VocabPanel
            assets={assets}
            vocabulary={vocabulary}
            onChanged={refresh}
            onOpenInGrid={(axis, value) => {
              const group = AXIS_GROUP[axis] ?? axis
              const approved = assets.some((a) => a.status === 'confirmed' && libraryFacets(a).some(([g, v]) => g === group && v === value))
              setOpenFilter((f) => ({ key: facetKey(group, value), view: approved ? 'approved' : 'inbox', n: (f?.n ?? 0) + 1 }))
              setQ('')
              setArea('library')
            }}
          />
        </main>
      )}

      <Dialog open={adding} size="lg" onOpenChanged={(e) => { if (!e.detail.open) setAdding(false) }}>
        <DialogTitle slot="header">Add images to the Library</DialogTitle>
        <p className="dialog-lead">They land in the Inbox. Claude then describes, tags and rates each one, and you approve or reject.</p>
        <IngestDrop
          products={vocabulary.products ?? []}
          onIngested={(r) => {
            refresh()
            if (r.created.length && summary?.rater.available && !rateJob?.running) void startRate()
          }}
          rater={summary?.rater ?? null}
          waiting={summary?.waiting_for_bot ?? 0}
          rateJob={rateJob}
          onAutoRate={() => void startRate()}
          rateError={rateError}
          onReviewQueue={() => { setAdding(false); setArea('library') }}
        />
      </Dialog>
    </div>
  )
}
