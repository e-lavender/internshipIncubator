import { useState } from 'react'

import Link from 'next/link'

import { useTranslation } from '@/app/hooks'
import { Typography } from '@/ui/typography/typography'

export default function Home() {
  const [count, setCount] = useState(0)

  const increaseCountHandler = () => setCount(count + 1)
  const decreaseCountHandler = () => setCount(count - 1)
  const resetCountHandler = () => setCount(0)
  const id = 'idFromURL'
  const { t } = useTranslation()
  const { userProfile, passwordRecovery, createNewPassword, forgotPassword, signUp, signIn } =
    t.navigation.menu

  return (
    <div style={{ padding: '35px' }}>
      <Typography as="h1" variant="large">
        {t.navigation.title}
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href={'/auth/sign-in'}>
          <Typography variant="regular-link">{signIn}</Typography>
        </Link>
        <Link href={'/auth/sign-up'}>
          <Typography variant="regular-link">{signUp}</Typography>
        </Link>
        <Link href={'/auth/forgot-password'}>
          <Typography variant="regular-link">{forgotPassword}</Typography>
        </Link>
        <Link href={'/auth/create-new-password'}>
          <Typography variant="regular-link">{createNewPassword}</Typography>
        </Link>
        <Link href={'/auth/password-recovery'}>
          <Typography variant="regular-link">{passwordRecovery}</Typography>
        </Link>
        <Link href={`/auth/user-profile/${id}`}>
          <Typography variant="regular-link">{userProfile}</Typography>
        </Link>
        <Typography variant="h1">Some text test</Typography>
      </div>
      <div>
        <Typography variant="h1">{t.characterPage.getCount(count)}</Typography>
        <button onClick={decreaseCountHandler}>-</button>
        <button onClick={increaseCountHandler}>+</button>
        <button onClick={resetCountHandler}>0</button>
      </div>
    </div>
  )
}
