import { FlagComponentProps } from './language-select-types'
import s from './language-select.module.scss'

import { useMatchMedia, useTranslation } from '@/app'
import { flagIcons, LocalType } from '@/app/constants/enums'
import { Typography } from '@/ui'

export const FlagComponent = ({ locale = LocalType.EN }: FlagComponentProps) => {
  const { isMobile } = useMatchMedia()
  const { t } = useTranslation()

  const { [locale]: language } = t.navigation.header

  return (
    <div className={s.container}>
      <div className={s.languageSelect}>{flagIcons[locale]}</div>
      {!isMobile ? (
        <Typography className={s.text} variant={'regular-16'}>
          {language}
        </Typography>
      ) : null}
    </div>
  )
}
