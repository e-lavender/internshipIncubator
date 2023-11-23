import { AccountImagePicker } from '@/modules'
import { NextPageWithLayout } from '@/pages/_app'

const Search: NextPageWithLayout = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '10rem 0 5rem' }}>Search</h1>
      <AccountImagePicker />
    </div>
  )
}

export default Search
