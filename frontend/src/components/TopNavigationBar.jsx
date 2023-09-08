import React from 'react';
import "../styles/FavBadge.scss";
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({children}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {children}
      <FavBadge className="photo-list__fav-icon-svg"/>
    </div>
  )
}

export default TopNavigation;