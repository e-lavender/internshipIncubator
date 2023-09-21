import type { AppProps } from 'next/app'

import '@/app/styles/index.scss'

import { HeaderLayout } from '@/templates/layouts/header-layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeaderLayout>
      <Component {...pageProps} />
    </HeaderLayout>
  )
}
