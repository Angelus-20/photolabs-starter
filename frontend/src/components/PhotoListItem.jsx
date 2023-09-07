import React from "react";
import FavIcon from './FavIcon';
import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";
import PhotoFavButton from "./PhotoFavButton";

function PhotoListItem(props) {
  const { username, imageSource, id, location, profile, like, giveLike} = props;

  return (
    <div className="photo-list__item">
      <div>
        <PhotoFavButton like = {like} giveLike = {giveLike}/>
        <img
          src={imageSource}
          alt={`${username}`}
          className="photo-list__image"
        />
      </div>
      <div className="photo-list__user-details ">
        <img
          src={profile}
          alt={`${username}`}
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;
