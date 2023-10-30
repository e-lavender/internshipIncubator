import { ComponentPropsWithoutRef, CSSProperties, ReactElement } from 'react'

export enum SelectVariant {
  Primary = 'primary',
  Pagination = 'pagination',
  Language = 'language',
  LanguageMobile = 'mobile',
}

type ObjectOption = { label: string | ReactElement; value: string }

type CommonProps = {
  value: string | number | ReactElement
  onChange: (value: string) => void
  placeholder?: string | ReactElement
  variant?: SelectVariant
  options: Array<ObjectOption | string>
  label?: string
  width?: CSSProperties['width']
  rootClassName?: string
  open?: boolean
}
export type SelectModel = Omit<ComponentPropsWithoutRef<'select'>, keyof CommonProps> & CommonProps
