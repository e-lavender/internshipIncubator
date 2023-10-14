import Image from 'next/image'

import expiredImg from '../../../public/assets/images/link-expired.svg'

import s from './link-expired.module.scss'

import { useTranslation } from '@/app/hooks'
import { Button, Typography } from '@/ui'

export const LinkExpired = () => {
  const { t } = useTranslation()
  const { title, description, button: label } = t.LinkExpiredPage

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
