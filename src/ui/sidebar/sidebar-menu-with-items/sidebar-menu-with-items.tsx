import { useRouter } from 'next/router'

import {
  CreateMenuIcon,
  FavoritesMenuIcon,
  HomeMenuIcon,
  LogOutMenuIcon,
  MessageMenuIcon,
  ProfileMenuIcon,
  SearchMenuIcon,
  SidebarNavigation,
  StatisticsMenuIcon,
  useTranslation,
} from '@/app'
import { SidebarItem, SidebarMenu } from '@/ui'

import s from './sidebar-menu-with-items.module.scss'

export const SidebarMenuWithItems = () => {
  const { pathname } = useRouter()

  const { t } = useTranslation()
  const labels = t.sidebarMenu

  return (
    <SidebarMenu className={s.container}>
      <SidebarItem href={SidebarNavigation.home()} icon={HomeMenuIcon} label={labels.home} />
      <SidebarItem
        href={SidebarNavigation.create()}
        icon={CreateMenuIcon}
        label={labels.create}
        isSelected={pathname.startsWith(SidebarNavigation.create())}
      />
      <SidebarItem
        href={SidebarNavigation.profile()}
        icon={ProfileMenuIcon}
        label={labels.profile}
        isSelected={pathname.startsWith(SidebarNavigation.profile())}
      />
      <SidebarItem
        href={SidebarNavigation.messenger()}
        icon={MessageMenuIcon}
        label={labels.messenger}
        isSelected={pathname.startsWith(SidebarNavigation.messenger())}
      />
      <SidebarItem
        href={SidebarNavigation.search()}
        icon={SearchMenuIcon}
        label={labels.search}
        isSelected={pathname.startsWith(SidebarNavigation.search())}
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
