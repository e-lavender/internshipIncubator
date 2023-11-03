import Link from 'next/link'

import s from './user-profile.module.scss'

import { Avatar } from '@/components'
import { UserProfileGallery } from '@/components/user-profile/user-gallery'
import { UserStatistics } from '@/components/user-profile/user-statistics/user-statistics'
import { Button, Typography } from '@/ui'

const url =
  'https://img.freepik.com/premium-photo/customer-service-representative-digital-avatar-generative-ai_934475-9273.jpg'

export const UserProfile = () => {
  return (
    <section>
      <div className={s.container}>
        <Avatar src={''} />
        <div className={s.profile}>
          <div className={s.header}>
            <Typography as={'h1'} variant={'h1'}>
              URLProfile
            </Typography>
            <Button variant={'secondary'}>Profile Settings</Button>
          </div>
          <UserStatistics />
          <Typography as={'p'} variant={'regular-16'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco{' '}
            <Typography as={'span'} variant={'regular-link'}>
              <Link href={'#'}>laboris nisi ut aliquip ex ea commodo consequat.</Link>
            </Typography>
          </Typography>
        </div>
      </div>

      <UserProfileGallery />
    </section>
  )
}
