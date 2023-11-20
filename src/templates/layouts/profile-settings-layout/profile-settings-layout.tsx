import { PropsWithChildren } from 'react'

import s from './profile-settings-layout.module.scss'

import { SettingsTabs } from '@/modules/settings-tabs/settings-tabs'

export const ProfileSettingLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className={s.container}>
      <SettingsTabs />
      <div className={s.content}>{children}</div>
    </main>
  )
}
