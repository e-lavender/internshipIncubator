import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import s from './skeleton.module.scss'

type SkeletonType = { circle?: boolean; className?: string } & ComponentPropsWithoutRef<'div'>

export const Skeleton = ({
  children,
  circle = false,
  className,
  ...props
}: PropsWithChildren<SkeletonType>) => {
  const styles = clsx(s.root, circle && s.circle, className)

  return (
    <div className={styles} {...props}>
      <div className={s.content}>{children}</div>
    </div>
  )
}
