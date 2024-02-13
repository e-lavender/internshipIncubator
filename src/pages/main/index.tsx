import React from 'react'

import { InferGetStaticPropsType } from 'next'

import { PublicPostsGetAll } from '@/app/services/public-posts/public-posts.types'
import { PublicPosts } from '@/modules'

export const getStaticProps = async () => {
  const params = {
    pageSize: '4',
    sortDirection: 'desc',
    sortBy: 'createdAt',
  }
  const queryParams = new URLSearchParams(params).toString()
  const response = await fetch(`https://inctagram.work/api/v1/public-posts/all/?${queryParams}`)
  const data: PublicPostsGetAll = await response.json()

  return {
    props: { data: data },
    revalidate: 60,
  }
}

const MainPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <PublicPosts data={data} />
}

export default MainPage
