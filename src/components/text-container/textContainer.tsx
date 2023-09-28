import React, { FC, PropsWithChildren } from 'react'

import s from '@/components/text-container/TextContainer.module.scss'

export const TextContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>
}
