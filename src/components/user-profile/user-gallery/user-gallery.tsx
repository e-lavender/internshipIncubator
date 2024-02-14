import React, { ReactElement, useEffect } from 'react'

import { clsx } from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'

import s from './user-gallery.module.scss'

import { useDisclose, useMatchMedia, useRtkStateHook } from '@/app'
import { IMAGE_SLIDER_DATA } from '@/app/data/image-slider/image-slider-data'
import { PublicPostsGetAll } from '@/app/services/public-posts/public-posts.types'
import { EditModeInterface, ImageSlider, PostCardModal, ViewModeInterface } from '@/components'

type InterfaceType = { [ViewMode: string]: ReactElement }

export const UserProfileGallery = ({ data }: { data: PublicPostsGetAll | undefined }) => {
  const { isMobile } = useMatchMedia()
  const { isOpen: isModalOpened, onClose: closeModal, onOpen: openModal } = useDisclose()
  const {
    _state: { post },
  } = useRtkStateHook()

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

  console.log(data?.items)

  return (
    <>
      <div className={styles.root}>
        {data?.items &&
          data?.items.length > 0 &&
          data?.items.map((item, index) => (
            <>
              <div key={index} className={styles.card} onClick={openModal}>
                <Image
                  src={item.images[0].url}
                  width={item.images[0].width}
                  height={item.images[0].height}
                  alt={`gallery image-${index}`}
                />
              </div>
              <PostCardModal
                isOpen={isModalOpened}
                onChange={closeModal}
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
