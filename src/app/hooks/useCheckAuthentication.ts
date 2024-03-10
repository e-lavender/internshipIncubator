import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { ErrorWithData } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { UserModel } from '@/app/services/auth/auth.api.types'
import { showError } from '@/app/utils'

interface UseCheckAuthenticationResult {
  isAuthenticated: boolean
  user?: UserModel | undefined
  isLoading: boolean
  error?: ErrorWithData
}

export const useCheckAuthentication = (): UseCheckAuthenticationResult => {
  const { data: me, error, isLoading } = useGetMeQuery()
  const { push } = useRouter()

  useEffect(() => {
    if (!me && !isLoading) {
      void push(authNavigationUrls.main())
    }
  }, [me, isLoading, push])

  if (error) {
    showError(error as ErrorWithData)

    return { isAuthenticated: false, isLoading: false, error: error as ErrorWithData }
  }

  return { isAuthenticated: !!me, user: me, isLoading }
}
