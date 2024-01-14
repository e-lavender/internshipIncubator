import React from 'react'

import ImageSlider from '@/components/image-slider/image-slider'
import { ImageModel } from '@/components/image-slider/image-slider-types'
import Interface1 from '@/components/intefaces/add-interface'

type InterfaceType2 = {
  url: string
  callback: (file: File) => void
  addedImages: ImageModel[]
  setAddedImages: (addedImages: ImageModel[]) => void
  aspectRatio: number
  setAspectRatio: (aspectRatio: number) => void
  activeFilter: string
  setActiveFilter: (activeFilter: string) => void
}

const CropInterface = ({
  addedImages,
  setAddedImages,
  aspectRatio,
  setAspectRatio,
}: InterfaceType2) => {
  return (
    <>
      <ImageSlider
        images={addedImages}
        setAddedImages={setAddedImages}
        fitStyle={'cover'}
        aspectRatio={aspectRatio}
        setAspectRatio={setAspectRatio}
        withCropper={true}
      />
    </>
  )
}

export default CropInterface
