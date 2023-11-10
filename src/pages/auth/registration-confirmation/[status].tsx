import React from 'react'

import { useRouter } from 'next/router'

import { LinkConfirmed, LinkExpired } from '@/modules'

const ConfirmationStatus = {
  success: 'success',
  failed: 'failed',
} as const

type ConfirmationStatusType = keyof typeof ConfirmationStatus

const LinkStatusData = {
  [ConfirmationStatus.success]: <LinkConfirmed />,
  [ConfirmationStatus.failed]: <LinkExpired />,
}

const RegistrationConfirmation = () => {
  const router = useRouter()

  return <>{LinkStatusData[router.query.status as ConfirmationStatusType]}</>
}

export default RegistrationConfirmation
