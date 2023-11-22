import s from './account-image.module.scss'

import { Avatar, AvatarPropsType } from '@/components'
import { Button, ButtonProps } from '@/ui'

type AccountImageProps = ButtonProps & AvatarPropsType
export const AccountImage = (props: AccountImageProps) => {
  const { width = 192, height = 192, onClick, ...restProps } = props

  return (
    <div className={s.container}>
      <Avatar width={width} height={height} {...restProps} />
      <Button variant={'outlined'} onClick={onClick}>
        Add a Profile Photo
      </Button>
    </div>
  )
}
