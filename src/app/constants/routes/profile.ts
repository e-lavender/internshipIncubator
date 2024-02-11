export const profileApiUrls = {
  usersProfile: () => `/api/v1/users/profile/` as const,
  usersProfileById: (id?: number) => `/api/v1/users/profile/${id}` as const,
  usersAvatar: () => '/api/v1/users/profile/avatar' as const,
}
