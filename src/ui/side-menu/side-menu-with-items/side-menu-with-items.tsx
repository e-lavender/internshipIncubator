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
import { MenuItem, SideMenu } from '@/ui/side-menu'

export const SideMenuWithItems = () => {
  const { pathname } = useRouter()

  return (
    <SideMenu>
      <MenuItem href={'/'} icon={HomeMenuIcon} label={'Home'} />
      <MenuItem
        href={'/create'}
        icon={CreateMenuIcon}
        label={'Create'}
        isSelected={pathname.startsWith('/create')}
      />
      <MenuItem
        href={'/user-profile'}
        icon={ProfileMenuIcon}
        label={'Profile'}
        isSelected={pathname.startsWith('/user-profile')}
      />
      <MenuItem
        href={'/messenger'}
        icon={MessageMenuIcon}
        label={'Messenger'}
        isSelected={pathname.startsWith('/messenger')}
      />
      <MenuItem
        href={'/search'}
        icon={SearchMenuIcon}
        label={'Search'}
        isSelected={pathname.startsWith('/search')}
      />
      <MenuItem href={'/'} icon={StatisticsMenuIcon} label={'Statistics'} disabled />
      <MenuItem href={'/'} icon={FavoritesMenuIcon} label={'Favorites'} disabled />
      <MenuItem href={'/'} icon={LogOutMenuIcon} label={'Log Out'} />
    </SideMenu>
  )
}
