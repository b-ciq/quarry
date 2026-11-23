import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Alert, Button, ButtonBar, ButtonBarItem, Drawer, TextInput } from '@ctrliq/quantic-react'
import { fetchAssets, fetchStatus, fetchVocabulary, searchIndex, type Status } from './api'
import { IngestDrop } from './components/IngestDrop'
import { VocabPanel } from './views/VocabPanel'
import { FacetRail } from './components/FacetRail'
import { OpsBar } from './components/OpsBar'
import { applyFilters, resolveHits, type Asset, type Axis, type Filters } from './state'
import { canDiscard } from './editing'
import { AssetEditor } from './components/AssetEditor'
import { Grid } from './views/Grid'
import { ReviewQueue } from './views/ReviewQueue'

export function App() {
  const [assets, setAssets] = useState<Asset[]>([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<Status | null>(null)
  const [statusError, setStatusError] = useState<string | null>(null)
  const [filters, setFilters] = useState<Filters>({})
  const [q, setQ] = useState('')
  const [vocabulary, setVocabulary] = useState<Record<string, string[]>>({})
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [queueIds, setQueueIds] = useState<string[] | null>(null)

  const [page, setPage] = useState<'library' | 'vocab' | 'ingest'>('library')

  const [indexSearch, setIndexSearch] = useState<{ q: string; ids: { id: string }[]; stale: boolean } | null>(null)
  const [searchError, setSearchError] = useState<string | null>(null)
  const [searching, setSearching] = useState(false)

  const refreshStatus = useCallback(() => {
    fetchStatus().then((s) => { setStatus(s); setStatusError(null) }).catch((e: Error) => setStatusError(e.message))
  }, [])

  const refresh = useCallback(() => {
    fetchAssets().then((a) => { setAssets(a); setError(null) }).catch((e: Error) => setError(e.message)).finally(() => setLoaded(true))
    fetchVocabulary().then(setVocabulary).catch(() => setVocabulary({}))
    refreshStatus()
  }, [refreshStatus])
  useEffect(refresh, [refresh])
  // The server fetches upstream lazily; poll so ahead/behind and staleness stay current.
  useEffect(() => {
    const t = setInterval(refreshStatus, 30000)
    return () => clearInterval(t)
  }, [refreshStatus])

  const visible = useMemo(
    () => (indexSearch ? applyFilters(resolveHits(indexSearch.ids, assets), filters, '') : applyFilters(assets, filters, q)),
    [assets, filters, q, indexSearch],
  )

  const onChanged = useCallback(
    (a: Asset) => { setAssets((xs) => xs.map((x) => (x.id === a.id ? a : x))); refreshStatus() },
    [refreshStatus],
  )

  const runSearch = async () => {
    const term = q.trim()
    if (!term) return
    setSearching(true)
    setSearchError(null)
    const r = await searchIndex(term)
    setSearching(false)
    if (!r.ok) { setIndexSearch(null); setSearchError(r.error); return }
    setIndexSearch({ q: term, ids: r.hits, stale: r.stale })
  }
  const clearSearch = () => { setIndexSearch(null); setSearchError(null); setQ('') }
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
  const exitQueue = useCallback(() => setQueueIds(null), [])
  const proposedCount = useMemo(() => assets.filter((a) => a.status === 'proposed').length, [assets])
  const selected = assets.find((a) => a.id === selectedId)

  const goPage = (p: 'library' | 'vocab' | 'ingest') => {
    if (queueIds === null && page === p) return
    if (!confirmDiscard()) return
    setSelectedId(null)
    setQueueIds(null)
    setPage(p)
  }

  const toggle = (axis: Axis, value: string, on: boolean) =>
    setFilters((f) => {
      const cur = f[axis] ?? []
      return { ...f, [axis]: on ? [...cur.filter((v) => v !== value), value] : cur.filter((v) => v !== value) }
    })

  return (
    <div className="app">
      <header className="topbar">
        <h1>Quarry</h1>
        <ButtonBar size="sm" aria-label="View">
          <ButtonBarItem active={queueIds === null && page === 'library'} onClick={() => goPage('library')}>Library</ButtonBarItem>
          <ButtonBarItem
            active={queueIds !== null}
            disabled={proposedCount === 0}
            onClick={() => {
              if (queueIds !== null || !confirmDiscard()) return
              setSelectedId(null)
              setPage('library')
              setQueueIds(assets.filter((a) => a.status === 'proposed').map((a) => a.id))
            }}
          >
            Review queue ({proposedCount})
          </ButtonBarItem>
          <ButtonBarItem active={queueIds === null && page === 'vocab'} onClick={() => goPage('vocab')}>Vocabulary</ButtonBarItem>
          <ButtonBarItem active={queueIds === null && page === 'ingest'} onClick={() => goPage('ingest')}>Ingest</ButtonBarItem>
        </ButtonBar>
        <div className="search">
          <div onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); void runSearch() } }}>
            <TextInput
              type="search"
              aria-label="Search assets"
              placeholder="Filter; press Enter for index search"
              value={q}
              onValueChanged={(e) => { setQ(e.detail.value); setIndexSearch(null); setSearchError(null) }}
            />
          </div>
        </div>
        <span className="result-count">{loaded ? `${visible.length} / ${assets.length}` : ''}</span>
      </header>
      <OpsBar status={status} error={statusError} onRefresh={refresh} />
      {queueIds !== null ? (
        <main className="main">
          <ReviewQueue
            initialIds={queueIds}
            assets={assets}
            vocabulary={vocabulary}
            onChanged={onChanged}
            onExit={exitQueue}
            confirmDiscard={confirmDiscard}
            onDirtyChange={onDirtyChange}
          />
        </main>
      ) : page === 'vocab' ? (
        <main className="main">
          <VocabPanel
            assets={assets}
            vocabulary={vocabulary}
            onChanged={refresh}
            onOpenInGrid={(axis, value) => { setFilters({ [axis]: [value] }); setQ(''); setPage('library') }}
          />
        </main>
      ) : page === 'ingest' ? (
        <main className="main">
          <IngestDrop
            products={vocabulary.products ?? []}
            onIngested={refresh}
            onReviewQueue={() => {
              const ids = assets.filter((a) => a.status === 'proposed').map((a) => a.id)
              if (ids.length) setQueueIds(ids)
            }}
          />
        </main>
      ) : (
        <div className="body">
          <FacetRail assets={assets} filters={filters} q={q} onToggle={toggle} />
          <main className="main">
            {(searching || indexSearch || searchError) && (
              <div className="search-banner" role="region" aria-label="Index search">
                {searching && <p className="empty">Searching index...</p>}
                {searchError && (
                  <Alert type="error">
                    Index search failed: {searchError}{' '}
                    {/mismatch|embedder/i.test(searchError) ? 'Re-index with the matching embedder (or restart the workbench with the right embedder option), then try again.' : ''}
                  </Alert>
                )}
                {indexSearch && (
                  <>
                    <div className="search-banner-row">
                      <strong>Index search: &ldquo;{indexSearch.q}&rdquo;</strong>
                      <span>{visible.length} result{visible.length === 1 ? '' : 's'}, best match first</span>
                      <Button size="sm" variant="outline" onClick={clearSearch}>Clear</Button>
                    </div>
                    {indexSearch.stale && <Alert type="warning">The index is stale; results may miss recent edits. Re-index to refresh.</Alert>}
                  </>
                )}
                {searchError && <div><Button size="sm" variant="outline" onClick={clearSearch}>Clear</Button></div>}
              </div>
            )}
            {error ? <p className="empty" role="alert">Could not load assets: {error}</p>
              : loaded ? <Grid assets={visible} total={assets.length} onSelect={(id) => { if (id === selectedId || confirmDiscard()) setSelectedId(id) }} /> : <p className="empty">Loading...</p>}
          </main>
        </div>
      )}
      <Drawer
        open={queueIds === null && !!selected}
        placement="right"
        size="lg"
        resizable
        aria-label="Asset editor"
        onBeforeClose={(e) => { if (!confirmDiscard()) e.preventDefault() }}
        onOpenChanged={(e) => { if (!e.detail.open) setSelectedId(null) }}
      >
        {selected && (
          <AssetEditor
            key={selected.id}
            asset={selected}
            vocabulary={vocabulary}
            onChanged={onChanged}
            onDirtyChange={onDirtyChange}
            onOpenSimilar={(id) => { if (assets.some((a) => a.id === id) && confirmDiscard()) setSelectedId(id) }}
          />
        )}
      </Drawer>
    </div>
  )
}
