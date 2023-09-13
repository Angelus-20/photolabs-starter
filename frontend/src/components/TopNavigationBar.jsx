import React from 'react';
import "../styles/FavBadge.scss";
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';

const TopNavigation = ({topics, favorites, fetchPhotosByTopic}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic}/>
      <FavBadge favorites={favorites} className="photo-list__fav-icon-svg"/>
    </div>
  )
}

export default TopNavigation;