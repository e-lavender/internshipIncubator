import Image from 'next/image'

import s from './create-new-password-link-expired.module.scss'

import expiredImg from '@/../public/assets/images/link-expired.svg'
import { useTranslation } from '@/app/hooks'
import { Button } from '@/ui/button'
import { Typography } from '@/ui/typography/typography'

export const NewPasswordLinkExpired = () => {
  const { t } = useTranslation()
  const { title, description, button: label } = t.newPasswordLinkExpiredPage

  return (
    <div>
      <div className={s.wrapper}>
        <Typography as={'h1'} variant={'h1'} className={s.title}>
          {title}
        </Typography>
        <Typography as={'p'} variant={'regular-16'} className={s.description}>
          {description}
        </Typography>
        <Button className={s.button}>{label}</Button>
      </div>
      <Image src={expiredImg} alt={'link-expired'} width={475} height={355} className={s.image} />
    </div>
  )
}
