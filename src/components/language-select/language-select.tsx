import { ChangeEvent } from 'react'

import { useRouter } from 'next/router'

import { EnFlagIcon } from '@/app/assets/en-flag-icon'
import { RuFlagIcon } from '@/app/assets/ru-flag-icon'
import { Option, Select } from '@/ui/select'

export const LanguageSelect = () => {
  const { locale, push, pathname, query, asPath, locales } = useRouter()

  const changeLangHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.currentTarget.value

    push({ pathname, query }, asPath, { locale: selectedLocale }).then(() => {})
  }

  const selectHandler = (value: string) => {
    push({ pathname, query }, asPath, { locale: value }).then(() => {})
  }

  const options = [
    { label: 'ru', value: 'russian', icon: <RuFlagIcon /> },
    { label: 'en', value: 'english', icon: <EnFlagIcon /> },
  ]

  return (
    <div>
      <Select options={options} value={locale ?? ''} onChange={selectHandler} />
    </div>
  )
}
