import {
  AddComment,
  CardHeader,
  CardInformation,
  CardOptions,
  CommentsList,
  PostCardXLType,
} from '@/components'
import s from '@/components/post/post-card/post-card-xl/post-card-xl.module.scss'

export const ViewModeInterface = (props: PostCardXLType) => {
  return (
    <div className={s.card}>
      <CardHeader {...props} />
      <CommentsList {...props} />
      <CardOptions />
      <CardInformation createdAt={'5 days ago'} />
      <AddComment />
    </div>
  )
}
