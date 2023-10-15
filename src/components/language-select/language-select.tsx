import { memo, useMemo, useState } from 'react'

import { useRouter } from 'next/router'

import { EnglishFlagComponent } from '@/components/language-select/english-flag-component'
import { RussiaFlagComponent } from '@/components/language-select/russian-flag-component'
import { Select } from '@/ui/select'

type LocalType = 'ru' | 'en'
export type LanguageSelectTypes = {
  testOptions?: any
}
export const LanguageSelect = memo(({ testOptions }: LanguageSelectTypes) => {
  const { locale, push, pathname, query, asPath, locales } = useRouter()
  const typedLocale = locale as LocalType
  const [value, setValue] = useState(typedLocale)

  const changeLangHandler = (value: string) => {
    const locale = value as LocalType

    push({ pathname, query }, asPath, { locale })
    setValue(locale)
  }

  const countries = {
    en: <EnglishFlagComponent />,
    ru: <RussiaFlagComponent />,
  }
  const options = useMemo(() => {
    return Array.isArray(locales)
      ? locales?.map(el => ({
          value: el,
          label: el == 'ru' ? <RussiaFlagComponent /> : <EnglishFlagComponent />,
        }))
      : testOptions
  }, [locales, testOptions])

  return (
    <div>
      <Select
        variant={'language'}
        placeholder={locale ? countries[typedLocale] : countries.ru}
        options={options}
        value={countries[value]}
        onChange={changeLangHandler}
      />
    </div>
  )
})
