import { toast } from 'react-toastify'

import { useMatchMedia } from '@/app'
import { useGetGeolocationQuery } from '@/app/services/ipgeolocation/ipgeolocation.api'
import {
  useGetSessionsQuery,
  useTerminateAllSessionsMutation,
  useTerminateSessionByIdMutation,
} from '@/app/services/sessions/sessions.api'
import { BrowserType, DeviceInformationCard } from '@/components'
import { Button, Typography } from '@flyingtornado06/ui-kit'

import s from './user-devices.module.scss'

export const UserDevices = () => {
  const { isMobile } = useMatchMedia()
  const apiKEY = (process.env.IP_GEOLOCATION_API_KEY as string) || ''
  const [terminateAll] = useTerminateAllSessionsMutation()
  const [terminateSession] = useTerminateSessionByIdMutation()
  const { data: sessions } = useGetSessionsQuery()
  const { data: location } = useGetGeolocationQuery(
    { apiKEY },
    { skip: !process.env.IP_GEOLOCATION_API_KEY }
  )

  const terminateSessions = () => {
    terminateAll()
      .unwrap()
      .then(() => {
        toast.success('all sessions were terminated')
      })
  }
  const terminateSessionById = (sessionId: number) => {
    terminateSession({ deviceId: sessionId })
      .unwrap()
      .then(() => {
        toast.success('session was terminated')
      })
  }

  return (
    <section className={s.container}>
      <div className={s.device}>
        <Typography as={'h3'} variant={'h3'}>
          Current device
        </Typography>
      </div>
      {sessions?.current && (
        <DeviceInformationCard
          className={s.card}
          currentIp={location?.ip}
          session={sessions.current}
          type={'DEVICE'}
          variant={sessions.current.browserName.toUpperCase() as BrowserType}
        />
      )}

      <Button
        className={s.btn}
        fullWidth={isMobile}
        onClick={terminateSessions}
        variant={'outlined'}
      >
        Terminate all other session
      </Button>

      <Typography as={'h3'} variant={'h3'}>
        Active sessions
      </Typography>
      {sessions?.others.map(session => {
        return (
          <DeviceInformationCard
            className={s.card}
            getSessionId={terminateSessionById}
            key={session.deviceId}
            session={session}
            type={'SESSION'}
            variant={'DESKTOP'}
          />
        )
      })}
    </section>
  )
}
