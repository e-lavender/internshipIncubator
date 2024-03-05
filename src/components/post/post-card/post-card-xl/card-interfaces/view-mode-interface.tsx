import { useEffect } from 'react'

import { createActionProxy } from 'next/dist/build/webpack/loaders/next-flight-loader/action-proxy'

import { PostModel } from '@/app/services/posts/posts.types'
import { AddComment, CardHeader, CardInformation, CardOptions, CommentsList } from '@/components'
import s from '@/components/post/post-card/post-card-xl/post-card-xl.module.scss'

export const ViewModeInterface = ({
  userName,
  description,
  createdAt,
  avatarOwner,
  isMyProfile,
  id,
  ownerId,
  setIsEditMode,
}: Omit<PostModel, 'images'>) => {
  useEffect(() => {
    if (setIsEditMode) {
      setIsEditMode(false)
    }
  }, [])

  return (
    <div className={s.card}>
      <CardHeader
        isMyProfile={isMyProfile}
        userName={userName}
        createdAt={createdAt}
        avatarOwner={avatarOwner}
        description={description}
        ownerId={ownerId}
        id={id}
      />
      <CommentsList
        userName={userName}
        createdAt={createdAt}
        avatarOwner={avatarOwner}
        description={description}
      />
      <CardOptions />
      <CardInformation createdAt={createdAt} />
      <AddComment />
    </div>
  )
}
