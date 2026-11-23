import { Checkbox } from '@ctrliq/quantic-react'
import { AXES, applyFilters, facetCounts, type Asset, type Axis, type Filters } from '../state'

const LABELS: Record<Axis, string> = {
  class: 'Class',
  status: 'Status',
  product: 'Product',
  tone: 'Tone',
  categories: 'Categories',
  verticals: 'Verticals',
  concepts: 'Concepts',
  style: 'Style',
  license: 'License',
}

interface Props {
  assets: Asset[]
  filters: Filters
  q: string
  onToggle: (axis: Axis, value: string, on: boolean) => void
}

export function FacetRail({ assets, filters, q, onToggle }: Props) {
  return (
    <nav className="facet-rail" aria-label="Filters">
      {AXES.map((axis) => {
        // Counts ignore this axis's own selection so sibling values stay clickable.
        const { [axis]: _own, ...others } = filters
        const counts = facetCounts(applyFilters(assets, others, q), axis)
        const selected = filters[axis] ?? []
        const shown = [
          ...counts,
          ...selected.filter((s) => !counts.some((c) => c.value === s)).map((value) => ({ value, count: 0 })),
        ]
        if (shown.length === 0) return null
        return (
          <fieldset key={axis} className="facet-group">
            <legend>{LABELS[axis]}</legend>
            {shown.map(({ value, count }) => (
              <Checkbox
                key={value}
                size="sm"
                checked={selected.includes(value)}
                onValueChanged={(e) => onToggle(axis, value, e.detail.checked)}
                aria-label={`${LABELS[axis]}: ${value}`}
              >
                <span className="facet-row">
                  <span>{value}</span>
                  <span className="facet-count">{count}</span>
                </span>
              </Checkbox>
            ))}
          </fieldset>
        )
      })}
    </nav>
  )
}
