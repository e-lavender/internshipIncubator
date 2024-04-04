import { useRef } from 'react'

import { AccountIcon, MIME_TYPES, useTranslation } from '@/app'
import { FileInput } from '@/components/file-input'
import { Button } from '@flyingtornado06/ui-kit'

import s from './interfaces.module.scss'

type AddInterfaceProps = {
  callback: (file: File) => void
}
export const AddInterface = ({ callback }: AddInterfaceProps) => {
  const { t } = useTranslation()
  const { select } = t.createPost
  const formRef = useRef<HTMLFormElement>(null)
  const { JPG, PNG } = MIME_TYPES

  const handleUpload = () => {
    if (!formRef.current) {
      return
    }

    const { files } = formRef.current.file

    void callback(files[0])
  }

  return (
    <>
      <div className={s.loopBackImg}>
        <AccountIcon />
      </div>
      <div className={s.buttons}>
        <FileInput
          accept={[JPG, PNG]}
          className={s.input}
          label={select}
          onUpload={handleUpload}
          ref={formRef}
        />

        <Button onClick={() => {}} variant={'outlined'}>
          Open draft
        </Button>
      </div>
    </>
  )
}
