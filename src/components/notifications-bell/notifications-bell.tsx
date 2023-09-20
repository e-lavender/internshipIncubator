import { Bell } from '../../ui/bell'

export const NotificationsBell = ({ messageСount = 3, onClick, className }: any) => {
  return (
    <>
      <Bell className={className} />
    </>
  )
}
