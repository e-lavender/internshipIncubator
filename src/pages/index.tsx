import React from 'react'

import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import { authNavigationUrls } from '@/app/constants'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { useGetPublicPostsQuery } from '@/app/services/public-posts/public-posts.api'
import {
  PublicPostsGetAll,
  PublicPostsGetAllArg,
} from '@/app/services/public-posts/public-posts.types'
import { LoaderV2, POST_COMMENTS, PostCard, PostCardXL } from '@/components'

export const getStaticProps = async () => {
  const params = {
    pageSize: '4',
    sortDirection: 'desc',
    sortBy: 'createdAt',
  }
  const queryParams = new URLSearchParams(params).toString()
  const response = await fetch(`https://inctagram.work/api/v1/public-posts/all/?${queryParams}`)
  const posts: PublicPostsGetAll = await response.json()

  return {
    props: { posts },
    revalidate: 60,
  }
}

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data: me, isLoading } = useGetMeQuery()
  const { push } = useRouter()

  if (isLoading) {
    return <LoaderV2 isLoading={isLoading} />
  }

  if (!me) {
    void push(authNavigationUrls.signIn())
  }

  return (
    me && (
      <>
        {posts?.items?.map((item, index) => (
          <div key={index}>
            <PostCard
              avatarOwner={item.avatarOwner}
              images={item.images}
              userName={item.userName}
              description={item.description}
              createdAt={item.createdAt}
              //comments={POST_COMMENTS?.comments}
              ownerId={item.ownerId}
              id={item.id}
            />
          </div>
        ))}

        {/* <h2 style={{ marginBottom: '1em', textAlign: 'center' }}>Friend Account</h2>
        <PostCard
          cardType={'regular'}
          url={POST_COMMENTS.url}
          userName={'Darius'}
          account={'friend'}
          description={''}
          comments={[]}
          postdId={'22'}
        />*/}

        <h2 style={{ margin: '1em', textAlign: 'center' }}>
          Personal Account (Post Details/Editing)
        </h2>
        <PostCardXL {...POST_COMMENTS} isLoading={isLoading} />
      </>
    )
  )
}

export default Home
