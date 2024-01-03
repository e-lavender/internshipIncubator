import { AccountType, DropdownMenuItemType, MENU_VERSION } from '@/components'
import { DropdownMenu, MenuItem } from '@/ui'

export const CardDropdownMenu = ({ account }: { account: AccountType }) => {
  const currentMenuVersion: Array<DropdownMenuItemType> = MENU_VERSION[account]

  return (
    <DropdownMenu>
      {currentMenuVersion?.map(item => <MenuItem key={item.label} as={'button'} {...item} />)}
    </DropdownMenu>
  )
}
