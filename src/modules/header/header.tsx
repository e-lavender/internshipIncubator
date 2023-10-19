import React, { ReactNode } from 'react'

import Link from 'next/link'

import s from './header.module.scss'

import { authNavigationUrls, useMatchMedia } from '@/app'
import { notifications } from '@/app/data/notifications-bell/notifications-bell'
import { LanguageSelect, NotificationsBell } from '@/components'
import { Button, Typography } from '@/ui'

type HeaderProps = {
  children?: ReactNode
  isAuthed: boolean
}
export function Header({ children, isAuthed = false }: HeaderProps) {
  const { isMobile, isTablet } = useMatchMedia()
  const showAuthButtons = !isAuthed && !isMobile && !isTablet

  return (
    <header className={s.container}>
      <Link href="/">
        <Typography as="span" variant="large">
          Inctagram
        </Typography>
      </Link>
      <div className={s.list_wrapper}>
        {children}
        {isAuthed && <NotificationsBell notifications={notifications} />}
        <LanguageSelect />
        {showAuthButtons && (
          <>
            <Button as={Link} variant={'link'} href={authNavigationUrls.signIn()}>
              Log In
            </Button>
            <Button as={Link} variant={'primary'} href={authNavigationUrls.signUp()}>
              Sign Up
            </Button>
          </>
        )}
      </div>
    </header>
  )
}
