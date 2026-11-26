import { useEffect, useState } from 'react'

export interface Thumb {
  id: string
  src: string
  /** Tried once if `src` fails (e.g. a thumbnail not built yet). */
  fallback?: string
  alt: string
  /** Corner badge, e.g. Claude's call. */
  badge?: { text: string; tone: 'keep' | 'reject' | 'maybe' | 'note' }
}

function Tile({ t, selected, onSelect }: { t: Thumb; selected: boolean; onSelect: (id: string) => void }) {
  const [src, setSrc] = useState<string | null>(t.src)
  const [tracked, setTracked] = useState(t.src)
  if (tracked !== t.src) { setTracked(t.src); setSrc(t.src) }
  return (
    <li className={`thumb${selected ? ' thumb-selected' : ''}`} data-id={t.id}>
      <a
        href={t.fallback ?? t.src}
        aria-label={t.alt || t.id}
        aria-current={selected || undefined}
        title={t.alt}
        onClick={(e) => { if (!(e.metaKey || e.ctrlKey || e.shiftKey)) { e.preventDefault(); onSelect(t.id) } }}
      >
        {src ? (
          <img src={src} alt="" loading="lazy" decoding="async"
            onError={() => setSrc(src !== t.fallback && t.fallback ? t.fallback : null)} />
        ) : (
          <span className="thumb-missing">No preview</span>
        )}
        {t.badge && <span className={`thumb-badge thumb-badge-${t.badge.tone}`}>{t.badge.text}</span>}
      </a>
    </li>
  )
}

interface Props {
  items: Thumb[]
  selectedId: string | null
  onSelect: (id: string) => void
  label: string
}

export function ThumbGrid({ items, selectedId, onSelect, label }: Props) {
  // Keep the keyboard-selected tile in view.
  useEffect(() => {
    if (!selectedId) return
    document.querySelector(`.thumb[data-id="${CSS.escape(selectedId)}"]`)?.scrollIntoView({ block: 'nearest' })
  }, [selectedId])
  return (
    <ul className="thumbs" aria-label={label}>
      {items.map((t) => <Tile key={t.id} t={t} selected={t.id === selectedId} onSelect={onSelect} />)}
    </ul>
  )
}
