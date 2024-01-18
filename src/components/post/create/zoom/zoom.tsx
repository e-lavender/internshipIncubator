import React from 'react'

import { SliderComponent } from '@/components'

type Props = {
  zoom: number
  setZoom: (zoom: number) => void
}

export const Zoom = ({ zoom, setZoom }: Props) => {
  return <SliderComponent sliderValue={zoom} setSliderValue={setZoom} isZoom />
}
