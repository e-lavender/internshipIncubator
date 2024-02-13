import Image, { ImageProps } from 'next/image'

import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'

type GalleryItemProps = {
  src: PostImageViewModel
  alt?: string
} & ImageProps
export const GalleryItem = ({ src, alt, ...props }: GalleryItemProps) => {
  return <Image src={src} alt={alt} {...props} />
}
