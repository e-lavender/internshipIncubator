import { IMAGE_SLIDER_DATA } from '@/app/data/image-slider/image-slider-data'
import { ImageSlider } from '@/components'
import { NextPageWithLayout } from '@/pages/_app'

const Search: NextPageWithLayout = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '10rem 0 5rem' }}>Search</h1>
      <ImageSlider images={IMAGE_SLIDER_DATA} aspectRatio={'4/3'} fitStyle={'contain'} />
    </div>
  )
}

export default Search
