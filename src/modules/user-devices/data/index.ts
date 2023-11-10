export const MOCKED_DEVICE_DATA = [
  { type: 'DEVICE', variant: 'CHROME', title: 'Chrome', ip: '22.345.345.12' },
] as const

export const MOCKED_SESSION_DEVICE_DATA = [
  {
    type: 'SESSION',
    variant: 'DESKTOP',
    title: 'Apple iMac 27',
    ip: '22.345.345.12',
    lastVisit: '22.09.2022',
  },
  {
    type: 'SESSION',
    variant: 'MOBILE',
    title: 'Iphone 14 Pro Max',
    ip: '22.345.345.12',
    lastVisit: '22.09.2022',
  },
] as const
