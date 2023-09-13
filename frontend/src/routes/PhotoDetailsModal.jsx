import React from 'react';
import '../styles/PhotoFavButton.scss';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ closeModal, selectedImage, favorites, addToFavorites, fetchPhotosByTopic}) => {


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="Close" />
      </button>
      <div className="photo-list__item">
        <div className='photo-details-modal__image'>
          <PhotoFavButton handleClick={addToFavorites} favorites={favorites} id={selectedImage.id} />
          <img src={selectedImage.urls.regular} className="photo-details-modal__image" alt="Selected Image" />
        </div>
        <div className="photo-list__user-details">
          <img
            src={selectedImage.user.profile}
            alt={selectedImage.user.username}
            className="photo-list__user-profile"
          />
          <div className="photo-list__user-info">
            <p>{selectedImage.user.username}</p>
            <p className="photo-list__user-location">
              {selectedImage.location?.city}, {selectedImage.location?.country}
            </p>
          </div>
        </div>
      </div>
      <div className="photo-details-modal__similar">
        <header className="photo-details-modal__header">Similar Photos</header>
        <main className='photo-details-modal__images'>
          <PhotoList photos={selectedImage.similar_photos} addToFavorites={addToFavorites} favorites={favorites} fetchPhotosByTopic={fetchPhotosByTopic}/>
        </main>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
