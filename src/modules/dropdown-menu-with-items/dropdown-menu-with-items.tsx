import { useRouter } from 'next/router'

import {
  FavoritesMenuIcon,
  LogOutMenuIcon,
  SettingIcon,
  StatisticsMenuIcon,
  useTranslation,
} from '@/app'
import { DropdownMenu, SidebarItem } from '@/ui'

export const DropdownMenuWithItems = () => {
  const { pathname } = useRouter()

  const { t } = useTranslation()
  const labels = t.sidebarMenu

  return (
    <DropdownMenu>
      <SidebarItem href={'#'} icon={SettingIcon} label={labels.setting} />
      <SidebarItem href={'#'} icon={StatisticsMenuIcon} label={labels.statistics} />
      <SidebarItem href={'#'} icon={FavoritesMenuIcon} label={labels.favorites} />
      <SidebarItem
        as={'button'}
        onClick={() => console.log('Logged Out!')}
        icon={LogOutMenuIcon}
        label={labels.logout}
      />
    </DropdownMenu>
  )
}
