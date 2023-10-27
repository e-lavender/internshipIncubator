import { PropsWithChildren } from 'react'

import * as SideBarMenu from '@radix-ui/react-navigation-menu'
import { clsx } from 'clsx'

import s from './sidebar-menu.module.scss'

type SidebarMenuProps = {
  className?: string
}
export const SidebarMenu = ({ children, className }: PropsWithChildren<SidebarMenuProps>) => {
  const styles = clsx(className ? className : s.container)

  return (
    <SideBarMenu.Root className={styles}>
      <SideBarMenu.List className={s.menu}>{children}</SideBarMenu.List>
    </SideBarMenu.Root>
  )
}
