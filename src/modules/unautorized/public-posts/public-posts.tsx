import React, { memo } from 'react'

import s from './public-posts.module.scss'

import { useGetPublicPostsQuery } from '@/app/services/public-posts/public-posts.api'
import { PublicPostsGetAll } from '@/app/services/public-posts/public-posts.types'
import { NumberOfUsers } from '@/modules/unautorized/number-of-users/number-of-users'
import { PostItem } from '@/modules/unautorized/posts-item/post-item'

type Props = {
  data: PublicPostsGetAll
}

export const PublicPosts = memo(({ data }: Props) => {
  /* const { data: AllPublicPosts } = useGetPublicPostsQuery({
    pageSize: '4',
    sortDirection: 'desc',
    sortBy: 'createdAt',
  })*/

  console.log(data)
  if (!data) {
    return null
  }

  return (
    <>
      <NumberOfUsers data={data} />
      <div className={s.posts}>
        {data?.items &&
          data?.items.length > 0 &&
          data?.items.map((item, index) => (
            <PostItem
              key={index}
              createdAt={item.createdAt}
              images={item.images}
              description={item.description}
              userName={item.userName}
            />
          ))}
      </div>
    </>
  )
})
