import { Checkbox } from '@ctrliq/quantic-react'
import { SUGGESTED, type FacetGroup } from '../gallery'

/** Long-tail groups show their top values only; the rest are reachable by search. */
const CAP: Record<string, number> = { From: 12, [SUGGESTED]: 12 }

interface Props {
  groups: FacetGroup[]
  onToggle: (key: string, on: boolean) => void
}

export function FilterRail({ groups, onToggle }: Props) {
  if (groups.length === 0) {
    return <p className="empty rail-empty">Nothing to filter yet. Filters fill in as Claude tags things.</p>
  }
  return (
    <nav className="facet-rail" aria-label="Filters">
      {groups.map(({ group, values }) => {
        const cap = CAP[group] ?? Infinity
        const shown = values.filter((v, i) => i < cap || v.selected)
        return (
          <fieldset key={group} className="facet-group">
            <legend>{group}</legend>
            {shown.map((v) => (
              <Checkbox
                key={v.key}
                size="sm"
                checked={v.selected}
                onValueChanged={(e) => onToggle(v.key, e.detail.checked)}
                aria-label={`${group}: ${v.value}`}
              >
                <span className="facet-row">
                  <span>{v.value}</span>
                  <span className="facet-count">{v.count}</span>
                </span>
              </Checkbox>
            ))}
            {values.length > shown.length && <p className="facet-more">+{values.length - shown.length} more; use search</p>}
          </fieldset>
        )
      })}
    </nav>
  )
}
