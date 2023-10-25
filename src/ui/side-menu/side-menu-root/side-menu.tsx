import { PropsWithChildren } from 'react'

import s from './side-menu.module.scss'

export const SideMenu = ({ children }: PropsWithChildren) => {
  return (
    <aside className={s.container}>
      <nav>
        <ul className={s.menu}>{children}</ul>
      </nav>
    </aside>
  )
}
