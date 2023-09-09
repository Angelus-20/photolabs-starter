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
    
       {/* pass favorites all the way down here */}
      //  check if current id exists in the array [1, 2, 3] if the current is 4 is not favorited but if 3 then favorited 
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
