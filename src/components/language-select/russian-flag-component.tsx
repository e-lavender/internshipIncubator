import s from './language-select.module.scss'

import { RuFlag } from '@/app/assets/svg/ru-flag-icon/ru-flag-icon'
import { useMatchMedia, useTranslation } from '@/app/hooks'
import { Typography } from '@/ui'

export const RussiaFlagComponent = () => {
  const { isMobile } = useMatchMedia()
  const { t } = useTranslation()

  return (
    <div className={s.container}>
      <div className={s.languageSelect}>{RuFlag}</div>
      {!isMobile ? (
        <Typography className={s.text} variant={'regular-16'}>
          {t.navigation.header.russian}
        </Typography>
      ) : null}
    </div>
  )
}
