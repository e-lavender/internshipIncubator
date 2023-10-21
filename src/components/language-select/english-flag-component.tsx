import { EnFlag } from '@/app/assets/svg/en-flag-icon/en-flag-icon'
import { useTranslation } from '@/app/hooks'
import { Typography } from '@/ui'

export const EnglishFlagComponent = () => {
  const { t } = useTranslation()

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '12px', display: 'flex', alignItems: 'center' }}>{EnFlag}</div>
      <Typography variant={'regular-16'}>{t.navigation.header.english}</Typography>
    </div>
  )
}
