import { SliderButton, SliderControlsType, SliderDots } from '@/components'

export const ImageSliderControls = ({
  imageIndex,
  imagesLength,
  isEditMode,
  isModified,
  setImageIndex,
}: SliderControlsType) => {
  const showControlButtons = imagesLength > 1

  const styles = {
    button: isModified && { right: '50%' },
    dots: isModified && { left: '25%' },
  }

  return (
    <>
      {showControlButtons && (
        <>
          <SliderButton
            imagesLength={imagesLength}
            isEditMode={isEditMode}
            position={'left'}
            setImageIndex={setImageIndex}
          />

          <SliderButton
            imagesLength={imagesLength}
            inlineStyle={styles.button}
            isEditMode={isEditMode}
            position={'right'}
            setImageIndex={setImageIndex}
          />

          <SliderDots
            imageIndex={imageIndex}
            imagesLength={imagesLength}
            inlineStyle={styles.dots}
            setImageIndex={setImageIndex}
          />
        </>
      )}
    </>
  )
}
