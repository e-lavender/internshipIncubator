import { IMAGE_SIZE } from '@/app/constants/enums'

export type PublicPostsGetAll = InfinityPaginatedRes & {
  items: PostViewModel[]
}

export type PublicPostsGetAllArg = {
  endCursorPostId?: number
  pageSize?: number
  sortBy?: string
  sortDirection?: 'asc' | 'desc'
}
export type PublicPostsGetPostsByUser = InfinityPaginatedRes & {
  items: PostViewModel[]
}
export type PublicPostsGetPostsByUserArg = {
  userId: number
  endCursorPostId?: number
  pageSize?: number
  sortBy?: string
  sortDirection?: 'asc' | 'desc'
}
export type PublicPostsGetPost = PostViewModel
export type PublicPostsGetPostArg = {
  postId?: number
}
export type InfinityPaginatedRes = {
  totalCount: number
  pageSize: number
  totalUsers: number
}

export type PostViewModel = {
  id: number
  userName: string
  description: string
  location: string
  images: PostImageViewModel[]
  createdAt: string
  updatedAt: string
  ownerId: number
  avatarOwner?: string
  owner: Owner
}
export type PostImageViewModel = {
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
  imageSize: keyof typeof IMAGE_SIZE
  filter?: string
  alt?: string
}

export type Owner = {
  firstName: string
  lastName: string
}
