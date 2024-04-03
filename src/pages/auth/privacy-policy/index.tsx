import { useTranslation } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { TextContainer } from '@/components'
import { BackToPrevious } from '@flyingtornado06/ui-kit'

export default function TermsOfServicePage() {
  const { t } = useTranslation()

  return (
    <TextContainer>
      <BackToPrevious
        href={authNavigationUrls.signUp()}
        onClick={() => {}}
        title={'Back to previous page'}
      />
      <p>{t.privacyDescription.title}</p>
      <span>{t.privacyDescription.description}</span>
    </TextContainer>
  )
}
