import { ChromeBrowserIcon, DesktopIcon, MobileIcon } from '@/app'
import { DeviceInformationCard } from '@/components/devices'
import { Button } from '@/ui'

const Search = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '10rem 0 5rem' }}>Search</h1>
      <h2 style={{ marginBottom: '0.6rem' }}>Current device</h2>
      <DeviceInformationCard
        type={'DEVICE'}
        variant={'CHROME'}
        title={'Chrome'}
        ip={'22.345.345.12'}
      />

      <Button style={{ marginTop: '3rem', float: 'right' }} variant={'outlined'}>
        Terminate all other session
      </Button>

      <h2 style={{ margin: '10rem 0 1.8rem' }}>Current device</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <DeviceInformationCard
          type={'SESSION'}
          variant={'DESKTOP'}
          title={'Apple iMac 27'}
          ip={'22.345.345.12'}
          lastVisit={'22.09.2022'}
        />
        <DeviceInformationCard
          type={'SESSION'}
          variant={'MOBILE'}
          title={'Iphone 14 Pro Max'}
          ip={'22.345.345.12'}
          lastVisit={'22.09.2022'}
        />
      </div>
    </>
  )
}

export default Search
