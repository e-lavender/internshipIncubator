import { useRef } from 'react'

import { clsx } from 'clsx'

import s from './user-gallery.module.scss'

import { useMatchMedia } from '@/app'
import { GALLERY_DATA } from '@/app/data'
import { useInfiniteScroll } from '@/app/hooks/use-infinite-scroll'
import { GalleryItem } from '@/components'
import { SkeletonCard } from '@/ui'

export const UserProfileGallery = ({ data = ['test'] }: any) => {
  const { isMobile } = useMatchMedia()

  const trigger = useRef<HTMLDivElement>(null)
  const { content, isLoading } = useInfiniteScroll(GALLERY_DATA, trigger, scrollHandler, 100)

  function scrollHandler(): Promise<any[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const [index1, index2] = [0, 0]
          .map(() => Math.floor(Math.random() * GALLERY_DATA.length))
          .sort((a, b) => a - b)

        res(GALLERY_DATA.slice(index1, index2))
      }, 1500)
    })
  }

  const styles = {
    root: clsx(s.container, isMobile && s.mobile),
    card: clsx(s.card, isMobile && s.mobile),
    loader: clsx(s.card, isMobile && s.mobile, s.loader),
  }

  return (
    <>
      <div className={styles.root}>
        {data?.length > 0 &&
          content?.map((url, index) => (
            <div key={index} className={styles.card}>
              <GalleryItem src={url} alt={`gallery image-${index}`} />
            </div>
          ))}

        {isLoading && (
          <SkeletonCard count={6}>
            <div className={styles.card} />
          </SkeletonCard>
        )}
      </div>

      <div className={styles.loader} ref={trigger} />
    </>
  )
}
