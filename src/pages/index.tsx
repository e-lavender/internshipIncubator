import React, { useCallback, useEffect, useRef, useState } from 'react'

import { authNavigationUrls } from '@/app/constants'
import { PAGE_SIZE_PUBLIC_POSTS_BY_USER } from '@/app/constants/common'
import { IMAGE_SIZE } from '@/app/constants/enums'
import { useInfiniteScroll } from '@/app/hooks/use-infinite-scroll'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { getRunningQueriesThunk } from '@/app/services/common/common.api'
import {
  getPublicPosts,
  useGetPublicPostsQuery,
} from '@/app/services/public-posts/public-posts.api'
import { wrapper } from '@/app/store/store'
import { LoadingSpinner, POST_COMMENTS, PostCard, PostCardXL } from '@/components'
import { useRouter } from 'next/router'

/*export const getStaticProps = async () => {
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
}*/

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
  store.dispatch(
    getPublicPosts.initiate(
      {
        pageSize: PAGE_SIZE_PUBLIC_POSTS_BY_USER,
        sortBy: 'createdAt',
        sortDirection: 'asc',
      },
      { forceRefetch: true }
    )
  )

  await Promise.all(store.dispatch(getRunningQueriesThunk()))

  return {
    props: {},
  }
})
const Home = (/*{ posts }: InferGetStaticPropsType<typeof getStaticProps>*/) => {
  const [page, setPage] = useState(4)
  const [items, setItems] = useState<any[]>([])
  const { data: me, isLoading } = useGetMeQuery()
  const { push } = useRouter()
  const [pageSize, setPageSize] = useState<number>(4)
  const { data: posts } = useGetPublicPostsQuery({
    pageSize: page,
    sortBy: 'createdAt',
    sortDirection: 'desc',
  })
  const observer = useRef<IntersectionObserver | null>(null)
  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) {
        return
      }
      if (observer.current) {
        observer.current.disconnect()
      }
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setPage(prevPage => prevPage + 2)
        }
      })
      if (node) {
        observer.current.observe(node)
      }
    },
    [isLoading]
  )

  useEffect(() => {
    if (posts?.items) {
      setItems(prevItems => [...prevItems, ...posts!.items])
    }
  }, [posts, posts?.items])
  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />
  }

  if (!me) {
    void push(authNavigationUrls.signIn())
  }

  return (
    me && (
      <>
        {posts?.items?.map((item, index) => {
          const filteredImages = item.images.filter(image => image.imageSize === IMAGE_SIZE.MEDIUM)

          return (
            <div key={item.id} ref={index === posts?.items?.length - 1 ? lastItemRef : null}>
              <PostCard
                avatarOwner={item.avatarOwner}
                createdAt={item.createdAt}
                description={item.description}
                id={item.id}
                images={filteredImages}
                //comments={POST_COMMENTS?.comments}
                ownerId={item.ownerId}
                userName={item.userName}
              />
            </div>
          )
        })}
      </>
    )
  )
}

export default Home
