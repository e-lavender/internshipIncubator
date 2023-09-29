import { useState } from 'react'

import Link from 'next/link'

import { authNavigationUrls } from '@/app/constants/routes/auth'
import { useTranslation } from '@/app/hooks'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { Typography } from '@/ui'

export default function Home() {
  const [count, setCount] = useState(0)

  const increaseCountHandler = () => setCount(count + 1)
  const decreaseCountHandler = () => setCount(count - 1)
  const resetCountHandler = () => setCount(0)
  const id = 'idFromURL'
  const { t } = useTranslation()
  const { userProfile, passwordRecovery, createNewPassword, forgotPassword, signUp, signIn } =
    t.navigation.menu
  const { data } = useGetMeQuery()

  return (
    <div style={{ padding: '35px' }}>
      <Typography as="h1" variant="large">
        {t.navigation.title}
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href={authNavigationUrls.signIn()}>
          <Typography variant="regular-link">{signIn}</Typography>
        </Link>
        <Link href={authNavigationUrls.signUp()}>
          <Typography variant="regular-link">{signUp}</Typography>
        </Link>
        <Link href={authNavigationUrls.forgotPassword()}>
          <Typography variant="regular-link">{forgotPassword}</Typography>
        </Link>
        <Link href={authNavigationUrls.createNewPassword()}>
          <Typography variant="regular-link">{createNewPassword}</Typography>
        </Link>
        <Link href={authNavigationUrls.passwordRecovery()}>
          <Typography variant="regular-link">{passwordRecovery}</Typography>
        </Link>
        <Link href={`/user-profile/${id}`}>
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
