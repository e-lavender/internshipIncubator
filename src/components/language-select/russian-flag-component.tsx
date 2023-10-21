import { RuFlag } from '@/app/assets/svg/ru-flag-icon/ru-flag-icon'
import { useTranslation } from '@/app/hooks'
import { Typography } from '@/ui'

export const RussiaFlagComponent = () => {
  const { t } = useTranslation()

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '12px', display: 'flex', alignItems: 'center' }}>{RuFlag}</div>
      <Typography variant={'regular-16'}>{t.navigation.header.russian}</Typography>
    </div>
  )
}
