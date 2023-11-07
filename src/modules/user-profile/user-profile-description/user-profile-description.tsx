import Link from 'next/link'

import s from './user-profile-description.module.scss'

import { CheckedIcon } from '@/app'
import { Avatar } from '@/components'
import { UserStatistics } from '@/components/user-profile/user-statistics'
import { Button, Typography } from '@/ui'

export const UserProfileDescription = () => {
  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <Avatar src={'/assets/avatar/avatar.jpg'} />
      </div>

      <div className={s.profile}>
        <div className={s.header}>
          <div className={s.title}>
            <Typography as={'h1'} variant={'h1'}>
              URLProfile
            </Typography>
            <CheckedIcon />
          </div>
          <Button variant={'secondary'}>Profile Settings</Button>
        </div>
        <UserStatistics />
        <Typography as={'p'} variant={'regular-16'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco.{' '}
          <Typography as={'span'} variant={'regular-link'}>
            <Link href={'#'}>laboris nisi ut aliquip ex ea commodo consequat.</Link>
          </Typography>
        </Typography>
      </div>
    </div>
  )
}
