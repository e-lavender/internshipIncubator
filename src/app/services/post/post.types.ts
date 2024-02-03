import { ImageModel } from '@/components'

export type PostStateType = {
  mode: 'view' | 'edit'
  isEdited: boolean
}

export type CreatePostResponse = {
  id: string
  description: string
  createdAt: string
  photoUrl: string
}

export type GetLastCreatedPostResponse = {
  usersCount: number
  lastPosts: [
    {
      userName: string
      imageUrl: string[]
      description: string
      comments: string[]
    },
  ]
}

export type ImageSlideType = {
  images: ImageModel[]
  currentImageIndex: number
  description: string
}
