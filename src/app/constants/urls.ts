export const postsApiUrls = {
  createPost: () => '/api/v1/posts' as const,
  uploadImagePost: () => '/api/v1/posts/image' as const,
  postImageById: (uploadId: string) => `/api/v1/posts/image/${uploadId}` as const,
  postById: (postId: number) => `/api/v1/posts/${postId}` as const,
}

export const publicPostsApiUrls = {
  getPublicPosts: (endCursorPostId?: number) =>
    `/api/v1/public-posts/all/${endCursorPostId}` as const,
  getPublicPostsByUser: ({
    userId,
    endCursorPostId,
  }: {
    userId: number
    endCursorPostId?: number
  }) => `/api/v1/public-posts/user/${userId}/${endCursorPostId}` as const,
  getPublicPostById: (postId: number) => `/api/v1/public-posts/${postId}` as const,
}

export const publicUserApiUrls = {
  getPublicProfile: (profileId: number) => `/api/v1/public-user/profile/${profileId}` as const,
  getUsersCount: () => `/api/v1/public-user` as const,
}
