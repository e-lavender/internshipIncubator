import { PropsWithChildren } from 'react'

import s from './side-menu.module.scss'

export const SideMenu = ({ children }: PropsWithChildren) => {
  return (
    <aside className={s.container}>
      <nav className={s.menu}>{children}</nav>
    </aside>
  )
}
