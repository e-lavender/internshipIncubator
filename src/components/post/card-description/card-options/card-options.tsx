import { useState } from 'react'

import { clsx } from 'clsx'

import s from './card-options.module.scss'

import { FavouritesMenuIcon, LikedIcon, MessageIcon, ShareLinkIcon, UnlikedIcon } from '@/app'

export const CardOptions = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isFavourite, setIsFavourite] = useState<boolean>(false)

  return (
    <div className={s.container}>
      <div className={s.icons}>
        <button onClick={() => setIsLiked(like => !like)} className={s.like}>
          {isLiked ? <LikedIcon width={24} height={24} /> : <UnlikedIcon width={24} height={24} />}

          <div className={clsx(s.animation, isLiked && s.liked)} />
        </button>

        <button onClick={() => {}}>
          <MessageIcon />
        </button>
        <button onClick={() => {}}>
          <ShareLinkIcon />
        </button>
      </div>

      <div className={s.favourites}>
        <button onClick={() => setIsFavourite(favourite => !favourite)}>
          {isFavourite ? <FavouritesMenuIcon color={'#ffd073'} /> : <FavouritesMenuIcon />}

          <div className={clsx(s.animation, isFavourite && s.favourite)} />
        </button>
      </div>
    </div>
  )
}
