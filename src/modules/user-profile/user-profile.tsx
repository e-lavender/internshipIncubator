import { useEffect } from 'react'

import { useRouter } from 'next/router'

import s from './user-profile.module.scss'

import { useCheckAuthentication } from '@/app/hooks/useCheckAuthentication'
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
  const { user } = useCheckAuthentication()
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
      // Проверяем, долистал ли пользователь до низа страницы
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return
      }
      console.log('loading next page') // Вызываем функцию загрузки данных
    }

    // Добавляем обработчик события прокрутки после загрузки контента

    window.addEventListener('scroll', handleScroll)

    // Убираем обработчик события прокрутки при размонтировании компонента,
    // чтобы избежать утечек памяти
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className={s.container}>
      <UserProfileDescription data={currentData} />
      <UserProfileGallery data={posts} />
    </main>
  )
}
