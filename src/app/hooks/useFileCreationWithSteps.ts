import { useEffect, useState } from 'react'

import { toast } from 'react-toastify'

import { MIME_TYPES, useTranslation } from '@/app'
import { useAppDispatch } from '@/app/store/rtk.types'

export const errorMessage = {
  type(limit: string | string[], languageVersion: { text: string; preposition: string }): string {
    const format = /[^/]+$/
    const upperCaseFormat = (): string => {
      const fallbackText: string = 'defined.'

      if (Array.isArray(limit)) {
        const arrayOfTypes = limit.map(type => type.match(format)![0].toUpperCase())

        return `${languageVersion?.text} ${
          arrayOfTypes.length > 2
            ? arrayOfTypes.join(', ')
            : arrayOfTypes.join(` ${languageVersion?.preposition} `) || fallbackText
        }`
      } else {
        const type: string = limit.match(format)![0].toUpperCase()

        return `${languageVersion.text} ${type || fallbackText}`
      }
    }

    return upperCaseFormat()
  },

  size(limit: number, languageVersion: string): string {
    return `${languageVersion} ${limit} MB!`
  },
}

type ErrorValidationType = { typeLimit?: string | string[]; sizeLimit?: number } // sizeLimit => MB type

export const useFileCreationWithSteps = (
  initialStep?: number,
  callback?: ({ url }: { url: string }) => void,
  validationOptions?: ErrorValidationType
) => {
  const [step, setStep] = useState<number>(initialStep || 1)
  const [blob, setBlob] = useState<Blob | null>(null)
  const [url, setUrl] = useState<string>('')
  const [errorText, setErrorText] = useState<string>('')

  const dispatch = useAppDispatch()

  const { JPG, PNG } = MIME_TYPES

  const { t } = useTranslation()
  const { errors } = t.profileSettings.generalSettings.profileImage

  const initialStepWithValidation = (file: File) => {
    const blob: Blob = new Blob([file], { type: file?.type })

    setBlob(blob)
  }

  const stepBackward = () => setStep(step => step - 1)

  const stepForward = () => setStep(step => step + 1)

  const setPreferredStep = (step: number) => setStep(step)

  const clearError = () => setErrorText('')

  useEffect(() => {
    if (!blob) return
    const imageValidation = (
      blob: Blob,
      { typeLimit = [JPG, PNG], sizeLimit = 2 }: ErrorValidationType
    ) => {
      const { size, type } = blob
      const sizeMb = size / 1000 / 1000

      if (!typeLimit.includes(type)) {
        setUrl('')

        const errorText = errorMessage.type(typeLimit, errors.format)

        return toast.error(errorText, {
          autoClose: 1500,
        })
      }

      if (sizeMb > sizeLimit) {
        setUrl('')

        const errorText = errorMessage.size(sizeLimit, errors.size)

        return toast.error(errorText, {
          autoClose: 1500,
        })
      }

      const url = URL.createObjectURL(blob)

      if (callback) {
        // @ts-ignore
        dispatch(callback({ url }))
      }

      setUrl(url)
      setErrorText('')

      stepForward()
      toast.success('Image was successfully added!', {
        autoClose: 1500,
      })
    }

    imageValidation(blob, validationOptions ?? {})
  }, [blob])

  return {
    step,
    initialStepWithValidation,
    stepBackward,
    stepForward,
    setPreferredStep,
    url,
    blob,
    errorText,
    clearError,
  }
}
