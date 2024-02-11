import { clsx } from 'clsx'
import Image from 'next/image'

import s from './added-images.module.scss'

import { CloseIcon } from '@/app'
import { useRtkStateHook } from '@/app/hooks/useRtkState.hook'
import { deleteImage, setCurrentImageIndex } from '@/app/services/posts/slider.slice'

export const AddedImages = () => {
  const { _state, _dispatch } = useRtkStateHook()
  const { images: selectedImages } = _state.slider

  const onDeleteImage = ({ id }: { id: string }) => {
    _dispatch(deleteImage({ id }))
  }

  const chooseImageByClick = (index: number) => {
    _dispatch(setCurrentImageIndex({ index }))
  }

  const styles = clsx(s.hide, selectedImages.length > 1 && s.close)

  return (
    <>
      {
        // @ts-ignore
        selectedImages.map((image, index) => (
          <div key={image.id} className={s.addedPhoto} onClick={() => chooseImageByClick(index)}>
            <CloseIcon
              className={styles}
              width={12}
              height={12}
              // @ts-ignore
              onClick={() => onDeleteImage({ id: image.id })}
            />

            <Image src={image.url} alt={image.alt} height={82} width={80} />
          </div>
        ))
      }
    </>
  )
}
