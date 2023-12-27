import { commonApi } from '@/app/services/common/common.api'
import {
  UpdateUserProfile,
  UploadAvatarResponse,
  UserProfileModel,
} from '@/app/services/profile/profile.api.types'

export const profileApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query<UserProfileModel, void>({
      query: () => {
        return {
          method: 'GET',
          url: '/api/v1/profile',
        }
      },
      providesTags: ['Profile'],
    }),
    updateUserProfile: builder.mutation<UserProfileModel, UpdateUserProfile>({
      query: args => {
        return {
          method: 'PUT',
          url: '/api/v1/profile',
          body: args,
        }
      },
      invalidatesTags: ['Profile'],
    }),

    uploadAvatar: builder.mutation<UploadAvatarResponse, FormData>({
      query: form => {
        return {
          method: 'POST',
          url: '/api/v1/users/profile/avatar',
          body: form,
          formData: true,
        }
      },
      invalidatesTags: ['Profile'],
    }),
    deleteAvatar: builder.mutation<void, void>({
      query: () => {
        return {
          method: 'DELETE',
          url: '/api/v1/users/profile/avatar',
        }
      },
      invalidatesTags: ['Profile'],
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
} = profileApi
