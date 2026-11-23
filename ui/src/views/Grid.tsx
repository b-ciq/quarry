import { Badge } from '@ctrliq/quantic-react'
import type { Asset } from '../state'

function StatusBadge({ status }: { status: string }) {
  if (status === 'proposed') return <Badge size="sm" color="warning">proposed</Badge>
  if (status === 'confirmed') return <Badge size="sm" color="success">confirmed</Badge>
  return <Badge size="sm" color="gray">{status}</Badge>
}

function Tile({ a }: { a: Asset }) {
  return (
    <li className={`tile${a.status === 'retired' ? ' tile-retired' : ''}`} data-status={a.status}>
      <a href={a.full_url} target="_blank" rel="noreferrer" className="tile-thumb">
        <img src={a.thumb_url} alt={a.description || a.id} loading="lazy" decoding="async" />
      </a>
      <div className="tile-meta">
        <span className="tile-id" title={a.id}>{a.id}</span>
        <StatusBadge status={a.status} />
      </div>
      <div className="tile-sub">
        <span>{a.class}</span>
        {a.tone && <span>{a.tone}</span>}
        {a.products.length > 0 && <span>{a.products.slice(0, 2).join(', ')}{a.products.length > 2 ? ` +${a.products.length - 2}` : ''}</span>}
      </div>
    </li>
  )
}

export function Grid({ assets, total }: { assets: Asset[]; total: number }) {
  if (assets.length === 0) {
    return (
      <p className="empty">
        {total === 0 ? 'No assets in the library yet.' : 'No assets match these filters.'}
      </p>
    )
  }
  return (
    <ul className="grid" aria-label={`${assets.length} of ${total} assets`}>
      {assets.map((a) => <Tile key={a.id} a={a} />)}
    </ul>
  )
}
