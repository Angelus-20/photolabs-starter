import React from 'react';
import FavIcon from './FavIcon';
import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({handleClick, isFavorite, id}) {

  return (
    <div onClick={() => handleClick(id)} className="photo-list__fav-icon">
      <FavIcon selected={isFavorite} id={id}/>
    </div>
  );
}

export default PhotoFavButton;