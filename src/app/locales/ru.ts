import {
  CharacterPageTextModel,
  NavigationTextModel,
  NewPasswordConfirmationRedirection,
  NewPasswordLinkExpired,
} from '@/app/locales/text-models'

const navigation = NavigationTextModel.ru
const characterPage = CharacterPageTextModel.ru
const newPasswordConfirmationRedirection = NewPasswordConfirmationRedirection.ru
const newPasswordLinkExpired = NewPasswordLinkExpired.ru

export const ru = {
  navigation: {
    title: navigation.title,
    menu: navigation.links,
    header: navigation.language,
  },
  characterPage: characterPage,
  newPasswordConfirmationRedirection,
  newPasswordLinkExpired,
}
export type LocaleType = typeof ru
