import '@/app/styles/_global-classes.scss'

import s from './header-layout.module.scss'

import { useGetMeQuery } from '@/app'
import { Header } from '@/modules/header'

export const HeaderLayout = ({ children }: any) => {
  const { data: me } = useGetMeQuery()

  return (
    <>
      <Header isAuthed={!!me} />
      <div className={s.container}>{children}</div>
    </>
  )
}
