import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Bell } from '@/ui/bell'

export const NotificationsBell = ({ className }: any) => {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className={className}>
            <Bell className={className} />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="DropdownMenuContent" sideOffset={4}>
            <DropdownMenu.Item className="DropdownMenuItem">
              New Tab <div className="RightSlot">⌘+T</div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  )
}
