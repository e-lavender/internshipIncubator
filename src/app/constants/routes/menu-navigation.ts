export const menuNavigation = {
  home: () => '/',
  create: () => '/create',
  profile: (id?: number) => `/user-profile/${id}`,
  post: (id?: number, postId?: number) => `/user-profile/${id}/${postId}`,
  messenger: () => '/messenger',
  search: () => '/search',
  statistics: () => '/statistics',
  favorites: () => '/favorites',
  settings: () => '/user-profile/settings',
  devices: () => '/user-profile/settings/devices',
  account: () => '/user-profile/settings/account',
  payments: () => '/user-profile/settings/payments',
}
