import { useMemo } from 'react'

import { toast } from 'react-toastify'

import { useDisclose, useRtkStateHook } from '@/app'
import { COMMON_MODE_STATE } from '@/app/constants/enums'
import { menuNavigation, profileApiUrls } from '@/app/constants'
import { FRONT_BASE_URL } from '@/app/constants/common'
import { copyToClipboard } from '@/app/helpers/copyToClipboard'
import { usePostCardModal } from '@/app/services/modals/modals.hooks'
import { useDeletePostByIdMutation } from '@/app/services/posts/posts.api'
import { setEditMode } from '@/app/services/posts/posts.slice'
import {
  AccountType,
  ActionTypes,
  ConfirmationModal,
  DropdownMenuItemType,
  DropDownMenuType,
  MENU_VERSION,
} from '@/components'
import { DropdownMenu, MenuItem } from '@/ui'

export const CardDropdownMenu = ({ account, ownerId, id }: DropDownMenuType) => {
  const { isOpen: isModalOpened, onOpen: openModal, onClose: closeModal } = useDisclose()
  const { isOpen: isControlled, onToggle: closeDropdownMenu } = useDisclose(true)
  const { usersProfile } = profileApiUrls
  const [deleteSelectedPost] = useDeletePostByIdMutation()
  const currentMenuVersion: Array<DropdownMenuItemType> = MENU_VERSION[account]
  const { changePostCardModalMode, selectedPost, closePostCardModal, clearPostCardModal } =
    usePostCardModal()

  const editPost = () => changePostCardModalMode(COMMON_MODE_STATE.EDIT)
  const deletePost = () => {
    deleteSelectedPost({ postId: selectedPost.id })
      .unwrap()
      .then(() => {
        closePostCardModal()
        clearPostCardModal()
        toast.success('posts deleted')
      })
      .catch(err => {
        closeDropdownMenu()
        toast.error(err)
      })
  }

  const copyLinkHandler = () =>
    copyToClipboard(`${FRONT_BASE_URL}${menuNavigation.profile(ownerId)}/${id}`)

  const handlersVariants: { [Action in keyof typeof ActionTypes]: () => void } = useMemo(() => {
    return {
      edit: editPost,
      delete: openModal,
      report: () => {},
      follow: () => {},
      unfollow: () => {},
      copy: copyLinkHandler,
    }
  }, [editPost, openModal])

  return (
    <>
      <DropdownMenu>
        {currentMenuVersion?.map(item => (
          <MenuItem
            key={`${account}-${item.label}`}
            as={'button'}
            {...item}
            onClick={handlersVariants[item.action]}
          />
        ))}
      </DropdownMenu>

      <ConfirmationModal
        translation={'deletePost'}
        isOpen={isModalOpened}
        onClose={closeModal}
        onConfirmation={deletePost}
      />
    </>
  )
}
