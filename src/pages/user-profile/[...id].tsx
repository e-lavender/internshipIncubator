import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useDisclose, useRtkStateHook } from '@/app'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import {
  getPublicUserProfileById,
  getRunningQueriesThunk,
  useGetProfileQuery,
  useGetPublicUserProfileByIdQuery,
  getPublicPostById,
  getPublicPostsByUser,
  useGetPublicPostByIdQuery,
  useGetPublicPostsByUserQuery,
} from '@/app/services/profile/profile.api'
import { wrapper } from '@/app/store/store'
import { ImageSlider, PostCardModal, UserProfileGallery, ViewModeInterface } from '@/components'
import { UserProfile, UserProfileDescription } from '@/modules/user-profile'
import s from '@/modules/user-profile/user-profile.module.scss'

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
  const query = context.query

  const profileId = Number(query.id?.[0])
  const postId = Number(query.id?.[1])

  store.dispatch(getPublicUserProfileById.initiate({ profileId }, { forceRefetch: true }))
  store.dispatch(
    getPublicPostsByUser.initiate({ userId: profileId, pageSize: 4 }, { forceRefetch: true })
  )
  store.dispatch(getPublicPostById.initiate({ postId }, { forceRefetch: true }))

  await Promise.all(store.dispatch(getRunningQueriesThunk()))

  return {
    props: {},
  }
})

const UserProfilePage = () => {
  return <UserProfile />
}

export default UserProfilePage
