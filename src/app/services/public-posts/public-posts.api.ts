import { publicPostsApiUrls } from '@/app/constants/urls'
import { commonApi } from '@/app/services/common/common.api'
import {
  PublicPostsGetAll,
  PublicPostsGetAllArg,
  PublicPostsGetPost,
  PublicPostsGetPostArg,
  PublicPostsGetPostsByUser,
  PublicPostsGetPostsByUserArg,
} from '@/app/services/public-posts/public-posts.types'

const { getPublicPosts, getPublicPostsByUserId, getPublicPostByUserId } = publicPostsApiUrls

export const publicPostsApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    getPublicPosts: builder.query<PublicPostsGetAll, PublicPostsGetAllArg>({
      query: queryArg => ({
        url: getPublicPosts(queryArg.endCursorPostId),
        params: {
          pageSize: queryArg.pageSize,
          sortBy: queryArg.sortBy,
          sortDirection: queryArg.sortDirection,
        },
      }),
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
    }),
  }),
  overrideExisting: false,
})

export const { useGetPublicPostsQuery, useGetPublicPostsByUserQuery, useGetPublicPostByIdQuery } =
  publicPostsApi

export const { getPublicPostsByUser, getPublicPostById } = publicPostsApi.endpoints
