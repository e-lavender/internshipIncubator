import s from './account-image.module.scss'

import { useTranslation } from '@/app'
import { useDeleteAvatarMutation, useGetProfileQuery } from '@/app/services/profile/profile.api'
import { Avatar, AvatarPropsType } from '@/components'
import { Button, ButtonProps } from '@/ui'

type AccountImageProps = ButtonProps & AvatarPropsType
export const AccountImage = (props: AccountImageProps) => {
  const { width = 192, height = 192, onClick, ...restProps } = props
  const { data } = useGetProfileQuery()
  const [deleteAvatar] = useDeleteAvatarMutation()

  const { t } = useTranslation()
  const { profileImage } = t.profileSettings.generalSettings

  return (
    <div className={s.container}>
      <Avatar
        src={data?.avatars[0]?.url}
        width={width}
        height={height}
        rounded
        onDelete={deleteAvatar}
        {...restProps}
      />
      <Button variant={'outlined'} onClick={onClick}>
        {profileImage.btn.label}
      </Button>
    </div>
  )
}
