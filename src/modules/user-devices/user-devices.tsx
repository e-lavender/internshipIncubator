import { useEffect } from 'react'

import { MOCKED_DEVICE_DATA, MOCKED_SESSION_DEVICE_DATA } from './data'
import s from './user-devices.module.scss'

import { useMatchMedia } from '@/app'
import { useGetSessionsQuery } from '@/app/services/sessions/sessions.api'
import { DeviceInformationCard } from '@/components'
import { Button, Typography } from '@/ui'

export const UserDevices = () => {
  const { isMobile } = useMatchMedia()
  const { data: sessions } = useGetSessionsQuery()

  const sessionFallback = (
    <Typography as={'h2'} variant={'h2'} className={s.fallback}>
      You have not yet logged in from other devices
    </Typography>
  )

  return (
    <section className={s.container}>
      <div className={s.device}>
        <Typography as={'h3'} variant={'h3'}>
          Current device
        </Typography>

        {sessions?.map(session => {
          return <DeviceInformationCard className={s.card} key={session.deviceId} type={session.deviceType} variant={session.} />
        })}
      </div>

      <Button variant={'outlined'} fullWidth={isMobile} className={s.btn}>
        Terminate all other session
      </Button>

      <Typography as={'h3'} variant={'h3'}>
        Active sessions
      </Typography>

      <div className={s.session}>
        {MOCKED_SESSION_DEVICE_DATA?.map((session, index) => (
          <DeviceInformationCard key={`session-${index}`} {...session} />
        )) || sessionFallback}
      </div>
    </section>
  )
}
