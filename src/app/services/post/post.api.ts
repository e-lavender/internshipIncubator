import { commonApi } from '@/app/services/common/common.api'
import { CreatePostResponse, GetLastCreatedPostResponse } from '@/app/services/post/post.types'

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
    getPublicPosts: builder.query<GetLastCreatedPostResponse, void>({
      query: () => {
        return {
          method: 'GET',
          url: `/api/v1/public/posts`,
        }
      },
    }),
  }),
})

export const { useAddPostMutation, useGetPublicPostsQuery } = postApi
