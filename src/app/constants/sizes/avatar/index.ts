const MOBILE_DEFAULT_SIZE = 72
const DESKTOP_DEFAULT_SIZE = 204

export const SIZES = {
  MOBILE: MOBILE_DEFAULT_SIZE,
  DESKTOP: DESKTOP_DEFAULT_SIZE,
  SET_MODE(isMobile: boolean = false) {
    return isMobile ? this.MOBILE : this.DESKTOP
  },
}
