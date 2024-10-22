export type SessionsType = {
  current: SessionModel
  others: SessionModel[]
}
export type SessionModel = {
  browserName: string
  browserVersion: string
  deviceId: number
  deviceName: string
  deviceType: string
  ip: string
  lastActive: string
  osName: string
  osVersion: string
}
