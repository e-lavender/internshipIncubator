import type { AppProps } from 'next/app'
import '@/app/styles/index.scss'
import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { Toaster } from '@/components'
import { MenuLayout } from '@/templates/layouts/menu-layout/menu-layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MenuLayout>
        <Component {...pageProps} />
      </MenuLayout>
      <Toaster />
    </Provider>
  )
}
