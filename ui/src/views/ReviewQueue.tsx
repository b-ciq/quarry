import { useEffect, useReducer, useRef } from 'react'
import { Button } from '@ctrliq/quantic-react'
import { AssetEditor, type EditorHandle } from '../components/AssetEditor'
import { current, initQueue, reviewReducer } from '../review'
import type { Asset } from '../state'

interface Props {
  /** Snapshot of the proposed assets when the queue was opened. */
  initialIds: string[]
  assets: Asset[]
  vocabulary: Record<string, string[]>
  onChanged: (asset: Asset) => void
  onExit: () => void
  /** Returns true if it is OK to drop the current draft (asks the user when dirty). */
  confirmDiscard: () => boolean
  onDirtyChange: (dirty: boolean) => void
}

const TYPING = /^(INPUT|TEXTAREA|SELECT)$|^QUANTIC-(TEXT-INPUT|TEXTAREA|COMBOBOX|SELECT)$/

export function ReviewQueue({ initialIds, assets, vocabulary, onChanged, onExit, confirmDiscard, onDirtyChange }: Props) {
  const [state, dispatch] = useReducer(reviewReducer, initialIds, initQueue)
  const editor = useRef<EditorHandle>(null)
  const id = current(state)
  const asset = assets.find((a) => a.id === id)

  useEffect(() => {
    if (state.exited) onExit()
  }, [state.exited, onExit])

  const guardRef = useRef(confirmDiscard)
  useEffect(() => { guardRef.current = confirmDiscard })
  const go = (type: 'next' | 'prev' | 'exit') => { if (guardRef.current()) dispatch({ type }) }
  const goRef = useRef(go)
  useEffect(() => { goRef.current = go })

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const t = (e.composedPath()[0] as HTMLElement | undefined)?.tagName ?? ''
      if (TYPING.test(t.toUpperCase())) return
      if (e.key === 'ArrowRight') goRef.current('next')
      else if (e.key === 'ArrowLeft') goRef.current('prev')
      else if (e.key === 'Escape') goRef.current('exit')
      else if (e.key === 'c' || e.key === 'C') editor.current?.confirm()
      else return
      e.preventDefault()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!asset) return <p className="empty">Review queue is empty.</p>

  return (
    <div className="review">
      <div className="review-bar">
        <Button size="sm" variant="outline" disabled={state.index === 0} onClick={() => go('prev')}>Previous</Button>
        <span className="review-position" role="status" aria-live="polite">
          {state.index + 1} of {state.queue.length}
        </span>
        <Button size="sm" variant="outline" disabled={state.index >= state.queue.length - 1} onClick={() => go('next')}>Next</Button>
        <span className="ops-spacer" />
        <span className="review-keys">Left/Right: navigate. C: confirm and next. Esc: exit.</span>
        <Button size="sm" variant="outline" onClick={() => go('exit')}>Exit</Button>
      </div>
      <AssetEditor
        key={asset.id}
        ref={editor}
        asset={asset}
        vocabulary={vocabulary}
        onChanged={onChanged}
        onDirtyChange={onDirtyChange}
        onTransition={(verb) => {
          if (verb === 'confirm') dispatch({ type: 'confirmed' })
          else if (verb === 'retire') dispatch({ type: 'retired' })
        }}
      />
    </div>
  )
}
