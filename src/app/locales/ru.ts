import {
  TermsTextModel,
  PrivacyPolicyTextModel,
  SignUpTextModel,
  CharacterPageTextModel,
  NavigationTextModel,
  NewPasswordLinkExpiredModel,
  NewPasswordConfirmationRedirectionModel,
  NewPasswordModel,
  ForgotPasswordModel,
} from '@/app/locales/text-models'

const navigation = NavigationTextModel.ru
const characterPage = CharacterPageTextModel.ru
const newPasswordPage = NewPasswordModel.ru
const forgotPasswordPage = ForgotPasswordModel.ru
const newPasswordConfirmationRedirectionPage = NewPasswordConfirmationRedirectionModel.ru
const newPasswordLinkExpiredPage = NewPasswordLinkExpiredModel.ru
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
  },
}
export type LocaleType = typeof ru
