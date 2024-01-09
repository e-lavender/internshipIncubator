export type ImageModel = {
  id: number
  url: any
  alt: string
  croppedImage: any
}
export type ImageSliderProps = {
  images: ImageModel[]
  aspectRatio: string
  fitStyle: 'cover' | 'contain'
  size?: number
  onClick?: (id: string | number) => void
  withCropper?: boolean
}
export type IconType = 'cropper' | 'zoom' | 'image'
