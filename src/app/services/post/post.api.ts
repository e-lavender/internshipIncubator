import { commonApi } from '@/app/services/common/common.api'
import { CreatePostResponse } from '@/app/services/post/post.types'

export const postApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    addPost: builder.mutation<CreatePostResponse, FormData>({
      query: body => ({
        method: 'POST',
        url: `/api/v1/post`,
        body,
      }),
      invalidatesTags: [/*'Posts',*/ 'Profile'],
    }),
  }),
})

export const { useAddPostMutation } = postApi
