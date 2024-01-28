import s from './card-description.module.scss'

import { Avatar, PostTypes } from '@/components'
import { Typography } from '@/ui'

type CardDescriptionType = {
  description?: string
  isLoading?: boolean
} & Pick<PostTypes, 'url' | 'userName' | 'createdAt'>

export const CardDescription = ({
  url,
  userName = 'Viki',
  description,
  createdAt,
  isLoading,
}: CardDescriptionType) => {
  return (
    <div className={s.description}>
      <Avatar src={url} width={36} height={36} iconScale={0.6} />

      <div className={s.info}>
        <Typography as={'p'} variant={'regular-14'}>
          <Typography variant={'bold-14'}>{`${userName} `}</Typography>
          {description}
        </Typography>

        <Typography variant={'small'} className={s.created}>
          {createdAt}
        </Typography>
      </div>
    </div>
  )
}
