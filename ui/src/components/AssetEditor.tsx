import { useEffect, useImperativeHandle, useMemo, useState, type Ref } from 'react'
import { Alert, Badge, Button, Select, Textarea, TextInput } from '@ctrliq/quantic-react'
import {
  confirmAsset, fetchSimilar, patchAsset, restoreAsset, retireAsset, splitErrors,
  type SimilarHit, type WriteResult,
} from '../api'
import type { Asset } from '../state'
import { TagChips } from './TagChips'

export const TAG_AXES = ['products', 'categories', 'verticals', 'concepts', 'style'] as const

export interface EditorHandle {
  /** Save pending edits, then confirm. Resolves true when the asset ended up confirmed. */
  confirm: () => Promise<boolean>
}

interface Props {
  asset: Asset
  vocabulary: Record<string, string[]>
  onChanged: (asset: Asset) => void
  onTransition?: (verb: 'confirm' | 'retire' | 'restore', asset: Asset) => void
  onOpenSimilar?: (id: string) => void
  ref?: Ref<EditorHandle>
}

interface Draft {
  description: string
  tags: Record<(typeof TAG_AXES)[number], string[]>
  tone: string
  product_version: string
  captured_at: string
  usage_restrictions: string
}

const toDraft = (a: Asset): Draft => ({
  description: a.description ?? '',
  tags: { products: a.products, categories: a.categories, verticals: a.verticals, concepts: a.concepts, style: a.style },
  tone: a.tone ?? '',
  product_version: a.product_version ?? '',
  captured_at: a.captured_at ?? '',
  usage_restrictions: (a.usage_restrictions ?? []).join(', '),
})

const sameList = (a: string[], b: string[]) => a.length === b.length && a.every((v, i) => v === b[i])

/** Only the fields that differ from the saved asset (the PATCH body). */
export function diffDraft(a: Asset, d: Draft): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  if (d.description !== (a.description ?? '')) out.description = d.description
  for (const axis of TAG_AXES) if (!sameList(d.tags[axis], a[axis])) out[axis] = d.tags[axis]
  if (a.class === 'background' && d.tone && d.tone !== (a.tone ?? '')) out.tone = d.tone
  if (a.class === 'screenshot') {
    if (d.product_version && d.product_version !== (a.product_version ?? '')) out.product_version = d.product_version
    if (d.captured_at && d.captured_at !== (a.captured_at ?? '')) out.captured_at = d.captured_at
  }
  const ur = d.usage_restrictions.split(',').map((s) => s.trim()).filter(Boolean)
  if (!sameList(ur, a.usage_restrictions ?? [])) out.usage_restrictions = ur
  return out
}

function FieldErrors({ errors }: { errors?: string[] }) {
  return <>{(errors ?? []).map((e) => <p key={e} className="field-error" role="alert">{e}</p>)}</>
}

