import { useEffect, useRef } from 'react'

/** Elements that own the keyboard while focused (same guard as the Review queue). */
export const TYPING = /^(INPUT|TEXTAREA|SELECT)$|^QUANTIC-(TEXT-INPUT|TEXTAREA|COMBOBOX|SELECT)$/

/** True for keys the view should leave alone: modifier chords and keys typed into a field. */
export function ignoreKey(e: KeyboardEvent): boolean {
  if (e.metaKey || e.ctrlKey || e.altKey) return true
  const t = (e.composedPath()[0] as HTMLElement | undefined)?.tagName ?? ''
  return TYPING.test(t.toUpperCase())
}

/**
 * Window keydown handler that always sees the latest props. Return true when the key was handled
 * (the default action is then prevented, e.g. Space scrolling or Enter clicking a focused tile).
 */
export function useViewKeys(handler: (e: KeyboardEvent) => boolean, enabled: boolean) {
  const ref = useRef(handler)
  useEffect(() => { ref.current = handler })
  useEffect(() => {
    if (!enabled) return
    const onKey = (e: KeyboardEvent) => {
      if (ignoreKey(e)) return
      if (ref.current(e)) e.preventDefault()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [enabled])
}
