import { setEditMode } from '@/app/services/post/post.slice'
import { useAppDispatch } from '@/app/store/rtk.types'
import { AccountType, DropdownMenuItemType, MENU_VERSION } from '@/components'
import { DropdownMenu, MenuItem } from '@/ui'

export const CardDropdownMenu = ({ account = 'friend' }: { account: AccountType }) => {
  const currentMenuVersion: Array<DropdownMenuItemType> = MENU_VERSION[account]

  const dispatch = useAppDispatch()
  const editPost = () => dispatch(setEditMode())

  return (
    <DropdownMenu>
      {currentMenuVersion?.map(item => (
        <MenuItem
          key={`${account}-${item.label}`}
          as={'button'}
          label={item.label}
          isStyled={item.isStyled}
          icon={item.icon}
          onClick={item.label.startsWith('Edit') ? editPost : item.onClick}
        />
      ))}
    </DropdownMenu>
  )
}
