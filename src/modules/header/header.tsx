import React, { PropsWithChildren, useEffect } from 'react'

import { useMatchMedia } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { WS_EVENT_PATH } from '@/app/constants/common'
import { notifications } from '@/app/data/notifications-bell/notifications-bell'
import { getFromSessionStorage } from '@/app/utils'
import { LanguageSelect, NotificationsBell } from '@/components'
import { DropdownMenuWithItems } from '@/modules'
import { Button, Typography } from '@flyingtornado06/ui-kit'
import Link from 'next/link'
import io from 'socket.io-client'

import s from './header.module.scss'

type HeaderProps = {
  isAuthed: boolean
}

export function Header({ children, isAuthed = false }: PropsWithChildren<HeaderProps>) {
  const { isDesktop, isMobile } = useMatchMedia()
  const showAuthButtons = !isAuthed && isDesktop

  useEffect(() => {
    const token = getFromSessionStorage('accessToken', null)
    const queryParams = {
      query: {
        accessToken: token,
      },
    }
    const socket = io('https://inctagram.work', queryParams)

    socket.on('connect', () => {
      console.log('Connected to WebSocket server')
    })
    socket.on(WS_EVENT_PATH.RECEIVE_MESSAGE, messages => {
      console.log(messages)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <div className={s.wrapper}>
      <header className={s.container}>
        <Link href={'/'}>
          <Typography as={'span'} variant={'large'}>
            Проект на последнем издыхании
          </Typography>
        </Link>

        <div className={s.list_wrapper}>
          {children}
          {isAuthed && !isMobile && <NotificationsBell notifications={notifications} />}

          <LanguageSelect />

          {showAuthButtons && (
            <>
              <Button as={Link} href={authNavigationUrls.signIn()} variant={'link'}>
                Log In
              </Button>
              <Button as={Link} href={authNavigationUrls.signUp()} variant={'primary'}>
                Sign Up
              </Button>
            </>
          )}

          {isMobile && <DropdownMenuWithItems />}
        </div>
      </header>
    </div>
  )
}
