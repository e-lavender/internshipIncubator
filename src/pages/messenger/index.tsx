import { useGetNotificationsByProfileQuery } from '@/app/services/notifications/notifications.api'

const Messenger = () => {
  const { data } = useGetNotificationsByProfileQuery({}, { refetchOnMountOrArgChange: true })

  return <h1 style={{ marginTop: '10rem', textAlign: 'center' }}>Messenger: ${data?.totalCount}</h1>
}

export default Messenger
