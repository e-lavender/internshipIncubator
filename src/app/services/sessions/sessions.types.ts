export type SessionModel = {
  deviceId: number
  ip: string
  lastActive: string
  browserName: string
  browserVersion: string
  deviceName: string
  osName: string
  osVersion: string
  deviceType: string
}

export type SessionsType = SessionModel[]
