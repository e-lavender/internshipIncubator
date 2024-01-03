import { ElementType, SyntheticEvent } from 'react'

import { SVGIconType } from '@/app'

export type PostCardModalType = {
  isOpen: boolean
  onChange: () => void
  currentInterface: ElementType
  isLoading?: boolean
  loaderLabel?: string
  isModified?: boolean
}

export type AccountType = 'personal' | 'public' | 'friend'

export type CardHeaderType = {
  url: string
  userName: string
  account: AccountType
  published?: string
}

export type DropdownMenuItemType = {
  icon: SVGIconType
  label: string
  isStyled: boolean
  onClick: (e?: SyntheticEvent, id?: number) => void
}

export type DropdownMenuType = {
  [key in AccountType]: Array<DropdownMenuItemType>
}
