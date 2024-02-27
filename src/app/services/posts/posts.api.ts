import { postsApiUrls } from '@/app/constants/urls'
import { commonApi } from '@/app/services/common/common.api'
import { CreatePostRequest, PostImages, PostModel } from '@/app/services/posts/posts.types'

const { uploadImagePost, postById, createPost, postImageById } = postsApiUrls

export const postsApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    createPost: builder.mutation<PostModel, CreatePostRequest>({
      query: body => ({
        method: 'POST',
        url: createPost(),
        body,
      }),
      invalidatesTags: ['Posts', 'Profile'],
    }),
    uploadImagePost: builder.mutation<PostImages, FormData>({
      query: body => ({
        method: 'POST',
        url: uploadImagePost(),
        body,
      }),
    }),
    deleteImagePost: builder.mutation<void, { uploadId: string }>({
      query: args => ({
        method: 'DELETE',
        url: postImageById(args.uploadId),
      }),
      invalidatesTags: ['Images'],
    }),
    updatePostById: builder.mutation<void, { postId: number; description: string }>({
      query: args => ({
        method: 'PUT',
        url: postById(args.postId),
        body: { description: args.description },
      }),
      invalidatesTags: ['Posts'],
    }),
    deletePostById: builder.mutation<void, { postId: number }>({
      query: args => ({
        method: 'DELETE',
        url: postById(args.postId),
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
})

export const {
  useCreatePostMutation,
  useDeleteImagePostMutation,
  useDeletePostByIdMutation,
  useUploadImagePostMutation,
  useUpdatePostByIdMutation,
} = postsApi
