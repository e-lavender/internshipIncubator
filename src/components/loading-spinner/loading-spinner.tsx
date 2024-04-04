import { Typography } from '@flyingtornado06/ui-kit'

import s from './loading-spinner.module.scss'

type LoaderType = {
  isLoading: boolean
  label?: string
}

export const LoadingSpinner = ({ isLoading = false, label = 'Loading...' }: LoaderType) => {
  if (!isLoading) {
    return null
  }

  return (
    <div className={s.overlay}>
      <div className={s.wrapper}>
        <div className={s.loader}></div>
        <Typography as={'p'} variant={'regular-16'}>
          {label}
        </Typography>
      </div>
    </div>
  )
}
