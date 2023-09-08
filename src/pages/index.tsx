import { useState } from 'react'

import Link from 'next/link'

import { useTranslation } from '@/app/hooks'

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
      <h1>{t.navigation.title}</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href={'/sign-in'}>{signIn}</Link>
        <Link href={'/sign-up'}>{signUp}</Link>
        <Link href={'/forgot-password'}>{forgotPassword}</Link>
        <Link href={'/create-new-password'}>{createNewPassword}</Link>
        <Link href={'/password-recovery'}>{passwordRecovery}</Link>
        <Link href={`/user-profile/${id}`}>{userProfile}</Link>
      </div>
      <div>
        <p>{t.characterPage.getCount(count)}</p>
        <button onClick={decreaseCountHandler}>-</button>
        <button onClick={increaseCountHandler}>+</button>
        <button onClick={resetCountHandler}>0</button>
      </div>
    </div>
  )
}
