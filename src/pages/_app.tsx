import type { AppProps } from 'next/app'

import '@/app/styles/index.scss'
import { WithHomePageLayout } from '@/widgets/layouts/temp-layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WithHomePageLayout style={'light'}>
      <Component {...pageProps} />
    </WithHomePageLayout>
  )
}
