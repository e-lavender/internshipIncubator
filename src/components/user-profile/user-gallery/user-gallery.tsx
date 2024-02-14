import { ReactElement, useState } from 'react'

import { clsx } from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'

import s from './user-gallery.module.scss'

import { useDisclose, useMatchMedia, useRtkStateHook } from '@/app'
import { IMAGE_SLIDER_DATA } from '@/app/data/image-slider/image-slider-data'
import {
  PostViewModel,
  PublicPostsGetPostsByUser,
} from '@/app/services/public-posts/public-posts.types'
import { EditModeInterface, ImageSlider, PostCardModal, ViewModeInterface } from '@/components'

export const UserProfileGallery = ({
  data,
  isMyProfile,
}: {
  data: PublicPostsGetPostsByUser | undefined
  isMyProfile: boolean
}) => {
  const { isMobile } = useMatchMedia()
  const [selected, setSelected] = useState<PostViewModel>()
  const router = useRouter()
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

  const {
    _state: { post },
  } = useRtkStateHook()

  const isEditMode: boolean = post.mode === 'edit'

  const { isOpen, onOpen, onClose } = useDisclose()

  return (
    <>
      <div className={styles.root}>
        {data?.items &&
          data?.items.length > 0 &&
          data?.items.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => {
                setSelected(item)
                onOpen()
                void router.push(`http://localhost:3000/${item.id}`, undefined, { shallow: true })
              }}
            >
              <Image
                src={item.images[0].url}
                width={item.images[0].width}
                height={item.images[0].height}
                alt={`gallery image-${index}`}
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
        isOpen={isOpen}
        onChange={() => {
          onClose()
          setSelected(undefined)
        }}
        askConfirmation={isEditMode}
        isModified={!isEditMode}
      >
        <ImageSlider images={selected?.images ?? []} aspectRatio={'1/1'} fitStyle={'cover'} />

        {isMyProfile ? (
          <EditModeInterface
            description={selected?.description || ''}
            url={selected?.avatarOwner || ''}
            userName={selected?.userName || ''}
          />
        ) : (
          <ViewModeInterface
            account={'public'}
            comments={[]}
            description={selected?.description || ''}
            postdId={selected?.id!}
            url={selected?.avatarOwner || ''}
            userName={selected?.userName || ''}
          />
        )}
      </PostCardModal>
      {/*<div className={styles.loader} ref={trigger} />*/}
    </>
  )
}
