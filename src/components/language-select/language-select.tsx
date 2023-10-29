import { useRouter } from 'next/router'

import { FlagComponent } from './flag-component'
import { languageSelectOptions } from './language-select-data'

import { useMatchMedia } from '@/app'
import { LocalType } from '@/app/constants/enums'
import { Select } from '@/ui/select'

export const LanguageSelect = () => {
  const { isMobile } = useMatchMedia()
  const { locale, push, pathname, query, asPath } = useRouter()
  const typedLocale = locale as LocalType

  const currentSelectedLocale = FlagComponent({ locale: typedLocale })

  const changeLangHandler = (value: string) => {
    void push({ pathname, query }, asPath, { locale: value })
  }

  return (
    <div>
      <Select
        variant={isMobile ? 'language-mobile' : 'language'}
        placeholder={currentSelectedLocale}
        options={languageSelectOptions}
        onChange={changeLangHandler}
        value={currentSelectedLocale}
      />
    </div>
  )
}
