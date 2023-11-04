import { PropsWithChildren, useEffect, useState } from 'react'

import { clsx } from 'clsx'
import { useRouter } from 'next/router'

import s from './dropdown-menu-container.module.scss'

export const DropdownMenuContainer = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { pathname } = useRouter()

  useEffect(() => {
    return () => setIsOpen(false)
  }, [pathname])

  const clickHandler = () => {
    setIsOpen(prev => !prev)
  }

  const styles = {
    dot: clsx(s.dot, isOpen && s.active),
    menu: clsx(s.list, isOpen && s.fade),
    list: clsx(isOpen && s.active),
  }

  return (
    <nav className={s.navigation}>
      <div className={s.dots} onClick={clickHandler}>
        <p className={styles.dot}></p>
        <p className={styles.dot}></p>
        <p className={styles.dot}></p>
      </div>
      <div className={styles.menu}>
        <ul className={styles.list}>{children}</ul>
      </div>
    </nav>
  )
}
