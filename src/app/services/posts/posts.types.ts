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
export type PostModel = {
  id?: number
  userName?: string
  description?: string
  location?: string
  images?: PostImage[]
  createdAt?: string
  updatedAt?: string
  ownerId?: number
  avatarOwner?: string
  owner?: PostModelOwner
}
export type PostImage = {
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
  filter?: string
}
export type PostModelOwner = {
  firstName: string
  lastName: string
}
export type ImageSlideType = {
  images: ImageModel[]
  currentImageIndex: number
  description: string
}
export type CreatePostRequest = {
  description: string
  childrenMetadata: CreatePostRequestChildrenMetadata[]
}
export type CreatePostRequestChildrenMetadata = {
  uploadId: string
}
export type PostImages = {
  images: PostImage[]
}

export type CommentsType = {
  id?: number
  postId?: number
  from?: {
    id: number
    username: string
    avatars: [{}]
  }
  content?: string
  createdAt?: string
}
