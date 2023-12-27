import { useRouter } from 'next/router'

import s from './sidebar-menu-with-items.module.scss'

import {
  CreateMenuIcon,
  FavoritesMenuIcon,
  HomeMenuIcon,
  LogOutMenuIcon,
  MessageMenuIcon,
  ProfileMenuIcon,
  SearchMenuIcon,
  menuNavigation,
  StatisticsMenuIcon,
  useTranslation,
} from '@/app'
import { useGetMeQuery, useSignOutMutation } from '@/app/services/auth/auth.api'
import { MenuItem, SidebarMenu } from '@/ui'

export const SidebarMenuWithItems = () => {
  const { pathname } = useRouter()
  const [signOut, { isLoading }] = useSignOutMutation()
  const { data: me } = useGetMeQuery()
  const { t } = useTranslation()
  const labels = t.sidebarMenu

  return (
    <SidebarMenu className={s.nav}>
      <MenuItem href={menuNavigation.home()} icon={HomeMenuIcon} label={labels.home} />
      <MenuItem
        href={menuNavigation.create()}
        icon={CreateMenuIcon}
        label={labels.create}
        isSelected={pathname.startsWith(menuNavigation.create())}
      />
      {me && (
        <MenuItem
          href={menuNavigation.profile()}
          icon={ProfileMenuIcon}
          label={labels.profile}
          isSelected={pathname.startsWith(menuNavigation.profile())}
        />
      )}
      <MenuItem
        href={menuNavigation.messenger()}
        icon={MessageMenuIcon}
        label={labels.messenger}
        isSelected={pathname.startsWith(menuNavigation.messenger())}
      />
      <MenuItem
        href={menuNavigation.search()}
        icon={SearchMenuIcon}
        label={labels.search}
        isSelected={pathname.startsWith(menuNavigation.search())}
      />
      <MenuItem href={'#'} icon={StatisticsMenuIcon} label={labels.statistics} disabled />
      <MenuItem href={'#'} icon={FavoritesMenuIcon} label={labels.favorites} disabled />
      {me && (
        <MenuItem
          as={'button'}
          onClick={() => signOut()}
          icon={LogOutMenuIcon}
          label={labels.logout}
        />
      )}
    </SidebarMenu>
  )
}
