import { MutableRefObject, useEffect } from 'react'

export const useOutsideClickHandler = (
  ref: MutableRefObject<HTMLDivElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !e.composedPath().includes(ref.current)) {
        callback()
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [ref])
}
