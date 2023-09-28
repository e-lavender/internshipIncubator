import {
  TermsTextModel,
  PrivatyPolicyTextModel,
} from '@/app/locales/text-models'

const navigation = NavigationTextModel.ru
const characterPage = CharacterPageTextModel.ru
const descriptionTerms = TermsTextModel.ru
const descritionPrivaty = PrivatyPolicyTextModel.ru

export const ru = {
  navigation: {
    title: navigation.title,
    menu: navigation.links,
    header: navigation.language,
  },
  termsdecription: {
    title: descriptionTerms.title,
    description: descriptionTerms.description,
    header: descriptionTerms.language,
  },
  privatyDescriotn: {
    title: descritionPrivaty.title,
    description: descritionPrivaty.description,
  },
  characterPage: characterPage,
}
export type LocaleType = typeof ru
