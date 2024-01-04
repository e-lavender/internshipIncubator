import s from './post-card-xl.module.scss'

import { useDisclose } from '@/app'
import { IMAGE_SLIDER_DATA } from '@/app/data/image-slider/image-slider-data'
import {
  PostCardModal,
  CardHeader,
  CommentsList,
  CardOptions,
  CardInformation,
  PostType,
  AddComment,
} from '@/components'
import ImageSlider from '@/components/image-slider/image-slider'
import { Button } from '@/ui'

type PostCardXLType = {
  isVisible?: boolean
  account: 'personal' | 'public' | 'friend'
} & PostType

export const PostCardXL = (props: PostCardXLType) => {
  const { isOpen, onClose, onOpen } = useDisclose()

  return (
    <>
      <Button onClick={onOpen}>Show Modal</Button>

      <PostCardModal isOpen={isOpen} onChange={onClose} isModified>
        <ImageSlider
          images={IMAGE_SLIDER_DATA.slice(0, 4)}
          aspectRatio={'1/1'}
          fitStyle={'cover'}
        />

        <CardInterface {...props} />
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
      <CardInformation />
      <AddComment />
    </div>
  )
}
