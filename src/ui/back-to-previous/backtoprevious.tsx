import Link from 'next/link'

import { BackToPreviousIcon } from '@/app/assets/svg'
import s from '@/ui/back-to-previous/backtoprevious.module.scss'

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
