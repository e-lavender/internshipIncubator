export type PublicPostsGetAll = InfinityPaginatedRes & {
  items?: PostViewModel[]
}
export type PublicPostsGetAllArg = {
  /** ID of the last uploaded post. If endCursorPostId not provided, the first set of posts is returned. */
  endCursorPostId?: number
  /** page size is number of items that should be returned */
  pageSize?: number
  /** Sort by parameters */
  sortBy?: string
  /** Sort by desc or asc */
  sortDirection?: 'asc' | 'desc'
}
export type PublicPostsGetPostsByUser = /** status 200 success */ InfinityPaginatedRes & {
  items?: PostViewModel[]
}
export type PublicPostsGetPostsByUserArg = {
  userId: number
  /** ID of the last uploaded post. If endCursorPostId not provided, the first set of posts is returned */
  endCursorPostId?: number
  /** page size is number of items that should be returned */
  pageSize?: number
  /** Sort by parameters */
  sortBy?: string
  /** Sort by desc or asc */
  sortDirection?: 'asc' | 'desc'
}
export type PublicPostsGetPost =
  /** status 200 The post has been successfully found. The response body contains the post data */ PostViewModel
export type PublicPostsGetPostArg = {
  postId: number
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
  id: number
  alt: string
  filter?: string
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
}
export type Owner = {
  firstName: string
  lastName: string
}
