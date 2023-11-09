import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const { height = 36, width = 36, color = 'currentColor' } = props

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#clip0_26444_7666)">
        <path
          d="M17.9625 35.2802C17.8848 35.2816 17.7926 35.2816 17.7005 35.2816C14.0515 35.2816 10.6646 34.1613 7.86526 32.2461L7.92574 32.285C5.04286 30.3251 2.79214 27.6338 1.4155 24.473L1.36942 24.3563C0.600455 22.5938 0.118055 20.5475 0.0374152 18.3962L0.0359752 18.3645C0.0114952 17.9541 -0.00146484 17.4732 -0.00146484 16.9907C-0.00146484 15.1346 0.200135 13.3274 0.584615 11.5864L0.554375 11.752C1.06846 9.40483 1.82878 7.33123 2.82958 5.40163L2.76334 5.54419C3.68782 3.66787 4.88158 2.07091 6.31582 0.72739L6.32446 0.71875L6.10558 6.30883C6.25149 6.12259 6.70222 6.01987 7.45774 6.00067C8.21325 5.98147 8.67741 6.08419 8.85021 6.30883C9.5947 5.07907 10.6905 4.12579 11.9995 3.58003L12.0441 3.56419C13.4021 2.87011 15.0005 2.44099 16.6925 2.39059H16.7097C15.791 3.24019 15.0019 4.21363 14.364 5.28643L14.3309 5.34547C13.6339 6.23683 13.2005 7.36435 13.1673 8.59123V8.59843C13.5173 8.70931 13.9377 8.80291 14.3683 8.86195L14.4101 8.86627C14.9073 8.93923 15.3249 8.98915 15.6629 9.01603C16.0008 9.04291 16.4515 9.06931 17.015 9.09523C17.5785 9.12115 17.9136 9.14131 18.0201 9.15571C18.2189 9.22195 18.2817 9.52387 18.2088 10.0615C18.1267 10.6317 17.9107 11.1386 17.5953 11.5677L17.6011 11.5591C17.4974 11.6944 17.3894 11.8154 17.2742 11.9263L17.2728 11.9277C16.9459 12.1927 16.5773 12.4274 16.1827 12.6189L16.1481 12.6333C15.5664 12.9443 14.8925 13.1791 14.1797 13.3044L14.1393 13.3101L14.4446 17.0772L11.6798 15.7437C11.5387 16.0432 11.4552 16.396 11.4552 16.7675C11.4552 16.9807 11.4825 17.1866 11.5329 17.3839L11.5286 17.3666C11.6669 17.8807 11.9145 18.3256 12.2472 18.6928L12.2443 18.6899C12.5928 19.0644 13.0305 19.348 13.5259 19.5093L13.5475 19.5151C13.8629 19.6274 14.2257 19.6922 14.6059 19.6922C14.8017 19.6922 14.9947 19.6749 15.1805 19.6418L15.1603 19.6447C15.8933 19.5107 16.547 19.2703 17.1432 18.9362L17.1115 18.9535C17.7355 18.6155 18.2894 18.317 18.7733 18.0578C19.1592 17.8389 19.6214 17.7093 20.1125 17.7093C20.1557 17.7093 20.1989 17.7108 20.2406 17.7122H20.2349H20.2651C20.9376 17.7122 21.551 17.9613 22.019 18.3717L22.0161 18.3688C22.2811 18.6079 22.4467 18.952 22.4467 19.3351C22.4467 19.4517 22.4309 19.564 22.4035 19.6706L22.4049 19.662C22.3915 19.6888 22.3752 19.7253 22.356 19.7714C22.3041 19.8664 22.248 19.9471 22.1846 20.0219L22.1861 20.0205C22.0867 20.1444 21.9686 20.248 21.8333 20.3258L21.8275 20.3287C21.6461 20.4266 21.4358 20.4986 21.2126 20.536L21.2011 20.5375C21.0427 20.5663 20.8613 20.5835 20.6769 20.5835C20.5373 20.5835 20.399 20.5735 20.2637 20.5562L20.2795 20.5576C19.5883 21.7139 18.6091 22.6341 17.4384 23.2346L17.3995 23.2533C16.4707 23.6651 15.3864 23.9042 14.2473 23.9042C13.8888 23.9042 13.5374 23.8811 13.1918 23.8351L13.2321 23.8394C14.1321 24.5983 15.2179 25.1671 16.4102 25.4695L16.4649 25.481C17.0467 25.6365 17.7134 25.7258 18.4032 25.7258C18.9029 25.7258 19.3925 25.6783 19.8662 25.589L19.8173 25.5962C20.975 25.3658 22.0046 25.0072 22.9608 24.5277L22.8902 24.5594C23.868 24.0856 24.7075 23.5039 25.4433 22.8141L25.4376 22.8184C26.0726 22.2323 26.6069 21.5469 27.0187 20.7866L27.0389 20.7448C27.5342 19.7282 27.8237 18.533 27.8237 17.2701C27.8237 17.1448 27.8208 17.021 27.815 16.8972V16.9144C27.7704 15.5551 27.5011 14.272 27.0417 13.084L27.0691 13.1632C26.7408 12.1869 26.2022 11.3546 25.5053 10.6879L25.5024 10.6864C26.5435 11.1184 27.4421 11.6498 28.2528 12.2863L28.2283 12.2676C28.9123 12.858 29.4379 13.6111 29.7489 14.4693L29.7605 14.5053C29.7821 14.2058 29.7936 13.8573 29.7936 13.5045C29.7936 8.90947 27.7257 4.79683 24.4685 2.04787L24.4454 2.02915C27.8208 2.93635 30.6461 4.90627 32.616 7.55011L32.6448 7.58899C34.5297 10.3379 35.6558 13.7364 35.6558 17.3983C35.6558 17.5696 35.6529 17.741 35.6486 17.9109V17.8864C35.6486 17.9383 35.6501 17.9988 35.6501 18.0592C35.6501 19.8117 35.3549 21.4951 34.8105 23.0618L34.8422 22.9552C34.2331 24.7639 33.3993 26.3335 32.3525 27.736L32.3841 27.6914C31.2869 29.1703 30.0485 30.4519 28.6646 31.5578L28.6229 31.5895C25.7141 33.8819 21.9989 35.2687 17.9597 35.2759H17.9582L17.9625 35.2802Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_26444_7666">
          <rect width={width} height={height} fill={color} />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)