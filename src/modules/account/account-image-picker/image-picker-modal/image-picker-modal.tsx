import { useEffect, useRef } from 'react'

import { clsx } from 'clsx'

import s from './image-picker-modal.module.scss'
import { useImageValidation } from './useImageValidation'

import { useTranslation } from '@/app'
import { useUploadAvatarMutation } from '@/app/services/profile/profile.api'
import { Avatar, LoaderV2 } from '@/components'
import { Button, FileInput, Modal, Typography } from '@/ui'

type ImagePickerModalType = {
  error?: string
  showModal?: boolean
  onChange?: (open: boolean) => void
  isOpen: boolean
  onClose?: () => void
}

export const ImagePickerModal = ({ isOpen, onChange, onClose }: ImagePickerModalType) => {
  const { url, step, stepUp, stepBack, errorText, clearError, blob } = useImageValidation()

  const [uploadFile, { isLoading: isUploading }] = useUploadAvatarMutation()

  const { t } = useTranslation()
  const { modal } = t.profileSettings.generalSettings.profileImage

  const styles = clsx(!errorText && s.avatar)

  const uploadAvatar = () => {
    const formData = new FormData()

    formData.append('file', blob as Blob)

    uploadFile(formData)
    stepBack()
    onClose && onClose()
  }

  const interfaceVariants = {
    1: <Interface1 url={url} error={errorText} styles={styles} callback={stepUp} />,
    2: <Interface2 url={url} callback={uploadAvatar} />,
  }

  const CurrentInterface: JSX.Element = interfaceVariants[step]

  useEffect(() => {
    clearError()
  }, [isOpen])

  return (
    <>
      <Modal open={isOpen} onOpenChange={onChange}>
        <Modal.Content
          className={s.container}
          title={modal.label}
          onInteractOutside={e => e.preventDefault()}
        >
          {CurrentInterface}
        </Modal.Content>
      </Modal>

      <LoaderV2 isLoading={isUploading} />
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
      />
    </div>
  )
}

type InterfaceType2 = {
  url: string
  callback: () => void
}

const Interface2 = ({ callback, url }: InterfaceType2) => {
  const { t } = useTranslation()
  const { modal } = t.profileSettings.generalSettings.profileImage

  return (
    <div className={s.wrapper}>
      <div className={s.preview}>
        <img src={url} alt="avatar-image" />
      </div>

      <Button className={s.btn} onClick={callback}>
        {modal.submitBtn.label}
      </Button>
    </div>
  )
}
