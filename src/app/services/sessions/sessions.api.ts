import { sessionApiUrls } from '@/app/constants/routes/sessions'
import { commonApi } from '@/app/services/common/common.api'
import { SessionsType } from '@/app/services/sessions/sessions.types'

const { sessionById, allSessions, terminateAll } = sessionApiUrls

export const sessionsApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    getSessions: builder.query<SessionsType, void>({
      query: () => {
        return {
          method: 'GET',
          url: allSessions(),
        }
      },
      providesTags: ['Sessions'],
    }),
    terminateAllSessions: builder.mutation<void, void>({
      query: () => {
        return {
          method: 'DELETE',
          url: terminateAll(),
        }
      },
      invalidatesTags: ['ME', 'Sessions'],
    }),
    terminateSessionById: builder.mutation<void, { deviceId: number }>({
      query: ({ deviceId }) => {
        return {
          method: 'DELETE',
          url: sessionById(deviceId),
        }
      },
      invalidatesTags: ['ME', 'Sessions'],
    }),
  }),

  overrideExisting: true,
})

export const {
  useGetSessionsQuery,
  useTerminateSessionByIdMutation,
  useTerminateAllSessionsMutation,
} = sessionsApi
