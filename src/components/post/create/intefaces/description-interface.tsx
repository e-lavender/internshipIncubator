import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { ImageSlider, PostDescription } from '@/components'

type DescriptionInterfaceProps = {
  images: PostImageViewModel[]
}

export const DescriptionInterface = ({ images }: DescriptionInterfaceProps) => {
  return (
    <>
      <ImageSlider images={images} aspectRatio={'1/1'} fitStyle={'contain'} />
      <PostDescription />
    </>
  )
}
