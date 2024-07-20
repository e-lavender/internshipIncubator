import { commonApi } from '@/app/services/common/common.api'
import {
  GetNotificationsParams,
  GetNotificationsResponse,
  NotificationAsRead,
} from '@/app/services/notifications/notifications.types'

export const notificationsApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    deleteNotificationById: builder.mutation<void, { id: number }>({
      query: id => ({
        method: 'DELETE',
        url: `/api/v1/notifications/${id}`,
      }),
    }),
    getNotificationsByProfile: builder.query<GetNotificationsResponse, GetNotificationsParams>({
      providesTags: ['Notifications'],
      query: ({ cursor, ...params }) => ({
        method: 'GET',
        params,
        url: `/api/v1/notifications/${cursor}`,
      }),
    }),
    notificationsMarkAsRead: builder.mutation<void, NotificationAsRead>({
      invalidatesTags: ['Notifications'],
      query: body => ({
        body,
        method: 'PUT',
        url: '/api/v1/notifications/mark-as-read',
      }),
    }),
  }),
})

export const {
  useDeleteNotificationByIdMutation,
  useGetNotificationsByProfileQuery,
  useLazyGetNotificationsByProfileQuery,
  useNotificationsMarkAsReadMutation,
} = notificationsApi
