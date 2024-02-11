import React, { useEffect } from 'react'

import Error from 'next/error'
import { useRouter } from 'next/router'

import { useEmailConfirmationMutation } from '@/app/services/auth/auth.api'
import { LinkConfirmed, LinkExpired } from '@/modules'

type QueryType = {
  code: string
  email: string
}

const RegistrationConfirmation = () => {
  const { query } = useRouter()
  const typedQuery = query as QueryType
  const [confirmEmail, { isLoading, isSuccess }] = useEmailConfirmationMutation()

  useEffect(() => {
    typedQuery.code && confirmEmail({ confirmationCode: typedQuery.code })
  }, [confirmEmail, typedQuery.code])

  const currentPage = isSuccess ? <LinkConfirmed /> : <LinkExpired email={typedQuery.email} />

  //@DODO - add loader component
  return isLoading ? '...loading' : currentPage
}

export default RegistrationConfirmation
