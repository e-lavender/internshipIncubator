export type PublicProfileRequest = {
  id: number
  userName: string
  aboutMe: string
  avatars: [
    {
      url: string
      width: number
      height: number
      fileSize: number
    },
  ]
}
