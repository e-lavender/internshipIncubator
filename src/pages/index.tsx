import React from 'react'

import { useRouter } from 'next/router'

import { authNavigationUrls } from '@/app/constants'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { useGetPublicPostsQuery } from '@/app/services/public-posts/public-posts.api'
import { PublicPostsGetAllArg } from '@/app/services/public-posts/public-posts.types'
import { LoaderV2, POST_COMMENTS, PostCard, PostCardXL } from '@/components'

const postDataArg: PublicPostsGetAllArg = {
  pageSize: 8,
  sortBy: '',
  sortDirection: 'desc',
}

const Home = () => {
  const { data: me, isLoading } = useGetMeQuery()
  const { push } = useRouter()
  const { data: allUsersPostsData } = useGetPublicPostsQuery(postDataArg)

  if (isLoading) {
    return <LoaderV2 isLoading={isLoading} />
  }

  if (!me) {
    void push(authNavigationUrls.signIn())
  }

  return (
    me && (
      <>
        <h1 style={{ margin: '3em', textAlign: 'center' }}>Home</h1>
        <h2 style={{ marginBottom: '1em', textAlign: 'center' }}>Public Account</h2>
        <PostCard
          cardType={'regular'}
          url={'/assets/avatar/resized/4.jpf'}
          postdId={'23'}
          userName={'Vikki'}
          account={'public'}
          description={''}
          comments={POST_COMMENTS?.comments}
        />

        <h2 style={{ marginBottom: '1em', textAlign: 'center' }}>Friend Account</h2>
        <PostCard
          cardType={'regular'}
          url={POST_COMMENTS.url}
          userName={'Darius'}
          account={'friend'}
          description={''}
          comments={[]}
          postdId={'22'}
        />

        <h2 style={{ margin: '1em', textAlign: 'center' }}>
          Personal Account (Post Details/Editing)
        </h2>
        <PostCardXL {...POST_COMMENTS} isLoading={isLoading} />
      </>
    )
  )
}

export default Home
