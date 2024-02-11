import React, { ReactElement, useEffect, useRef, useState } from 'react'

import { clsx } from 'clsx'
import AvatarEditor from 'react-avatar-editor'
import { toast } from 'react-toastify'

import s from './image-picker-modal.module.scss'

import { useFileCreationWithSteps, MIME_TYPES, useTranslation } from '@/app'
import { useUploadAvatarMutation } from '@/app/services/profile/profile.api'
import { showError } from '@/app/utils'
import { Avatar, LoaderV2 } from '@/components'
import { SliderZoom } from '@/components/image-slider/slider-zoom/slider-zoom'
import { Button, FileInput, Modal, Typography } from '@/ui'

type ImagePickerModalType = {
  error?: string
  showModal?: boolean
  onChange?: (open: boolean) => void
  isOpen: boolean
  onClose: () => void
}

export const ImagePickerModal = ({ isOpen, onClose }: ImagePickerModalType) => {
  const { url, step, initialStepWithValidation, stepBackward, errorText, clearError, blob } =
    useFileCreationWithSteps()
  const editorRef = useRef<AvatarEditor>(null)

  const [uploadFile, { isLoading: isAvatarUploading }] = useUploadAvatarMutation()

  const { t } = useTranslation()
  const { modal } = t.profileSettings.generalSettings.profileImage

  const styles = clsx(!errorText && s.avatar)

  const onModalClose = () => {
    if (step === 2) {
      stepBackward()
    }

    onClose()
  }

  const uploadForm = (form: FormData) => {
    uploadFile(form)
      .unwrap()
      .then(() => toast.success('Image uploaded'))
      .catch(showError)
  }

  const uploadAvatar = () => {
    const formData = new FormData()

    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas()

      canvas.toBlob(blob => {
        if (blob) {
          const file = new File([blob], 'avatar', { type: blob.type })

          formData.append('file', file)

          uploadForm(formData)

          stepBackward()
          onClose && onClose()
        }
      })
    } else {
      formData.append('file', blob as Blob)

      uploadForm(formData)

      stepBackward()
      onClose && onClose()
    }
  }

  const interfaceVariants: { [Key: string]: ReactElement } = {
    1: (
      <Interface1
        url={url}
        error={errorText}
        styles={styles}
        callback={initialStepWithValidation}
      />
    ),
    2: <Interface2 url={url} callback={uploadAvatar} editorRef={editorRef} />,
  }

  const CurrentInterface: ReactElement = interfaceVariants[step]

  useEffect(() => {
    clearError()
  }, [isOpen])

  return (
    <>
      <Modal open={isOpen} onChange={onModalClose}>
        <Modal.Content
          className={s.container}
          title={modal.label}
          onInteractOutside={e => e.preventDefault()}
        >
          {CurrentInterface}
        </Modal.Content>
      </Modal>

      <LoaderV2 isLoading={isAvatarUploading} label={'Saving...'} />
    </>
  )
}

type InterfaceType1 = {
  error?: string
  url?: string
  styles?: string
  callback: (file: File) => void
}

const Interface1 = ({ error, url, styles, callback }: InterfaceType1) => {
  const formRef = useRef<HTMLFormElement>(null)

  const { t } = useTranslation()
  const { modal } = t.profileSettings.generalSettings.profileImage

  const { JPG, PNG } = MIME_TYPES

  const ErrorMessage = error && (
    <Typography variant={'regular-14'} className={s.error}>
      <b>Error!</b> {error}
    </Typography>
  )

  const handleUpload = () => {
    if (!formRef.current) return

    const { files } = formRef.current.file

    void callback(files[0])
  }

  return (
    <div className={s.content}>
      {ErrorMessage}

      <Avatar src={''} rounded={false} width={222} height={228} className={styles} />
      <FileInput
        ref={formRef}
        className={s.input}
        label={modal.btn.label}
        onUpload={handleUpload}
        accept={[JPG, PNG]}
      />
    </div>
  )
}

type InterfaceType2 = {
  url: string
  callback: () => void
  editorRef: React.RefObject<AvatarEditor>
}

const Interface2 = ({ callback, url, editorRef }: InterfaceType2) => {
  const { t } = useTranslation()
  const [sliderValue, setSliderValue] = useState<number>(1)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0.5, y: 0.5 })
  const { modal } = t.profileSettings.generalSettings.profileImage

  const handlePositionChange = (position: { x: number; y: number }) => {
    setPosition(position)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.preview}>
        <AvatarEditor
          image={url}
          ref={editorRef}
          width={282}
          height={290}
          color={[23, 23, 23, 0.6]}
          backgroundColor={'black'}
          scale={sliderValue}
          borderRadius={155}
          position={position}
          onPositionChange={handlePositionChange}
          crossOrigin="anonymous"
          disableBoundaryChecks={false}
        />
      </div>

      <SliderZoom sliderValue={sliderValue} setSliderValue={setSliderValue} isZoom />
      <Button className={s.btn} onClick={callback}>
        {modal.submitBtn.label}
      </Button>
    </div>
  )
}
