import { FC, useEffect } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './create-new-password-confirmation.module.scss'

import { useTranslation } from '@/app/hooks'
import { Typography } from '@/ui/typography/typography'

type ConfirmationProps = {
  delay?: number
}

export const NewPasswordConfirmationRedirection: FC<ConfirmationProps> = ({ delay = 5000 }) => {
  const router = useRouter()
  const { t } = useTranslation()

  const { message, title } = t.newPasswordConfirmationRedirection

  useEffect(() => {
    const timer = setTimeout(() => router.push('/sign-in'), delay)

    return () => {
      console.log('unmounted')
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className={s.wrapper}>
      <Typography as={'h1'} variant={'h1'}>
        {title}
      </Typography>

      <div className={s.message}>
        <Typography as={'h2'} variant={'h2'}>{`${message} - `}</Typography>
        <Link href={'/sign-in'} className={s.link}>
          Sign in
        </Link>
      </div>
    </div>
  )
}
