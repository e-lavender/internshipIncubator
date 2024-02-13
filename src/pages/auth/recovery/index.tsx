import React, { useEffect } from 'react'

import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import { ErrorModel } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { useCheckRecoveryCodeMutation } from '@/app/services/auth/auth.api'
import { Loader } from '@/ui'

const PasswordRecovery = () => {
  const { query, push } = useRouter()
  const [checkRecoveryCode] = useCheckRecoveryCodeMutation()

  useEffect(() => {
    if (query.code) {
      checkRecoveryCode({ recoveryCode: query.code as string })
        .unwrap()
        .then(res => {
          if (res.email === query.email) {
            void push(authNavigationUrls.createNewPassword())
          }
        })
        .catch((err: ErrorModel) => {
          if (err.data.messages[0].message) {
            void push(authNavigationUrls.linkExpired(query.email as string))
          } else {
            toast.error(err.status)
          }
        })
    }
  }, [query.code])

  return (
    <>
      <Loader isLoading />
    </>
  )
}

export default PasswordRecovery
