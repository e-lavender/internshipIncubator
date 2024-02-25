import React from 'react'

import { useRouter } from 'next/router'

import s from './user-profile.module.scss'

import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { useGetPublicUserProfileByIdQuery } from '@/app/services/profile/profile.api'
import { PublicUserModel, UserProfileModel } from '@/app/services/profile/profile.api.types'
import { UserProfileGallery } from '@/components'
import { UserProfileDescription } from '@/modules'

export type UserProfileType = {
  data?: UserProfileModel | PublicUserModel
  isMyProfile: boolean
}

export const UserProfile = () => {
  const { data: user } = useGetMeQuery()
  const { query } = useRouter()
  const profileId = Number(query.id?.[0])

  const isMyProfile = user?.userId === profileId

  const { data: publicUser } = useGetPublicUserProfileByIdQuery({ profileId })

  return (
    <main className={s.container}>
      <UserProfileDescription data={publicUser} isMyProfile={isMyProfile} />
      <UserProfileGallery ownerId={profileId} isMyProfile={isMyProfile} />
    </main>
  )
}
