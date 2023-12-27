export type UserProfileModel = {
  id: number
  userName: string
  firstName: string
  lastName: string
  city?: string
  dateOfBirth?: Date
  aboutMe?: string
  avatars: UserProfileModelAvatars[]
  createdAt: string
  country?: string
}
export type UserProfileModelAvatars = {
  url: string
  width: number
  height: number
  fileSize: number
}
export type UpdateUserProfile = Pick<
  UserProfileModel,
  'userName' | 'lastName' | 'firstName' | 'city' | 'dateOfBirth' | 'aboutMe' | 'country'
>
export type UploadAvatarResponse = {
  avatars: AvatarModel[]
}
export type AvatarModel = {
  url: string
  width: number
  height: number
  fileSize: number
}

export type GeneralSettingsType = {
  userName: string
  firstName: string
  lastName: string
  dateOfBirth?: Date
  country?: string
  city?: string
  aboutMe?: string
}
