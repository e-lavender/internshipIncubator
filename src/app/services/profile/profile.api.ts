import { profileApiUrls } from '@/app/constants'
import { publicPostsApiUrls } from '@/app/constants/urls'
import { commonApi } from '@/app/services/common/common.api'
import {
  PublicUserModel,
  UpdateUserProfile,
  UploadAvatarResponse,
  UserProfileModel,
} from '@/app/services/profile/profile.api.types'
import {
  PublicPostsGetPost,
  PublicPostsGetPostArg,
  PublicPostsGetPostsByUser,
  PublicPostsGetPostsByUserArg,
} from '@/app/services/public-posts/public-posts.types'

const { usersProfile, usersAvatar, usersProfileById, publicUserById } = profileApiUrls
const { getPublicPosts, getPublicPostsByUserId, getPublicPostByUserId } = publicPostsApiUrls

export const profileApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query<UserProfileModel, void>({
      query: () => {
        return {
          method: 'GET',
          url: usersProfile(),
        }
      },
      providesTags: ['Profile'],
    }),

    updateUserProfile: builder.mutation<void, UpdateUserProfile>({
      query: args => {
        return {
          method: 'PUT',
          url: usersProfile(),
          body: args,
        }
      },
      invalidatesTags: ['Profile'],
    }),

    deleteUserProfile: builder.mutation<void, { id?: number }>({
      query: args => {
        return {
          method: 'DELETE',
          url: usersProfileById(args.id),
          body: args,
        }
      },
      invalidatesTags: ['Profile'],
    }),

    uploadAvatar: builder.mutation<void, FormData>({
      query: form => {
        return {
          method: 'POST',
          url: usersAvatar(),
          body: form,
        }
      },
      invalidatesTags: ['Profile'],
    }),

    deleteAvatar: builder.mutation<void, void>({
      query: () => {
        return {
          method: 'DELETE',
          url: usersAvatar(),
        }
      },
      invalidatesTags: ['Profile'],
    }),
    getPublicUserProfileById: builder.query<PublicUserModel, { profileId: number }>({
      query: args => {
        return {
          method: 'GET',
          url: publicUserById(args.profileId),
        }
      },
    }),
    getPublicPostsByUser: builder.query<PublicPostsGetPostsByUser, PublicPostsGetPostsByUserArg>({
      query: queryArg => ({
        url: getPublicPostsByUserId({
          endCursorPostId: queryArg.endCursorPostId,
          userId: queryArg.userId,
        }),
        params: {
          pageSize: queryArg.pageSize,
          sortBy: queryArg.sortBy,
          sortDirection: queryArg.sortDirection,
        },
      }),
      providesTags: ['Posts'],
    }),
    getPublicPostById: builder.query<PublicPostsGetPost, PublicPostsGetPostArg>({
      query: queryArg => ({
        url: getPublicPostByUserId(queryArg.postId),
      }),
      providesTags: ['Posts'],
    }),
  }),
})

export const {
  useGetProfileQuery,
  useUpdateUserProfileMutation,
  /**
   * Uploads a square image for the profile avatar(.png or .jpg/.jpeg file, max size: 10Mb)
   */
  useUploadAvatarMutation,
  useDeleteAvatarMutation,
  useGetPublicUserProfileByIdQuery,
  useGetPublicPostsByUserQuery,
  useGetPublicPostByIdQuery,
  util: { getRunningQueriesThunk },
} = profileApi

export const { getPublicUserProfileById, getPublicPostsByUser, getPublicPostById } =
  profileApi.endpoints
