import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Alert, Badge, Button, Combobox, InlineEdit, Select, Tag, TextInput } from '@ctrliq/quantic-react'
import type {
  Combobox as ComboboxElement, InlineEdit as InlineEditElement, TextInput as TextInputElement,
} from '@ctrliq/quantic-components'
import { splitErrors } from '../api'
import { TAG_AXES, withSlug } from '../editing'
import { useViewKeys } from '../keys'
import { botProposed, differsFromBot, VERDICT_KEYS, VERDICT_LABEL, type Verdict } from '../rating'
import type { Asset } from '../state'

interface Props {
  asset: Asset
  vocabulary: Record<string, string[]>
  /** Verdict keys offered (Parked offers Yes / No only). */
  verdicts: Verdict[]
  /** Validator errors to fix before the verdict can land (failed verdict, failed batch, failed edit). */
  errors: string[]
  position: { index: number; total: number }
  active: boolean
  canUndo: boolean
  onVerdict: (verdict: Verdict, reason?: string) => void
  onMove: (delta: 1 | -1) => void
  onUndo: () => void
  /**
   * Save an edit, built from the asset as it will be once every queued edit lands (so quick edits
   * compose instead of overwriting each other). Shown at once; written in key order.
   */
  onEdit: (change: (latest: Asset) => Record<string, unknown>) => void
  onOpenEditor: () => void
  /** Lane switch, shown above the card details. */
  toolbar?: ReactNode
}

const VERDICT_COLOR: Record<Verdict, 'success' | 'error' | 'warning'> = { yes: 'success', no: 'error', maybe: 'warning' }
const KEY_OF: Record<Verdict, string> = { yes: 'Y', no: 'N', maybe: 'M' }
/** Clicks this soon after a card appears are the tail of a double-click on the previous card. */
const CLICK_GUARD_MS = 400

function FieldErrors({ errors }: { errors?: string[] }) {
  return <>{(errors ?? []).map((e) => <p key={e} className="field-error" role="alert">{e}</p>)}</>
}

function BotMark({ show }: { show: boolean }) {
  return show ? <Badge size="sm" color="gray" className="bot-mark">bot</Badge> : null
}

