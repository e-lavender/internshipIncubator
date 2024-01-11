import React, { useRef, useState } from 'react'

import { nanoid } from '@reduxjs/toolkit'

import s from './create-new-post-modal.module.scss'

import { AccountIcon, MIME_TYPES } from '@/app'
import { useCreatePostModal } from '@/app/services/modals/modals.hooks'
import ImageSlider from '@/components/image-slider/image-slider'
import { ImageModel } from '@/components/image-slider/image-slider-types'
import { useImageValidation } from '@/modules/account/account-image-picker/image-picker-modal/useImageValidation'
import { Button, FileInput, Modal, Typography } from '@/ui'

const CreateNewPostModal = () => {
  const [addedImages, setAddedImages] = useState<ImageModel[]>([])
  const [aspectRatio, setAspectRatio] = useState(4 / 3)
  const [activeFilter, setActiveFilter] = useState('')

  const [isCrop, setIsCrop] = useState(false)

  const { isOpen, closeCreatePostModal: close } = useCreatePostModal()
  const { url, step, stepUp } = useImageValidation()

  const interfaceVariants = {
    1: (
      <Interface1
        url={url}
        callback={stepUp}
        setAddedImages={setAddedImages}
        addedImages={addedImages}
      />
    ),
    2: (
      <Interface2
        url={url}
        addedImages={addedImages}
        setAddedImages={setAddedImages}
        aspectRatio={aspectRatio}
        setAspectRatio={setAspectRatio}
        setIsCrop={setIsCrop}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    ),
  }

  const CurrentInterface: JSX.Element = interfaceVariants[step]

  return (
    <Modal open={isOpen} onChange={close}>
      <Modal.Button asChild />
      <Modal.Content title={'Add Photo'} className={s.content} isCrop={isCrop}>
        {CurrentInterface}
      </Modal.Content>
    </Modal>
  )
}

type InterfaceType1 = {
  url: string
  error?: string
  callback: (file: File) => void
  addedImages: ImageModel[]
  setAddedImages: (addedImages: ImageModel[]) => void
}
const Interface1 = ({ callback, error, setAddedImages, addedImages, url }: InterfaceType1) => {
  const formRef = useRef<HTMLFormElement>(null)
  const { JPG, PNG } = MIME_TYPES

  const ErrorMessage = error && (
    <Typography variant={'regular-14'} className={s.error}>
      <b>Error!</b> {error}
    </Typography>
  )
  const handleUpload = () => {
    if (!formRef.current) return

    const { files } = formRef.current.file

    setAddedImages([
      {
        url: URL.createObjectURL(files[0]),
        alt: files[0].name,
        id: nanoid(),
      },
    ])
    void callback(files[0])
  }

  return (
    <>
      {ErrorMessage}
      <div className={s.loopBackImg}>
        <AccountIcon />
      </div>
      <div className={s.buttons}>
        <FileInput
          ref={formRef}
          className={s.input}
          label={'Select from computer'}
          onUpload={handleUpload}
          accept={[JPG, PNG]}
        />
        <Button variant={'outlined'} onClick={() => {}}>
          {'Open draft'}
        </Button>
      </div>
    </>
  )
}

type InterfaceType2 = {
  url: string
  addedImages: ImageModel[]
  setAddedImages: (addedImages: ImageModel[]) => void
  aspectRatio: number
  setAspectRatio: (aspectRatio: number) => void
  setIsCrop: (isCrop: boolean) => void
  activeFilter: string
  setActiveFilter: (activeFilter: string) => void
}

const Interface2 = ({
  url,
  addedImages,
  setAddedImages,
  aspectRatio,
  setAspectRatio,
  setIsCrop,
  activeFilter,
  setActiveFilter,
}: InterfaceType2) => {
  return (
    <>
      <ImageSlider
        images={addedImages}
        setAddedImages={setAddedImages}
        setIsCrop={setIsCrop}
        fitStyle={'cover'}
        aspectRatio={aspectRatio}
        setAspectRatio={setAspectRatio}
        withCropper={true}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    </>
  )
}

export default CreateNewPostModal
