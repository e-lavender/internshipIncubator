import React from 'react'

import '@/app/styles/_global-classes.scss'

import { Header } from '@/modules/header'

export const HeaderLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  )
}
