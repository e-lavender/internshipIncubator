import { PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import s from './sidebar-menu-layout.module.scss'

import { useMatchMedia } from '@/app'
import { SidebarMenuWithItems, MobileSidebarMenuWithItems } from '@/modules'
import { HeaderLayout } from '@/templates/layouts'

type SidebarMenuLayoutProps = {
  isAuthed?: boolean
}

export const SidebarMenuLayout = ({
  children,
  isAuthed = false,
}: PropsWithChildren<SidebarMenuLayoutProps>) => {
  const { isMobile } = useMatchMedia()

  const SidebarVersion = isMobile ? <MobileSidebarMenuWithItems /> : <SidebarMenuWithItems />

  const styles = {
    root: clsx(s.container, isMobile && s.mobile),
  }

  return (
    <>
      <HeaderLayout />

      <div className={styles.root}>
        {isAuthed && SidebarVersion}

        <div className={s.wrapper}>{children}</div>
      </div>
    </>
  )
}
