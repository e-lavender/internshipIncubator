import { useState } from 'react'

import { LandscapeCrop, OriginalCrop, PortraitCrop, SquareCrop, SVGIconType } from '@/app'

type CropperMenuType = {
  id: string
  icon: SVGIconType
  title: string
  onClick: (id: string) => void
}

export const useCropperMenu = (setAspectRatio: (aspectRatio: number) => void) => {
  const [cropMenuSelected, setCropMenuSelected] = useState('1')

  const cropperMenuVersion: CropperMenuType[] = [
    {
      id: '1',
      icon: OriginalCrop,
      title: 'Original',
      onClick: (id: string) => {
        if (setAspectRatio) {
          setAspectRatio(4 / 3)
        }
        setCropMenuSelected(id)
      },
    },
    {
      id: '2',
      icon: SquareCrop,
      title: '1:1',
      onClick: (id: string) => {
        if (setAspectRatio) {
          setAspectRatio(1)
        }
        setCropMenuSelected(id)
      },
    },
    {
      id: '3',
      icon: PortraitCrop,
      title: '4:5',
      onClick: (id: string) => {
        if (setAspectRatio) {
          setAspectRatio(4 / 5)
        }
        setCropMenuSelected(id)
      },
    },
    {
      id: '4',
      icon: LandscapeCrop,
      title: '16:9',
      onClick: (id: string) => {
        setAspectRatio(16 / 9)

        setCropMenuSelected(id)
      },
    },
  ]

  return { cropperMenuVersion, cropMenuSelected }
}
