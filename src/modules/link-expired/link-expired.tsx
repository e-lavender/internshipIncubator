import Image from 'next/image'

import expiredImg from '../../../public/assets/images/link-expired.svg'

import s from './link-expired.module.scss'

import { useMatchMedia, useTranslation } from '@/app/hooks'
import { Button, Typography } from '@/ui'

export const LinkExpired = () => {
  const { isMobile } = useMatchMedia()
  const { t } = useTranslation()
  const { title, description, button: label } = t.linkExpiredPage

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Typography as={'h1'} variant={'h1'} className={s.title}>
          {title}
        </Typography>
        <Typography as={'p'} variant={'regular-16'} className={s.description}>
          {description}
        </Typography>
        {!isMobile ? <Button className={s.button}>{label}</Button> : null}
      </div>
      <Image src={expiredImg} alt={'link-expired'} width={475} height={355} className={s.image} />
      {isMobile ? <Button className={s.button}>{label}</Button> : null}
    </div>
  )
}
