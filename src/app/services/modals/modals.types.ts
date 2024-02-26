import { COMMON_MODE_STATE } from '@/app/constants/enums'
import { PostImageViewModel, PostViewModel } from '@/app/services/public-posts/public-posts.types'

export type ModalsStateModel = {
  createPostModal: CreatePostModal
  postCardModal: PostCardModal
}

export type CreatePostModal = {
  isOpen: boolean
}
export type PostCardModal = {
  isOpen?: boolean
  post: PostViewModel
  mode: PostCardViewModelMode
}

export type PostCardViewModelMode = (typeof COMMON_MODE_STATE)[keyof typeof COMMON_MODE_STATE]
