import { RuFlagIcon } from '@/app/assets'
import { useTranslation } from '@/app/hooks'

export const RussiaFlagComponent = () => {
  const { t } = useTranslation()

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '12px', display: 'flex', alignItems: 'center' }}>
        <RuFlagIcon />
      </div>
      <span style={{ fontSize: '14px', lineHeight: '16px', fontWeight: '400' }}>
        {t.navigation.header.russian}
      </span>
    </div>
  )
}
