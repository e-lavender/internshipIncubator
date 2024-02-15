import { useState } from 'react'

import s from './post-item.module.scss'

import { IMAGE_SLIDER_DATA } from '@/app/data/image-slider/image-slider-data'
import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { Avatar, ImageSlider } from '@/components'
import { Typography } from '@/ui'

type Props = {
  createdAt: string
  images: PostImageViewModel[]
  description: string
  userName: string
}

export const PostItem = ({ createdAt, images, description, userName }: Props) => {
  const [showMore, setShowMore] = useState(false)
  const [collapse, setCollapse] = useState(false)

  const collapseHandler = () => {
    setCollapse(!collapse)
    setShowMore(!showMore)
  }

  const date = new Date(createdAt ? createdAt : '').toLocaleDateString('en-US', {
    year: 'numeric',
    day: '2-digit',
    month: 'long',
  })

  return (
    <div className={s.post}>
      <div className={collapse ? s.collapsePhoto : s.photo}>
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
  )
}
