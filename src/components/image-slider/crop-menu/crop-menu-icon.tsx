import React, { useMemo } from 'react'

import { IconType } from '../image-slider-types'

import { Cropping } from '@/app/assets/svg/cropping'
import { ImageCropper } from '@/app/assets/svg/image-cropper'
import { ZoomCropper } from '@/app/assets/svg/zoom-cropper'

const CropMenuIcon = ({ color, type }: { color?: string; type: IconType }) => {
  const icons: Record<IconType, React.ReactNode> = useMemo(() => {
    return {
      cropper: <Cropping color={color} />,
      zoom: <ZoomCropper color={color} />,
      image: <ImageCropper color={color} />,
    }
  }, [color])

  return icons[type]
}

export default CropMenuIcon
