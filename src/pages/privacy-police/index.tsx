import { PATH } from '@/app/constants/PATH'
import { useTranslation } from '@/app/hooks'
import { TextContainer } from '@/components/text-container/textContainer'
import { BackToPrevious } from '@/ui/BackToPrevios/backtoprevios'

export default function TermsOfServicePage() {
  const { t } = useTranslation()

  return (
    <TextContainer>
      <BackToPrevious href={PATH.LOGIN} title="Back to sign in" />
      <p>{t.privatyDescriotn.title}</p>
      <span>{t.privatyDescriotn.description}</span>
    </TextContainer>
  )
}
