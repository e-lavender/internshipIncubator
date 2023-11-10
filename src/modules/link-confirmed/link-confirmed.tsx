import Image from 'next/image'
import Link from 'next/link'

import confirmationImg from '../../../public/assets/images/link-confirmation.svg'

import s from './link-confirmed.module.scss'

import { useTranslation, authNavigationUrls } from '@/app'
import { Button, Typography } from '@/ui'

export const LinkConfirmed = () => {
  const { t } = useTranslation()
  const { title, description, button: label } = t.linkConfirmedPage

  return (
    <div>
      <div className={s.wrapper}>
        <Typography as={'h1'} variant={'h1'} className={s.title}>
          {title}
        </Typography>
        <Typography as={'p'} variant={'regular-16'} className={s.description}>
          {description}
        </Typography>
        <Button as={Link} className={s.button} href={authNavigationUrls.signIn()}>
          {label}
        </Button>
      </div>
      <Image
        src={confirmationImg}
        alt={'link-confirmed'}
        width={432}
        height={300}
        className={s.image}
      />
    </div>
  )
}
