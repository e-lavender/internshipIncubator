import { PropsWithChildren } from 'react'
import * as SideBarMenu from '@radix-ui/react-navigation-menu'

import s from './sidebar-menu.module.scss'

export const SidebarMenu = ({ children }: PropsWithChildren) => {
  return (
    <SideBarMenu.Root className={s.container}>
      <SideBarMenu.List className={s.menu}>{children}</SideBarMenu.List>
    </SideBarMenu.Root>
    // <aside >
    //   <nav>
    //     <ul ></ul>
    //   </nav>
    // </aside>
  )
}
