import { AccountImage } from '@/modules/account/account-image/account-image'
import { NextPageWithLayout } from '@/pages/_app'

const Search: NextPageWithLayout = () => {
  const handleClick = () => console.log('log function!')

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '10rem 0 5rem' }}>Search</h1>
      <AccountImage onClick={handleClick} />
    </div>
  )
}

export default Search
