import { ReactElement } from 'react'

import { SettingsTabs } from '@/modules/settings-tabs/settings-tabs'
import { NextPageWithLayout } from '@/pages/_app'
import { ProfileSettingLayout } from '@/templates/layouts'

const Search: NextPageWithLayout = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '10rem 0 5rem' }}>Search</h1>
      <div style={{ padding: '2rem' }}>{/*<SettingsTabs />*/}</div>
    </div>
  )
}

export default Search
