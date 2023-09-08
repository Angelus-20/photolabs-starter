import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation>
        <TopicList />
      </TopNavigation>
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
