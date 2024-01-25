import { ChangeEventHandler, FormEventHandler, useState } from 'react'

import s from './post-card-xl.module.scss'

import { useDisclose } from '@/app'
import { IMAGE_SLIDER_DATA } from '@/app/data/image-slider/image-slider-data'
import { compareDescriptionVersions } from '@/app/services/post/post.slice'
import { useAppDispatch, useAppSelector } from '@/app/store/rtk.types'
import {
  PostCardModal,
  CardHeader,
  CommentsList,
  CardOptions,
  CardInformation,
  PostType,
  AddComment,
  CardDescription,
  AccountType,
  ImageSlider,
} from '@/components'
import ImageSlider from '@/components/image-slider/image-slider'
import { Button, TextArea } from '@/ui'

type PostCardXLType = {
  isVisible?: boolean
  isLoading?: boolean
  account: AccountType
} & PostType

export const PostCardXL = (props: PostCardXLType) => {
  const { isOpen: isModalOpened, onClose: closeModal, onOpen: openModal } = useDisclose()

  const mode = useAppSelector(state => state.post.mode)

  const isEditMode: boolean = mode === 'edit'

  const interfaces: { [key: string]: ReactElement } = {
    view: <CardInterface {...props} />,
    edit: (
      <CardEditInterface
        url={props.url}
        userName={props.userName}
        description={props.description}
        isLoading={props.isLoading}
      />
    ),
  }

  const CurrentInterface = interfaces[mode]

  return (
    <>
      <Button onClick={openModal}>Show Post Details</Button>

      <PostCardModal
        isOpen={isModalOpened}
        onChange={closeModal}
        askConfirmation={isEditMode}
        isModified={!isEditMode}
      >
        <ImageSlider
          images={IMAGE_SLIDER_DATA.slice(0, 4)}
          aspectRatio={'1/1'}
          fitStyle={'cover'}
        />

        {CurrentInterface}
      </PostCardModal>
    </>
  )
}

const CardInterface = (props: PostCardXLType) => {
  const { url, userName, account } = props

  return (
    <div className={s.card}>
      <CardHeader url={url} userName={userName} account={account || 'personal'} />
      <CommentsList {...props} />
      <CardOptions />
      <CardInformation createdAt={'5 days ago'} />
      <AddComment />
    </div>
  )
}

const CardEditInterface = ({
  userName,
  url,
  description,
  isLoading,
}: {
  userName: string
  url: string
  description: string
  isLoading?: boolean
}) => {
  const [text, setText] = useState<string>(description || '')

  const isEdited = useAppSelector(state => state.post.isEdited)
  const dispatch = useAppDispatch()

  const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    const text = e.target.value

    setText(text)
    dispatch(compareDescriptionVersions({ initial: description, final: text }))
  }

  const saveEditedDescription: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    /*
        Todo PUT request in order to update post description
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
