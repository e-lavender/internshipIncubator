import { RepliedCommentsItem, RepliedCommentsListType, RepliedCommentType } from '@/components'
export const RepliedCommentsList = ({ replies }: RepliedCommentsListType) => {
  return replies?.length
    ? replies?.map(reply => <RepliedCommentsItem key={reply.id} {...reply} />)
    : null
}
