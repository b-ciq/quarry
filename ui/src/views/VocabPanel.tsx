import { useState } from 'react'
import { Alert, Badge, Button, ConfirmDialog, Dialog, DialogActions, DialogTitle, Select, TextInput } from '@ctrliq/quantic-react'
import { addSlug, deleteSlug, mergeSlug, renameSlug, type CallResult } from '../api'
import { vocabCounts, VOCAB_FILTER_AXIS, type Asset, type Axis } from '../state'

const KEBAB = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

type Pending =
  | { kind: 'rename' | 'merge' | 'delete'; axis: string; slug: string }
  | null

interface Props {
  assets: Asset[]
  vocabulary: Record<string, string[]>
  /** Re-fetch vocabulary + assets after a successful write. */
  onChanged: () => void
  onOpenInGrid: (axis: Axis, slug: string) => void
}

export function VocabPanel({ assets, vocabulary, onChanged, onOpenInGrid }: Props) {
  const counts = vocabCounts(assets, vocabulary)
  const [pending, setPending] = useState<Pending>(null)
  const [target, setTarget] = useState('')
  const [adding, setAdding] = useState<Record<string, string>>({})
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<{ text: string; usage?: string[] } | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const close = () => { setPending(null); setTarget('') }

  const finish = (r: CallResult<{ usage?: string[] }>, done: string) => {
    setBusy(false)
    if (r.ok) {
      setError(null)
      setMessage(done)
      close()
      onChanged()
    } else {
      setMessage(null)
      setError({ text: r.error, usage: r.data.usage })
      close()
    }
  }

  const run = async (fn: () => Promise<CallResult<{ usage?: string[] }>>, done: string) => {
    setBusy(true)
    setError(null)
    finish(await fn(), done)
  }

  const add = (axis: string) => {
    const slug = (adding[axis] ?? '').trim()
    run(() => addSlug(axis, slug), `Added ${slug} to ${axis}.`).then(() => setAdding((a) => ({ ...a, [axis]: '' })))
  }

  const p = pending
  const mergeOptions = p ? (vocabulary[p.axis] ?? []).filter((s) => s !== p.slug) : []
  const renameValid = KEBAB.test(target) && !!p && target !== p.slug

  return (
    <div className="vocab">
      {error && (
        <Alert type="error">
          <div>{error.text}</div>
          {error.usage && error.usage.length > 0 && (
            <ul aria-label="Assets using this slug">{error.usage.map((id) => <li key={id}>{id}</li>)}</ul>
          )}
        </Alert>
      )}
      <p className="vocab-lead">One vocabulary for the Library and Inspiration. Claude tags with these terms; click a term to see its images.</p>
      {message && <p className="editor-message" role="status">{message}</p>}
      {Object.entries(counts).map(([axis, rows]) => (
        <section key={axis} className="vocab-axis" aria-label={`${axis} vocabulary`}>
          <h2>{axis} <Badge size="sm" color="gray">{rows.length}</Badge></h2>
          <ul className="vocab-list">
            {rows.map(({ slug, count }) => (
              <li key={slug} className="vocab-row">
                <Button
                  size="sm"
                  variant="ghost"
                  aria-label={`Show ${slug} in grid`}
                  onClick={() => VOCAB_FILTER_AXIS[axis] && onOpenInGrid(VOCAB_FILTER_AXIS[axis], slug)}
                >
                  {slug}
                </Button>
                <span className="facet-count" aria-label={`${count} assets`}>{count}</span>
                <span className="ops-spacer" />
                <Button size="xs" variant="ghost" disabled={busy} aria-label={`Rename ${slug}`} onClick={() => { setTarget(slug); setPending({ kind: 'rename', axis, slug }) }}>Rename</Button>
                <Button size="xs" variant="ghost" disabled={busy} aria-label={`Merge ${slug}`} onClick={() => setPending({ kind: 'merge', axis, slug })}>Merge</Button>
                <Button size="xs" variant="ghost" disabled={busy || count > 0} aria-label={`Delete ${slug}`}
                  title={count > 0 ? `In use by ${count} asset(s); merge it instead` : undefined}
                  onClick={() => setPending({ kind: 'delete', axis, slug })}>Delete</Button>
              </li>
            ))}
          </ul>
          <div className="vocab-add">
            <TextInput
              size="sm"
              aria-label={`New ${axis} slug`}
              placeholder="new-slug"
              value={adding[axis] ?? ''}
              onValueChanged={(e) => setAdding((a) => ({ ...a, [axis]: e.detail.value }))}
            />
            <Button size="sm" disabled={busy || !KEBAB.test((adding[axis] ?? '').trim())} onClick={() => add(axis)}>Add</Button>
          </div>
        </section>
      ))}

      <ConfirmDialog
        open={p?.kind === 'delete'}
        heading={`Delete ${p?.slug ?? ''}?`}
        message={`Remove ${p?.slug ?? ''} from ${p?.axis ?? ''}. It is unused, so no assets change. This syncs from origin first and makes one commit.`}
        confirmText="Delete"
        destructive
        loading={busy}
        onConfirm={() => p && run(() => deleteSlug(p.axis, p.slug), `Deleted ${p.slug}.`)}
        onCancel={close}
      />

      <Dialog
        open={p?.kind === 'rename' || p?.kind === 'merge'}
        size="sm"
        aria-label={p?.kind === 'merge' ? 'Merge slug' : 'Rename slug'}
        onOpenChanged={(e) => { if (!e.detail.open) close() }}
      >
        <DialogTitle slot="header">{p?.kind === 'merge' ? `Merge ${p.slug} into...` : `Rename ${p?.slug ?? ''}`}</DialogTitle>
        {p?.kind === 'merge' ? (
          <Select aria-label="Merge into" placeholder="Choose target slug" options={mergeOptions.map((s) => [s, s])}
            value={target} onValueChanged={(e) => setTarget(e.detail.value)} />
        ) : (
          <TextInput aria-label="New slug" value={target} invalid={target !== '' && !KEBAB.test(target)}
            onValueChanged={(e) => setTarget(e.detail.value)} />
        )}
        <p className="editor-message">
          Rewrites every affected asset (all statuses) and vocabulary.json in one commit, after syncing from origin.
        </p>
        <DialogActions slot="footer">
          <Button variant="outline" onClick={close}>Cancel</Button>
          {p?.kind === 'merge' ? (
            <Button disabled={busy || !target} onClick={() => run(() => mergeSlug(p.axis, p.slug, target), `Merged ${p.slug} into ${target}.`)}>Merge</Button>
          ) : (
            <Button disabled={busy || !renameValid} onClick={() => p && run(() => renameSlug(p.axis, p.slug, target), `Renamed ${p.slug} to ${target}.`)}>Rename</Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  )
}
