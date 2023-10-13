import { LocaleType } from '@/app/locales/ru'
import {
  ForgotPasswordModel,
  NavigationTextModel,
  NewPasswordConfirmationRedirectionModel,
  NewPasswordLinkExpiredModel,
  NewPasswordModel,
  PrivacyPolicyTextModel,
  SignInTextModel,
  SignUpTextModel,
  TermsTextModel,
} from '@/app/locales/text-models'
import { CharacterPageTextModel } from '@/app/locales/text-models/character-page-text-model'

const navigation = NavigationTextModel.en
const characterPage = CharacterPageTextModel.en
const newPasswordPage = NewPasswordModel.en
const forgotPasswordPage = ForgotPasswordModel.en
const newPasswordConfirmationRedirectionPage = NewPasswordConfirmationRedirectionModel.en
const newPasswordLinkExpiredPage = NewPasswordLinkExpiredModel.en
const descriptionTerms = TermsTextModel.en
const descriptionPrivacy = PrivacyPolicyTextModel.en
const signUp = SignUpTextModel.en
const signIn = SignInTextModel.en

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
  newPasswordConfirmationRedirectionPage: newPasswordConfirmationRedirectionPage,
  newPasswordLinkExpiredPage: newPasswordLinkExpiredPage,
  authPages: {
    signUpPage: {
      signUpForm: {
        ...signUp,
      },
    },
    signInPage: {
      signInForm: {
        ...signIn,
      },
    },
  },
}
