import Link from 'next/link'

import s from '@/ui/BackToPrevios/backtoprevios.module.scss'
import { BackToPreviousIcon } from '@/ui/BackToPrevios/backtopreviousicon'

type PropsType = {
  title: string
  href: string
}
export const BackToPrevious = ({ title, href }: PropsType) => {
  return (
    <div className={s.wrapper}>
      <Link href={href}>
        <BackToPreviousIcon />
        <span>{title}</span>
      </Link>
    </div>
  )
}
