import { Avatar } from '@/components'

const url =
  'https://img.freepik.com/premium-photo/customer-service-representative-digital-avatar-generative-ai_934475-9273.jpg'

const UserProfile = () => {
  return (
    <div style={{ padding: '0 5rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '5rem' }}>User Profile</h1>
      <Avatar src={url} />
    </div>
  )
}

export default UserProfile
