import { FC, PropsWithChildren } from 'react'

import Link from 'next/link'

type Props = PropsWithChildren
export const WithHomePageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Link href={'/'}>Home</Link>
      <div>{children}</div>
    </>
  )
}
