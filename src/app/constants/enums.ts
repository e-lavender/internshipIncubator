import { EnFlag, RuFlag } from '@/app'

export enum LocalType {
  RU = 'ru',
  EN = 'en',
}
export const flagIcons = {
  [LocalType.EN]: EnFlag,
  [LocalType.RU]: RuFlag,
} as const
