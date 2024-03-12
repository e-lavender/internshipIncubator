import { sessionApiUrls } from '@/app/constants/routes/sessions'
import { commonApi } from '@/app/services/common/common.api'
import { SessionsType } from '@/app/services/sessions/sessions.types'

const { sessionById, allSessions, terminateAll } = sessionApiUrls

export const sessionsApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    getSessions: builder.query<SessionsType, void>({
      query: () => {
        return {
          url: allSessions(),
        }
      },
    }),
    terminateAllSessions: builder.query<void, void>({
      query: () => {
        return {
          url: terminateAll(),
        }
      },
    }),
    terminateSessionById: builder.query<void, { deviceId: number }>({
      query: ({ deviceId }) => {
        return {
          url: sessionById(deviceId),
        }
      },
    }),
  }),

  overrideExisting: true,
})

export const { useGetSessionsQuery, useTerminateSessionByIdQuery, useTerminateAllSessionsQuery } =
  sessionsApi
