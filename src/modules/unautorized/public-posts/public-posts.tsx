import React from 'react'

import s from './public-posts.module.scss'

import { useGetPublicPostsQuery } from '@/app/services/post/post.api'
import { NumberOfUsers } from '@/modules/unautorized/number-of-users/number-of-users'
import { PostItem } from '@/modules/unautorized/posts-item/post-item'

export const PublicPosts = () => {
  const { data } = useGetPublicPostsQuery()

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
}
