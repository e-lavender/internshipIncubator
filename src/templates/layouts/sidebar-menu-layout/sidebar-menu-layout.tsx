import { PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import s from './sidebar-menu-layout.module.scss'

import { useMatchMedia } from '@/app'
import { SidebarMenuWithItems, MobileSidebarMenuWithItems } from '@/modules'
import { HeaderLayout } from '@/templates/layouts/header-layout'

export const SidebarMenuLayout = ({ children }: PropsWithChildren) => {
  const { isMobile } = useMatchMedia()

  const styles = {
    root: clsx(s.container),
    wrapper: clsx(!isMobile && s.wrapper),
  }

  return (
    <>
      <HeaderLayout />
      <div className={styles.root}>
        {isMobile ? <MobileSidebarMenuWithItems /> : <SidebarMenuWithItems />}
        <div className={styles.wrapper}>{children}</div>
      </div>
    </>
  )
}
