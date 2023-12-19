import s from './account-image.module.scss'

import { useTranslation } from '@/app'
import { Avatar, AvatarPropsType } from '@/components'
import { Button, ButtonProps } from '@/ui'

type AccountImageProps = ButtonProps & AvatarPropsType
export const AccountImage = (props: AccountImageProps) => {
  const { width = 192, height = 192, onClick, ...restProps } = props

  const { t } = useTranslation()
  const { profileImage } = t.profileSettings.generalSettings

  return (
    <div className={s.container}>
      <Avatar
        width={width}
        height={height}
        rounded={false}
        onDelete={() => console.log('Avatar deleted!!!')}
        {...restProps}
      />
      <Button variant={'outlined'} onClick={onClick}>
        {profileImage.btn.label}
      </Button>
    </div>
  )
}
