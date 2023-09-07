import { ChangeEvent } from 'react'

import { useRouter } from 'next/router'

export const LanguageSelect = () => {
  const { locale, push, pathname, query, asPath, locales } = useRouter()

  const changeLangHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.currentTarget.value

    push({ pathname, query }, asPath, { locale: selectedLocale }).then(() => {})
  }

  return (
    <div>
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
