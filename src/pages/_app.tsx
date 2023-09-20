import type { AppProps } from 'next/app'

import '@/app/styles/index.scss'
import { WithHomePageLayout } from '@/templates'
import { HeaderLayout } from '@/templates/layouts/header-layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeaderLayout>
      <WithHomePageLayout>
        <Component {...pageProps} />
      </WithHomePageLayout>
    </HeaderLayout>
  )
}
