import { clsx } from 'clsx'
import Image from 'next/image'

import s from './added-images.module.scss'

import { CloseIcon } from '@/app'
import { deleteImage, setCurrentImageIndex } from '@/app/services/post/slider.slice'
import { useAppDispatch, useAppSelector } from '@/app/store/rtk.types'

export const AddedImages = () => {
  const chosenImages = useAppSelector(state => state.slider.images)
  const dispatch = useAppDispatch()

  const onDeleteImage = ({ id }: { id: string }) => {
    dispatch(deleteImage({ id }))
  }

  const chooseImageByClick = (index: number) => {
    dispatch(setCurrentImageIndex({ index }))
  }

  const styles = clsx(s.hide, chosenImages.length > 1 && s.close)

  return (
    <>
      {chosenImages.map((image, index) => (
        <div key={image.id} className={s.addedPhoto} onClick={() => chooseImageByClick(index)}>
          <CloseIcon
            className={styles}
            width={12}
            height={12}
            onClick={() => onDeleteImage({ id: image.id })}
          />

          <Image src={image.url} alt={image.alt} height={82} width={80} />
        </div>
      ))}
    </>
  )
}
