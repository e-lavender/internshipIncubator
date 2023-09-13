import { useState } from 'react'

import Link from 'next/link'

import { useTranslation } from '@/app/hooks'
import { Text } from '@/ui/typography/text'
import { Title } from '@/ui/typography/title'

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
      <Title variant="large">{t.navigation.title}</Title>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href={'/sign-in'}>
          <Text variant="regular-link">{signIn}</Text>
        </Link>
        <Link href={'/sign-up'}>
          <Text variant="regular-link">{signUp}</Text>
        </Link>
        <Link href={'/forgot-password'}>
          <Text variant="regular-link">{forgotPassword}</Text>
        </Link>
        <Link href={'/create-new-password'}>
          <Text variant="regular-link">{createNewPassword}</Text>
        </Link>
        <Link href={'/password-recovery'}>
          <Text variant="regular-link">{passwordRecovery}</Text>
        </Link>
        <Link href={`/user-profile/${id}`}>
          <Text variant="regular-link">{userProfile}</Text>
        </Link>
        <Title as="h1" style={{ color: 'red' }}>
          Some text test
        </Title>
      </div>
      <div>
        <Title as="h1">{t.characterPage.getCount(count)}</Title>
        <button onClick={decreaseCountHandler}>-</button>
        <button onClick={increaseCountHandler}>+</button>
        <button onClick={resetCountHandler}>0</button>
      </div>
    </div>
  )
}
