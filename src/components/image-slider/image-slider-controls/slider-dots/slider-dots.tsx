import { clsx } from 'clsx'

import s from './slider-controls-dots.module.scss'

import { SliderControlsType } from '@/components'

export const SliderDots = ({
  images,
  imageIndex,
  inlineStyle,
  setImageIndex,
}: SliderControlsType) => {
  return (
    <div className={s.dotButtons} style={inlineStyle}>
      {images.map((_, index) => {
        return (
          <button key={index} className={s.dotButton} onClick={() => setImageIndex(index)}>
            <div className={clsx(s.dot, index === imageIndex && s.isActive)}></div>
          </button>
        )
      })}
    </div>
  )
}
