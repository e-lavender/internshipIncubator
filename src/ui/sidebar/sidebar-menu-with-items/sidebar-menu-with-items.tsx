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
} from '@/app'
import { SidebarItem, SidebarMenu } from '@/ui'

export const SidebarMenuWithItems = () => {
  const { pathname } = useRouter()

  return (
    <SidebarMenu>
      <SidebarItem href={SidebarNavigation.home()} icon={HomeMenuIcon} label={'Home'} />
      <SidebarItem
        href={SidebarNavigation.create()}
        icon={CreateMenuIcon}
        label={'Create'}
        isSelected={pathname.startsWith(SidebarNavigation.create())}
      />
      <SidebarItem
        href={SidebarNavigation.profile()}
        icon={ProfileMenuIcon}
        label={'Profile'}
        isSelected={pathname.startsWith(SidebarNavigation.profile())}
      />
      <SidebarItem
        href={SidebarNavigation.messenger()}
        icon={MessageMenuIcon}
        label={'Messenger'}
        isSelected={pathname.startsWith(SidebarNavigation.messenger())}
      />
      <SidebarItem
        href={SidebarNavigation.search()}
        icon={SearchMenuIcon}
        label={'Search'}
        isSelected={pathname.startsWith(SidebarNavigation.search())}
      />
      <SidebarItem href={'#'} icon={StatisticsMenuIcon} label={'Statistics'} disabled />
      <SidebarItem href={'#'} icon={FavoritesMenuIcon} label={'Favorites'} disabled />
      <SidebarItem
        as={'button'}
        onClick={() => console.log('Logged Out!')}
        icon={LogOutMenuIcon}
        label={'Log Out'}
      />
    </SidebarMenu>
  )
}
