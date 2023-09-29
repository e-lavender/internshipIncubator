import { FC, PropsWithChildren } from 'react'

import Link from 'next/link'

import { LanguageSelect } from '@/components'

type Props = PropsWithChildren
export const WithHomePageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link style={{ fontSize: 'var(--font-size-xxl)', padding: '6px' }} href={'/'}>
          Home
        </Link>
        <LanguageSelect />
      </div>
      <div>{children}</div>
    </>
  )
}
