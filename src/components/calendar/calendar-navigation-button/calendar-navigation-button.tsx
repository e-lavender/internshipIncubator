import { NextIcon, PreviousIcon } from '@/app'
import { Button } from '@/ui'

type ButtonProps = {
  direction: 'left' | 'right'
  className?: string
  onClick: () => void
  disabled?: boolean
}
export const CalendarNavigationButton = ({
  direction,
  className,
  onClick,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <Button disabled={disabled} onClick={onClick} className={className} {...rest}>
      {direction === 'left' ? <PreviousIcon /> : <NextIcon />}
    </Button>
  )
}
