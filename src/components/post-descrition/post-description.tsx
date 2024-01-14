import React from 'react'

import s from './post-description.module.scss'

import { useGetProfileQuery } from '@/app/services/profile/profile.api'
import { Avatar } from '@/components'
import { TextArea, Typography } from '@/ui'

export const PostDescription = () => {
  const { data } = useGetProfileQuery()

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.description}>
          <div className={s.userInfo}>
            <div>
              <Avatar
                src={data?.avatarUrl ? data?.avatarUrl : '/assets/avatar/avatar.jpg'}
                width={36}
                height={36}
                rounded
                className={s.ava}
              />
            </div>
            <div className={s.userName}>
              <Typography variant={'h3'} color="primary">
                {data?.userName}
              </Typography>
            </div>
          </div>

          <TextArea label={'Add publication descriptions'} maxLength={500} />

          <div className={s.counter}>
            <Typography variant={'small'} color="secondary">
              0/500
            </Typography>
          </div>
        </div>
      </div>
    </>
  )
}
