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
  sidebarNavigation,
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
      <SidebarItem href={sidebarNavigation.home()} icon={HomeMenuIcon} label={labels.home} />
      <SidebarItem
        href={sidebarNavigation.create()}
        icon={CreateMenuIcon}
        label={labels.create}
        isSelected={pathname.startsWith(sidebarNavigation.create())}
      />
      <SidebarItem
        href={sidebarNavigation.profile()}
        icon={ProfileMenuIcon}
        label={labels.profile}
        isSelected={pathname.startsWith(sidebarNavigation.profile())}
      />
      <SidebarItem
        href={sidebarNavigation.messenger()}
        icon={MessageMenuIcon}
        label={labels.messenger}
        isSelected={pathname.startsWith(sidebarNavigation.messenger())}
      />
      <SidebarItem
        href={sidebarNavigation.search()}
        icon={SearchMenuIcon}
        label={labels.search}
        isSelected={pathname.startsWith(sidebarNavigation.search())}
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
