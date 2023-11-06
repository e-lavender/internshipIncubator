import { PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import s from './sidebar-menu-layout.module.scss'

import { useMatchMedia } from '@/app'
import { SidebarMenuWithItems, MobileSidebarMenuWithItems } from '@/modules'
import { HeaderLayout } from '@/templates/layouts/header-layout'

export const SidebarMenuLayout = ({ children }: PropsWithChildren) => {
  const { isMobile } = useMatchMedia()

  const styles = clsx(!isMobile && s.wrapper)

  return (
    <>
      <HeaderLayout />
      <div className={styles}>
        {isMobile ? <MobileSidebarMenuWithItems /> : <SidebarMenuWithItems />}
        <div className={s.content}>{children}</div>
      </div>
    </>
  )
}
