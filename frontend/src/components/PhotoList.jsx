import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "../mocks/photos";

function PhotoList({ addToFavorites, openModal }) {

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id} onClick={() => openModal(photo.urls.regular)}>
          <PhotoListItem
            key={photo.id}
            id={photo.id}
            location={photo.location}
            imageSource={photo.urls.regular}
            username={photo.user.username}
            profile={photo.user.profile}
            addToFavorites={addToFavorites}
          />
        </li>
      ))}
    </ul>
  );
}

export default PhotoList;
