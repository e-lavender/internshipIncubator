import React, { useState } from 'react'

import s from './post-item.module.scss'

import { useDisclose } from '@/app'
import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { Avatar, ImageSlider, PostCardModal, ViewModeInterface } from '@/components'
import { Typography } from '@/ui'

type Props = {
  createdAt: string
  images: PostImageViewModel[]
  description: string
  userName: string
  itemId: number
  ownerId: number
}

export const PostItem = ({ createdAt, images, description, userName, itemId, ownerId }: Props) => {
  const [showMore, setShowMore] = useState(false)
  const [collapse, setCollapse] = useState(false)
  const { isOpen: isModalOpened, onClose: closeModal, onOpen: openModal } = useDisclose()

  const collapseHandler = () => {
    setCollapse(!collapse)
    setShowMore(!showMore)
  }

  const openPostModalHandler = (itemId: number, ownerId: number) => {
    openModal()
    window.history.pushState(null, 'post', `/user-profile/${ownerId}/${itemId}`)
  }
  const closePostModalHandler = (ownerId: number) => {
    closeModal()
    window.history.pushState(null, 'post', `/user-profile/${ownerId}`)
  }

  const date = new Date(createdAt ? createdAt : '').toLocaleDateString('en-US', {
    year: 'numeric',
    day: '2-digit',
    month: 'long',
  })

  return (
    <>
      <div className={s.post}>
        <div
          className={collapse ? s.collapsePhoto : s.photo}
          onClick={() => openPostModalHandler(itemId, ownerId)}
        >
          <ImageSlider images={images} aspectRatio={'1/1'} fitStyle={'cover'} width={234} />
        </div>
        <div className={s.header}>
          <Avatar width={36} height={36} />
          <div className={s.footerInfo}>
            <Typography variant="h3">{userName}</Typography>
          </div>
        </div>
        <Typography className={s.status} variant={'small'}>
          {date}
        </Typography>
        <div className={s.desc}>
          <Typography variant={'regular-14'}>
            {showMore ? description : `${description.substring(0, 90)}`}
          </Typography>
          {description.length > 90 && (
            <Typography
              as={'button'}
              variant={'regular-14'}
              className={s.button}
              onClick={collapseHandler}
            >
              {showMore ? 'Hide' : 'Show more'}
            </Typography>
          )}
        </div>
      </div>
      <PostCardModal isOpen={isModalOpened} onChange={() => closePostModalHandler(ownerId)}>
        <ImageSlider images={images} aspectRatio={'1/1'} fitStyle={'cover'} />
        <ViewModeInterface description={description} userName={userName} createdAt={createdAt} />
      </PostCardModal>
    </>
  )
}
