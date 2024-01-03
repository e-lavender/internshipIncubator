import s from './card-header.module.scss'

import { Avatar, CardHeaderType, CardDropdownMenu } from '@/components'
import { Typography } from '@/ui'

export const CardHeader = ({ url, userName, account, published }: CardHeaderType) => {
  return (
    <header className={s.header}>
      <div className={s.user}>
        <Avatar src={url} width={36} height={36} iconScale={0.6} />
        <Typography as={'h3'} variant={'h3'}>
          {userName}
        </Typography>

        {published && (
          <>
            <div className={s.circle}></div>
            <Typography variant={'small'} className={s.date}>
              {published}
            </Typography>
          </>
        )}
      </div>

      <CardDropdownMenu account={account} />
    </header>
  )
}
