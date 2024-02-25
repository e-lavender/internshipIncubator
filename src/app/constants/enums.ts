import { EnFlag, RuFlag } from '@/app'

export enum LocalType {
  RU = 'ru',
  EN = 'en',
}
export const flagIcons = {
  [LocalType.EN]: EnFlag,
  [LocalType.RU]: RuFlag,
} as const

export const IMAGE_SIZE = {
  MEDIUM: 'MEDIUM',
  THUMBNAIL: 'THUMBNAIL',
} as const

export const COMMON_MODE_STATE = {
  VIEW: 'view',
  EDIT: 'edit',
} as const
