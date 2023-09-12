import { ReactNode } from 'react'

export type TextVariant =
  | 'regular-text-16'
  | 'bold-text-16'
  | 'regular-text-14'
  | 'medium-text-14'
  | 'bold-text-14'
  | 'small-text'
  | 'semi-bold-small-text'
  | 'regular-link'
  | 'small-link'
export type TagText = 'p' | 'div' | 'span'

export type TitleVariant = 'h1' | 'h2' | 'h3' | 'large'
export type TagTitle = 'h1' | 'h2' | 'h3'

export type TypographyVariantProp = TextVariant | TitleVariant

export type TypographyTagProps = TagTitle | TagText

export type TypographyProps = {
  variant: TypographyVariantProp
  as: TypographyTagProps
  children: ReactNode
}
