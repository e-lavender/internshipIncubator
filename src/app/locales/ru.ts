import {
  TermsTextModel,
  PrivacyPolicyTextModel,
  NavigationTextModel,
  SignUpTextModel,
} from '@/app/locales/text-models'
import { CharacterPageTextModel } from '@/app/locales/text-models/character-page-text-model'

const navigation = NavigationTextModel.ru
const characterPage = CharacterPageTextModel.ru
const descriptionTerms = TermsTextModel.ru
const descriptionPrivacy = PrivacyPolicyTextModel.ru
const signUp = SignUpTextModel.ru

export const ru = {
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
  authPages: {
    signUpPage: {
      signUpForm: {
        ...signUp,
      },
    },
  },
}
export type LocaleType = typeof ru
