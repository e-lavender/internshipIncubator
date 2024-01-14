export type ImageModel = {
  id: string
  url: any
  alt: string
  croppedImage?: any
}
export type ImageSliderProps = {
  images: ImageModel[]
  setAddedImages: (images: ImageModel[]) => void
  aspectRatio?: any
  setAspectRatio?: (aspectRatio: number) => void
  setIsCrop?: (isCrop: boolean) => void
  fitStyle: 'cover' | 'contain'
  size?: number
  onClick?: (id: string | number) => void
  withCropper?: boolean
  withFilters?: boolean
  activeFilter?: string
  setActiveFilter?: (activeFilter: string) => void
}
export type IconType = 'cropper' | 'zoom' | 'image'
