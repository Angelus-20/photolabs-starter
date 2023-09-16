import React from 'react';
import "../styles/FavBadge.scss";
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';

const TopNavigation = ({ topics, favorites, fetchPhotosByTopic, isDarkMode, toggleDarkMode }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />
      <button className='dark-mode' onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <FavBadge favorites={favorites} className="photo-list__fav-icon-svg" />
    </div>
  );
};

export default TopNavigation;