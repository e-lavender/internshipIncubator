import { SliderButton, SliderDots, SliderControlsType } from '@/components'

export const ImageSliderControls = ({
  images,
  imageIndex,
  setImageIndex,
  isModified,
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
          <SliderButton position={'left'} images={images} setImageIndex={setImageIndex} />

          <SliderButton
            position={'right'}
            images={images}
            setImageIndex={setImageIndex}
            inlineStyle={styles.button}
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
