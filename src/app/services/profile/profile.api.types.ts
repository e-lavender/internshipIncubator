import { Nullable } from '@/app'

export type UserProfileModel = {
  id: number
  userName: string
  firstName: string
  lastName: string
  city: string
  dateOfBirth: string
  aboutMe: string
  avatars: UserProfileModelAvatars[]
  createdAt: string
}

export type UserProfileModelAvatars = {
  url: string
  width: number
  height: number
  fileSize: number
}
export type UpdateUserProfile = {
  userName: string
  firstName: Nullable<string>
  lastName: Nullable<string>
  city: Nullable<string>
  dateOfBirth: Nullable<string>
  aboutMe: Nullable<string>
}
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
  dateOfBirth?: Date | string
  country?: string
  city?: string
  aboutMe?: string
}

export type PublicUserModel = {
  id: number
  userName: string
  aboutMe: string
  avatars: PublicUserModelAvatars[]
}
export type PublicUserModelAvatars = {
  url: string
  width: number
  height: number
  fileSize: number
}
