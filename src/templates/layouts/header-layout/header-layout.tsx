import React from 'react'

import { Header } from '@/modules/header'

export const HeaderLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
