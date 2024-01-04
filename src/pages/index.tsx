import { useRouter } from 'next/router'

import { authNavigationUrls } from '@/app/constants'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { LoaderV2, POST_COMMENTS, PostCardXL } from '@/components'

const Home = () => {
  const { data: me, isLoading } = useGetMeQuery()
  const { push } = useRouter()

  if (isLoading) {
    return <LoaderV2 isLoading={isLoading} />
  }

  if (!me) {
    void push(authNavigationUrls.signIn())
  }

  return (
    me && (
      <>
        <h1 style={{ margin: '5em', textAlign: 'center' }}>Home</h1>
        <PostCardXL {...POST_COMMENTS} />
      </>
    )
  )
}

export default Home
