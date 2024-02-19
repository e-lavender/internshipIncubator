import { toast } from 'react-toastify'

import { useDisclose, useRtkStateHook } from '@/app'
import { profileApiUrls } from '@/app/constants'
import { copyToClipboard } from '@/app/helpers/copyToClipboard'
import { setEditMode } from '@/app/services/posts/posts.slice'
import {
  AccountType,
  ActionTypes,
  ConfirmationModal,
  DropdownMenuItemType,
  MENU_VERSION,
} from '@/components'
import { DropdownMenu, MenuItem } from '@/ui'

export const CardDropdownMenu = ({ account = 'friend' }: { account?: AccountType }) => {
  const { isOpen: isModalOpened, onOpen: openModal, onClose: closeModal } = useDisclose()
  const { isOpen: isControlled, onToggle: closeDropdownMenu } = useDisclose(true)
  const { usersProfile } = profileApiUrls
  const currentMenuVersion: Array<DropdownMenuItemType> = MENU_VERSION[account]

  const { _dispatch } = useRtkStateHook()

  const editPost = () => _dispatch(setEditMode())
  const deletePost = () => {
    /*
        Todo DELETE request to delete posts
     */

    toast.success('posts deleted')
    closeDropdownMenu()
  }

  const handlersVariants: { [Action in keyof typeof ActionTypes]: () => void } = {
    edit: editPost,
    delete: openModal,
    report: () => {},
    follow: () => {},
    unfollow: () => {},
    copy: () => {
      /*copyToClipboard(`${process.env.NEXT_PUBLIC_BASE_URL}${usersProfile}/${ownerId}/${id}`)*/
    },
  }

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
