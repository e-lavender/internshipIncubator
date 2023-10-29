import { FlagComponentProps } from './language-select-types'
import s from './language-select.module.scss'

import { useMatchMedia, useTranslation } from '@/app'
import { flagIcons, LocalType } from '@/app/constants/enums'
import { Typography } from '@/ui'

export const FlagComponent = ({ locale }: FlagComponentProps) => {
  const { isMobile } = useMatchMedia()
  const { t } = useTranslation()
  const defaultLocale = LocalType.EN

  return (
    <div className={s.container}>
      <div className={s.languageSelect}>{flagIcons[locale ?? defaultLocale]}</div>
      {!isMobile ? (
        <Typography className={s.text} variant={'regular-16'}>
          {t.navigation.header[locale ?? defaultLocale]}
        </Typography>
      ) : null}
    </div>
  )
}
