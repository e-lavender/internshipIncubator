const DEVICES = {
  DESKTOP: 'DESKTOP',
  MOBILE: 'MOBILE',
} as const

const BROWSERS = {
  BRAVE: 'BRAVE',
  CHROME: 'CHROME',
  EDGE: 'EDGE',
  EXPLORER: 'EXPLORER',
  FIREFOX: 'FIREFOX',
  OPERA: 'OPERA',
  SAFARI: 'SAFARI',
  YANDEX: 'YANDEX',
  UC: 'UC',
} as const

type ObjectValuesType<T> = T[keyof T]

export type DeviceType = ObjectValuesType<typeof DEVICES>

export type BrowserType = ObjectValuesType<typeof BROWSERS>
