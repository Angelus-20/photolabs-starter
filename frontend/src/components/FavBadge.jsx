import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({favorites}) => {
  // if favorites = [] then isFavPhotoExist = False
  const isFavPhotoExist = favorites.length > 0;
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>
    </div>
  ) 
};

export default FavBadge;