/** One unsure call: the image large, the bot's proposal beside it, one key per verdict. */
export function RateCard({
  asset, vocabulary, verdicts, errors, position, active, canUndo, onVerdict, onMove, onUndo, onEdit, onOpenEditor, toolbar,
}: Props) {
  const bot = asset.rating?.bot
  const proposed = botProposed(asset)
  const [ask, setAsk] = useState<Verdict | null>(null)
  const [reason, setReason] = useState('')
  const [desc, setDesc] = useState(asset.description ?? '')
  const card = useRef<HTMLDivElement>(null)
  const why = useRef<TextInputElement>(null)
  const descEdit = useRef<InlineEditElement>(null)
  const descInput = useRef<TextInputElement>(null)
  /** Last description sent, so Enter followed by the blur it causes saves once. */
  const descSent = useRef(asset.description ?? '')
  const descCancelled = useRef(false)
  const combo = useRef<ComboboxElement>(null)

  // Lit renders the inner input after mount; focus once it exists.
  useEffect(() => {
    const el = why.current
    if (ask && el) void el.updateComplete.then(() => el.focus())
  }, [ask])

  // A double-click must not decide the card that replaces this one under the pointer.
  const shownAt = useRef(0)
  useEffect(() => { shownAt.current = performance.now() }, [])
  const clickVerdict = (e: { detail: number; timeStamp: number }, v: Verdict) => {
    if (e.detail > 1 || e.timeStamp - shownAt.current < CLICK_GUARD_MS) return
    decide(v)
  }

  const decide = (v: Verdict) => {
    if (differsFromBot(asset, v)) { setReason(''); setAsk(v) } else onVerdict(v)
  }

  const saveDesc = () => {
    if (descCancelled.current) { descCancelled.current = false; return }
    const next = desc.trim()
    if (next === descSent.current) return
    descSent.current = next
    onEdit(() => ({ description: next }))
  }
  const editDesc = async (on: boolean) => {
    const el = descEdit.current
    if (!el) return
    if (on) { descCancelled.current = false; descSent.current = asset.description ?? '' }
    el.active = on
    await el.updateComplete
    if (on) { await descInput.current?.updateComplete; descInput.current?.focus() } else backToCard()
  }

  const focusTags = () => combo.current?.shadowRoot?.querySelector('input')?.focus()
  const backToCard = () => card.current?.focus()

  useViewKeys((e) => {
    if (ask) return false
    const v = VERDICT_KEYS[e.key.toLowerCase()]
    if (v && verdicts.includes(v)) { decide(v); return true }
    switch (e.key) {
      case 'ArrowRight': onMove(1); return true
      case 'ArrowLeft': onMove(-1); return true
      case 't': case 'T': focusTags(); return true
      case 'd': case 'D': void editDesc(true); return true
      case 'e': case 'E': onOpenEditor(); return true
      case 'z': case 'Z': onUndo(); return true
      default: return false
    }
  }, active)

  const { byField, general } = splitErrors(errors)
  const shown = new Set<string>([...TAG_AXES, 'description', ...(asset.class === 'background' ? ['tone'] : [])])
  const orphan = [...general, ...Object.entries(byField).filter(([k]) => !shown.has(k)).flatMap(([, v]) => v)]
  const tagErrors = TAG_AXES.flatMap((axis) => byField[axis] ?? [])
  const chips = TAG_AXES.flatMap((axis) => (asset[axis] ?? []).map((slug) => ({ axis, slug })))
  const options = TAG_AXES.flatMap((axis) => (vocabulary[axis] ?? [])
    .filter((s) => !(asset[axis] ?? []).includes(s))
    .map((s) => ({ label: `${s} · ${axis}`, value: `${axis}/${s}` })))
  const addTag = (value: string) => {
    const [axis, slug] = value.split('/') as [(typeof TAG_AXES)[number], string]
    if (!slug || !TAG_AXES.includes(axis)) return
    onEdit((latest) => ({ [axis]: withSlug(latest[axis], slug, true) }))
    // Clear in place (no remount) so focus never leaves the input: a fast typist's next keys must
    // land in the tag field, not reach the card's Y/N/M shortcuts.
    queueMicrotask(() => { if (combo.current) combo.current.value = '' })
  }

  return (
    <div className="rate-card" ref={card} tabIndex={-1} data-asset-id={asset.id}>
      <a href={asset.full_url} target="_blank" rel="noreferrer" className="rate-card-image" title="Open full resolution">
        <img src={asset.full_url} alt={asset.description || asset.id} />
      </a>

      <div className="rate-card-side">
        <div className="rate-card-top">
          {toolbar}
          <span className="rate-card-pos" role="status" aria-live="polite">{position.index + 1} of {position.total}</span>
        </div>
        <div>
          <h2 className="rate-card-id" title={asset.id}>{asset.id}</h2>
          <span className="editor-meta">
            {asset.class} / {asset.aspect} / {asset.license || 'no license'}
            {asset.status !== 'proposed' && ` / ${asset.status}`}
          </span>
        </div>

        {bot && (
          <div className="bot-call">
            <span className="bot-call-verdict">
              <span className="field-label">Bot</span>
              <Badge size="sm" color={VERDICT_COLOR[bot.verdict]}>{VERDICT_LABEL[bot.verdict]}</Badge>
              <span className="bot-strength">{bot.strength}</span>
            </span>
            {bot.reason && <p className="bot-reason">&ldquo;{bot.reason}&rdquo;</p>}
          </div>
        )}
        {asset.rating?.human && (
          <p className="editor-meta">
            Last verdict: {VERDICT_LABEL[asset.rating.human.verdict]} by {asset.rating.human.by.replace(/\s*<.*>$/, '')}
            {asset.rating.human.reason ? ` (“${asset.rating.human.reason}”)` : ''}
          </p>
        )}

        {orphan.length > 0 && (
          <Alert type="error">
            {orphan.map((e) => <div key={e}>{e}</div>)}
          </Alert>
        )}

        <dl className="card-fields">
          <dt className="field-label">Description <BotMark show={proposed && !!asset.description} /></dt>
          <dd className={byField.description ? 'field-invalid' : undefined}>
            <div onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); saveDesc(); void editDesc(false) } }}>
              <InlineEdit
                ref={descEdit}
                className="desc-edit"
                onCancel={() => { descCancelled.current = true; setDesc(asset.description ?? '') }}
              >
                <span slot="display" className={`desc-text${asset.description ? '' : ' empty'}`}>
                  {asset.description || 'No description. Press D to add one.'}
                </span>
                <TextInput
                  ref={descInput}
                  slot="editor"
                  size="sm"
                  aria-label="Description"
                  value={desc}
                  invalid={!!byField.description}
                  onValueChanged={(e) => setDesc(e.detail.value)}
                  onBlur={saveDesc}
                />
              </InlineEdit>
            </div>
            <FieldErrors errors={byField.description} />
          </dd>

          <dt className="field-label">Tags <BotMark show={proposed && chips.length > 0} /></dt>
          <dd className={tagErrors.length ? 'field-invalid' : undefined}>
            <div className="chips" onKeyDown={(e) => { if (e.key === 'Escape') backToCard() }}>
              {chips.map(({ axis, slug }) => (
                <Tag
                  key={`${axis}/${slug}`}
                  size="sm"
                  dismissible
                  title={axis}
                  aria-label={`${axis}: ${slug}`}
                  onTagDismiss={() => onEdit((latest) => ({ [axis]: withSlug(latest[axis], slug, false) }))}
                >
                  {slug}
                </Tag>
              ))}
              <Combobox
                ref={combo}
                size="sm"
                className="tag-add"
                aria-label="Add tag"
                placeholder="Add tag (T)"
                options={options}
                onValueChanged={(e) => addTag(e.detail.value)}
              />
            </div>
            <FieldErrors errors={tagErrors} />
          </dd>

          {asset.class === 'background' && (
            <>
              <dt className="field-label">Tone <BotMark show={proposed && !!asset.tone} /></dt>
              <dd className={byField.tone ? 'field-invalid' : undefined}>
                <Select
                  size="sm"
                  className="tone-select"
                  aria-label="Tone"
                  placeholder="Choose tone"
                  options={[['dark', 'dark'], ['light', 'light']]}
                  value={asset.tone ?? ''}
                  invalid={!!byField.tone}
                  onValueChanged={(e) => { if (e.detail.value && e.detail.value !== asset.tone) onEdit(() => ({ tone: e.detail.value })) }}
                />
                <FieldErrors errors={byField.tone} />
              </dd>
            </>
          )}

          {asset.class === 'screenshot' && (
            <>
              <dt className="field-label">Version <BotMark show={proposed && !!(asset.product_version || asset.captured_at)} /></dt>
              <dd>{asset.product_version || '—'} · captured {asset.captured_at || '—'} <span className="editor-meta">(fix in the editor)</span></dd>
            </>
          )}
        </dl>

        <div className="rate-card-actions">
          {ask ? (
            <div
              className="why"
              onKeyDown={(e) => {
                if (e.key === 'Enter') { e.preventDefault(); onVerdict(ask, reason.trim() || undefined); setAsk(null) }
                else if (e.key === 'Escape') { e.preventDefault(); setAsk(null); backToCard() }
              }}
            >
              <span className="why-label">
                You say <strong>{VERDICT_LABEL[ask]}</strong>; the bot said {VERDICT_LABEL[bot!.verdict]}. Why?
              </span>
              <TextInput
                ref={why}
                size="sm"
                aria-label="Why (optional)"
                placeholder="Optional. The bot learns most from these."
                value={reason}
                onValueChanged={(e) => setReason(e.detail.value)}
              />
              <span className="key-hints"><kbd>Enter</kbd> save verdict · <kbd>Esc</kbd> cancel</span>
            </div>
          ) : (
            <>
              <div className="verdict-buttons">
                {verdicts.map((v) => (
                  <Button key={v} size="sm" variant={v === bot?.verdict ? 'primary' : 'outline'} onClick={(e) => clickVerdict(e, v)}>
                    <kbd className={v === bot?.verdict ? 'kbd-on-brand' : undefined}>{KEY_OF[v]}</kbd> {VERDICT_LABEL[v]}
                  </Button>
                ))}
                <span className="ops-spacer" />
                <Button size="sm" variant="ghost" disabled={!canUndo} onClick={onUndo}>Undo</Button>
                <Button size="sm" variant="ghost" onClick={onOpenEditor}>Editor</Button>
              </div>
              <span className="key-hints">
                <kbd>T</kbd> tags · <kbd>D</kbd> description · <kbd>E</kbd> editor · <kbd>Z</kbd> undo · <kbd>←</kbd> <kbd>→</kbd> move
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
