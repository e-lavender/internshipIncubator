import { LocaleType } from '@/app/locales/ru'
import {
  NavigationTextModel,
  PrivacyPolicyTextModel,
  SignUpTextModel,
  TermsTextModel,
} from '@/app/locales/text-models'
import { CharacterPageTextModel } from '@/app/locales/text-models/character-page-text-model'

const navigation = NavigationTextModel.en
const characterPage = CharacterPageTextModel.en
const descriptionTerms = TermsTextModel.en
const descriptionPrivacy = PrivacyPolicyTextModel.en
const signUp = SignUpTextModel.en

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
  authPages: {
    signUpPage: {
      signUpForm: {
        ...signUp,
      },
    },
  },
}
