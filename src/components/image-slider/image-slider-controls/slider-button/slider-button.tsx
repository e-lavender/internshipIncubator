import { clsx } from 'clsx'

import s from './slider-controls-button.module.scss'

import { ChevronLeft, ChevronRight } from '@/app'
import { SliderControlsType } from '@/components'

type ControlsButtonType = {
  position: 'left' | 'right'
} & Omit<SliderControlsType, 'imageIndex'>
export const SliderButton = ({
  position,
  images,
  inlineStyle,
  setImageIndex,
  isEditMode,
}: ControlsButtonType) => {
  const showNextImage = () => {
    setImageIndex(index => {
      if (index === images.length - 1) return 0

      return index + 1
    })
  }

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) return images.length - 1

      return index - 1
    })
  }

  const buttonVariant = {
    style: clsx(isEditMode ? s.editModeSlider : s.buttonSlider, s[position]),
    onClickAction: position === 'left' ? showPrevImage : showNextImage,
    icon: position === 'left' ? <ChevronLeft /> : <ChevronRight />,
  }

  return (
    <button
      className={buttonVariant.style}
      style={inlineStyle}
      onClick={buttonVariant.onClickAction}
    >
      <div className={s.icon}>{buttonVariant.icon}</div>
    </button>
  )
}
