import { useEffect } from 'react'

import { useRouter } from 'next/router'

import s from './user-profile.module.scss'

import { useGetMeQuery } from '@/app/services/auth/auth.api'
import {
  useGetProfileQuery,
  useGetPublicUserProfileByIdQuery,
} from '@/app/services/profile/profile.api'
import { PublicUserModel, UserProfileModel } from '@/app/services/profile/profile.api.types'
import { useGetPublicPostsByUserQuery } from '@/app/services/public-posts/public-posts.api'
import { UserProfileGallery } from '@/components'
import { UserProfileDescription } from '@/modules'

export type UserProfileType = {
  data?: UserProfileModel | PublicUserModel
}

export const UserProfile = () => {
  const { data: user } = useGetMeQuery()
  const router = useRouter()
  const id = router.query.id || 1
  const isMyProfile = user?.userId === id

  const { data: posts } = useGetPublicPostsByUserQuery({ userId: +id, pageSize: 4 })
  const { data: authedUser } = useGetProfileQuery(undefined, { skip: !isMyProfile })
  const { data: publicUser } = useGetPublicUserProfileByIdQuery(
    { profileId: +id },
    { skip: isMyProfile }
  )
  const currentData = isMyProfile ? authedUser : publicUser

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return
      }
      console.log('loading next page')
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main
      style={{
        maxWidth: '1050px',
        display: 'flex',
        flexDirection: 'column',
      }}
      className={s.container}
    >
      <UserProfileDescription data={currentData} />
      <UserProfileGallery data={posts} isMyProfile />
    </main>
  )
}
