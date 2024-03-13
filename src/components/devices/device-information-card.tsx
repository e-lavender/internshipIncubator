import { formatDate } from '@storybook/blocks'
import { clsx } from 'clsx'

import { SESSION_DEVICE_ICON } from './data'
import s from './device-information-card.module.scss'
import { BrowserType, SessionDeviceType } from './model'

import { LogOutMenuIcon, setDateFormat, SVGIconType, useMatchMedia, useTranslation } from '@/app'
import { SessionModel } from '@/app/services/sessions/sessions.types'
import { Card, MenuItem, Typography } from '@/ui'

export const SESSION_CARD_TYPE = {
  SESSION: 'SESSION',
  DEVICE: 'DEVICE',
} as const

type VariantType = {
  SESSION: SessionDeviceType
  DEVICE: BrowserType
}

type DeviceInformationCardProps<T extends keyof typeof SESSION_CARD_TYPE> = {
  type: T
  variant: VariantType[T]
  session: SessionModel
  className?: string
  currentIp?: string
  getSessionId?: (sessionId: number) => void
}

export const DeviceInformationCard = <T extends keyof typeof SESSION_CARD_TYPE>({
  type,
  variant,
  className,
  session,
  getSessionId,
}: DeviceInformationCardProps<T>) => {
  const { isMobile } = useMatchMedia()

  const { t } = useTranslation()
  const labels = t.sidebarMenu

  const styles = clsx(s.container, className)

  const SVGIcon: SVGIconType = SESSION_DEVICE_ICON[type][variant]

  const logoutHandler = () => {
    getSessionId && getSessionId(session.deviceId)
  }

  const LogoutButton = type === SESSION_CARD_TYPE.SESSION && (
    <MenuItem
      as={'button'}
      asListItem={false}
      onClick={logoutHandler}
      icon={LogOutMenuIcon}
      label={labels.logout}
      isStyled={!isMobile}
    />
  )

  return (
    <Card className={styles}>
      <div className={s.wrapper}>
        <div className={s.icon}>
          <SVGIcon />
        </div>

        <div className={s.details}>
          <Typography as={'p'} variant={'bold-16'}>
            {session.deviceName}
          </Typography>
          <Typography as={'p'} variant={'regular-14'}>
            {`IP: ${session.ip}`}
          </Typography>
          <Typography as={'p'} variant={'small'}>
            {`Last visit: ${setDateFormat(session.lastActive)}`}
          </Typography>
        </div>
      </div>

      <div className={s.btn}>{LogoutButton}</div>
    </Card>
  )
}
