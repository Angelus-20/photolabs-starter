import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


function PhotoList({ addToFavorites, openModal, favorites, isFavorite, photos }) {

  return (
    <ul className="photo-list">
      {photos && photos.map((photo) => (
        <li key={photo.id} onClick={() => openModal(photo)}>
          <PhotoListItem
            key={photo.id}
            id={photo.id}
            location={photo.location}
            imageSource={photo.urls.regular}
            username={photo.user.name}
            profile={photo.user.profile}
            addToFavorites={addToFavorites}
            favorites={favorites}
            isFavorite={isFavorite}
          />
        </li>
      ))}
    </ul>
  );
}

export default PhotoList;
