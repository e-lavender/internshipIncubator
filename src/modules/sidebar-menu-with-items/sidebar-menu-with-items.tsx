import { useRouter } from 'next/router'

import s from './sidebar-menu-with-items.module.scss'

import {
  CreateMenuIcon,
  FavoritesMenuIcon,
  HomeMenuIcon,
  LogOutMenuIcon,
  MessageMenuIcon,
  ProfileMenuIcon,
  SearchMenuIcon,
  StatisticsMenuIcon,
  useDisclose,
  useTranslation,
} from '@/app'
import { menuNavigation } from '@/app/constants'
import { useSignOutMutation } from '@/app/services/auth/auth.api'
import { ConfirmationModal } from '@/components'
import { MenuItem, SidebarMenu } from '@/ui'

export const SidebarMenuWithItems = () => {
  const { isOpen, onOpen, onClose } = useDisclose()

  const { pathname } = useRouter()
  const [signOut] = useSignOutMutation()

  const { t } = useTranslation()
  const labels = t.sidebarMenu

  return (
    <>
      <SidebarMenu className={s.nav}>
        <MenuItem href={menuNavigation.home()} icon={HomeMenuIcon} label={labels.home} />
        <MenuItem
          href={menuNavigation.create()}
          icon={CreateMenuIcon}
          label={labels.create}
          isSelected={pathname.startsWith(menuNavigation.create())}
        />

        <MenuItem
          href={menuNavigation.profile()}
          icon={ProfileMenuIcon}
          label={labels.profile}
          isSelected={pathname.startsWith(menuNavigation.profile())}
        />

        <MenuItem
          href={menuNavigation.messenger()}
          icon={MessageMenuIcon}
          label={labels.messenger}
          isSelected={pathname.startsWith(menuNavigation.messenger())}
        />
        <MenuItem
          href={menuNavigation.search()}
          icon={SearchMenuIcon}
          label={labels.search}
          isSelected={pathname.startsWith(menuNavigation.search())}
        />
        <MenuItem href={'#'} icon={StatisticsMenuIcon} label={labels.statistics} disabled />
        <MenuItem href={'#'} icon={FavoritesMenuIcon} label={labels.favorites} disabled />

        <MenuItem as={'button'} onClick={onOpen} icon={LogOutMenuIcon} label={labels.logout} />
      </SidebarMenu>

      <ConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        title={'Log Out'}
        message={'Are you really want to log out of your account?'}
        onConfirmation={signOut}
      />
    </>
  )
}
