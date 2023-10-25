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
  return (
    <SideMenu>
      <MenuItem href={'/'} icon={HomeMenuIcon} label={'Home'} disabled />
      <MenuItem href={'/'} icon={CreateMenuIcon} label={'Create'} />
      <MenuItem href={'/'} icon={ProfileMenuIcon} label={'Profile'} />
      <MenuItem href={'/'} icon={MessageMenuIcon} label={'Messenger'} />
      <MenuItem href={'/'} icon={SearchMenuIcon} label={'Search'} />
      <MenuItem href={'/'} icon={StatisticsMenuIcon} label={'Statistics'} />
      <MenuItem href={'/'} icon={FavoritesMenuIcon} label={'Favorites'} />
      <MenuItem href={'/'} icon={LogOutMenuIcon} label={'Log Out'} />
    </SideMenu>
  )
}
