import { useState } from 'react'

import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { ImageSliderWithCropper } from '@/components'

type CropInterfaceProps = {
  images?: PostImageViewModel[]
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
