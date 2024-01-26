import React, { ChangeEvent } from 'react'

import s from './post-description.module.scss'

import { changeDescription } from '@/app/services/post/slider.slice'
import { useGetProfileQuery } from '@/app/services/profile/profile.api'
import { useRtkStateHook } from '@/app/services/useRtkState.hook'
import { Avatar } from '@/components'
import { TextArea, Typography } from '@/ui'

export const PostDescription = () => {
  const { data } = useGetProfileQuery()

  const { _state, _dispatch } = useRtkStateHook()
  const { description: postDescription } = _state.slider

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    _dispatch(changeDescription({ text: e.target.value }))
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
            value={postDescription ?? ''}
            initialSize={postDescription?.length}
            onChange={onChangeDescription}
          />
        </div>
      </div>
    </>
  )
}
