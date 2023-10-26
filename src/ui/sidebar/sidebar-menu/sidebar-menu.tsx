import { PropsWithChildren } from 'react'
import * as SideBarMenu from '@radix-ui/react-navigation-menu'

import s from './sidebar-menu.module.scss'
import { clsx } from 'clsx'

type SidebarMenuProps = {
  className?: string
}
export const SidebarMenu = ({ children, className }: PropsWithChildren<SidebarMenuProps>) => {
  const styles = clsx(s.container, className && className)

  return (
    <SideBarMenu.Root className={styles}>
      <SideBarMenu.List className={s.menu}>{children}</SideBarMenu.List>
    </SideBarMenu.Root>
    // <aside >
    //   <nav>
    //     <ul ></ul>
    //   </nav>
    // </aside>
  )
}
