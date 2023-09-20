import type { AppProps } from 'next/app'
import '@/app/styles/index.scss'
import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { WithHomePageLayout } from '@/templates'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <WithHomePageLayout>
        <Component {...pageProps} />
      </WithHomePageLayout>
    </Provider>
  )
}
