import React from 'react'

import { getPublicPosts, getRunningQueriesThunk } from '@/app/services/post/post.api'
import { wrapper } from '@/app/store/store'
import { PublicPosts } from '@/modules'

export const getStaticProps = wrapper.getStaticProps(store => async context => {
  store.dispatch(getPublicPosts.initiate())

  await Promise.all(store.dispatch(getRunningQueriesThunk()))

  return {
    props: {},
    revalidate: 60,
  }
})

const MainPage = () => {
  return <PublicPosts />
}

export default MainPage
