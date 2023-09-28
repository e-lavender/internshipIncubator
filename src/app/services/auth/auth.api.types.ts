export type GitHubUser = {
  login: string
  node_id: string
  avatar_url: string
  name: string
  email: string
}
export type UserCredentials = {
  email: string
  login: string
  password: string
}

export type Code = {
  code: string
}

export type NewPasswordCredentials = {
  newPassword: string
  token: string
}
export type SignInCredentials = {
  email: string
  password: string
}
