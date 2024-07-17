export type NotificationAsRead = {
  ids: number[]
}
export type GetNotificationsParams = Partial<{
  cursor: number
  pageSize: number
  sortBy: string
  sortDirection: 'asc' | 'desc'
}>
export type GetNotificationsResponse = {
  items: GetNotificationsResponseItems[]
  pageSize: number
  totalCount: number
}
export type GetNotificationsResponseItems = {
  id: number
  isRead: boolean
  message: string
  notifyAt: string
}
