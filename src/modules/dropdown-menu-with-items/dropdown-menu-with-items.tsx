import { MouseEventHandler } from 'react'

import {
  FavouritesMenuIcon,
  LogOutMenuIcon,
  SettingIcon,
  StatisticsMenuIcon,
  useTranslation,
} from '@/app'
import { menuNavigation } from '@/app/constants'
import { useSignOutMutation } from '@/app/services/auth/auth.api'
import { DropdownMenu, MenuItem } from '@/ui'

export const DropdownMenuWithItems = () => {
  const [logOut] = useSignOutMutation()

  const { t } = useTranslation()
  const labels = t.sidebarMenu

  const onLogOut: MouseEventHandler<HTMLButtonElement> = e => logOut()

  return (
    <DropdownMenu>
      <MenuItem
        href={menuNavigation.settings()}
        icon={SettingIcon}
        label={labels.setting}
        isStyled={false}
      />
      <MenuItem href={'#'} icon={StatisticsMenuIcon} label={labels.statistics} isStyled={false} />

      <MenuItem
        href={menuNavigation.favorites()}
        icon={FavouritesMenuIcon}
        label={labels.favorites}
        isStyled={false}
      />
      <MenuItem
        as={'button'}
        onClick={onLogOut}
        icon={LogOutMenuIcon}
        label={labels.logout}
        isStyled={false}
      />
    </DropdownMenu>
  )
}
