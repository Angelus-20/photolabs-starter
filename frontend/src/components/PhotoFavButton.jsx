import React, {useState} from 'react';
import FavIcon from './FavIcon';
import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [like, setLike] = useState('off');
  const giveLike = () => setLike((like === "on") ? "off" : "on");
  const handleClick = () => giveLike();
  const isPhotoLiked = like === 'on';

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <FavIcon selected={isPhotoLiked}/>
    </div>
  );
}

export default PhotoFavButton;