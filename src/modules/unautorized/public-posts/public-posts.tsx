import React, { memo } from 'react'

import s from './public-posts.module.scss'

import { GetPublicPostsResponse } from '@/app/services/post/post.types'
import { NumberOfUsers } from '@/modules/unautorized/number-of-users/number-of-users'
import { PostItem } from '@/modules/unautorized/posts-item/post-item'

type Props = {
  data: GetPublicPostsResponse
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
