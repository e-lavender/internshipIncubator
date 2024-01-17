import { ImageSlider, ImageModel } from '@/components'
import { PostDescription } from '@/components/post-descrition/post-description'

type DescriptionInterfaceProps = {
  images?: ImageModel[]
}

const DescriptionInterface = ({ images = [] }: DescriptionInterfaceProps) => {
  return (
    <>
      <ImageSlider images={images} aspectRatio={'1/1'} fitStyle={'contain'} />
      <PostDescription />
    </>
  )
}

export default DescriptionInterface
