import React, { memo, ReactElement } from 'react'

import s from './public-posts.module.scss'

import { useDisclose, useRtkStateHook } from '@/app'
import { useGetPublicPostsQuery } from '@/app/services/public-posts/public-posts.api'
import { PublicPostsGetAll } from '@/app/services/public-posts/public-posts.types'
import { EditModeInterface, ImageSlider, PostCardModal, ViewModeInterface } from '@/components'
import { NumberOfUsers } from '@/modules/unautorized/number-of-users/number-of-users'
import { PostItem } from '@/modules/unautorized/posts-item/post-item'

type Props = {
  data: PublicPostsGetAll
}
type InterfaceType = { [ViewMode: string]: ReactElement }

export const PublicPosts = memo(({ data }: Props) => {
  const {
    _state: { post },
  } = useRtkStateHook()
  const { isOpen: isModalOpened, onClose: closeModal, onOpen: openModal } = useDisclose()
  const isEditMode: boolean = post.mode === 'edit'

  const interfaces: InterfaceType = {
    view: <ViewModeInterface />,
    edit: <EditModeInterface />,
  }

  const CurrentInterface: ReactElement = interfaces[post.mode]

  if (!data) {
    return null
  }

  const openPostModalHandler = (id: number, ownerId: number) => {
    openModal()
    window.history.pushState(null, 'post', `/user-profile/${ownerId}/${id}`)
  }

  const closePostModalHandler = (ownerId: number) => {
    closeModal()
    window.history.pushState(null, 'post', `/main`)
  }

  console.log(data)

  return (
    <>
      <NumberOfUsers data={data} />
      <div className={s.posts}>
        {data?.items &&
          data?.items.length > 0 &&
          data?.items.map((item, index) => (
            <div key={index}>
              <div onClick={() => openPostModalHandler(item.id, item.ownerId)}>
                <PostItem
                  createdAt={item.createdAt}
                  images={item.images}
                  description={item.description}
                  userName={item.userName}
                />
              </div>
              <PostCardModal
                isOpen={isModalOpened}
                onChange={() => closePostModalHandler(item.ownerId)}
                askConfirmation={isEditMode}
              >
                <ImageSlider images={item.images} aspectRatio={'1/1'} fitStyle={'cover'} />
                {CurrentInterface}
              </PostCardModal>
            </div>
          ))}
      </div>
    </>
  )
})
