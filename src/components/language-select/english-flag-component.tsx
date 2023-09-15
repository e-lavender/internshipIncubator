import { EnFlag } from '@/app/assets/svg/en-flag-icon/en-flag-icon'
import { useTranslation } from '@/app/hooks'

export const EnglishFlagComponent = () => {
  const { t } = useTranslation()

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '12px', display: 'flex', alignItems: 'center' }}>{EnFlag}</div>
      <span>{t.navigation.header.english}</span>
    </div>
  )
}
