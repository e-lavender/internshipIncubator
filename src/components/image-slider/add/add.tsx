import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

import { nanoid } from '@reduxjs/toolkit'

import s from './add.module.scss'

import { PlusCircle } from '@/app/assets/svg/plus-circle-outline'
import { AddedImages } from '@/components/image-slider/add/addedImages/addedImages'
import { ImageModel } from '@/components/image-slider/image-slider-types'

type Props = {
  addedImages: ImageModel[]
  setAddedImages: (images: ImageModel[]) => void
  image?: string
  croppedImage?: string
}

export const Add = ({ image, addedImages, setAddedImages, croppedImage }: Props) => {
  const [isAddOpen, setIsAddOpen] = useState(false)
  const addRef = useRef() as MutableRefObject<HTMLDivElement>
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (addRef.current && !e.composedPath().includes(addRef.current)) {
        setIsAddOpen(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [])

  useEffect(() => {
    setAddedImages(addedImages)
  }, [addedImages])

  const handleImageUpload = (e: any) => {
    setAddedImages([
      ...addedImages,
      { url: URL.createObjectURL(e.target.files[0]), alt: '', id: nanoid() },
    ])
  }

  return (
    <div className={s.addContainer} ref={addRef}>
      {addedImages.length && (
        <AddedImages
          croppedImage={croppedImage}
          addedImages={addedImages}
          setAddedImages={setAddedImages}
          image={image}
        />
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
