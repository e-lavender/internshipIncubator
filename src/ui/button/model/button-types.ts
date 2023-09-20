import { ComponentPropsWithoutRef, ElementType } from 'react'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'outlined' | 'link'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>
