import { PropsWithChildren } from 'react'

import { Skeleton } from '@/ui/skeleton/skeleton'

type SkeletonCardProps = {
  count?: number
  circle?: boolean
  className?: string
}
export const SkeletonCard = ({
  count = 1,
  circle = false,
  className,
  children,
}: PropsWithChildren<SkeletonCardProps>) => {
  const amount: Array<number> = Array(count).fill(1)

  return (
    <>
      {amount?.map((_, index) => (
        <Skeleton key={index} circle={circle} className={className}>
          {children}
        </Skeleton>
      ))}
    </>
  )
}
