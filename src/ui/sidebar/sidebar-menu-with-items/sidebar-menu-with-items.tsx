import { useRouter } from 'next/router'

import {
  CreateMenuIcon,
  FavoritesMenuIcon,
  HomeMenuIcon,
  LogOutMenuIcon,
  MessageMenuIcon,
  ProfileMenuIcon,
  SearchMenuIcon,
  StatisticsMenuIcon,
} from '@/app'
import { SidebarItem, SidebarMenu } from '@/ui'

export const SidebarMenuWithItems = () => {
  const { pathname } = useRouter()

  return (
    <SidebarMenu>
      <SidebarItem href={'/'} icon={HomeMenuIcon} label={'Home'} />
      <SidebarItem
        href={'/create'}
        icon={CreateMenuIcon}
        label={'Create'}
        isSelected={pathname.startsWith('/create')}
      />
      <SidebarItem
        href={'/user-profile'}
        icon={ProfileMenuIcon}
        label={'Profile'}
        isSelected={pathname.startsWith('/user-profile')}
      />
      <SidebarItem
        href={'/messenger'}
        icon={MessageMenuIcon}
        label={'Messenger'}
        isSelected={pathname.startsWith('/messenger')}
      />
      <SidebarItem
        href={'/search'}
        icon={SearchMenuIcon}
        label={'Search'}
        isSelected={pathname.startsWith('/search')}
      />
      <SidebarItem href={'/'} icon={StatisticsMenuIcon} label={'Statistics'} disabled />
      <SidebarItem href={'/'} icon={FavoritesMenuIcon} label={'Favorites'} disabled />
      <SidebarItem
        as={'button'}
        onClick={() => console.log('Logged Out!')}
        icon={LogOutMenuIcon}
        label={'Log Out'}
      />
    </SidebarMenu>
  )
}
