import { useRouter } from 'next/router'

import {
  FavoritesMenuIcon,
  LogOutMenuIcon,
  SettingIcon,
  menuNavigation,
  StatisticsMenuIcon,
  useTranslation,
} from '@/app'
import { DropdownMenu, MenuItem } from '@/ui'

export const DropdownMenuWithItems = () => {
  const { pathname } = useRouter()

  const { t } = useTranslation()
  const labels = t.sidebarMenu

  return (
    <DropdownMenu>
      <MenuItem href={menuNavigation.settings()} icon={SettingIcon} label={labels.setting} />
      <MenuItem href={'#'} icon={StatisticsMenuIcon} label={labels.statistics} />
      <MenuItem
        href={menuNavigation.favorites()}
        icon={FavoritesMenuIcon}
        label={labels.favorites}
      />
      <MenuItem
        as={'button'}
        onClick={() => console.log('Logged Out!')}
        icon={LogOutMenuIcon}
        label={labels.logout}
      />
    </DropdownMenu>
  )
}
