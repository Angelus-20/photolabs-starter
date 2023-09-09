import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';



const HomeRoute = () => {
  const [favorites, setFavorites] = useState([]);
  // id will pass as a param
  const addToFavorites = (id) => {
    console.log(id, "this is the id");
    // set current id as favorites
    setFavorites((prev) =>
      [...prev, id]);
  };

  return (
    <div className="home-route">
      <TopNavigation favorites={favorites}>
        <TopicList />
      </TopNavigation>
      <PhotoList addToFavorites={addToFavorites} />
    </div>
  );
};

export default HomeRoute;
