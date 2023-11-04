import { useRouter } from 'next/router'

import {
  FavoritesMenuIcon,
  LogOutMenuIcon,
  SettingIcon,
  sidebarNavigation,
  StatisticsMenuIcon,
  useTranslation,
} from '@/app'
import { DropdownMenuItem, DropdownMenu } from '@/ui'

export const DropdownMenuWithItems = () => {
  const { pathname } = useRouter()

  const { t } = useTranslation()
  const labels = t.sidebarMenu

  return (
    <DropdownMenu>
      <DropdownMenuItem href={'#'} icon={SettingIcon} label={labels.setting} />
      <DropdownMenuItem href={'#'} icon={StatisticsMenuIcon} label={labels.statistics} />
      <DropdownMenuItem
        href={sidebarNavigation.favorites()}
        icon={FavoritesMenuIcon}
        label={labels.favorites}
      />
      <DropdownMenuItem
        as={'button'}
        onClick={() => console.log('Logged Out!')}
        icon={LogOutMenuIcon}
        label={labels.logout}
      />
    </DropdownMenu>
  )
}
