import { ComponentPropsWithoutRef, ElementType, JSXElementConstructor, ReactNode } from 'react'

import { Tags } from './enum'

export type Tag = 'p' | 'div' | 'span' | 'h1' | 'h2' | 'h3'

export type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>

export type TypographyProps<T extends ElementType> = {
  variant?: keyof typeof Tags
  as?: T | Extract<ReactTag, Tag>
  children: ReactNode
  className?: string | null
} & ComponentPropsWithoutRef<T>
