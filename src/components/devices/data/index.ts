import {
  BraveBrowserIcon,
  ChromeBrowserIcon,
  DesktopIcon,
  EdgeBrowserIcon,
  ExplorerBrowserIcon,
  FirefoxBrowserIcon,
  MobileIcon,
  OperaBrowserIcon,
  SafariBrowserIcon,
  SVGIconType,
  UcBrowserIcon,
  YandexBrowserIcon,
} from '@/app'

type IconDataType = {
  [key: string]: SVGIconType
}
export const SESSION_DEVICE_ICON: IconDataType = {
  DESKTOP: DesktopIcon,
  MOBILE: MobileIcon,
}

export const BROWSER_ICON: IconDataType = {
  BRAVE: BraveBrowserIcon,
  CHROME: ChromeBrowserIcon,
  EDGE: EdgeBrowserIcon,
  EXPLORER: ExplorerBrowserIcon,
  FIREFOX: FirefoxBrowserIcon,
  OPERA: OperaBrowserIcon,
  SAFARI: SafariBrowserIcon,
  YANDEX: YandexBrowserIcon,
  UC: UcBrowserIcon,
}
