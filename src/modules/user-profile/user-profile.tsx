import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import s from './user-profile.module.scss'

import { PAGE_SIZE_PUBLIC_POSTS_BY_USER } from '@/app/constants/common'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { usePostCardModal } from '@/app/services/modals/modals.hooks'
import { useGetPublicUserProfileByIdQuery } from '@/app/services/profile/profile.api'
import { PublicUserModel, UserProfileModel } from '@/app/services/profile/profile.api.types'
import {
  useGetPublicPostByIdQuery,
  useGetPublicPostsByUserQuery,
} from '@/app/services/public-posts/public-posts.api'
import { useAppSelector } from '@/app/store/rtk.types'
import { UserProfileGallery } from '@/components'
import { UserProfileDescription } from '@/modules'

export type UserProfileType = {
  data?: UserProfileModel | PublicUserModel
  isMyProfile: boolean
  totalCount?: number
}

export const UserProfile = () => {
  const { data: user } = useGetMeQuery()
  const { query } = useRouter()
  const profileId = Number(query.id?.[0])
  const postId = Number(query.id?.[1])

  const isMyProfile = user?.userId === profileId
  const { data: postById } = useGetPublicPostByIdQuery({ postId }, { skip: !postId })
  const { data: publicUser } = useGetPublicUserProfileByIdQuery({ profileId })
  const { data: posts } = useGetPublicPostsByUserQuery({
    userId: profileId,
    pageSize: PAGE_SIZE_PUBLIC_POSTS_BY_USER,
    sortDirection: 'asc',
    sortBy: 'createdAt',
  })

  const { openPostCardModal, setPostCardModalSelectedPost } = usePostCardModal()

  useEffect(() => {
    if (postId && postById) {
      setPostCardModalSelectedPost(postById)
      openPostCardModal()
    }
  }, [postId])

  return (
    <main className={s.container}>
      <UserProfileDescription
        data={publicUser}
        isMyProfile={isMyProfile}
        totalCount={posts?.totalCount}
      />
      <UserProfileGallery ownerId={profileId} isMyProfile={isMyProfile} user={user} />
    </main>
  )
}
