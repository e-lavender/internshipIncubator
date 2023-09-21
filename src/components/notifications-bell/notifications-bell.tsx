import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './notifications-bell.module.scss'

import { ArrowDropdown } from '@/app/assets/svg/arrow-dropdown-icon-svg'
import { Bell } from '@/ui/bell'
import { Card } from '@/ui/card'
import { Typography } from '@/ui/typography/typography'

export const NotificationsBell = () => {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className={s.button}>
            <Bell />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={4}
            alignOffset={20}
            side="bottom"
            align="end"
            className={s.menu_content}
          >
            <DropdownMenu.Item>
              <Card className={s.card}>
                <Typography variant="regular-16" as="div">
                  Уведомления
                </Typography>
                <DropdownMenu.Separator className={s.separator} />
                <Typography variant="regular-16" as="div">
                  Уведомления
                </Typography>
              </Card>
              <DropdownMenu.Arrow asChild={true}>
                <ArrowDropdown className={s.arrow} />
              </DropdownMenu.Arrow>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  )
}
