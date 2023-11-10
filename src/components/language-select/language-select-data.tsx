import { FlagComponent } from './flag-component'
import { FlagSelectOption } from './language-select-types'

import { LocalType } from '@/app/constants/enums'

const flags = {
  en: <FlagComponent locale={LocalType.EN} />,
  ru: <FlagComponent locale={LocalType.RU} />,
}

export const languageSelectOptions: Array<FlagSelectOption> = [
  {
    label: flags[LocalType.EN],
    value: LocalType.EN,
  },
  {
    label: flags[LocalType.RU],
    value: LocalType.RU,
  },
]
