import './App.scss';
import React, {useState} from 'react';
import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};


const App = () => {
  const photos = Array(4).fill(); // Create three array with null items

  return (
    <div className="photo-list">
      {photos.map((_, index) => (
        <PhotoListItem
          key={index}
          id={sampleDataForPhotoListItem.id}
          location={sampleDataForPhotoListItem.location}
          imageSource={sampleDataForPhotoListItem.imageSource}
          username={sampleDataForPhotoListItem.username}
          profile={sampleDataForPhotoListItem.profile}
        />
        ))}
    </div>
  );
};

export default App;
