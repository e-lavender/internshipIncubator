import React, { ReactNode } from 'react'

import Link from 'next/link'

import s from './header.module.scss'

import { authNavigationUrls } from '@/app/constants/routes/auth'
import { notifications } from '@/app/data/notifications-bell/notifications-bell'
import { LanguageSelect, NotificationsBell } from '@/components'
import { Button, Typography } from '@/ui'

type HeaderProps = {
  children?: ReactNode
  isAuthed?: boolean
}
export function Header({ children, isAuthed }: HeaderProps) {
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
        {!isAuthed && (
          <>
            <Link href={authNavigationUrls.signIn()}>
              <Button variant={'link'}>Log In</Button>
            </Link>
            <Link href={authNavigationUrls.signUp()}>
              <Button variant={'primary'}>Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  )
}
