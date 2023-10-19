import { useState, useLayoutEffect } from 'react'

import { MatchMedia } from '@/app'

const queries = [
  '(min-width: 320px) and (max-width: 400px)',
  '(min-width: 767px) and (max-width: 1199px)',
  '(min-width: 1200px)',
]

export const useMatchMedia = (): MatchMedia => {
  const isClient = typeof window !== 'undefined'
  const [values, setValues] = useState<MatchMedia>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  })

  useLayoutEffect(() => {
    const getValues = () => {
      return {
        isMobile: window.matchMedia(queries[0]).matches,
        isTablet: window.matchMedia(queries[1]).matches,
        isDesktop: window.matchMedia(queries[2]).matches,
      }
    }

    const updateValues = () => {
      setValues(getValues())
    }

    if (isClient) {
      updateValues()

      window.addEventListener('resize', updateValues)

      return () => {
        window.removeEventListener('resize', updateValues)
      }
    }
  }, [isClient])

  return values
}
