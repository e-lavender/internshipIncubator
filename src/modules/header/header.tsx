import React, { PropsWithChildren, useEffect, useState } from 'react'

import { useMatchMedia } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import {
  useGetNotificationsByProfileQuery,
  useNotificationsMarkAsReadMutation,
} from '@/app/services/notifications/notifications.api'
import { getFromSessionStorage } from '@/app/utils'
import { LanguageSelect, NotificationsBell } from '@/components'
import { DropdownMenuWithItems } from '@/modules'
import { Button, Typography } from '@flyingtornado06/ui-kit'
import Link from 'next/link'
import { io } from 'socket.io-client'

import s from './header.module.scss'

type HeaderProps = {
  isAuthed: boolean
}

export function Header({ children, isAuthed = false }: PropsWithChildren<HeaderProps>) {
  const { isDesktop, isMobile } = useMatchMedia()
  const showAuthButtons = !isAuthed && isDesktop
  const [cursor, setCursor] = useState<number>()
  const { data: me } = useGetMeQuery()
  const { data } = useGetNotificationsByProfileQuery(
    { cursor, pageSize: 30, sortBy: 'isRead', sortDirection: 'asc' },
    { skip: !me }
  )
  const [markAsRead] = useNotificationsMarkAsReadMutation()

  const markAsReadHandler = (id: number) => {
    markAsRead({ ids: [id] })
  }

  useEffect(() => {
    const token = getFromSessionStorage('accessToken', null)

    if (!token) {
      return
    }
    const queryParams = {
      query: {
        accessToken: token,
      },
    }

    const socket = io('https://inctagram.work', queryParams)

    socket.on('connect', () => {
      console.log('Connected to WebSocket server')
    })
    // socket.emit(WS_EVENT_PATH.RECEIVE_MESSAGE, { message: 'Hello world', receiverId: 1 })
    //
    // socket.on(WS_EVENT_PATH.RECEIVE_MESSAGE, messages => {
    //   console.log(messages)
    // })
    //
    // socket.on(WS_EVENT_PATH.MESSAGE_DELETED, messages => {
    //   console.log('messages sent', messages)
    // })

    socket.on('notifications', messages => {
      setCursor(messages.id)
      console.log('messages', messages)
    })

    return () => {
      socket.disconnect()
    }
  }, [me])

  return (
    <div className={s.wrapper}>
      <header className={s.container}>
        <Link href={authNavigationUrls.home()}>
          <Typography as={'span'} variant={'large'}>
            Проект на последнем издыхании
          </Typography>
        </Link>

        <div className={s.list_wrapper}>
          {children}
          {isAuthed && !isMobile && (
            <NotificationsBell
              markAsReadHandler={markAsReadHandler}
              notifications={data?.items}
              total={
                data?.items.filter(item => {
                  return !item.isRead
                }).length
              }
            />
          )}

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
