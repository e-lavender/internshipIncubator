import { useState } from 'react'

import s from './post-item.module.scss'

import { IMAGE_SLIDER_DATA } from '@/app/data/image-slider/image-slider-data'
import { Avatar, ImageSlider } from '@/components'
import { Typography } from '@/ui'

export const PostItem = () => {
  const [showMore, setShowMore] = useState(false)
  const [collapse, setCollapse] = useState(false)
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit. Donec vitae neque euismod, vulputate metus vel, semper erat. Aliquam vestibulum maximus fermentum. Aliquam vestibulum maximus fermentum. Aliquam vestibulum maximus fermentum.'

  const collapseHandler = () => {
    setCollapse(!collapse)
    setShowMore(!showMore)
  }

  return (
    <div className={s.post}>
      <div className={collapse ? s.collapsePhoto : s.photo}>
        <ImageSlider
          images={IMAGE_SLIDER_DATA.slice(1, 3)}
          aspectRatio={'1/1'}
          fitStyle={'cover'}
          width={234}
        />
      </div>
      <div className={s.header}>
        <Avatar width={36} height={36} />
        <div className={s.footerInfo}>
          <Typography variant="h3">URLProfile</Typography>
        </div>
      </div>
      <Typography className={s.status} variant={'small'}>
        22 min ago
      </Typography>
      <div className={s.desc}>
        <Typography variant={'regular-14'}>
          {showMore ? text : `${text.substring(0, 90)}`}
        </Typography>
        <Typography
          as={'button'}
          variant={'regular-14'}
          className={s.button}
          onClick={collapseHandler}
        >
          {showMore ? 'Hide' : 'Show more'}
        </Typography>
      </div>
    </div>
  )
}
