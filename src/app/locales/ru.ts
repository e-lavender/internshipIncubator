import {
  TermsTextModel,
  PrivacyPolicyTextModel,
  SignUpTextModel,
  CharacterPageTextModel,
  NavigationTextModel,
  LinkExpiredModel,
  LinkConfirmationModel,
  NewPasswordModel,
  ForgotPasswordModel,
  SignInTextModel,
  NewPasswordConfirmationRedirectionModel,
} from '@/app/locales/text-models'

const navigation = NavigationTextModel.ru
const characterPage = CharacterPageTextModel.ru
const newPasswordPage = NewPasswordModel.ru
const forgotPasswordPage = ForgotPasswordModel.ru
const linkExpiredPage = LinkExpiredModel.ru
const linkConfirmedPage = LinkConfirmationModel.ru
const descriptionTerms = TermsTextModel.ru
const descriptionPrivacy = PrivacyPolicyTextModel.ru
const newPasswordConfirmationRedirectionPage = NewPasswordConfirmationRedirectionModel.ru
const signUp = SignUpTextModel.ru
const signIn = SignInTextModel.ru

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
}
export type LocaleType = typeof ru
