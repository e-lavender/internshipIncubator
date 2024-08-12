import { SliderControlsType } from '@/components'
import { clsx } from 'clsx'

import s from './slider-controls-dots.module.scss'

export const SliderDots = ({
  imageIndex,
  imagesLength,
  inlineStyle,
  setImageIndex,
}: SliderControlsType) => {
  const emptyArray = new Array(imagesLength).fill('')

  return (
    <div className={s.dotButtons} style={inlineStyle}>
      {emptyArray.map((_, index) => {
        return (
          <button className={s.dotButton} key={index} onClick={() => setImageIndex(index)}>
            <div className={clsx(s.dot, index === imageIndex && s.isActive)}></div>
          </button>
        )
      })}
    </div>
  )
}
