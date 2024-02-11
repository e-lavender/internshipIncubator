import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import expiredImg from '../../../public/assets/images/link-expired.svg'

import s from './link-expired.module.scss'

import { ErrorWithData } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { FRONT_BASE_URL } from '@/app/constants/common'
import { useDisclose, useMatchMedia, useTranslation } from '@/app/hooks'
import { useResendEmailMutation } from '@/app/services/auth/auth.api'
import { showError } from '@/app/utils'
import { NotificationModal } from '@/components'
import { Button, Typography } from '@/ui'

export const LinkExpired = ({ email }: { email: string }) => {
  const { isOpen, onOpen, onClose } = useDisclose()
  const { push } = useRouter()
  const { isMobile } = useMatchMedia()
  const { t } = useTranslation()
  const { title, description, button: label } = t.linkExpiredPage
  //@TODO- add text to the confirmation modal
  const { signUpForm: text } = t.authPages.signUpPage
  const [resendConfirmationLink] = useResendEmailMutation()

  const resendLink = () => {
    FRONT_BASE_URL &&
      resendConfirmationLink({ email, baseUrl: FRONT_BASE_URL })
        .unwrap()
        .then(() => {
          onOpen()
        })
        .catch((error: ErrorWithData) => {
          showError(error)
        })
  }

  const onCloseNotification = () => {
    onClose()
    void push(authNavigationUrls.signIn())
  }

  const button = (
    <Button className={s.button} onClick={resendLink}>
      {label}
    </Button>
  )

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Typography as={'h1'} variant={'h1'} className={s.title}>
          {title}
        </Typography>
        <Typography as={'p'} variant={'regular-16'} className={s.description}>
          {description}
        </Typography>
        {!isMobile ? button : null}
      </div>
      <Image src={expiredImg} alt={'link-expired'} width={475} height={355} className={s.image} />
      {isMobile ? button : null}
      <NotificationModal
        isOpen={isOpen}
        onClose={onCloseNotification}
        message={`${text.notificationMessage} ${email} `}
      />
    </div>
  )
}
