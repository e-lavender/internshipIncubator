import { clsx } from 'clsx'

import { BROWSER_ICON, SESSION_DEVICE_ICON } from './data'
import s from './device-information-card.module.scss'
import { BrowserType, SessionDeviceType } from './model'

import { LogOutMenuIcon, SVGIconType, useMatchMedia, useTranslation } from '@/app'
import { Card, MenuItem, Typography } from '@/ui'

type CardType = 'SESSION' | 'DEVICE'

type VariantType = {
  SESSION: SessionDeviceType
  DEVICE: BrowserType
}

// TODO => consider to simplify props type structure in order to eliminate potential errors in the future (as an alternative use icon prop instead of variant)

type DeviceInformationCardProps<T extends CardType> = {
  type: T
  variant: VariantType[T]
  title?: string
  ip?: string
  lastVisit?: string
  className?: string
}

export const DeviceInformationCard = <T extends CardType = 'DEVICE'>({
  type,
  variant,
  title,
  ip = '-',
  lastVisit,
  className,
}: DeviceInformationCardProps<T>) => {
  const { isMobile } = useMatchMedia()

  const { t } = useTranslation()
  const labels = t.sidebarMenu

  const styles = clsx(s.container, className)

  const SVGIcon: SVGIconType =
    type === 'SESSION' ? SESSION_DEVICE_ICON[variant] : BROWSER_ICON[variant]

  const LogoutButton =
    type === 'SESSION' ? (
      <MenuItem
        as={'button'}
        asListItem={false}
        onClick={() => console.log('Logged Out!')}
        icon={LogOutMenuIcon}
        label={labels.logout}
        isStyled={!isMobile}
      />
    ) : null

  return (
    <Card className={styles}>
      <div className={s.wrapper}>
        <div className={s.icon}>
          <SVGIcon />
        </div>

        <div className={s.details}>
          <Typography as={'p'} variant={'bold-16'}>
            {title}
          </Typography>
          <Typography as={'p'} variant={'regular-14'}>
            {`IP: ${ip}`}
          </Typography>
          <Typography as={'p'} variant={'small'}>
            {lastVisit && `Last visit: ${lastVisit}`}
          </Typography>
        </div>
      </div>

      <div className={s.btn}>{LogoutButton}</div>
    </Card>
  )
}
