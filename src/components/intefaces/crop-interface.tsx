import { useState } from 'react'

import { ImageModel } from '@/components'
import { ImageSliderWithCropper } from '@/components/image-sliderV2/image-slider-with-cropper/image-slider-with-cropper'

type CropInterfaceProps = {
  images?: ImageModel[]
}

const CropInterface = ({ images = [] }: CropInterfaceProps) => {
  const [aspectRatio, setAspectRatio] = useState(4 / 3)

  return (
    <ImageSliderWithCropper
      images={images}
      aspectRatio={aspectRatio}
      setAspectRatio={setAspectRatio}
      fitStyle={'cover'}
    />
  )
}

export default CropInterface
