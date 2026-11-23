import { useEffect, useMemo, useState } from 'react'
import { ButtonBar, ButtonBarItem, TextInput } from '@ctrliq/quantic-react'
import { fetchAssets, fetchStatus, type Status } from './api'
import { FacetRail } from './components/FacetRail'
import { OpsBar } from './components/OpsBar'
import { applyFilters, type Asset, type Axis, type Filters } from './state'
import { Grid } from './views/Grid'

export function App() {
  const [assets, setAssets] = useState<Asset[]>([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<Status | null>(null)
  const [statusError, setStatusError] = useState<string | null>(null)
  const [filters, setFilters] = useState<Filters>({})
  const [q, setQ] = useState('')

  useEffect(() => {
    fetchAssets().then(setAssets).catch((e: Error) => setError(e.message)).finally(() => setLoaded(true))
    fetchStatus().then(setStatus).catch((e: Error) => setStatusError(e.message))
  }, [])

  const visible = useMemo(() => applyFilters(assets, filters, q), [assets, filters, q])

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
          <ButtonBarItem active>Library</ButtonBarItem>
          <ButtonBarItem disabled>Review queue</ButtonBarItem>
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
      <div className="body">
        <FacetRail assets={assets} filters={filters} q={q} onToggle={toggle} />
        <main className="main">
          {error ? <p className="empty" role="alert">Could not load assets: {error}</p>
            : loaded ? <Grid assets={visible} total={assets.length} /> : <p className="empty">Loading...</p>}
        </main>
      </div>
    </div>
  )
}
