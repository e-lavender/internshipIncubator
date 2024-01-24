import { useState } from 'react'

import { ImageModel, ImageSliderWithCropper } from '@/components'

type CropInterfaceProps = {
  images?: ImageModel[]
}

export const CropInterface = ({ images = [] }: CropInterfaceProps) => {
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
