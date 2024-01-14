import React from 'react'

import ImageSlider from '@/components/image-slider/image-slider'
import { ImageModel } from '@/components/image-slider/image-slider-types'
import Interface3 from '@/components/intefaces/filter-interface'
import { PostDescription } from '@/components/post-descrition/post-description'

type InterfaceType4 = {
  addedImages: ImageModel[]
  setAddedImages: (addedImages: ImageModel[]) => void
  activeFilter: string
}

const DescriptionInterface = ({ activeFilter, addedImages, setAddedImages }: InterfaceType4) => {
  return (
    <>
      <ImageSlider
        images={addedImages}
        setAddedImages={setAddedImages}
        aspectRatio={'1/1'}
        fitStyle={'cover'}
        withFilters={true}
        activeFilter={activeFilter}
      />
      <PostDescription />
    </>
  )
}

export default DescriptionInterface
