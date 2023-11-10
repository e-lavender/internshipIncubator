import { useRouter } from 'next/router'

import { en } from '@/app/locales/en'
import { ru } from '@/app/locales/ru'

export const useTranslation = () => {
  const router = useRouter()

  const t = router.locale === 'en' ? en : ru

  return { t }
}
