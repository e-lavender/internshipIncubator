import React, { ReactElement, useEffect, useState } from 'react'

import { clsx } from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'

import s from './user-gallery.module.scss'

import { useDisclose, useMatchMedia, useRtkStateHook } from '@/app'
import { PublicPostsGetPostsByUser } from '@/app/services/public-posts/public-posts.types'
import { EditModeInterface, ImageSlider, PostCardModal, ViewModeInterface } from '@/components'

type InterfaceType = { [ViewMode: string]: ReactElement }

export const UserProfileGallery = ({
  data,
  userId,
}: {
  data: PublicPostsGetPostsByUser | undefined
  userId: string | number | string[]
}) => {
  const { isMobile } = useMatchMedia()
  const { isOpen: isModalOpened, onClose: closeModal, onOpen: openModal } = useDisclose()
  const {
    _state: { post },
  } = useRtkStateHook()
  const { query } = useRouter()
  const postIdQuery = query.userId?.[1]
  const postId = Number(postIdQuery)

  const isEditMode: boolean = post.mode === 'edit'

  const interfaces: InterfaceType = {
    view: <ViewModeInterface />,
    edit: <EditModeInterface />,
  }

  const CurrentInterface: ReactElement = interfaces[post.mode]
  // const trigger = useRef<HTMLDivElement>(null)
  // const { content, isLoading } = useInfiniteScroll(
  //   data?.items || GALLERY_DATA,
  //   trigger,
  //   scrollHandler,
  //   100
  // )
  //
  // function scrollHandler(): Promise<any[]> {
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       const [index1, index2] = [0, 0]
  //         .map(() => Math.floor(Math.random() * GALLERY_DATA.length))
  //         .sort((a, b) => a - b)
  //
  //       res(GALLERY_DATA.slice(index1, index2))
  //     }, 1500)
  //   })
  // }

  const styles = {
    root: clsx(s.container, isMobile && s.mobile),
    card: clsx(s.card, isMobile && s.mobile),
    loader: clsx(s.card, isMobile && s.mobile, s.loader),
  }

  const openPostModalHandler = (id: number) => {
    openModal()
    window.history.pushState(null, 'post', `/user-profile/${userId}/${id}`)
  }

  const closePostModalHandler = () => {
    closeModal()
    window.history.pushState(null, 'post', `/user-profile/${userId}`)
  }

  useEffect(() => {
    if (postId) {
      openModal()
    }
  }, [postId])

  return (
    <>
      <div className={styles.root}>
        {data?.items &&
          data?.items.length > 0 &&
          data?.items.map((item, index) => (
            <>
              <div
                key={index}
                className={styles.card}
                onClick={() => openPostModalHandler(item.id)}
              >
                <Image
                  src={item.images[0].url}
                  width={item.images[0].width}
                  height={item.images[0].height}
                  alt={`gallery image-${index}`}
                />
              </div>
              <PostCardModal
                isOpen={isModalOpened}
                onChange={() => closePostModalHandler()}
                askConfirmation={isEditMode}
              >
                <ImageSlider images={item.images} aspectRatio={'1/1'} fitStyle={'cover'} />
                {CurrentInterface}
              </PostCardModal>
            </>
          ))}

        {/*{isLoading && (*/}
        {/*  <SkeletonCard count={6}>*/}
        {/*    <div className={styles.card} />*/}
        {/*  </SkeletonCard>*/}
        {/*)}*/}
      </div>

      {/*<div className={styles.loader} ref={trigger} />*/}
    </>
  )
}
