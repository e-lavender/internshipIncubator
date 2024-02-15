import { useEffect } from 'react'

import { useRouter } from 'next/router'

import s from './user-profile.module.scss'

import { useCheckAuthentication } from '@/app/hooks/useCheckAuthentication'
import {
  useGetProfileQuery,
  useGetPublicUserProfileByIdQuery,
} from '@/app/services/profile/profile.api'
import { PublicUserModel, UserProfileModel } from '@/app/services/profile/profile.api.types'
import {
  useGetPublicPostByIdQuery,
  useGetPublicPostsByUserQuery,
} from '@/app/services/public-posts/public-posts.api'
import { UserProfileGallery } from '@/components'
import { UserProfileDescription } from '@/modules'

export type UserProfileType = {
  data?: UserProfileModel | PublicUserModel
}

export const UserProfile = () => {
  const { user } = useCheckAuthentication()
  const { query } = useRouter()
  const id = query.id || 1
  const isMyProfile = user?.userId === id
  const postIdQuery = query.id?.[1]
  const postId = Number(postIdQuery)

  const { data: posts } = useGetPublicPostsByUserQuery({ userId: +id })
  //const { data: authedUser } = useGetProfileQuery(undefined, { skip: !isMyProfile })
  const { data: publicUser } = useGetPublicUserProfileByIdQuery(
    { profileId: +id },
    { skip: isMyProfile }
  )
  const { data: postById } = useGetPublicPostByIdQuery({ postId }, { skip: !postId })

  // const currentData = isMyProfile ? authedUser : publicUser
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
      <UserProfileDescription data={publicUser} />
      <UserProfileGallery data={posts} userId={id} />
    </main>
  )
}
