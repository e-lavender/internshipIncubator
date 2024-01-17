import { ImageModel } from '@/components'
import { ImageSliderWithFilters } from '@/components/image-sliderV2/image-slider-with-filters/image-slider-with-filters'

type FilterInterfaceProps = {
  images?: ImageModel[]
}
const FilterInterface = ({ images = [] }: FilterInterfaceProps) => {
  return <ImageSliderWithFilters images={images} aspectRatio={'4/3'} fitStyle={'contain'} />
}

export default FilterInterface
