import React from 'react'

import Link from 'next/link'
import Select from 'react-select'

import { authNavigationUrls, useTranslation } from '@/app'
import { NextPageWithLayout } from '@/pages/_app'
import { CustomSelect, Typography } from '@/ui'
import { COUNTRIES_DATA } from '@/ui/custom-select/location-data'

const Home: NextPageWithLayout = () => {
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
      </div>

      <Link href={`/user-profile/${id}`}>
        <Typography variant="regular-link">{userProfile}</Typography>
      </Link>

      <CustomSelect options={COUNTRIES_DATA} />
      <Select
        isClearable={true}
        options={COUNTRIES_DATA}
        defaultValue={{ value: 'Armenia', label: 'Armenia' }}
      />
    </div>
  )
}

export default Home
