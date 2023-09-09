import { LocaleType } from '@/app/locales/ru'
import { CharacterPageTextModel, NavigationTextModel } from '@/app/locales/text-models'

const navigation = NavigationTextModel.en
const characterPage = CharacterPageTextModel.en

export const en: LocaleType = {
  navigation: {
    title: navigation.title,
    menu: navigation.links,
  },
  characterPage: characterPage,
}
