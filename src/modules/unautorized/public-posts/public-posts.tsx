import React, { memo } from 'react'

import s from './public-posts.module.scss'

import { PublicPostsGetAll } from '@/app/services/public-posts/public-posts.types'
import { NumberOfUsers } from '@/modules/unautorized/number-of-users/number-of-users'
import { PostItem } from '@/modules/unautorized/posts-item/post-item'

type Props = {
  data: PublicPostsGetAll
}

export const PublicPosts = memo(({ data }: Props) => {
  //const { data } = useGetPublicPostsQuery()    I will need it later

  if (!data) {
    return null
  }

  return (
    <>
      <NumberOfUsers data={data} />
      <div className={s.posts}>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </>
  )
})
