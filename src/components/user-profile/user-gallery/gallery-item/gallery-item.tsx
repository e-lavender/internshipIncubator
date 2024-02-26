import React from 'react'

import Image from 'next/image'

type GalleryItemProps = {
  src: string
  alt: string
  width: number
  height: number
  postId: number
  openPostModalHandler: (postId: number) => void
}

export const GalleryItem = ({ openPostModalHandler, postId, ...props }: GalleryItemProps) => {
  return <Image {...props} onClick={() => openPostModalHandler(postId)} />
}
