import { useEffect, useLayoutEffect, useState } from 'react'

const errorMessage = {
  type(limit: string | string[]): string {
    const upperCaseFormat = Array.isArray(limit)
      ? limit.map(type => type.split('/')[1].toUpperCase())
      : limit?.match(/[^/]*$/)[0]?.toUpperCase()

    if (Array.isArray(limit)) {
      return `The format of the uploaded photo must be ${
        upperCaseFormat.length > 2 ? upperCaseFormat.join(', ') : upperCaseFormat.join(' and ')
      }`
    }

    return `The format of the uploaded photo must be ${upperCaseFormat}`
  },

  size(limit: number): string {
    return `Photo size must be less than ${limit} MB!`
  },
}

export const useImageValidation = ({
  sizeLimit,
  typeLimit,
}: {
  sizeLimit: number
  typeLimit: string | string[]
}) => {
  const [blob, setBlob] = useState<Blob | null>(null)
  const [error, setError] = useState<string>('')

  const imageValidation = (blob: Blob) => {
    if (!blob) return

    const { size, type } = blob
    const sizeMb = size / 1000 / 1000

    console.log('desctruct ', {
      size,
      type,
      sizeMb,
      sizeLimit,
      typeLimit,
    })

    if (!typeLimit.includes(type)) {
      console.log('check2')

      return setError(errorMessage.type(typeLimit))
    }

    if (sizeMb > sizeLimit) {
      console.log('check1')

      return setError(errorMessage.size(sizeLimit))
    }

    setError('')
  }

  useLayoutEffect(() => {
    if (!blob) return

    imageValidation(blob)
  }, [error, blob])

  return { blob, setBlob, error }
}
