import React, { useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import ImageAva from 'next/image'
import { useForm } from 'react-hook-form'

import s from './post-description.module.scss'

// eslint-disable-next-line import/order
import AvatarImage from '@/app/assets/avatar/avatar.jpg'

//import { FormFields, triggerZodFieldError } from '@/src/shared/helpers/updateZodError'
import { useGetProfileQuery } from '@/app/services/profile/profile.api'
import { ImageModel } from '@/components/image-slider/image-slider-types'
import { Button, TextArea, Typography } from '@/ui'

type Props = {
  id?: string
  //onSubmitHandler?: (data: DescriptionForm) => void
  defaultValue?: string | number
  isEditModalOpen?: boolean
  setIsEditModalOpen?: (isEditModalOpen: boolean) => void
  setIsEditDescriptionModalOpen?: (isEditDescriptionModalOpen: boolean) => void
  value?: string
  setValue?: (value: string) => void
  addedImages?: ImageModel[]
  description?: string
  isDescription?: boolean
}

export const PostDescription = ({
  value,
  setValue,
  description,
  isDescription,
  id,
  setIsEditDescriptionModalOpen,
  setIsEditModalOpen,
}: Props) => {
  const [text, setText] = useState<string>(description || '')
  const { data, isLoading: isProfileLoading } = useGetProfileQuery()

  console.log(data)
  /* const saveHandler = () => {
    updatePost({
      postId: id,
      description: value,
    }).then(() => {
      if (setIsEditDescriptionModalOpen) {
        setIsEditDescriptionModalOpen(false)
        if (setIsEditModalOpen) {
          setIsEditModalOpen(true)
        }
      }
      // getUserPosts(user.id)
    })
  }*/

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.description}>
          <div className={s.userInfo}>
            <div>
              {/*{data?.data?.avatar && (
                <ImageAva
                  width={36}
                  height={36}
                  src={data?.data?.avatar}
                  className={s.ava}
                  alt={'avatar'}
                  priority={true}
                />
              )}
              {!data?.data?.avatar && <AvatarImage className={s.ava} />}
            </div>
            <div className={s.userName}>
              <Typography variant={'h3'} color="primary">
                {data?.data?.username}
              </Typography>*/}
            </div>
          </div>

          <TextArea
            name={'description'}
            label={'Add publication descriptions'}
            value={text}
            //onChange={handleDescriptionChange}
            sizeLimit={500}
            initialSize={text.length}
          />

          <div className={s.counter}>
            <Typography variant={'small'} color="secondary">
              {value?.length}/500
            </Typography>
          </div>
        </div>

        {isDescription && (
          <Button variant={'primary'} className={s.btn} onClick={/*saveHandler*/ ''}>
            <Typography variant={'h3'}>{'save'}</Typography>
          </Button>
        )}
      </div>
    </>
  )
}
