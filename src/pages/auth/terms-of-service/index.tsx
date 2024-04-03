import { useTranslation } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { TextContainer } from '@/components'
import { BackToPrevious } from '@flyingtornado06/ui-kit'

export default function PolicyPage() {
  const { t } = useTranslation()

  return (
    <TextContainer>
      <BackToPrevious
        href={authNavigationUrls.signUp()}
        onClick={() => {}}
        title={'Back to sign up'}
      />
      <p>{t.termsDescription.title}</p>
      <span>{t.termsDescription.description}</span>
    </TextContainer>
  )
}
