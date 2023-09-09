import type { AppProps } from 'next/app'

import '@/app/styles/index.scss'
import { WithHomePageLayout } from '@/templates'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WithHomePageLayout>
      <Component {...pageProps} />
    </WithHomePageLayout>
  )
}
