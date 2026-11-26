import { useEffect, useImperativeHandle, useMemo, useRef, useState, type Ref } from 'react'
import { Alert, Badge, Button, Checkbox, Select, Textarea, TextInput } from '@ctrliq/quantic-react'
import {
  callErrors, confirmAsset, fetchSimilar, patchAsset, postVerdict, restoreAsset, retireAsset, splitErrors,
  type SimilarHit, type WriteResult,
} from '../api'
import { CLAUDE_SAYS, viewOf } from '../gallery'
import type { Verdict } from '../rating'
import type { Asset } from '../state'
import { diffDraft, TAG_AXES, toDraft, type Draft } from '../editing'
import { TagChips } from './TagChips'

export interface EditorHandle {
  /** Save pending edits, then confirm. Resolves true when the asset ended up confirmed. */
  confirm: () => Promise<boolean>
  /** Inbox: save pending edits, then record Yes (approve) or No (reject) as an undoable verdict. */
  decide: (verdict: Extract<Verdict, 'yes' | 'no'>) => Promise<boolean>
}

/** A verdict that landed. `needsDetails` lists what still blocks an approved asset from leaving the Inbox. */
export interface Decision {
  asset: Asset
  commit: string
  verdict: Verdict
  needsDetails: string[] | null
}

const STATUS_LABEL: Record<string, string> = { proposed: 'in inbox', parked: 'maybe', confirmed: 'approved', retired: 'rejected' }

interface Props {
  asset: Asset
  vocabulary: Record<string, string[]>
  onChanged: (asset: Asset) => void
  onTransition?: (verb: 'confirm' | 'retire' | 'restore', asset: Asset) => void
  onOpenSimilar?: (id: string) => void
  /** Inbox verdict recorded (approve or reject). */
  onDecided?: (d: Decision) => void
  /** Inbox: move on without deciding. */
  onSkip?: () => void
  /** Reports whether the draft has unsaved edits (false again on unmount). */
  onDirtyChange?: (dirty: boolean) => void
  ref?: Ref<EditorHandle>
}

function FieldErrors({ errors }: { errors?: string[] }) {
  return <>{(errors ?? []).map((e) => <p key={e} className="field-error" role="alert">{e}</p>)}</>
}

