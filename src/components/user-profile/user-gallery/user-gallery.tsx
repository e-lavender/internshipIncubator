import { clsx } from 'clsx'

import s from './user-gallery.module.scss'

import { useMatchMedia } from '@/app'
import { GALLERY_DATA } from '@/app/data'
import { GalleryItem } from '@/components'

export const UserProfileGallery = ({ data = ['test'] }: any) => {
  const { isMobile } = useMatchMedia()

  const styles = {
    root: clsx(s.container, isMobile && s.mobile),
    card: clsx(s.card, isMobile && s.mobile),
  }

  return (
    <div className={styles.root}>
      {data?.length > 0
        ? GALLERY_DATA?.map((url, index) => (
            <div key={index} className={styles.card}>
              <GalleryItem src={url} alt={`gallery image-${index}`} />
            </div>
          ))
        : null}
    </div>
  )
}
