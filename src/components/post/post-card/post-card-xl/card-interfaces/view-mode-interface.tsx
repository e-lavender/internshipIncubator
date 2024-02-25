import { usePostCardModal } from '@/app/services/modals/modals.hooks'
import { PostModel } from '@/app/services/posts/posts.types'
import { AddComment, CardHeader, CardInformation, CardOptions, CommentsList } from '@/components'
import s from '@/components/post/post-card/post-card-xl/post-card-xl.module.scss'

export const ViewModeInterface = ({
  userName,
  description,
  createdAt,
  avatarOwner,
  isMyProfile,
}: PostModel) => {
  return (
    <div className={s.card}>
      <CardHeader
        isMyProfile={isMyProfile}
        userName={userName}
        createdAt={createdAt}
        avatarOwner={avatarOwner}
        description={description}
      />
      <CommentsList createdAt={createdAt} />
      <CardOptions />
      <CardInformation createdAt={'5 days ago'} />
      <AddComment />
    </div>
  )
}
