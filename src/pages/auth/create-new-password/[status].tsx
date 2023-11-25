import React from 'react'

import Error from 'next/error'
import { useRouter } from 'next/router'

import { LinkConfirmed, LinkExpired } from '@/modules'

const NewPasswordCodeStatus = {
  success: 'success',
  expired: 'expired',
} as const

type QueryType = { status: ConfirmationStatusType }
type ConfirmationStatusType = keyof typeof NewPasswordCodeStatus

const LinkStatusData: {
  [key in ConfirmationStatusType]: React.ReactElement
} = {
  [NewPasswordCodeStatus.success]: <LinkConfirmed />,
  [NewPasswordCodeStatus.expired]: <LinkExpired />,
}

const CreateNewPassword = () => {
  const { query } = useRouter()
  const typedQuery = query as QueryType

  return LinkStatusData[typedQuery.status] || <Error statusCode={404} />
}

export default CreateNewPassword
