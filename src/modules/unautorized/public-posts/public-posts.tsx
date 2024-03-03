import React, { memo } from 'react'

import s from './public-posts.module.scss'

import { PublicPostsGetAll } from '@/app/services/public-posts/public-posts.types'
import { NumberOfUsers } from '@/modules/unautorized/number-of-users/number-of-users'
import { PostItem } from '@/modules/unautorized/posts-item/post-item'

type Props = {
  data: PublicPostsGetAll
}

export const PublicPosts = memo(({ data }: Props) => {
  if (!data) {
    return null
  }

  return (
    <>
      <NumberOfUsers data={data} />
      <div className={s.posts}>
        {data?.items &&
          data?.items.length > 0 &&
          data?.items.map(item => (
            <div key={item.id}>
              <PostItem
                createdAt={item.createdAt}
                images={item.images}
                description={item.description}
                userName={item.userName}
                id={item.id}
                avatarOwner={item.avatarOwner}
                ownerId={item.ownerId}
              />
            </div>
          ))}
      </div>
    </>
  )
})
