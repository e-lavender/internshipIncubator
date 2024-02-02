import React from 'react'

import s from './public-posts.module.scss'

import { NumberOfUsers } from '@/modules/unautorized/number-of-users/number-of-users'
import { PostItem } from '@/modules/unautorized/posts-item/post-item'

export const PublicPosts = () => {
  return (
    <>
      <NumberOfUsers />
      <div className={s.posts}>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </>
  )
}
