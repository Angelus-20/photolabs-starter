import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from './PhotoDetailsModal';
import '../styles/PhotoDetailsModal.scss';
import { useApplicationData } from 'hooks/useApplicationData';
import React from 'react';

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
    similarImages
  } = useApplicationData();


  return (
    <div className="home-route">
      <TopNavigation favorites={favorites} topics={props.topicData} fetchPhotosByTopic={props.fetchPhotosByTopic}/>        
      <PhotoList addToFavorites={addToFavorites} openModal={openModal} favorites={favorites} photos={props.photoData}/>
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
