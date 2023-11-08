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
import { SidebarItem, SidebarMenu } from '@/ui'

export const SidebarMenuWithItems = () => {
  const { pathname } = useRouter()

  const { t } = useTranslation()
  const labels = t.sidebarMenu

  return (
    <SidebarMenu className={s.nav}>
      <SidebarItem href={menuNavigation.home()} icon={HomeMenuIcon} label={labels.home} />
      <SidebarItem
        href={menuNavigation.create()}
        icon={CreateMenuIcon}
        label={labels.create}
        isSelected={pathname.startsWith(menuNavigation.create())}
      />
      <SidebarItem
        href={menuNavigation.profile()}
        icon={ProfileMenuIcon}
        label={labels.profile}
        isSelected={pathname.startsWith(menuNavigation.profile())}
      />
      <SidebarItem
        href={menuNavigation.messenger()}
        icon={MessageMenuIcon}
        label={labels.messenger}
        isSelected={pathname.startsWith(menuNavigation.messenger())}
      />
      <SidebarItem
        href={menuNavigation.search()}
        icon={SearchMenuIcon}
        label={labels.search}
        isSelected={pathname.startsWith(menuNavigation.search())}
      />
      <SidebarItem href={'#'} icon={StatisticsMenuIcon} label={labels.statistics} disabled />
      <SidebarItem href={'#'} icon={FavoritesMenuIcon} label={labels.favorites} disabled />
      <SidebarItem
        as={'button'}
        onClick={() => console.log('Logged Out!')}
        icon={LogOutMenuIcon}
        label={labels.logout}
      />
    </SidebarMenu>
  )
}
