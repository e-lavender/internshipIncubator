import { PropsWithChildren, useState } from 'react'

import { clsx } from 'clsx'

import s from './dropdown-menu-container.module.scss'

type DropdownMenuContainerProps = {
  className?: string
}

export const DropdownMenuContainer = ({
  children,
  className,
}: PropsWithChildren<DropdownMenuContainerProps>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
