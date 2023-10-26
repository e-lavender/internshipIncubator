import React, { PropsWithChildren } from 'react'

import Link from 'next/link'

import s from './header.module.scss'

import { authNavigationUrls } from '@/app'
import { notifications } from '@/app/data/notifications-bell/notifications-bell'
import { LanguageSelect, NotificationsBell } from '@/components'
import { Button, Typography } from '@/ui'

type HeaderProps = {
  isAuthed: boolean
}
export function Header({ children, isAuthed = false }: PropsWithChildren<HeaderProps>) {
  return (
    <header className={s.wrapper}>
      <div className={s.container}>
        <Link href="/">
          <Typography as="span" variant="large">
            Inctagram
          </Typography>
        </Link>
        <div className={s.list_wrapper}>
          {children}
          {isAuthed && <NotificationsBell notifications={notifications} />}
          <LanguageSelect />
          {!isAuthed && (
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
      </div>
    </header>
  )
}
