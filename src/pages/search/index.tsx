import { MIME_TYPES, MimeDictionaryType } from '@/app'
import { NextPageWithLayout } from '@/pages/_app'
import { FileInput } from '@/ui'

const Search: NextPageWithLayout = () => {
  const { JPG, PNG } = MIME_TYPES

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '10rem 0 5rem' }}>Search</h1>
      <FileInput multiple accept={[JPG, PNG]} />
    </div>
  )
}

export default Search
