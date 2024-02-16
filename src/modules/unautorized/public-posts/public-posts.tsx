import React, { memo, ReactElement } from 'react'

import s from './public-posts.module.scss'

import { useDisclose, useRtkStateHook } from '@/app'
import { useGetPublicPostsQuery } from '@/app/services/public-posts/public-posts.api'
import { PublicPostsGetAll } from '@/app/services/public-posts/public-posts.types'
import { EditModeInterface, ImageSlider, PostCardModal, ViewModeInterface } from '@/components'
import { NumberOfUsers } from '@/modules/unautorized/number-of-users/number-of-users'
import { PostItem } from '@/modules/unautorized/posts-item/post-item'

type Props = {
  data: PublicPostsGetAll
}

export const PublicPosts = memo(({ data }: Props) => {
  if (!data) {
    return null
  }

  console.log(data)

  return (
    <>
      <NumberOfUsers data={data} />
      <div className={s.posts}>
        {data?.items &&
          data?.items.length > 0 &&
          data?.items.map((item, index) => (
            <div key={index}>
              <PostItem
                createdAt={item.createdAt}
                images={item.images}
                description={item.description}
                userName={item.userName}
                itemId={item.id}
                ownerId={item.ownerId}
              />
            </div>
          ))}
      </div>
    </>
  )
})
