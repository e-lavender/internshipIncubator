import { commonApi } from '@/app/services/common/common.api'
import {
    GetLastCreatedPostsRequest,
    GetLastCreatedPostsResponse, GetUserPostsDataRequest,
    PostProfile, Posts, PublicProfileRequest
} from "@/app/services/public/public.api.types";



export const publicPostApi = commonApi.injectEndpoints({
    endpoints: build => {
        return {
            getLastCreatedPosts: build.query<GetLastCreatedPostsResponse, GetLastCreatedPostsRequest>({
                query: ({ idLastUploadedPost, pageSize, sortBy, sortDirection }) => ({
                    url: `public-posts/all/${idLastUploadedPost ? idLastUploadedPost : ''}`,
                    method: 'GET',
                    params: { pageSize, sortBy, sortDirection },
                }),
            }),
            getPublicPost: build.query<PostProfile, { postId: number }>({
                query: ({ postId }) => ({
                    url: `public-posts/${postId}`,
                    method: 'GET',
                }),
            }),

            getUserPostsData: build.query<Posts, GetUserPostsDataRequest>({
                query: ({ userId, isMerge, endCursorPostId, pageSize, sortBy, sortDirection }) => {
                    const lastItem = endCursorPostId ? endCursorPostId : ''

                    return {
                        url: `public-posts/user/${userId}/${lastItem}`,
                        method: 'GET',
                        params: { pageSize },
                    }
                },
            }),

            getProfileData: build.query<PublicProfileRequest, { profileId: number }>({
                query: ({ profileId }) => ({
                    url: `public-user/profile/${profileId}`,
                    method: 'GET',
                }),
            }),
        }
    },
})

export const {
    util: { getRunningQueriesThunk },
} = publicPostApi

export const { getPublicPost, getProfileData, getUserPostsData } = publicPostApi.endpoints
export const {
    useGetPublicPostQuery,
    useLazyGetPublicPostQuery,
    useGetUserPostsDataQuery,
    useGetProfileDataQuery,
} = publicPostApi