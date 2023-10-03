import React from 'react'

import '@/app/styles/_global-classes.scss'

import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { Header } from '@/modules/header'

export const HeaderLayout = ({ children }: any) => {
  const { data: me } = useGetMeQuery()

  return (
    <>
      <Header isAuthed={!!me} />
      <div className="container">{children}</div>
    </>
  )
}
