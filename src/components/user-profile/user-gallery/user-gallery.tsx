import React, { ReactElement, useEffect, useState } from 'react'

import { clsx } from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'

import s from './user-gallery.module.scss'

import { useDisclose, useMatchMedia, useRtkStateHook } from '@/app'
import { PublicPostsGetPostsByUser } from '@/app/services/public-posts/public-posts.types'
import {
  EditModeInterface,
  GalleryItem,
  ImageSlider,
  PostCardModal,
  ViewModeInterface,
} from '@/components'

export const UserProfileGallery = ({
  data,
  userId,
}: {
  data: PublicPostsGetPostsByUser | undefined
  userId: string | number | string[]
}) => {
  const { isMobile } = useMatchMedia()

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

  return (
    <>
      <div className={styles.root}>
        {data?.items &&
          data?.items.length > 0 &&
          data?.items.map((item, index) => (
            <div key={index} className={styles.card}>
              <GalleryItem
                src={item.images[0].url}
                width={item.images[0].width}
                height={item.images[0].height}
                alt={`gallery image-${index}`}
                images={item.images}
                id={item.id}
                ownerId={item.ownerId}
              />
            </div>
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
