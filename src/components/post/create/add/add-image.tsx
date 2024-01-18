import { ChangeEvent, MutableRefObject, useRef } from 'react'

import { nanoid } from '@reduxjs/toolkit'
import { clsx } from 'clsx'

import s from './add-image.module.scss'

import { MIME_TYPES, PlusCircle } from '@/app'
import { addImage, addMultipleImages } from '@/app/services/post/slider.slice'
import { useAppDispatch, useAppSelector } from '@/app/store/rtk.types'
import { AddedImages } from '@/components'

export const AddImage = () => {
  const addRef = useRef() as MutableRefObject<HTMLDivElement>
  const inputRef = useRef<HTMLInputElement>(null)

  const { JPG, PNG } = MIME_TYPES
  const acceptedFormats: string = [JPG, PNG].join(', ')

  const sliderImages = useAppSelector(state => state.slider.images)
  const dispatch = useAppDispatch()

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target

    if (!files) return

    if (files.length > 1) {
      // @ts-ignore
      const newImages = [...files].map(file => ({
        url: URL.createObjectURL(file),
        alt: '',
        id: nanoid(),
      }))

      dispatch(addMultipleImages(newImages))
    } else {
      const newImage = { url: URL.createObjectURL(files[0]), alt: '', id: nanoid() }

      dispatch(addImage(newImage))
    }
  }

  return (
    <>
      <div className={clsx(s.addContainer, sliderImages.length > 4 && s.scroll)} ref={addRef}>
        {!!sliderImages.length && <AddedImages />}

        {sliderImages.length < 10 && (
          <label id="cropper" className={s.label}>
            <PlusCircle />

            <input
              id="cropper"
              type="file"
              ref={inputRef}
              name="cover"
              onChange={handleImageUpload}
              accept={acceptedFormats}
              multiple
            />
          </label>
        )}
      </div>
    </>
  )
}
