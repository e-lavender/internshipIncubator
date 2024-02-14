import { profileApiUrls } from '@/app/constants'
import { commonApi } from '@/app/services/common/common.api'
import {
  PublicUserModel,
  UpdateUserProfile,
  UploadAvatarResponse,
  UserProfileModel,
} from '@/app/services/profile/profile.api.types'

const { usersProfile, usersAvatar, usersProfileById, publicUserById } = profileApiUrls

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
  util: { getRunningQueriesThunk },
} = profileApi

export const { getPublicUserProfileById } = profileApi.endpoints
