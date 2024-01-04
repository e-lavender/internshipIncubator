import s from './post-card-xl.module.scss'

import { useDisclose } from '@/app'
import { IMAGE_SLIDER_DATA } from '@/app/data/image-slider/image-slider-data'
import { PostCardModal, CardHeader, CommentsList, POST_COMMENTS } from '@/components'
import ImageSlider from '@/components/image-slider/image-slider'
import { Button } from '@/ui'

export const PostCardXL = ({ isVisible }: { isVisible: boolean }) => {
  const { isOpen, onClose, onOpen } = useDisclose()

  return (
    <>
      <Button onClick={onOpen}>Show Modal</Button>

      <PostCardModal isOpen={isOpen} onChange={onClose} currentInterface={CardInterface} isModified>
        <ImageSlider
          images={IMAGE_SLIDER_DATA.slice(0, 4)}
          aspectRatio={'1/1'}
          fitStyle={'cover'}
        />
      </PostCardModal>
    </>
  )
}

const CardInterface = () => {
  return (
    <div className={s.card}>
      <CardHeader
        url={''}
        userName={'URLProfile'}
        account={'personal'}
        createdAt={'22 Minutes ago'}
      />
      <CommentsList
        userName={'URLProfile'}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta.'
        }
        createdAt={'12 minutes ago'}
        url={''}
        postdId={'23'}
        comments={POST_COMMENTS}
      />
    </div>
  )
}
