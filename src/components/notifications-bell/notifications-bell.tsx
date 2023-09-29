import { useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './notifications-bell.module.scss'

import { ArrowDropdown } from '@/app/assets/svg/arrow-dropdown-icon-svg'
import { notifications } from '@/app/data/notifications-bell/notifications-bell'
import { Bell, Card, Typography } from '@/ui'

export const NotificationsBell = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className={s.bell} asChild>
          <button className={s.button}>
            <Bell messageNumber={notifications.length} />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content sideOffset={4} alignOffset={20} className={s.menu_content}>
            <DropdownMenu.Item>
              <Card className={s.card} onClick={event => event.stopPropagation()}>
                <Typography variant="regular-16" as="div">
                  Уведомления
                </Typography>
                <DropdownMenu.Separator className={s.separator} />
                <div className={s.main_content}>
                  {notifications &&
                    notifications.map(({ title, text, date }, id, arr) => (
                      <div key={id}>
                        <Typography variant="bold-14" as="div">
                          {title}
                        </Typography>
                        <Typography variant="regular-14" as="p">
                          {text}
                        </Typography>
                        <Typography className={s.date} variant="small" as="div">
                          {date}
                        </Typography>
                        <DropdownMenu.Separator className={s.separator} />
                      </div>
                    ))}
                </div>
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
