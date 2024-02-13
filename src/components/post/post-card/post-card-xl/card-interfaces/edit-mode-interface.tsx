import { ChangeEventHandler, FormEventHandler, useState } from 'react'

import s from '../post-card-xl.module.scss'

import { useRtkStateHook } from '@/app'
import { compareDescriptionVersions } from '@/app/services/posts/posts.slice'
import { CardDescription } from '@/components'
import { Button, TextArea } from '@/ui'

type EditModeInterfaceProps = {
  userName: string
  url: string
  description: string
  isLoading?: boolean
}

export const EditModeInterface = ({
  userName,
  url,
  description,
  isLoading,
}: EditModeInterfaceProps) => {
  const [text, setText] = useState<string>(description || '')

  const { _dispatch, _state } = useRtkStateHook()
  const { isEdited } = _state.post

  const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    const text = e.target.value

    setText(text)
    _dispatch(compareDescriptionVersions({ initial: description, final: text }))
  }

  const saveEditedDescription: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    /*
        Todo PUT request in order to update posts description
     */
  }

  return (
    <div className={s.edit}>
      <CardDescription userName={userName} url={url} isLoading={isLoading} />

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
