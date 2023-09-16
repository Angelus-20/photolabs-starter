import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from './PhotoDetailsModal';
import '../styles/PhotoDetailsModal.scss';
import { useApplicationData } from 'hooks/useApplicationData';
import React from 'react';
import { useEffect } from 'react';

const HomeRoute = (props) => {
  const {
    favorites,
    addToFavorites,
    isModalOpen,
    openModal,
    closeModal,
    selectedImage,
    fetchPhotosByTopic,
    fetchSimilarImages,
    similarImages,
    isDarkMode,
    toggleDarkMode
  } = useApplicationData();

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.body.classList.add('dark-mode');
  //   } else {
  //     document.body.classList.remove('dark-mode');
  //   }
  // }, [isDarkMode]);
console.log(isDarkMode);
  return (
    <div className={`home-route ${isDarkMode ? 'dark-mode' : ''}`}>
      <TopNavigation favorites={favorites} topics={props.topicData} fetchPhotosByTopic={props.fetchPhotosByTopic} toggleDarkMode={toggleDarkMode}/>
      <PhotoList addToFavorites={addToFavorites} openModal={openModal} favorites={favorites} photos={props.photoData} />
      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={closeModal}
          selectedImage={selectedImage}
          addToFavorites={addToFavorites}
          favorites={favorites}
          fetchPhotosByTopic={fetchPhotosByTopic}
          fetchSimilarImages={fetchSimilarImages}
          similarImages={similarImages}
        />
      )}
    </div>
  );
};

export default HomeRoute;
