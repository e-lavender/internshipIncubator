import { publicPostsApiUrls } from '@/app/constants/urls'
import { commonApi } from '@/app/services/common/common.api'
import {
  PublicPostsGetAll,
  PublicPostsGetAllArg,
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
      // transformResponse(
      //   baseQueryReturnValue: BaseQueryResult<BaseQuery>,
      //   meta: BaseQueryMeta<BaseQuery>,
      //   arg: QueryArg
      // ): Promise<ResultType> | ResultType {},
      // providesTags: ['Posts'],
    }),
  }),

  overrideExisting: false,
})

export const { useGetPublicPostsQuery } = publicPostsApi
