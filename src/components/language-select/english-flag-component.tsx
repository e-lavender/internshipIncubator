import { EnFlagIcon, RuFlagIcon } from "@/app/assets";
import { useTranslation } from '@/app/hooks'

export const EnglishFlagComponent = () => {
  const { t } = useTranslation()

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '12px', display: 'flex', alignItems: 'center' }}>
        <EnFlagIcon />
      </div>
      <span>{t.navigation.header.english}</span>
    </div>
  )
}
