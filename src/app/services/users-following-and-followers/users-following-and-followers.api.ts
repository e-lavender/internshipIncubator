import { commonApi } from '@/app/services/common/common.api'
import {
  GetUsersParameters,
  GetUsersResponse,
} from '@/app/services/users-following-and-followers/users-following-and-followers.api.types'

export const usersFollowingAndFollowersApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    getUserProfileByName: builder.query<GetUsersResponse, { userName: string }>({
      query: arg => {
        return {
          method: 'GET',
          url: `/api/v1/users/${arg.userName}`,
        }
      },
    }),

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
    updateSubscriptionToUser: builder.mutation<void, { selectedUserId: number }>({
      query: args => {
        return {
          body: { selectedUserId: args.selectedUserId },
          method: 'POST',
          url: `/api/v1/users/following`,
        }
      },
    }),
  }),
  overrideExisting: true,
})

export const {} = usersFollowingAndFollowersApi
export const {} = usersFollowingAndFollowersApi.endpoints
