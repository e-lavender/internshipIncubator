import React from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'
type Props = {
  sliderValue: number
  setSliderValue: (sliderValue: number) => void
  isZoom?: boolean
}

export const SliderZoom = ({ sliderValue, setSliderValue, isZoom }: Props) => {
  const handleSliderChange = (value: number | number[]) => {
    setSliderValue(value as number)
  }

  return (
    <form>
      <Slider.Root
        className={isZoom ? s.SliderRootForZoom : s.SliderRoot}
        defaultValue={[sliderValue]}
        min={1}
        max={2}
        step={0.1}
        onValueChange={handleSliderChange}
        value={[sliderValue]}
      >
        <Slider.Track className={s.SliderTrack}>
          <Slider.Range className={s.SliderRange} />
        </Slider.Track>
        <Slider.Thumb className={s.SliderThumb} aria-label="Volume" />
      </Slider.Root>
    </form>
  )
}
