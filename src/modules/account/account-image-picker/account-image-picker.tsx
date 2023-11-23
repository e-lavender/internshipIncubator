import { useDisclose } from '@/app'
import { ImagePickerModal } from '@/components'
import { AccountImage } from '@/modules'

export const AccountImagePicker = () => {
  const { isOpen, onClose, onToggle } = useDisclose()

  return (
    <>
      <AccountImage onClick={onToggle} />
      <ImagePickerModal isOpen={isOpen} onChange={onClose} onClose={onClose} error={''} />
    </>
  )
}
