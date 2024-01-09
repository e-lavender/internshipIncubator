import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={26} fill="none" ref={ref} {...props}>
    <rect width={16} height={24} x={1} y={1} stroke="currentColor" strokeWidth={2} rx={2} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export { Memo as PortraitCrop }
