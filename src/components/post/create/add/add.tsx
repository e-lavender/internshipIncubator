import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

import { nanoid } from '@reduxjs/toolkit'

import s from './add.module.scss'

import { PlusCircle } from '@/app/assets/svg/plus-circle-outline'
import { ImageModel } from '@/components/image-slider/image-slider-types'
import { AddedImages } from '@/components/post/create/add/addedImages/addedImages'

type Props = {
  addedImages: ImageModel[]
  setAddedImages?: (addedImages: ImageModel[]) => void
  image?: string
  croppedImage?: string
}

export const Add = ({ image, addedImages, setAddedImages, croppedImage }: Props) => {
  const addRef = useRef() as MutableRefObject<HTMLDivElement>
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (setAddedImages) {
      setAddedImages(addedImages)
    }
  }, [addedImages])

  const handleImageUpload = (e: any) => {
    if (setAddedImages) {
      setAddedImages([
        ...addedImages,
        { url: URL.createObjectURL(e.target.files[0]), alt: '', id: nanoid() },
      ])
    }
  }

  return (
    <div className={s.addContainer} ref={addRef}>
      {addedImages.length && (
        <AddedImages addedImages={addedImages} setAddedImages={setAddedImages} />
      )}
      {addedImages.length < 10 ? (
        <label
          id="cropper"
          className={addedImages.length === 1 ? s.addTheSecondPhoto : s.addPhotoBtn}
        >
          <PlusCircle />
          <input
            id="cropper"
            type="file"
            ref={inputRef}
            name="cover"
            onChange={handleImageUpload}
            accept="image/png, image/jpeg, image/jpg"
            style={{ display: 'none' }}
          />
        </label>
      ) : (
        ''
      )}
    </div>
  )
}
