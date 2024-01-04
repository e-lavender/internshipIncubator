import s from './comments-list.module.scss'

import { CommentsItem, CommentsListType } from '@/components'
import { Typography } from '@/ui'

export const CommentsList = ({ comments }: CommentsListType) => {
  return (
    <div className={s.container}>
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
