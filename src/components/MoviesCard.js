import React from 'react'
import { IMG_CDN } from '../utils/constant';

const MoviesCard = ({poster}) => {
  return (
    <div className='w-48'>
        <img src={IMG_CDN+poster} alt="" />
    </div>
  )
}

export default MoviesCard;