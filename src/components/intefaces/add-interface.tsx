import React, { useRef } from 'react'

import { nanoid } from '@reduxjs/toolkit'

import { AccountIcon, MIME_TYPES } from '@/app'
import { ImageModel } from '@/components/image-slider/image-slider-types'
import s from '@/components/modals/create-new-post-modal/create-new-post-modal.module.scss'
import { Button, FileInput, Typography } from '@/ui'

type AddInterfaceProps = {
  url: string
  error?: string
  callback: (file: File) => void
  addedImages: ImageModel[]
  setAddedImages: (addedImages: ImageModel[]) => void
}
const AddInterface = ({ callback, error, setAddedImages, addedImages, url }: AddInterfaceProps) => {
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

export default AddInterface