export function AssetEditor({ asset, vocabulary, onChanged, onTransition, onOpenSimilar, onDecided, onSkip, onDirtyChange, ref }: Props) {
  const [draft, setDraft] = useState<Draft>(() => toDraft(asset))
  const [errors, setErrors] = useState<string[]>([])
  const [message, setMessage] = useState<string | null>(null)
  const [failure, setFailure] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const busyRef = useRef(false)
  const [similar, setSimilar] = useState<SimilarHit[] | null>(null)
  const [similarError, setSimilarError] = useState<string | null>(null)

  const patch = useMemo(() => diffDraft(asset, draft), [asset, draft])
  const dirty = Object.keys(patch).length > 0

  useEffect(() => {
    onDirtyChange?.(dirty)
    return () => onDirtyChange?.(false)
  }, [dirty, onDirtyChange])

  useEffect(() => {
    let live = true
    fetchSimilar(asset.id).then((h) => live && setSimilar(h)).catch((e: Error) => live && setSimilarError(e.message))
    return () => { live = false }
  }, [asset.id])

  const fail = (r: Extract<WriteResult, { ok: false }>) => {
    setErrors(r.errors)
    setFailure(r.errors.length ? null : r.error)
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
    busyRef.current = true
    setBusy(true)
    setErrors([])
    setMessage(null)
    setFailure(null)
    try { return await fn() } finally { busyRef.current = false; setBusy(false) }
  }

  const doSave = () => run(async () => {
    const saved = await save()
    if (saved && dirty) setMessage('Saved.')
  })

  const doConfirm = () => busyRef.current ? Promise.resolve(false) : run(async () => {
    const saved = await save()
    if (!saved) return false
    const r = await confirmAsset(asset.id)
    if (!r.ok) return fail(r)
    onChanged(r.asset)
    onTransition?.('confirm', r.asset)
    return true
  })

  const doTransition = (verb: 'retire' | 'restore') => busyRef.current ? Promise.resolve(false) : run(async () => {
    const r = await (verb === 'retire' ? retireAsset : restoreAsset)(asset.id)
    if (!r.ok) return fail(r)
    onChanged(r.asset)
    onTransition?.(verb, r.asset)
    return true
  })

  const doDecide = (verdict: Extract<Verdict, 'yes' | 'no'>) => busyRef.current ? Promise.resolve(false) : run(async () => {
    // Approve keeps your edits; reject doesn't need them.
    if (verdict === 'yes' && !(await save())) return false
    const r = await postVerdict(asset.id, verdict)
    if (!r.ok) {
      const errs = callErrors(r)
      setErrors(errs)
      setFailure(errs.length ? null : r.error)
      return false
    }
    onChanged(r.data.asset)
    if (r.data.needs_details) {
      setDraft(toDraft(r.data.asset))
      setErrors(r.data.needs_details)
      setMessage('Approved, but it stays in the Inbox until the fields below are filled in.')
    }
    onDecided?.({ asset: r.data.asset, commit: r.data.commit, verdict, needsDetails: r.data.needs_details })
    return true
  })

  useImperativeHandle(ref, () => ({ confirm: doConfirm, decide: doDecide }))

  const view = viewOf(asset.status)
  const bot = asset.rating?.bot

  const { byField, general } = splitErrors(errors)
  const midjourney = asset.source?.origin === 'midjourney'
  const shown = new Set<string>([...TAG_AXES, 'description', 'usage_restrictions', 'anti_example', 'avoid_reason', 'license',
    ...(midjourney ? ['generation'] : []),
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
            {STATUS_LABEL[asset.status] ?? asset.status}
          </Badge>
          {asset.anti_example && <Badge size="sm" color="error">anti-example</Badge>}
          <span className="editor-meta">{asset.class} / {asset.aspect} / {asset.license}</span>
        </div>

        {bot && (
          <div className={`claude-says claude-says-${bot.verdict}`}>
            <span className="field-label">Claude says</span>
            <p>
              <strong>{CLAUDE_SAYS[bot.verdict] ?? bot.verdict}</strong>
              <span className="claude-strength">{bot.strength === 'strong' ? 'confident' : 'unsure'}</span>
              {bot.reason}
            </p>
          </div>
        )}

        {view === 'inbox' && (
          <div className="editor-actions decide-actions">
            <Button size="sm" disabled={busy} onClick={() => void doDecide('yes')}>Approve <kbd>A</kbd></Button>
            <Button size="sm" variant="outline" destructive disabled={busy} onClick={() => void doDecide('no')}>Reject <kbd>X</kbd></Button>
            {onSkip && <Button size="sm" variant="outline" disabled={busy} onClick={onSkip}>Skip <kbd>S</kbd></Button>}
          </div>
        )}

        {message && <p className="editor-message" role="status">{message}</p>}
        {failure && <Alert type="error">{failure}</Alert>}
        {orphan.length > 0 && (
          <Alert type="error">
            {orphan.map((e) => <div key={e}>{e}</div>)}
          </Alert>
        )}

        <div className={`field anti-field${byField.avoid_reason ? ' field-invalid' : ''}`}>
          <Checkbox
            size="sm"
            checked={draft.anti_example}
            onValueChanged={(e) => setDraft((d) => ({ ...d, anti_example: e.detail.checked }))}
          >
            Anti-example: shows what not to do (never served for use)
          </Checkbox>
          {draft.anti_example && (
            <>
              <span className="field-label">Why to avoid it</span>
              <Textarea
                aria-label="Why to avoid it"
                placeholder="e.g. Glossy 3D clip-art with lens flare; reads as generic stock."
                value={draft.avoid_reason}
                invalid={!!byField.avoid_reason}
                onValueChanged={(e) => setDraft((d) => ({ ...d, avoid_reason: e.detail.value }))}
              />
            </>
          )}
          <FieldErrors errors={[...(byField.anti_example ?? []), ...(byField.avoid_reason ?? [])]} />
        </div>

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

        <div className={`field${byField.license ? ' field-invalid' : ''}`}>
          <span className="field-label">License</span>
          <TextInput
            aria-label="License"
            placeholder="e.g. adobe-stock:1036498535 or ciq-original"
            value={draft.license}
            invalid={!!byField.license}
            onValueChanged={(e) => setDraft((d) => ({ ...d, license: e.detail.value }))}
          />
          <FieldErrors errors={byField.license} />
        </div>

        {midjourney && (
          <fieldset className={`field generation-field${byField.generation ? ' field-invalid' : ''}`}>
            <legend className="field-label">Midjourney generation</legend>
            <Textarea
              aria-label="Generation prompt"
              placeholder="Prompt"
              value={draft.generation.prompt}
              invalid={!!byField.generation}
              onValueChanged={(e) => setDraft((d) => ({ ...d, generation: { ...d.generation, prompt: e.detail.value } }))}
            />
            <div className="generation-row">
              <TextInput
                aria-label="Generation model"
                placeholder="Model, e.g. v6.1"
                value={draft.generation.model}
                invalid={!!byField.generation}
                onValueChanged={(e) => setDraft((d) => ({ ...d, generation: { ...d.generation, model: e.detail.value } }))}
              />
              <TextInput
                aria-label="Generation seed"
                placeholder="Seed"
                value={draft.generation.seed}
                invalid={!!byField.generation}
                onValueChanged={(e) => setDraft((d) => ({ ...d, generation: { ...d.generation, seed: e.detail.value } }))}
              />
            </div>
            <FieldErrors errors={byField.generation} />
          </fieldset>
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
          {view === 'rejected' && (
            <Button size="sm" variant="outline" disabled={busy} onClick={() => doTransition('restore')}>Approve instead</Button>
          )}
          {view === 'approved' && (
            <Button size="sm" variant="outline" destructive disabled={busy} onClick={() => doTransition('retire')}>Reject</Button>
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
