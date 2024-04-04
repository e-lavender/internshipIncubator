import { useEffect, useRef, useState } from 'react'

import { AccountIcon, MIME_TYPES, useTranslation } from '@/app'
import { getDraft } from '@/app/helpers/addDraftToDB'
import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { FileInput } from '@/components/file-input'
import { Button } from '@flyingtornado06/ui-kit'

import s from './interfaces.module.scss'

type AddInterfaceProps = {
  callback: (file: File) => void
  openDraft: () => Promise<void>
  setImages: (images: PostImageViewModel[] | null) => void
}
export const AddInterface = ({ callback, openDraft, setImages }: AddInterfaceProps) => {
  const [isDraft, setIsDraft] = useState(false)

  const { t } = useTranslation()
  const { select } = t.createPost
  const formRef = useRef<HTMLFormElement>(null)
  const { JPG, PNG } = MIME_TYPES

  const handleUpload = () => {
    setImages(null)
    if (!formRef.current) {
      return
    }

    const { files } = formRef.current.file

    void callback(files[0])
  }

  useEffect(() => {
    getDraft().then(res => setIsDraft(res[0].drafts.length >= 1))
  }, [])

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
        {isDraft && (
          <Button onClick={openDraft} variant={'outlined'}>
            Open draft
          </Button>
        )}
      </div>
    </>
  )
}
