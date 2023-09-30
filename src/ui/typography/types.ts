import { ComponentPropsWithoutRef, ElementType, JSXElementConstructor } from 'react'

import { Tags } from './enum'

export type Tag = 'p' | 'div' | 'span' | 'h1' | 'h2' | 'h3'

export type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>

export type TypographyProps<T extends ElementType> = {
  variant?: keyof typeof Tags
  as?: T | Extract<ReactTag, Tag>
} & ComponentPropsWithoutRef<T>
