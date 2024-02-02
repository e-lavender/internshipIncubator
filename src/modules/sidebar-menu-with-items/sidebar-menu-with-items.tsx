import { useRouter } from 'next/router'

import s from './sidebar-menu-with-items.module.scss'

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
import { useSignOutMutation } from '@/app/services/auth/auth.api'
import { useCreatePostModal } from '@/app/services/modals/modals.hooks'
import { ConfirmationModal } from '@/components'
import CreateNewPostModal from '@/components/modals/create-new-post-modal/create-new-post-modal'
import { MenuItem, SidebarMenu } from '@/ui'

export const SidebarMenuWithItems = () => {
  const { isOpen, onOpen, onClose } = useDisclose()
  const { openCreatePostModal } = useCreatePostModal()
  const { pathname, push } = useRouter()
  const [signOut] = useSignOutMutation()

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
          href={menuNavigation.home()}
          icon={HomeMenuIcon}
          label={labels.home}
          isSelected={pathname.endsWith(menuNavigation.home())}
        />
        <MenuItem
          as={'button'}
          icon={CreateMenuIcon}
          label={labels.create}
          onClick={openCreatePostModal}
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
        <MenuItem href={'#'} icon={FavouritesMenuIcon} label={labels.favorites} disabled />

        <MenuItem as={'button'} onClick={onOpen} icon={LogOutMenuIcon} label={labels.logout} />
      </SidebarMenu>
      <CreateNewPostModal />
      <ConfirmationModal isOpen={isOpen} onClose={onClose} onConfirmation={onSignOut} />
    </>
  )
}
