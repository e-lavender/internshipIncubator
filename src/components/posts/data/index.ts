import { CopyLinkIcon, DeleteIcon, EditIcon, FollowIcon, ReportIcon, UnfollowIcon } from '@/app'
import { DropdownMenuType } from '@/components'

export const MENU_VERSION: DropdownMenuType = {
  personal: [
    {
      icon: EditIcon,
      label: 'Edit Post',
      isStyled: false,
      onClick: () => console.log(`Edit Post was clicked!!!`),
    },
    {
      icon: DeleteIcon,
      label: 'Delete Post',
      isStyled: false,
      onClick: () => console.log(`Delete Post was clicked!!!`),
    },
  ],
  public: [
    {
      icon: ReportIcon,
      label: 'Report',
      isStyled: false,
      onClick: () => console.log(`Report was clicked!!!`),
    },
    {
      icon: FollowIcon,
      label: 'Follow',
      isStyled: false,
      onClick: () => console.log(`Follow was clicked!!!`),
    },
    {
      icon: CopyLinkIcon,
      label: 'Copy Link',
      isStyled: false,
      onClick: () => console.log(`Copy Link was clicked!!!`),
    },
  ],
  friend: [
    {
      icon: ReportIcon,
      label: 'Report',
      isStyled: false,
      onClick: () => console.log(`Report was clicked!!!`),
    },
    {
      icon: UnfollowIcon,
      label: 'Unfollow',
      isStyled: false,
      onClick: () => console.log(`Unfollow was clicked!!!`),
    },
    {
      icon: CopyLinkIcon,
      label: 'Copy Link',
      isStyled: false,
      onClick: () => console.log(`Copy Link was clicked!!!`),
    },
  ],
}
