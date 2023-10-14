import type { AppProps } from 'next/app'
import '@/app/styles/index.scss'
import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { Toaster } from '@/components/toaster'
import { HeaderLayout } from '@/templates/layouts/header-layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <HeaderLayout>
        <Component {...pageProps} />
      </HeaderLayout>
      <Toaster />
    </Provider>
  )
}
