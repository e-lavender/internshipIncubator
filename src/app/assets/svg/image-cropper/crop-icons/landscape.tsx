import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={26} height={20} fill="none" ref={ref} {...props}>
    <rect
      width={18}
      height={24}
      x={25}
      y={1}
      stroke="currentColor"
      strokeWidth={2}
      rx={2}
      transform="rotate(90 25 1)"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export { Memo as LandscapeCrop }
