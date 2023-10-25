import s from './language-select.module.scss'

import { EnFlag } from '@/app/assets/svg/en-flag-icon/en-flag-icon'
import { useMatchMedia, useTranslation } from '@/app/hooks'
import { Typography } from '@/ui'

export const EnglishFlagComponent = () => {
  const { isMobile } = useMatchMedia()
  const { t } = useTranslation()

  return (
    <div className={s.container}>
      <div className={s.languageSelect}>{EnFlag}</div>
      {!isMobile ? (
        <Typography className={s.text} variant={'regular-16'}>
          {t.navigation.header.english}
        </Typography>
      ) : null}
    </div>
  )
}
