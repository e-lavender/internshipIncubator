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
import { MenuItem, SidebarMenu } from '@/ui'

export const MobileSidebarMenuWithItems = () => {
  const { pathname } = useRouter()

  return (
    <SidebarMenu className={s.nav}>
      <MenuItem
        href={menuNavigation.home()}
        icon={HomeMenuIcon}
        isSelected={pathname === menuNavigation.home()}
      />
      <MenuItem
        href={menuNavigation.create()}
        icon={CreateMenuIcon}
        isSelected={pathname.startsWith(menuNavigation.create())}
      />

      <MenuItem
        href={menuNavigation.messenger()}
        icon={MessageMenuIcon}
        isSelected={pathname.startsWith(menuNavigation.messenger())}
      />
      <MenuItem
        href={menuNavigation.search()}
        icon={SearchMenuIcon}
        isSelected={pathname.startsWith(menuNavigation.search())}
      />
      <MenuItem
        href={menuNavigation.profile()}
        icon={ProfileMenuIcon}
        isSelected={pathname.startsWith(menuNavigation.profile())}
      />
    </SidebarMenu>
  )
}
