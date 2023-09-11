import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from './PhotoDetailsModal';
import '../styles/PhotoDetailsModal.scss';
import useApplicationData from './hooks/useApplicationData';
import React, { useState } from 'react';

const HomeRoute = () => {
  const {
    favorites,
    addToFavorites,
    isModalOpen,
    openModal,
    closeModal,
    selectedImage,
  } = useApplicationData();

  return (
    <div className="home-route">
      <TopNavigation favorites={favorites}>
        <TopicList />
      </TopNavigation>
      <PhotoList addToFavorites={addToFavorites} openModal={openModal} favorites={favorites} />
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} selectedImage={selectedImage} addToFavorites={addToFavorites} favorites={favorites} />}
    </div>
  );
};

export default HomeRoute;
