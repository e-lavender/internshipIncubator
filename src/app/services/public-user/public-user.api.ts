import { publicUserApiUrls } from '@/app/constants/urls'
import { commonApi } from '@/app/services/common/common.api'
import { PublicProfileRequest } from '@/app/services/public-user/public-user.types'

const { getUsersCount } = publicUserApiUrls

export const publicProfileApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    getPublicProfile: builder.query<PublicProfileRequest, { profileId: number }>({
      query: ({ profileId }) => ({
        url: `public-user/profile/${profileId}`,
        method: 'GET',
      }),
    }),
    getUsersCount: builder.query({
      query: queryArg => ({
        url: getUsersCount(),
      }),
    }),
  }),
})

export const {
  useGetPublicProfileQuery,
  useGetUsersCountQuery,
  util: { getRunningQueriesThunk },
} = publicProfileApi

export const { getPublicProfile } = publicProfileApi.endpoints
