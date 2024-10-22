import {
  CreateMenuIcon,
  FavouritesMenuIcon,
  HomeMenuIcon,
  LogOutMenuIcon,
  MessageMenuIcon,
  ProfileMenuIcon,
  SearchMenuIcon,
  StatisticsMenuIcon,
  useDisclose,
  useTranslation,
} from '@/app'
import { authNavigationUrls, menuNavigation } from '@/app/constants'
import { useGetMeQuery, useSignOutMutation } from '@/app/services/auth/auth.api'
import { useCreatePostModal } from '@/app/services/modals/modals.hooks'
import { ConfirmationModal, MenuItem, SidebarMenu } from '@/components'
import CreateNewPostModal from '@/components/modals/create-new-post-modal/create-new-post-modal'
import { useRouter } from 'next/router'

import s from './sidebar-menu-with-items.module.scss'

export const SidebarMenuWithItems = () => {
  const { isOpen, onClose, onOpen } = useDisclose()
  const { openCreatePostModal } = useCreatePostModal()
  const { pathname, push } = useRouter()
  const [signOut] = useSignOutMutation()
  const { data, isLoading } = useGetMeQuery()
  const { t } = useTranslation()
  const labels = t.sidebarMenu

  const onSignOut = () => {
    signOut()

    void push(authNavigationUrls.main())
  }

  return (
    <>
      <SidebarMenu className={s.sidebar}>
        <MenuItem
          className={s.menuItemMargin24}
          href={menuNavigation.home()}
          icon={HomeMenuIcon}
          isSelected={pathname.endsWith(menuNavigation.home())}
          label={labels.home}
        />
        <MenuItem
          as={'button'}
          className={s.menuItemMargin24}
          icon={CreateMenuIcon}
          label={labels.create}
          onClick={openCreatePostModal}
        />

        <MenuItem
          className={s.menuItemMargin24}
          href={menuNavigation.profile(data?.userId)}
          icon={ProfileMenuIcon}
          isSelected={pathname.startsWith('/user-profile/')}
          label={labels.profile}
        />

        <MenuItem
          className={s.menuItemMargin24}
          href={menuNavigation.messenger()}
          icon={MessageMenuIcon}
          isSelected={pathname.startsWith(menuNavigation.messenger())}
          label={labels.messenger}
        />
        <MenuItem
          className={s.menuItemMargin60}
          href={menuNavigation.search()}
          icon={SearchMenuIcon}
          isSelected={pathname.startsWith(menuNavigation.search())}
          label={labels.search}
        />

        <MenuItem
          className={s.menuItemMargin24}
          disabled
          href={'#'}
          icon={StatisticsMenuIcon}
          label={labels.statistics}
        />
        <MenuItem
          className={s.menuItemMargin60}
          disabled
          href={'#'}
          icon={FavouritesMenuIcon}
          label={labels.favorites}
        />

        <MenuItem as={'button'} icon={LogOutMenuIcon} label={labels.logout} onClick={onOpen} />
      </SidebarMenu>
      <CreateNewPostModal />
      <ConfirmationModal isOpen={isOpen} onClose={onClose} onConfirmation={onSignOut} />
    </>
  )
}
