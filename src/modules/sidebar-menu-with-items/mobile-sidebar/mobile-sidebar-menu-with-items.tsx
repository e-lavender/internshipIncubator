import { useRouter } from 'next/router'

import s from './mobile-sidebar-menu-with-items.module.scss'

import {
  CreateMenuIcon,
  HomeMenuIcon,
  MessageMenuIcon,
  ProfileMenuIcon,
  SearchMenuIcon,
  menuNavigation,
} from '@/app'
import { SidebarItem, SidebarMenu } from '@/ui'

export const MobileSidebarMenuWithItems = () => {
  const { pathname } = useRouter()

  return (
    <SidebarMenu className={s.nav}>
      <SidebarItem
        href={menuNavigation.home()}
        icon={HomeMenuIcon}
        isSelected={pathname === menuNavigation.home()}
      />
      <SidebarItem
        href={menuNavigation.create()}
        icon={CreateMenuIcon}
        isSelected={pathname.startsWith(menuNavigation.create())}
      />

      <SidebarItem
        href={menuNavigation.messenger()}
        icon={MessageMenuIcon}
        isSelected={pathname.startsWith(menuNavigation.messenger())}
      />
      <SidebarItem
        href={menuNavigation.search()}
        icon={SearchMenuIcon}
        isSelected={pathname.startsWith(menuNavigation.search())}
      />
      <SidebarItem
        href={menuNavigation.profile()}
        icon={ProfileMenuIcon}
        isSelected={pathname.startsWith(menuNavigation.profile())}
      />
    </SidebarMenu>
  )
}
