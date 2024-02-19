import s from './post-card.module.scss'

import { IMAGE_SLIDER_DATA } from '@/app/data/image-slider/image-slider-data'
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

export const PostCard = (props: PostTypes) => {
  const [ind1, ind2] = [0, 0]
    .map(_ => Math.floor(Math.random() * IMAGE_SLIDER_DATA.length))
    .sort((a, b) => a - b)

  return (
    <Card className={s.container}>
      <CardHeader {...props} />
      <ImageSlider images={[]} aspectRatio={'1/1'} fitStyle={'cover'} />
      <CardOptions />
      <CardDescription
        {...props}
        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, totam!'}
      />
      <CardInformation likes={315} cardType={'regular'} />
      <CommentsList cardType={'regular'} {...props} />
      <AddComment />
    </Card>
  )
}