export function AssetEditor({ asset, vocabulary, onChanged, onTransition, onOpenSimilar, ref }: Props) {
  const [draft, setDraft] = useState<Draft>(() => toDraft(asset))
  const [errors, setErrors] = useState<string[]>([])
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [similar, setSimilar] = useState<SimilarHit[] | null>(null)
  const [similarError, setSimilarError] = useState<string | null>(null)

  const patch = useMemo(() => diffDraft(asset, draft), [asset, draft])
  const dirty = Object.keys(patch).length > 0

  useEffect(() => {
    let live = true
    fetchSimilar(asset.id).then((h) => live && setSimilar(h)).catch((e: Error) => live && setSimilarError(e.message))
    return () => { live = false }
  }, [asset.id])

  const fail = (r: Extract<WriteResult, { ok: false }>) => {
    setErrors(r.errors)
    setMessage(r.errors.length ? null : r.error)
    return false
  }

  const save = async (): Promise<Asset | null> => {
    if (!dirty) return asset
    const r = await patchAsset(asset.id, patch)
    if (!r.ok) { fail(r); return null }
    onChanged(r.asset)
    setDraft(toDraft(r.asset))
    return r.asset
  }

  const run = async <T,>(fn: () => Promise<T>): Promise<T> => {
    setBusy(true)
    setErrors([])
    setMessage(null)
    try { return await fn() } finally { setBusy(false) }
  }

  const doSave = () => run(async () => {
    const saved = await save()
    if (saved && dirty) setMessage('Saved.')
  })

  const doConfirm = () => run(async () => {
    const saved = await save()
    if (!saved) return false
    const r = await confirmAsset(asset.id)
    if (!r.ok) return fail(r)
    onChanged(r.asset)
    onTransition?.('confirm', r.asset)
    return true
  })

  const doTransition = (verb: 'retire' | 'restore') => run(async () => {
    const r = await (verb === 'retire' ? retireAsset : restoreAsset)(asset.id)
    if (!r.ok) return fail(r)
    onChanged(r.asset)
    onTransition?.(verb, r.asset)
    return true
  })

  useImperativeHandle(ref, () => ({ confirm: doConfirm }))

  const { byField, general } = splitErrors(errors)
  const shown = new Set<string>([...TAG_AXES, 'description', 'usage_restrictions',
    ...(asset.class === 'background' ? ['tone'] : []),
    ...(asset.class === 'screenshot' ? ['product_version', 'captured_at'] : [])])
  const orphan = [...general, ...Object.entries(byField).filter(([k]) => !shown.has(k)).flatMap(([, v]) => v)]

  return (
    <div className="editor" data-asset-id={asset.id}>
      <a href={asset.full_url} target="_blank" rel="noreferrer" className="editor-image" title="Open full resolution">
        <img src={asset.full_url} alt={asset.description || asset.id} />
      </a>
      <div className="editor-form">
        <div className="editor-head">
          <h2>{asset.id}</h2>
          <Badge size="sm" color={asset.status === 'confirmed' ? 'success' : asset.status === 'proposed' ? 'warning' : 'gray'}>
            {asset.status}
          </Badge>
          <span className="editor-meta">{asset.class} / {asset.aspect} / {asset.license}</span>
        </div>

        {message && <p className="editor-message" role="status">{message}</p>}
        {orphan.length > 0 && (
          <Alert type="error">
            {orphan.map((e) => <div key={e}>{e}</div>)}
          </Alert>
        )}

        <div className={`field${byField.description ? ' field-invalid' : ''}`}>
          <span className="field-label">Description</span>
          <Textarea
            aria-label="Description"
            value={draft.description}
            invalid={!!byField.description}
            onValueChanged={(e) => setDraft((d) => ({ ...d, description: e.detail.value }))}
          />
          <FieldErrors errors={byField.description} />
        </div>

        {TAG_AXES.map((axis) => (
          <TagChips
            key={axis}
            label={axis}
            value={draft.tags[axis]}
            vocabulary={vocabulary[axis] ?? []}
            errors={byField[axis]}
            onChange={(next) => setDraft((d) => ({ ...d, tags: { ...d.tags, [axis]: next } }))}
          />
        ))}

        {asset.class === 'background' && (
          <div className={`field${byField.tone ? ' field-invalid' : ''}`}>
            <span className="field-label">Tone</span>
            <Select
              aria-label="Tone"
              placeholder="Choose tone"
              options={[['dark', 'dark'], ['light', 'light']]}
              value={draft.tone}
              invalid={!!byField.tone}
              onValueChanged={(e) => setDraft((d) => ({ ...d, tone: e.detail.value }))}
            />
            <FieldErrors errors={byField.tone} />
          </div>
        )}

        {asset.class === 'screenshot' && (
          <>
            <div className={`field${byField.product_version ? ' field-invalid' : ''}`}>
              <span className="field-label">Product version</span>
              <TextInput
                aria-label="Product version"
                value={draft.product_version}
                invalid={!!byField.product_version}
                onValueChanged={(e) => setDraft((d) => ({ ...d, product_version: e.detail.value }))}
              />
              <FieldErrors errors={byField.product_version} />
            </div>
            <div className={`field${byField.captured_at ? ' field-invalid' : ''}`}>
              <span className="field-label">Captured at</span>
              <TextInput
                aria-label="Captured at"
                placeholder="YYYY-MM-DD"
                value={draft.captured_at}
                invalid={!!byField.captured_at}
                onValueChanged={(e) => setDraft((d) => ({ ...d, captured_at: e.detail.value }))}
              />
              <FieldErrors errors={byField.captured_at} />
            </div>
          </>
        )}

        <div className={`field${byField.usage_restrictions ? ' field-invalid' : ''}`}>
          <span className="field-label">Usage restrictions (comma separated)</span>
          <TextInput
            aria-label="Usage restrictions"
            value={draft.usage_restrictions}
            invalid={!!byField.usage_restrictions}
            onValueChanged={(e) => setDraft((d) => ({ ...d, usage_restrictions: e.detail.value }))}
          />
          <FieldErrors errors={byField.usage_restrictions} />
        </div>

        <div className="editor-actions">
          <Button size="sm" disabled={busy || !dirty} onClick={doSave}>Save</Button>
          {asset.status === 'proposed' && (
            <Button size="sm" variant="outline" disabled={busy} onClick={doConfirm}>Confirm</Button>
          )}
          {asset.status === 'retired' ? (
            <Button size="sm" variant="outline" disabled={busy} onClick={() => doTransition('restore')}>Restore</Button>
          ) : (
            <Button size="sm" variant="outline" disabled={busy} onClick={() => doTransition('retire')}>Retire</Button>
          )}
        </div>

        <section className="similar" aria-label="More like this">
          <h3>More like this</h3>
          {similarError && <p className="empty">Unavailable: {similarError}</p>}
          {!similarError && similar === null && <p className="empty">Loading...</p>}
          {similar && similar.length === 0 && <p className="empty">No neighbours found.</p>}
          {similar && similar.length > 0 && (
            <ul className="similar-strip">
              {similar.map((h) => (
                <li key={h.id}>
                  <a
                    href={h.full_url}
                    title={h.id}
                    onClick={(e) => { if (onOpenSimilar) { e.preventDefault(); onOpenSimilar(h.id) } }}
                  >
                    <img src={h.thumb_url} alt={h.description || h.id} loading="lazy" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}
