import { useCallback, useEffect, useMemo, useState } from 'react'
import { ButtonBar, ButtonBarItem, Drawer, TextInput } from '@ctrliq/quantic-react'
import { fetchAssets, fetchStatus, fetchVocabulary, type Status } from './api'
import { FacetRail } from './components/FacetRail'
import { OpsBar } from './components/OpsBar'
import { applyFilters, type Asset, type Axis, type Filters } from './state'
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

  useEffect(() => {
    fetchAssets().then(setAssets).catch((e: Error) => setError(e.message)).finally(() => setLoaded(true))
    fetchVocabulary().then(setVocabulary).catch(() => setVocabulary({}))
    fetchStatus().then(setStatus).catch((e: Error) => setStatusError(e.message))
  }, [])

  const visible = useMemo(() => applyFilters(assets, filters, q), [assets, filters, q])

  const onChanged = useCallback(
    (a: Asset) => setAssets((xs) => xs.map((x) => (x.id === a.id ? a : x))),
    [],
  )
  const exitQueue = useCallback(() => setQueueIds(null), [])
  const proposedCount = useMemo(() => assets.filter((a) => a.status === 'proposed').length, [assets])
  const selected = assets.find((a) => a.id === selectedId)

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
          <ButtonBarItem active={queueIds === null} onClick={exitQueue}>Library</ButtonBarItem>
          <ButtonBarItem
            active={queueIds !== null}
            disabled={proposedCount === 0}
            onClick={() => {
              setSelectedId(null)
              setQueueIds(assets.filter((a) => a.status === 'proposed').map((a) => a.id))
            }}
          >
            Review queue ({proposedCount})
          </ButtonBarItem>
        </ButtonBar>
        <div className="search">
          <TextInput
            type="search"
            aria-label="Search assets"
            placeholder="Search id, description, tags"
            value={q}
            onValueChanged={(e) => setQ(e.detail.value)}
          />
        </div>
        <span className="result-count">{loaded ? `${visible.length} / ${assets.length}` : ''}</span>
      </header>
      <OpsBar status={status} error={statusError} />
      {queueIds !== null ? (
        <main className="main">
          <ReviewQueue
            initialIds={queueIds}
            assets={assets}
            vocabulary={vocabulary}
            onChanged={onChanged}
            onExit={exitQueue}
          />
        </main>
      ) : (
        <div className="body">
          <FacetRail assets={assets} filters={filters} q={q} onToggle={toggle} />
          <main className="main">
            {error ? <p className="empty" role="alert">Could not load assets: {error}</p>
              : loaded ? <Grid assets={visible} total={assets.length} onSelect={setSelectedId} /> : <p className="empty">Loading...</p>}
          </main>
        </div>
      )}
      <Drawer
        open={queueIds === null && !!selected}
        placement="right"
        size="lg"
        resizable
        aria-label="Asset editor"
        onOpenChanged={(e) => { if (!e.detail.open) setSelectedId(null) }}
      >
        {selected && (
          <AssetEditor
            key={selected.id}
            asset={selected}
            vocabulary={vocabulary}
            onChanged={onChanged}
            onOpenSimilar={(id) => assets.some((a) => a.id === id) && setSelectedId(id)}
          />
        )}
      </Drawer>
    </div>
  )
}
