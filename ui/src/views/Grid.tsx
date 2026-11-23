import { Badge } from '@ctrliq/quantic-react'
import { useState } from 'react'
import { nextImgSrc, type Asset } from '../state'

function StatusBadge({ status }: { status: string }) {
  if (status === 'proposed') return <Badge size="sm" color="warning">proposed</Badge>
  if (status === 'confirmed') return <Badge size="sm" color="success">confirmed</Badge>
  return <Badge size="sm" color="gray">{status}</Badge>
}

function Tile({ a, onSelect }: { a: Asset; onSelect: (id: string) => void }) {
  // Pre-index (e.g. just ingested) the thumbnail 404s: fall back to the full image, then a placeholder.
  const [src, setSrc] = useState<string | null>(a.thumb_url)
  const [trackedThumb, setTrackedThumb] = useState(a.thumb_url)
  if (trackedThumb !== a.thumb_url) { setTrackedThumb(a.thumb_url); setSrc(a.thumb_url) }
  return (
    <li className={`tile${a.status === 'retired' ? ' tile-retired' : ''}`} data-status={a.status}>
      <a
        href={a.full_url}
        className="tile-thumb"
        aria-label={`Edit ${a.id}`}
        onClick={(e) => { if (!(e.metaKey || e.ctrlKey || e.shiftKey)) { e.preventDefault(); onSelect(a.id) } }}
      >
        {src ? (
          <img src={src} alt={a.description || a.id} loading="lazy" decoding="async"
            onError={() => setSrc(nextImgSrc(src, a))} />
        ) : (
          <span className="tile-placeholder" role="img" aria-label={`No preview for ${a.id}`}>No preview</span>
        )}
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

export function Grid({ assets, total, onSelect }: { assets: Asset[]; total: number; onSelect: (id: string) => void }) {
  if (assets.length === 0) {
    return (
      <p className="empty">
        {total === 0 ? 'No assets in the library yet.' : 'No assets match these filters.'}
      </p>
    )
  }
  return (
    <ul className="grid" aria-label={`${assets.length} of ${total} assets`}>
      {assets.map((a) => <Tile key={a.id} a={a} onSelect={onSelect} />)}
    </ul>
  )
}
