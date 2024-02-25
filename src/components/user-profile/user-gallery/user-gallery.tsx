import React, { ReactElement, useMemo } from 'react'

import { clsx } from 'clsx'
import { useRouter } from 'next/router'

import s from './user-gallery.module.scss'

import { useDisclose, useMatchMedia } from '@/app'
import { menuNavigation } from '@/app/constants'
import { IMAGE_SIZE } from '@/app/constants/enums'
import { usePostCardModal } from '@/app/services/modals/modals.hooks'
import { useGetPublicPostsByUserQuery } from '@/app/services/public-posts/public-posts.api'
import {
  EditModeInterface,
  GalleryItem,
  ImageSlider,
  PostCardModal,
  ViewModeInterface,
} from '@/components'

type InterfaceType = { [ViewMode: string]: ReactElement }

export const UserProfileGallery = ({
  ownerId,
  isMyProfile,
}: {
  ownerId: number
  isMyProfile: boolean
}) => {
  const { isMobile } = useMatchMedia()
  const { data: posts } = useGetPublicPostsByUserQuery({
    userId: ownerId,
    pageSize: 4,
  })
  const {
    mode,
    isOpenPostCardModal,
    openPostCardModal,
    closePostCardModal,
    changePostCardModalMode,
    setPostCardModalSelectedPost,
    selectedPost,
    clearPostCardModal,
  } = usePostCardModal()

  const interfaces: InterfaceType = useMemo(() => {
    return {
      view: (
        <ViewModeInterface
          userName={selectedPost?.userName}
          isMyProfile={isMyProfile}
          description={selectedPost?.description}
        />
      ),
      edit: (
        <EditModeInterface
          userName={selectedPost?.userName}
          postId={selectedPost?.id!}
          description={selectedPost?.description}
        />
      ),
    }
  }, [isMyProfile, selectedPost?.description, selectedPost?.id, selectedPost?.userName])

  const CurrentInterface: ReactElement = interfaces[mode]

  const closePostModalHandler = () => {
    closePostCardModal()
    clearPostCardModal()
    window.history.pushState(null, 'post', menuNavigation.profile(ownerId))
  }

  const openPostModalHandler = (postId: number) => {
    const selectedPost = posts?.items.find(post => {
      return post.id === postId
    })

    selectedPost && setPostCardModalSelectedPost(selectedPost)
    openPostCardModal()
    window.history.pushState(null, 'post', menuNavigation.post(ownerId, postId))
  }
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
        {posts?.items &&
          posts?.items.length > 0 &&
          posts?.items.map((item, index) => (
            <div key={index} className={styles.card}>
              <GalleryItem
                src={item.images[0].url}
                width={item.images[0].width}
                height={item.images[0].height}
                alt={`gallery image-${index}`}
                postId={item.id}
                openPostModalHandler={openPostModalHandler}
              />
            </div>
          ))}

        {/*{isLoading && (*/}
        {/*  <SkeletonCard count={6}>*/}
        {/*    <div className={styles.card} />*/}
        {/*  </SkeletonCard>*/}
        {/*)}*/}
      </div>
      <PostCardModal
        isOpen={isOpenPostCardModal || false}
        onChange={closePostModalHandler}
        // askConfirmation={isEditMode}
      >
        <ImageSlider
          images={selectedPost?.images.filter(image => image.imageSize === IMAGE_SIZE.MEDIUM)}
          aspectRatio={'1/1'}
          fitStyle={'cover'}
        />
        {CurrentInterface}
      </PostCardModal>
      {/*<div className={styles.loader} ref={trigger} />*/}
    </>
  )
}
