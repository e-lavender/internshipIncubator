import s from './comments-list.module.scss'

import { Avatar, CommentsItem, PostType } from '@/components'
import { Typography } from '@/ui'

export const CommentsList = ({ userName, description, url, createdAt, comments }: PostType) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <PostDescription
          userName={userName}
          url={url}
          description={description}
          createdAt={createdAt}
        />
      </div>

      {comments.length ? (
        comments?.map(comment => <CommentsItem key={comment.id} {...comment} />)
      ) : (
        <Typography as={'h2'} variant={'h2'}>
          No comments yet
        </Typography>
      )}
    </div>
  )
}

const PostDescription = ({
  url,
  userName,
  description,
  createdAt,
}: Pick<PostType, 'url' | 'userName' | 'description' | 'createdAt'>) => {
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
