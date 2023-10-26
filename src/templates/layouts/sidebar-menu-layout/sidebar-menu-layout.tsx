import { PropsWithChildren } from 'react'

import { HeaderLayout } from '@/templates/layouts/header-layout'

import s from './sidebar-menu-layout.module.scss'
import { SidebarMenuWithItems } from '@/ui'

export const SidebarMenuLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <HeaderLayout />
      <div className={s.wrapper}>
        <SidebarMenuWithItems />
        <div className={s.content}>{children}</div>
      </div>
    </>
  )
}
