import { useRouter } from 'next/router'

import s from './mobile-sidebar-menu-with-items.module.scss'

import {
  CreateMenuIcon,
  HomeMenuIcon,
  MessageMenuIcon,
  ProfileMenuIcon,
  SearchMenuIcon,
  sidebarNavigation,
} from '@/app'
import { SidebarItem, SidebarMenu } from '@/ui'

export const MobileSidebarMenuWithItems = () => {
  const { pathname } = useRouter()

  return (
    <SidebarMenu className={s.nav}>
      <SidebarItem
        href={sidebarNavigation.home()}
        icon={HomeMenuIcon}
        isSelected={pathname === sidebarNavigation.home()}
      />
      <SidebarItem
        href={sidebarNavigation.create()}
        icon={CreateMenuIcon}
        isSelected={pathname.startsWith(sidebarNavigation.create())}
      />

      <SidebarItem
        href={sidebarNavigation.messenger()}
        icon={MessageMenuIcon}
        isSelected={pathname.startsWith(sidebarNavigation.messenger())}
      />
      <SidebarItem
        href={sidebarNavigation.search()}
        icon={SearchMenuIcon}
        isSelected={pathname.startsWith(sidebarNavigation.search())}
      />
      <SidebarItem
        href={sidebarNavigation.profile()}
        icon={ProfileMenuIcon}
        isSelected={pathname.startsWith(sidebarNavigation.profile())}
      />
    </SidebarMenu>
  )
}
