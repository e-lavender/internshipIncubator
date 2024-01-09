import React, { useState } from 'react'

import Cropper from 'react-easy-crop'

import { IMAGE_SLIDER_DATA } from '@/app/data/image-slider/image-slider-data'
import ImageSlider from '@/components/image-slider/image-slider'

const SliderTestPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
      <ImageSlider
        withCropper
        aspectRatio={'1 / 1'}
        images={IMAGE_SLIDER_DATA}
        fitStyle={'cover'}
        onClick={id => {
          console.log(id)
        }}
      />
    </div>
  )
}

export default SliderTestPage
