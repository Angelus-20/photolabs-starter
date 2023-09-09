import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList'; 

const PhotoDetailsModal = ({ closeModal, selectedImage }) => {
  console.log(selectedImage)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="Close" />
      </button>
      <div>
      <img src={selectedImage} className="photo-details-modal__image" alt="Selected Image" />
      </div>
      <header className="photo-details-modal__header">Similar Photos</header>
      <main className='photo-details-modal__images'>
        <PhotoList />
      </main>
    </div>
  );
};

export default PhotoDetailsModal;
