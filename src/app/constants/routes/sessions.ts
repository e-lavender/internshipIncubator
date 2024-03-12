export const sessionApiUrls = {
  allSessions: () => `/api/v1/sessions` as const,
  terminateAll: () => `/api/v1/sessions/terminate-all` as const,
  sessionById: (deviceId: number) => `/api/v1/sessions/${deviceId}` as const,
  ipGeolocationAPI: (apiKEY: string) => `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKEY}`,
}
