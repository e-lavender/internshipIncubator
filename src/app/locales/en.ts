import { LocaleType } from '@/app/locales/ru'
import {
  PrivatyPolicyTextModel,
  TermsTextModel,
} from '@/app/locales/text-models'

const navigation = NavigationTextModel.en
const characterPage = CharacterPageTextModel.en
const descriptionTerms = TermsTextModel.en
const descritionPrivaty = PrivatyPolicyTextModel.en

export const en: LocaleType = {
  navigation: {
    title: navigation.title,
    menu: navigation.links,
  
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
