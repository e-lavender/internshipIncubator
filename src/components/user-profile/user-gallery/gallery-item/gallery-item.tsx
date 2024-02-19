import React, { ReactElement } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import { useDisclose, useRtkStateHook } from '@/app'
import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { EditModeInterface, ImageSlider, PostCardModal, ViewModeInterface } from '@/components'

type GalleryItemProps = {
  src: string
  alt?: string
  width: number
  height: number
  images: PostImageViewModel[]
  id: number
  ownerId: number
  userName: string
}

type InterfaceType = { [ViewMode: string]: ReactElement }

export const GalleryItem = ({
  src,
  alt,
  images,
  id,
  ownerId,
  userName,
  ...props
}: GalleryItemProps) => {
  const { query } = useRouter()
  const postIdQuery = query.userId?.[1]
  const postId = Number(postIdQuery)

  const { isOpen: isModalOpened, onClose: closeModal, onOpen: openModal } = useDisclose()
  const {
    _state: { post },
  } = useRtkStateHook()
  // @ts-ignore
  const isEditMode: boolean = post.mode === 'edit'

  const interfaces: InterfaceType = {
    view: <ViewModeInterface userName={userName} />,
    edit: <EditModeInterface userName={userName} />,
  }

  // @ts-ignore
  const CurrentInterface: ReactElement = interfaces[post.mode]
  const openPostModalHandler = (id: number) => {
    openModal()
    window.history.pushState(null, 'post', `/user-profile/${ownerId}/${id}`)
  }

  const closePostModalHandler = () => {
    closeModal()
    window.history.pushState(null, 'post', `/user-profile/${ownerId}`)
  }

  return (
    <>
      <Image src={src} alt={alt || ''} {...props} onClick={() => openPostModalHandler(id)} />
      <PostCardModal
        isOpen={isModalOpened}
        onChange={() => closePostModalHandler()}
        askConfirmation={isEditMode}
      >
        <ImageSlider images={images} aspectRatio={'1/1'} fitStyle={'cover'} />
        {CurrentInterface}
      </PostCardModal>
    </>
  )
}
