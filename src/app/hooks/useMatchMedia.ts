import { useState, useLayoutEffect } from 'react'

const queries = [
  '(min-width: 320px) and (max-width: 400px)',
  '(min-width: 767px) and (max-width: 1199px)',
  '(min-width: 1200px)',
]

interface MediaQueries {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

export const useMatchMedia = (): MediaQueries => {
  const isClient = typeof window === 'object'

  const mediaQueryLists = queries.map(query => (isClient ? window.matchMedia(query) : null))
  const getValues = () => mediaQueryLists.map(list => (list ? list.matches : false))
  const [values, setValues] = useState<any>(getValues)

  useLayoutEffect(() => {
    if (isClient) {
      const handler = () => setValues(getValues)

      mediaQueryLists.forEach(list => (list ? list.addEventListener('change', handler) : null))

      return () =>
        mediaQueryLists.forEach(list => (list ? list.removeEventListener('change', handler) : null))
    }
  }, [])

  return ['isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {} as MediaQueries
  )
}
