import React, { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      if (state.favorites.includes(action.id)) {
        return { ...state, favorites: state.favorites.filter((item) => item !== action.id) };
      } else {
        return { ...state, favorites: [...state.favorites, action.id] };
      }

    case 'OPEN_MODAL':
      return { ...state, selectedImage: action.image, isModalOpen: true };
    case 'CLOSE_MODAL':
      return { ...state, selectedImage: null, isModalOpen: false };

    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.data };

    case 'SET_TOPIC_DATA':
      return { ...state, topicData: action.data };

    case 'TOGGLE_DARK_MODE':
      return { ...state, isDarkMode: !state.isDarkMode };

    default:
      return state;
  }
};

export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
    isModalOpen: false,
    selectedImage: null,
    photoData: [],
    topicData: [],
    setSimilarImages: [],
    isDarkMode: false
  });

  useEffect(() => {
    const apiUrl = '/api/photos';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Dispatch the SET_PHOTO_DATA action with the data as payload
        // console.log(data);
        dispatch({ type: 'SET_PHOTO_DATA', data });
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  useEffect(() => {
    const apiUrl = '/api/topics';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Dispatch the SET_TOPIC_DATA action with the data as payload
        // console.log(data);
        dispatch({ type: 'SET_TOPIC_DATA', data });
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  const fetchTopicData = () => {
    const apiUrl = '/api/topics';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Dispatch the SET_TOPIC_DATA action with the data as payload
        dispatch({ type: 'SET_TOPIC_DATA', data });
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  const fetchPhotosByTopic = (topicId) => {
    const apiUrl = `/api/topics/photos/${topicId}`;
    console.log(apiUrl);
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Dispatch the SET_PHOTO_DATA action with the fetched data as payload
        dispatch({ type: 'SET_PHOTO_DATA', data });
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  const fetchSimilarImages = async (id) => {
    try {
      const response = await fetch(`/api/topics/photos/${id}`); // Replace with your API endpoint
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      // Dispatch the SET_SIMILAR_IMAGES action with the fetched data as payload
      dispatch({ type: 'SET_SIMILAR_IMAGES', data });
    } catch (error) {
      console.error('Error fetching similar images:', error);
    }
  };

  const addToFavorites = (id) => {
    dispatch({ type: 'TOGGLE_FAVORITE', id });
  };

  const openModal = (image) => {
    dispatch({ type: 'OPEN_MODAL', image });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  return { ...state, addToFavorites, openModal, closeModal, fetchTopicData, fetchPhotosByTopic, fetchSimilarImages, toggleDarkMode };
}