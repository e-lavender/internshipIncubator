import { useDisclose } from '@/app'
import { AccountImage, ImagePickerModal } from '@/modules'

export const AccountImagePicker = () => {
  const { isOpen, onClose, onToggle } = useDisclose()

  return (
    <div>
      <AccountImage onClick={onToggle} />
      <ImagePickerModal isOpen={isOpen} onChange={onClose} onClose={onClose} />
    </div>
  )
}
