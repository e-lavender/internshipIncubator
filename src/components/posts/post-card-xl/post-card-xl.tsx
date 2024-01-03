import s from './post-card-xl.module.scss'

import { useDisclose } from '@/app'
import { IMAGE_SLIDER_DATA } from '@/app/data/image-slider/image-slider-data'
import { PostCardModal, CardHeader } from '@/components'
import ImageSlider from '@/components/image-slider/image-slider'

type PostCardXLType = {
  isOpen: boolean
}

export const PostCardXL = ({ isOpen }: PostCardXLType) => {
  const { onClose } = useDisclose()

  return (
    <div>
      <PostCardModal isOpen={isOpen} onChange={onClose} currentInterface={CardInterface} isModified>
        <ImageSlider
          images={IMAGE_SLIDER_DATA.slice(0, 4)}
          aspectRatio={'1/1'}
          fitStyle={'cover'}
        />
      </PostCardModal>
    </div>
  )
}

const CardInterface = () => {
  return (
    <div className={s.card}>
      <CardHeader
        url={''}
        userName={'URLProfile'}
        account={'personal'}
        published={'22 Minutes ago'}
      />
    </div>
  )
}
