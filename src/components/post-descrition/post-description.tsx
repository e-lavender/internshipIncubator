import React, { ChangeEvent } from 'react'

import s from './post-description.module.scss'

import { changeDescription } from '@/app/services/post/slider.slice'
import { useGetProfileQuery } from '@/app/services/profile/profile.api'
import { useAppDispatch } from '@/app/store/rtk.types'
import { Avatar } from '@/components'
import { TextArea, Typography } from '@/ui'

export const PostDescription = () => {
  const { data } = useGetProfileQuery()

  const dispatch = useAppDispatch()

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeDescription({ text: e.target.value }))
  }

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.description}>
          <div className={s.userInfo}>
            <div>
              <Avatar src={data?.avatarUrl} width={36} height={36} rounded className={s.ava} />
            </div>

            <div className={s.userName}>
              <Typography variant={'h3'} color="primary">
                {data?.userName}
              </Typography>
            </div>
          </div>

          <TextArea
            label={'Add publication descriptions'}
            sizeLimit={500}
            onChange={onChangeDescription}
          />
        </div>
      </div>
    </>
  )
}
