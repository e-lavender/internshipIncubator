import { LocaleType } from '@/app/locales/ru'
import {
  ForgotPasswordModel,
  NavigationTextModel,
  LinkExpiredModel,
  LinkConfirmationModel,
  NewPasswordModel,
  PrivacyPolicyTextModel,
  SignUpTextModel,
  TermsTextModel,
  NewPasswordConfirmationRedirectionModel,
} from '@/app/locales/text-models'
import { CharacterPageTextModel } from '@/app/locales/text-models/character-page-text-model'

const navigation = NavigationTextModel.en
const characterPage = CharacterPageTextModel.en
const newPasswordPage = NewPasswordModel.en
const forgotPasswordPage = ForgotPasswordModel.en
const LinkExpiredPage = LinkExpiredModel.en
const LinkConfirmationPage = LinkConfirmationModel.en
const descriptionTerms = TermsTextModel.en
const descriptionPrivacy = PrivacyPolicyTextModel.en
const newPasswordConfirmationRedirectionPage = NewPasswordConfirmationRedirectionModel.en
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
  newPasswordPage: newPasswordPage,
  forgotPasswordPage: forgotPasswordPage,
  LinkConfirmationPage: LinkConfirmationPage,
  LinkExpiredPage: LinkExpiredPage,
  newPasswordConfirmationRedirectionPage: newPasswordConfirmationRedirectionPage,
  authPages: {
    signUpPage: {
      signUpForm: {
        ...signUp,
      },
    },
  },
}
