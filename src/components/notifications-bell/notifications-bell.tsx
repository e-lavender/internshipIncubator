import { useState } from 'react'

import { ArrowDropdown } from '@/app'
import { GetNotificationsResponseItems } from '@/app/services/notifications/notifications.types'
import { Bell } from '@/components'
import { Card, Typography } from '@flyingtornado06/ui-kit'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './notifications-bell.module.scss'

type Props = {
  markAsReadHandler: (id: number) => void
  notifications?: GetNotificationsResponseItems[]
  total?: number
}

export const NotificationsBell = ({ markAsReadHandler, notifications, total }: Props) => {
  const [clicked, setClicked] = useState(false)
  const [hoveredID, setHoveredID] = useState<number>()

  console.log('hoveredID', hoveredID)
  console.log('clicked', clicked)

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild className={s.bell}>
          <button className={s.button}>
            <Bell messageNumber={total} />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content alignOffset={20} className={s.menu_content} sideOffset={4}>
            <DropdownMenu.Item>
              <Card className={s.card} onClick={event => event.stopPropagation()}>
                <Typography as={'div'} variant={'regular-16'}>
                  Уведомления
                </Typography>
                <DropdownMenu.Separator className={s.separator} />
                <div className={s.main_content}>
                  {notifications &&
                    notifications.map(({ id, isRead, message, notifyAt }, arr) => {
                      console.log('hoveredID === id', hoveredID === id)

                      return (
                        <div key={id}>
                          <Typography as={'div'} variant={'bold-14'}>
                            {'Message '}
                            {!isRead && (
                              <span
                                className={clsx(
                                  s.labelNew,
                                  s.text,
                                  clicked && hoveredID === id && s.explode
                                )}
                                onClick={() => {
                                  markAsReadHandler(id)
                                  hoveredID === id && setClicked(true)
                                  setHoveredID(undefined)
                                }}
                                onMouseEnter={() => setHoveredID(id)}
                                onMouseLeave={() => setClicked(false)}
                              >
                                New!
                              </span>
                            )}
                          </Typography>
                          <Typography as={'p'} variant={'regular-14'}>
                            {message}
                          </Typography>
                          <Typography as={'div'} className={s.date} variant={'small'}>
                            {notifyAt}
                          </Typography>
                          <DropdownMenu.Separator className={s.separator} />
                        </div>
                      )
                    })}
                </div>
              </Card>
              <DropdownMenu.Arrow asChild>
                <ArrowDropdown className={s.arrow} />
              </DropdownMenu.Arrow>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  )
}
