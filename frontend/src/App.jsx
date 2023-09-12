import './App.scss';
import React, { useState,useEffect } from 'react';
import HomeRoute from 'routes/HomeRoute';
import { useApplicationData } from 'hooks/useApplicationData'; // Import your custom hook

const App = () => {
  // Use your custom hook to get the application data
  const { photoData, topicData, fetchTopicData } = useApplicationData();

  useEffect(() => {
    fetchTopicData();
  }, [fetchTopicData]);

  return (
    <div>
      {/* Pass both photoData and topicData to HomeRoute as props */}
      <HomeRoute photoData={photoData} topicData={topicData} />
    </div>
  );
};

export default App;
