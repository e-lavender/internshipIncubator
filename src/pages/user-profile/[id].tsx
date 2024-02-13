import { publicPostsApiUrls } from '@/app/constants/urls'
import {
  getPublicUserProfileById,
  getRunningQueriesThunk,
} from '@/app/services/profile/profile.api'
import { getPublicPostsByUser } from '@/app/services/public-posts/public-posts.api'
import { wrapper } from '@/app/store/store'
import { UserProfile } from '@/modules/user-profile'

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
  const id = context.query?.id as string

  store.dispatch(getPublicUserProfileById.initiate({ profileId: +id! }))
  store.dispatch(getPublicPostsByUser.initiate({ userId: +id }))
  await Promise.all(store.dispatch(getRunningQueriesThunk()))

  return {
    props: {},
  }
})

const UserProfilePage = () => {
  return <UserProfile />
}

export default UserProfilePage
