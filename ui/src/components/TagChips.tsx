import { useState } from 'react'
import { Combobox, Tag } from '@ctrliq/quantic-react'

interface Props {
  label: string
  value: string[]
  vocabulary: string[]
  onChange: (next: string[]) => void
  errors?: string[]
}

/** Chips constrained to vocabulary slugs. Typing an unknown slug only shows a hint; it is never added. */
export function TagChips({ label, value, vocabulary, onChange, errors = [] }: Props) {
  const [typed, setTyped] = useState('')
  const [resetKey, setResetKey] = useState(0)
  const options = vocabulary.filter((s) => !value.includes(s)).map((s) => ({ label: s, value: s }))
  const unknown = typed.trim() !== '' && !vocabulary.includes(typed.trim())

  const add = (slug: string) => {
    if (!vocabulary.includes(slug)) return
    if (!value.includes(slug)) onChange([...value, slug])
    setTyped('')
    setResetKey((k) => k + 1)
  }

  return (
    <div className={`field${errors.length ? ' field-invalid' : ''}`} data-field={label}>
      <span className="field-label">{label}</span>
      <div className="chips">
        {value.map((slug) => (
          <Tag
            key={slug}
            size="sm"
            dismissible
            aria-label={`${label}: ${slug}`}
            onTagDismiss={() => onChange(value.filter((v) => v !== slug))}
          >
            {slug}
          </Tag>
        ))}
        <Combobox
          key={resetKey}
          size="sm"
          aria-label={`Add ${label}`}
          placeholder={`Add ${label}`}
          options={options}
          allowCustomValue
          invalid={errors.length > 0}
          onInputChanged={(e) => setTyped(e.detail.value)}
          onValueChanged={(e) => add(e.detail.value)}
        />
      </div>
      {unknown && (
        <p className="field-hint" role="status">
          "{typed.trim()}" is not in the {label} vocabulary, so it will not be saved. Propose it to the curator to add it.
        </p>
      )}
      {errors.map((e) => (
        <p key={e} className="field-error" role="alert">{e}</p>
      ))}
    </div>
  )
}
