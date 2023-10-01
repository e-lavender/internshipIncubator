import Image from 'next/image'

import s from './create-new-password-link-expired.module.scss'

import { useTranslation } from '@/app/hooks'
import { Button } from '@/ui/button'
import { Typography } from '@/ui/typography/typography'

export const NewPasswordLinkExpired = () => {
  const { t } = useTranslation()
  const { title, description, button: buttonLabel } = t.newPasswordLinkExpired

  return (
    <div>
      <div className={s.wrapper}>
        <Typography as={'h1'} variant={'h1'} className={s.title}>
          {title}
        </Typography>
        <Typography as={'p'} variant={'regular-16'} className={s.description}>
          {description}
        </Typography>
        <Button className={s.button}>{buttonLabel}</Button>
      </div>
      <Image
        src={'/assets/images/link-expired.svg'}
        alt={'link-expired'}
        width={475}
        height={355}
        className={s.image}
      />
    </div>
  )
}
