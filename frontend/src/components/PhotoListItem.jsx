import React from "react";
import "../styles/PhotoFavButton.scss";
import PhotoFavButton from "./PhotoFavButton";

function PhotoListItem({
  username,
  imageSource,
  location,
  profile,
  addToFavorites,
  id,
  favorites }) {

  return (
    <div className="photo-list__item">
      <div>
        <PhotoFavButton handleClick={addToFavorites} favorites={favorites} id={id}/>
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
            {location["city"]}, {location["country"]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;
