import { clsx } from 'clsx'

import s from './bell.module.scss'

import { BellIcon } from '@/app/assets/svg'

type BellProps = {
  messageСount?: number
  onClick?: () => void
  className?: string
}

export const Bell = ({ messageСount = 3, onClick, className }: BellProps): JSX.Element => {
  const classNames = {
    root: clsx(s.root, className),
    bell: clsx(s.bell),
    label: clsx(s.label),
  }

  return (
    <div onClick={onClick} className={classNames.root}>
      <BellIcon className={classNames.bell} />
      {messageСount && <span className={classNames.label}>{messageСount}</span>}
    </div>
  )
}
