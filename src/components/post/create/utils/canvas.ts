export const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image()

    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', error => reject(error))
    image.setAttribute('crossOrigin', 'anonymous')
    image.src = url
  })

export function getRadianAngle(degreeValue: number) {
  return (degreeValue * Math.PI) / 180
}

export function rotateSize(width: number, height: number, rotation: number) {
  const rotRad = getRadianAngle(rotation)

  return {
    width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  }
}

type ArgsType = {
  imageSrc: string
} & Partial<{
  pixelCrop: any
  filter: string
  rotation: number
  flip: { horizontal: boolean; vertical: boolean }
}>

export async function getCroppedAndFilteredImage({
  filter = '',
  imageSrc,
  pixelCrop,
  flip = { horizontal: false, vertical: false },
  rotation = 0,
}: ArgsType): Promise<{
  unit8array?: Uint8Array
  blob?: Blob
  objectUrl?: string
} | null> {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    return null
  }

  const rotRad = getRadianAngle(rotation)

  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(image.width, image.height, rotation)

  // set canvas size to match the bounding box
  canvas.width = bBoxWidth
  canvas.height = bBoxHeight

  ctx.translate(bBoxWidth / 2, bBoxHeight / 2)
  ctx.rotate(rotRad)
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
  ctx.translate(-image.width / 2, -image.height / 2)

  ctx.filter = filter || 'none'
  ctx.drawImage(image, 0, 0)

  if (pixelCrop) {
    const data = ctx.getImageData(pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height)

    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height

    ctx.putImageData(data, 0, 0)
  }

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      async file => {
        if (!file) return null

        // if (filter) {
        //   return resolve({ blob: file })
        // }

        const response = await fetch(URL.createObjectURL(file))
        const objectUrl = URL.createObjectURL(file)

        if (response.ok) {
          const arrayBuffer = await response.arrayBuffer()
          const binaryData = new Uint8Array(arrayBuffer)

          resolve({ unit8array: binaryData, blob: file, objectUrl })
        } else {
          reject()
        }
      },
      'image/jpeg',
      1
    )
  })
}
