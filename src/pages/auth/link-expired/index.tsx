import { useRouter } from 'next/router'

import { LinkExpired } from '@/modules'

const LinkExpiredPage = () => {
  const router = useRouter()

  return <LinkExpired email={router.query.email as string} />
}

export default LinkExpiredPage
