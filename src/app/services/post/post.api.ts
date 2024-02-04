import { commonApi } from '@/app/services/common/common.api'
import { CreatePostResponse, GetPublicPostsResponse } from '@/app/services/post/post.types'

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
    getPublicPosts: builder.query<GetPublicPostsResponse, void>({
      query: () => {
        return {
          method: 'GET',
          url: `/api/v1/public/posts`,
        }
      },
    }),
  }),
})

export const {
  useAddPostMutation,
  useGetPublicPostsQuery,
  util: { getRunningQueriesThunk },
} = postApi

export const { getPublicPosts } = postApi.endpoints
