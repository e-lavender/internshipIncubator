import { RepliedCommentsItem, RepliedCommentsListType } from '@/components'

export const RepliedCommentsList = ({ replies }: RepliedCommentsListType) => {
  if (!replies.length) return null

  return replies?.map(reply => <RepliedCommentsItem key={reply.id} {...reply} />)
}
