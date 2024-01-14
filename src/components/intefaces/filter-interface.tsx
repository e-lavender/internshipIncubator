import React from 'react'

import { SelectedImages } from '@/components/filters/selected-images/selected-images'
import ImageSlider from '@/components/image-slider/image-slider'
import { ImageModel } from '@/components/image-slider/image-slider-types'

type InterfaceType3 = {
  callback: (file: File) => void
  url: string
  addedImages: ImageModel[]
  setAddedImages: (addedImages: ImageModel[]) => void

  activeFilter: string
  setActiveFilter: (activeFilter: string) => void
}
const FilterInterface = ({
  addedImages,
  activeFilter,
  setActiveFilter,
  setAddedImages,
}: InterfaceType3) => {
  return (
    <>
      <ImageSlider
        images={addedImages}
        aspectRatio={'1/1'}
        fitStyle={'cover'}
        activeFilter={activeFilter}
        setAddedImages={setAddedImages}
      />
      <SelectedImages setActiveFilter={setActiveFilter} />
    </>
  )
}

export default FilterInterface
