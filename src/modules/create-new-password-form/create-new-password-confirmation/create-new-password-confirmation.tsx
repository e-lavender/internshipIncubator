import { FC, useEffect } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './create-new-password-confirmation.module.scss'

import { authNavigationUrls } from '@/app/constants/routes/auth'
import { useTranslation } from '@/app/hooks'
import { Typography } from '@/ui/typography/typography'

type ConfirmationProps = {
  delay?: number
}

export const NewPasswordConfirmationRedirection: FC<ConfirmationProps> = ({ delay = 5000 }) => {
  const router = useRouter()
  const { t } = useTranslation()

  const { message, title } = t.newPasswordConfirmationRedirectionPage

  useEffect(() => {
    const timer = setTimeout(() => router.push(authNavigationUrls.signIn()), delay)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={s.wrapper}>
      <Typography as={'h1'} variant={'h1'}>
        {title}
      </Typography>

      <div className={s.message}>
        <Typography as={'h2'} variant={'h2'}>
          {`${message} -   `}
          <Link href={authNavigationUrls.signIn()} className={s.link}>
            Sign in
          </Link>
        </Typography>
      </div>
    </div>
  )
}
