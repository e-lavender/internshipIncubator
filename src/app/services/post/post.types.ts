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
