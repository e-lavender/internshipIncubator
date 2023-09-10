import { ComponentPropsWithoutRef } from 'react'

export type InputProps = {
  title?: string
  inputType: 'text' | 'password' | 'search'
  error?: string
  className?: string
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>
