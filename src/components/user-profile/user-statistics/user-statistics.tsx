import { clsx } from 'clsx'

import { MOCKED_DATA_STATISTICS } from './data'
import s from './user-statistics.module.scss'

import { useMatchMedia } from '@/app'
import { UserStatisticsItem } from '@/components'

type FetchedData = {
  category?: string
  qty?: number
}

type UserStatisticsProps = {
  data?: Array<FetchedData>
}

export const UserStatistics = ({ data = [] }: UserStatisticsProps) => {
  const { isMobile } = useMatchMedia()

  const styles = clsx(s.container, isMobile && s.mobile)

  return (
    <div className={styles}>
      {MOCKED_DATA_STATISTICS.map(({ category, qty }) => (
        <UserStatisticsItem key={category} category={category} qty={qty} />
      ))}
    </div>
  )
}
