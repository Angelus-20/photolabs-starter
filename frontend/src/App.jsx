import './App.scss';
import React, {useState} from 'react';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';

const App = () => {
  // const photos = Array(4).fill(); // Create three array with null items

  return (
    <div>
        <TopicList />
        <PhotoList />
    </div>
  );
};

export default App;
