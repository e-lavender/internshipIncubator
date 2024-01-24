import { ImageSlider, ImageModel, PostDescription } from '@/components'

type DescriptionInterfaceProps = {
  images: ImageModel[]
}

export const DescriptionInterface = ({ images }: DescriptionInterfaceProps) => {
  return (
    <>
      <ImageSlider images={images} aspectRatio={'1/1'} fitStyle={'contain'} />
      <PostDescription />
    </>
  )
}
