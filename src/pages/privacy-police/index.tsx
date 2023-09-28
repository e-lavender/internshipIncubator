import { authNavigationUrls } from '@/app/constants/routes/auth'
import { useTranslation } from '@/app/hooks'
import { TextContainer } from '@/components/text-container/textContainer'
import { BackToPrevious } from '@/ui/back-to-previous/backtoprevious'

export default function TermsOfServicePage() {
  const { t } = useTranslation()

  return (
    <TextContainer>
      <BackToPrevious href={authNavigationUrls.signIn()} title="Back to sign in" />
      <p>{t.privacyDescription.title}</p>
      <span>{t.privacyDescription.description}</span>
    </TextContainer>
  )
}
