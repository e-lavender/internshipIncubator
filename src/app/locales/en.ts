import { LocaleType } from '@/app/locales/ru'
import { CharacterPageTextModel, NavigationTextModel,NewPasswordConfirmationRedirection,
    NewPasswordLinkExpired, } from '@/app/locales/text-models'

const navigation = NavigationTextModel.en
const characterPage = CharacterPageTextModel.en
const newPasswordConfirmationRedirection = NewPasswordConfirmationRedirection.en
const newPasswordLinkExpired = NewPasswordLinkExpired.en

export const en: LocaleType = {
  navigation: {
    title: navigation.title,
    menu: navigation.links,
    header: navigation.language,
  },
  termsDescription: {
    title: descriptionTerms.title,
    description: descriptionTerms.description,
    header: descriptionTerms.language,
  },
  privacyDescription: {
    title: descriptionPrivacy.title,
    description: descriptionPrivacy.description,
  },
  characterPage: characterPage,
    newPasswordConfirmationRedirection,
    newPasswordLinkExpired,
}
