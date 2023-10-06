import { forwardRef, RefAttributes } from 'react'

import { clsx } from 'clsx'
import ReCAPTCHA, { ReCAPTCHAProps } from 'react-google-recaptcha'
import { useController, UseControllerProps, FieldValues } from 'react-hook-form'

import { RECAPTCHA, RecaptchaProps } from '@/ui/recaptcha/recaptcha'
import s from '@/ui/recaptcha/recaptcha.module.scss'

type ControlledRecaptchaProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RecaptchaProps, 'onChange'> &
  RefAttributes<ReCAPTCHA>

export const ControlledReCaptcha = <T extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  error,
  ref,
  ...recaptchaProps
}: ControlledRecaptchaProps<T>) => {
  const {
    field: { onChange },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  })

  const style = {
    wrapper: clsx(error && s.wrapper),
    recaptcha: clsx(s.recaptcha),
    error: clsx(error && s.error),
  }

  return (
    <div className={style.wrapper}>
      <ReCAPTCHA {...{ onChange, ref, ...recaptchaProps }} className={style.recaptcha} />
      {error && <p className={style.error}>{error}</p>}
    </div>
  )
}
