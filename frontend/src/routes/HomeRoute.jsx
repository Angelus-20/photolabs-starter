import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from './PhotoDetailsModal';
import '../styles/PhotoDetailsModal.scss';

const HomeRoute = () => {
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToFavorites = (id) => {
    // console.log(id, "this is the id");
    setFavorites((prev) => [...prev, id]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home-route">
      <TopNavigation favorites={favorites}>
        <TopicList />
      </TopNavigation>
      <PhotoList addToFavorites={addToFavorites} openModal={openModal} />
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} />}
    </div>
  );
};

export default HomeRoute;
