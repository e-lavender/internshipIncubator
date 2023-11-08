import s from './device-information-card.module.scss'

import { LogOutMenuIcon, SVGIconType, useTranslation } from '@/app'
import { BROWSER_ICON, SESSION_DEVICE_ICON } from '@/components/devices/data'
import { BrowserType, SessionDeviceType } from '@/components/devices/model'
import { Card, SidebarItem, Typography } from '@/ui'

type CardType = 'SESSION' | 'DEVICE'

type VariantType<T> = T extends 'SESSION' ? SessionDeviceType : BrowserType

type VariantTypeV2 = {
  SESSION: SessionDeviceType
  DEVICE: BrowserType
}

type DeviceInformationCardProps<T extends CardType> = {
  type: T
  variant: VariantTypeV2[T]
  title?: string
  ip?: string
  lastVisit?: string
}

export const DeviceInformationCard = <T extends CardType = 'DEVICE'>({
  type,
  variant,
  title,
  ip = '-',
  lastVisit,
}: DeviceInformationCardProps<T>) => {
  const { t } = useTranslation()
  const labels = t.sidebarMenu

  const SVGIcon: SVGIconType =
    type === 'SESSION' ? SESSION_DEVICE_ICON[variant] : BROWSER_ICON[variant]

  // const SVGIcon: SVGIconType = icon

  const LogoutButton =
    type === 'SESSION' ? (
      <SidebarItem
        as={'button'}
        asListItem={false}
        onClick={() => console.log('Logged Out!')}
        icon={LogOutMenuIcon}
        label={labels.logout}
      />
    ) : null

  return (
    <Card className={s.container}>
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
