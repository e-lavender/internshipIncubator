import { ChangeEvent } from 'react'

import { useRouter } from 'next/router'

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

  const options = locales?.map(l => {
    return { label: l, value: l }
  }) as Array<Option>

  return (
    <div>
      <Select options={options} value={locale ?? ''} onChange={selectHandler} />
      <select onChange={changeLangHandler} defaultValue={locale}>
        {locales?.map(l => {
          return (
            <option value={l} key={l}>
              {l}
            </option>
          )
        })}
      </select>
    </div>
  )
}
