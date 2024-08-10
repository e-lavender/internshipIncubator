import { commonApi } from '@/app/services/common/common.api'
import {
  GetUsersParameters,
  GetUsersResponse,
} from '@/app/services/users-following-and-followers/users-following-and-followers.api.types'

export const usersFollowingAndFollowersApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query<GetUsersResponse, GetUsersParameters>({
      query: () => {
        return {
          method: 'GET',
          url: '/api/v1/users/profile',
        }
      },
    }),

    removeFollowerById: builder.mutation<void, { userId: number }>({
      query: args => {
        return {
          method: 'DELETE',
          url: `/api/v1/users/follower/${args.userId}`,
        }
      },
    }),
  }),
  overrideExisting: true,
})

export const {} = usersFollowingAndFollowersApi
export const {} = usersFollowingAndFollowersApi.endpoints
