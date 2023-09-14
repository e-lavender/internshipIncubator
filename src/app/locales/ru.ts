import { CharacterPageTextModel, NavigationTextModel } from '@/app/locales/text-models'

const navigation = NavigationTextModel.ru
const characterPage = CharacterPageTextModel.ru

export const ru = {
  navigation: {
    title: navigation.title,
    menu: navigation.links,
    header: navigation.language
  },
  characterPage: characterPage,
}
export type LocaleType = typeof ru
