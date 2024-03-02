import { SliderButton, SliderDots, SliderControlsType } from '@/components'

export const ImageSliderControls = ({
  images,
  imageIndex,
  setImageIndex,
  isModified,
  isEditMode,
}: SliderControlsType) => {
  const showControlButtons = images.length > 1

  const styles = {
    button: isModified && { right: '50%' },
    dots: isModified && { left: '25%' },
  }

  return (
    <>
      {showControlButtons && (
        <>
          <SliderButton
            position={'left'}
            images={images}
            setImageIndex={setImageIndex}
            isEditMode={isEditMode}
          />

          <SliderButton
            position={'right'}
            images={images}
            setImageIndex={setImageIndex}
            inlineStyle={styles.button}
            isEditMode={isEditMode}
          />

          <SliderDots
            images={images}
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
            inlineStyle={styles.dots}
          />
        </>
      )}
    </>
  )
}
