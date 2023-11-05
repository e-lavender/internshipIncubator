import { clsx } from 'clsx'

import s from '../user-gallery.module.scss'

import { useMatchMedia } from '@/app'
import { SkeletonCard } from '@/ui'
export const UserGallerySkeleton = () => {
  const { isMobile } = useMatchMedia()

  const styles = {
    root: clsx(s.container, isMobile && s.mobile),
    card: clsx(s.card, isMobile && s.mobile),
  }

  return (
    <div className={styles.root}>
      <SkeletonCard count={12}>
        <div className={styles.card}></div>
      </SkeletonCard>
    </div>
  )
}
