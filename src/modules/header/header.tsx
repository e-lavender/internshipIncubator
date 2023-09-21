import React, { ReactNode } from 'react'

import Link from 'next/link'

import s from './header.module.scss'

import { LanguageSelect } from '@/components'
import { NotificationsBell } from '@/components/notifications-bell'
import { Typography } from '@/ui/typography/typography'

type HeaderProps = {
  children?: ReactNode
}
export function Header({ children }: HeaderProps) {
  return (
    <header className={s.container}>
      <Link href="/">
        <Typography as="span" variant="large">
          Inctagram
        </Typography>
      </Link>
      <div className={s.list_wrapper}>
        {children}
        <NotificationsBell />
        <LanguageSelect />
      </div>
    </header>
  )
}
