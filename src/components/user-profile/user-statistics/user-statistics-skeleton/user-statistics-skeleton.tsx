import { MOCKED_DATA_STATISTICS } from '../data'

import s from './user-statistics-skeleton.module.scss'

import { UserStatisticsItem } from '@/components'
import { SkeletonCard } from '@/ui'

export const UserStatisticsSkeleton = () => {
  return (
    <div className={s.container}>
      {MOCKED_DATA_STATISTICS.map((_, index) => (
        <SkeletonCard key={`category-${index}`}>
          <UserStatisticsItem category={'category'} qty={1} />
        </SkeletonCard>
      ))}
    </div>
  )
}
