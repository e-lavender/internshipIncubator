import React from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'
type Props = {
  sliderValue: number
  setSliderValue: (sliderValue: number) => void
}

export const SliderComponent = ({ sliderValue, setSliderValue }: Props) => {
  const handleSliderChange = (value: number | number[]) => {
    setSliderValue(value as number)
  }

  return (
    <form>
      <Slider.Root
        className={s.SliderRoot}
        defaultValue={[sliderValue]}
        min={1}
        max={50}
        step={1}
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
