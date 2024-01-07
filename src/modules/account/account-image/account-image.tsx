import s from './account-image.module.scss'

import { useDisclose, useTranslation } from '@/app'
import { useDeleteAvatarMutation, useGetProfileQuery } from '@/app/services/profile/profile.api'
import { Avatar, AvatarPropsType, ConfirmationModal, LoaderV2 } from '@/components'
import { Button, ButtonProps } from '@/ui'

type AccountImageProps = ButtonProps & AvatarPropsType
export const AccountImage = (props: AccountImageProps) => {
  const { isOpen, onOpen, onClose } = useDisclose()
  const { width = 192, height = 192, onClick, ...restProps } = props

  const { data, isLoading } = useGetProfileQuery()
  const [deleteAvatar, { isLoading: isDeleteLoading }] = useDeleteAvatarMutation()

  const isLoadingLabel = (isDeleteLoading && 'Saving...') || 'Loading...'

  const { t } = useTranslation()
  const { profileImage } = t.profileSettings.generalSettings
  const { title, message } = t.deleteAvatarModel

  return (
    <div className={s.container}>
      <Avatar src={''} width={width} height={height} rounded onDelete={onOpen} {...restProps} />
      <Button variant={'outlined'} onClick={onClick}>
        {profileImage.btn.label}
      </Button>

      <ConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        message={message}
        onConfirmation={deleteAvatar}
      />
      <LoaderV2 isLoading={isLoading || isDeleteLoading} label={isLoadingLabel} />
    </div>
  )
}
