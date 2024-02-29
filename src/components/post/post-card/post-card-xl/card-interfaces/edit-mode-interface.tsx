import { ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react'

import s from '../post-card-xl.module.scss'

import { useRtkStateHook } from '@/app'
import { COMMON_MODE_STATE } from '@/app/constants/enums'
import { usePostCardModal } from '@/app/services/modals/modals.hooks'
import { useUpdatePostByIdMutation } from '@/app/services/posts/posts.api'
import { compareDescriptionVersions } from '@/app/services/posts/posts.slice'
import { useGetPublicPostByIdQuery } from '@/app/services/public-posts/public-posts.api'
import { CardDescription } from '@/components'
import { Button, TextArea } from '@/ui'

type EditModeInterfaceProps = {
  userName?: string
  url?: string
  description?: string
  isLoading?: boolean
  postId: number
  setIsEditMode?: (isEditMode: boolean) => void
}

export const EditModeInterface = ({
  userName,
  postId,
  description,
  setIsEditMode,
}: EditModeInterfaceProps) => {
  const [text, setText] = useState<string>(description || '')
  const { changePostCardModalMode, updatePostDescription } = usePostCardModal()
  const [updatePost] = useUpdatePostByIdMutation()
  const { _dispatch, _state } = useRtkStateHook()
  const { isEdited } = _state.post

  useEffect(() => {
    if (setIsEditMode) {
      setIsEditMode(true)
    }
  }, [])

  const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    const text = e.target.value

    setText(text)
    _dispatch(compareDescriptionVersions({ initial: description, final: text }))
  }

  const saveEditedDescription: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    updatePost({ postId: postId, description: text })
      .unwrap()
      .then(() => {
        updatePostDescription(text)
        changePostCardModalMode(COMMON_MODE_STATE.VIEW)
      })
  }

  return (
    <div className={s.edit}>
      <CardDescription userName={userName} />

      <form className={s.form} onSubmit={saveEditedDescription}>
        <TextArea
          name={'description'}
          label={'Add publication descriptions'}
          value={text}
          onChange={handleDescriptionChange}
          sizeLimit={500}
          initialSize={text.length}
        />

        <Button className={s.btn} type={'submit'} disabled={!isEdited}>
          Save Changes
        </Button>
      </form>
    </div>
  )
}
