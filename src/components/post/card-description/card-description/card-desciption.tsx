import s from './card-description.module.scss'

import { Avatar, PostType } from '@/components'
import { SkeletonCard, Typography } from '@/ui'

type CardDescriptionType = {
  description?: string
  isLoading?: boolean
} & Pick<PostType, 'url' | 'userName' | 'createdAt'>

export const CardDescription = ({
  url,
  userName,
  description,
  createdAt,
  isLoading,
}: CardDescriptionType) => {
  if (isLoading) {
    return (
      <div className={s.description}>
        <SkeletonCard circle>
          <Avatar src={url} width={36} height={36} />
        </SkeletonCard>

        <div className={s.info}>
          <SkeletonCard>
            <Typography as={'p'} variant={'regular-14'}>
              <Typography variant={'bold-14'}>{`${userName} `}</Typography>
              {description}
            </Typography>
          </SkeletonCard>

          <SkeletonCard>
            <Typography variant={'small'} className={s.created}>
              {createdAt}
            </Typography>
          </SkeletonCard>
        </div>
      </div>
    )
  }

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
