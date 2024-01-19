import { ImageModel, ImageSliderWithFilters } from '@/components'

type FilterInterfaceProps = {
  images?: ImageModel[]
}
export const FilterInterface = ({ images = [] }: FilterInterfaceProps) => {
  return <ImageSliderWithFilters images={images} aspectRatio={'4/3'} fitStyle={'contain'} />
}
