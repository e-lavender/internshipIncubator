import s from './post-card.module.scss'

import { IMAGE_SLIDER_DATA } from '@/app/data/image-slider/image-slider-data'
import { PostModel } from '@/app/services/posts/posts.types'
import {
  AddComment,
  CardDescription,
  CardHeader,
  CardInformation,
  CardOptions,
  CommentsList,
  PostTypes,
  ImageSlider,
} from '@/components'
import { Card } from '@/ui'

export const PostCard = (props: PostModel) => {
  return (
    <Card className={s.container}>
      <CardHeader {...props} />
      <ImageSlider {...props} aspectRatio={'1/1'} fitStyle={'cover'} />
      <CardOptions />
      <CardDescription {...props} />
      <CardInformation likes={315} cardType={'regular'} />
      <CommentsList {...props} />
      <AddComment />
    </Card>
  )
}
