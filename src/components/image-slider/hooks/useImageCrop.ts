import { useState } from 'react'

const createImage = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const image = new Image()

    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', error => reject(error))
    image.setAttribute('crossOrigin', 'anonymous')
    image.src = url
  })
}

function getRadianAngle(degreeValue: number): number {
  return (degreeValue * Math.PI) / 180
}

export const useImageCrop = () => {
  const [rotation, setRotation] = useState(0)

  const getCroppedImg = async (
    imageSrc: string,
    pixelCrop: { width: number; height: number; x: number; y: number }
  ): Promise<string> => {
    const image = await createImage(imageSrc)

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    const maxSize = Math.max(image.width, image.height)
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))

    canvas.width = safeArea
    canvas.height = safeArea

    ctx?.translate(safeArea / 2, safeArea / 2)
    ctx?.rotate(getRadianAngle(rotation))
    ctx?.translate(-safeArea / 2, -safeArea / 2)

    ctx?.drawImage(image, safeArea / 2 - image.width * 0.5, safeArea / 2 - image.height * 0.5)
    const data = ctx?.getImageData(0, 0, safeArea, safeArea)

    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height

    data &&
      ctx?.putImageData(
        data,
        Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
        Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
      )

    return new Promise<string>(resolve => {
      canvas.toBlob(file => {
        if (file) {
          resolve(URL.createObjectURL(file))
        }
      }, 'image/jpeg')
    })
  }

  return { rotation, setRotation, getCroppedImg }
}

export default useImageCrop
