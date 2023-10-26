import { LocaleType } from '@/app/locales/ru'
import {
  ForgotPasswordModel,
  NavigationTextModel,
  LinkExpiredModel,
  LinkConfirmationModel,
  NewPasswordModel,
  PrivacyPolicyTextModel,
  SignInTextModel,
  SignUpTextModel,
  TermsTextModel,
  NewPasswordConfirmationRedirectionModel,
  CharacterPageTextModel,
  SidebarMenuModel,
} from '@/app/locales/text-models'

const navigation = NavigationTextModel.en
const characterPage = CharacterPageTextModel.en
const newPasswordPage = NewPasswordModel.en
const forgotPasswordPage = ForgotPasswordModel.en
const linkExpiredPage = LinkExpiredModel.en
const linkConfirmedPage = LinkConfirmationModel.en
const descriptionTerms = TermsTextModel.en
const descriptionPrivacy = PrivacyPolicyTextModel.en
const newPasswordConfirmationRedirectionPage = NewPasswordConfirmationRedirectionModel.en
const signUp = SignUpTextModel.en
const signIn = SignInTextModel.en
const sidebarMenu = SidebarMenuModel.en

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
  linkExpiredPage: linkExpiredPage,
  linkConfirmedPage: linkConfirmedPage,
  newPasswordConfirmationRedirectionPage: newPasswordConfirmationRedirectionPage,
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
  sidebarMenu: sidebarMenu,
}
