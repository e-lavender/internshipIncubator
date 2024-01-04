import { CopyLinkIcon, DeleteIcon, EditIcon, FollowIcon, ReportIcon, UnfollowIcon } from '@/app'
import { CommentSpecificType, DropdownMenuType } from '@/components'

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

export const POST_COMMENTS: CommentSpecificType[] = [
  {
    url: '',
    id: '1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores, impedit labore perferendis possimus!',
    createdAt: '2 days ago',
  },
  {
    url: '',
    id: '2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores, impedit labore perferendis possimus!',
    createdAt: '1 hour ago',
    likes: 25,
    replies: [
      {
        url: '',
        id: '100',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores',
        createdAt: '7 hours ago',
        likes: 12,
      },
      {
        url: '',
        id: '101',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores',
        createdAt: '25 minutes ago',
      },
    ],
  },
  {
    url: '',
    id: '3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut earum eveniet exercitationem perferendis, sequi soluta. A aliquam deserunt dolores, impedit labore perferendis possimus!',
    createdAt: '3 weeks ago',
  },
] as const
