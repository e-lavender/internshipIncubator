import Image, { ImageProps } from 'next/image'

type GalleryItemProps = {
  src: ImageProps['src']
  alt?: string
} & ImageProps
export const GalleryItem = ({ src, alt, ...props }: GalleryItemProps) => {
  return <Image src={src} alt={alt} {...props} />
}
