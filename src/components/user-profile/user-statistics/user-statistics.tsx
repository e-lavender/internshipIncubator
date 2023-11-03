import { MOCKED_DATA_STATISTICS } from './data'
import { UserStatisticsItem } from './user-statistics-item'
import s from './user-statistics.module.scss'

type FetchedData = {
  category?: string
  qty?: number
}

type UserStatisticsProps = {
  data?: Array<FetchedData>
}

export const UserStatistics = ({ data = [] }: UserStatisticsProps) => {
  return (
    <div className={s.container}>
      {MOCKED_DATA_STATISTICS.map(({ category, qty }) => (
        <UserStatisticsItem key={category} category={category} qty={qty} />
      ))}
    </div>
  )
}
