export default function useApplicationData() {
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  const addToFavorites = (id) => {
    if (favorites.includes(id)) {
      // If the ID is already in favorites, remove it
      setFavorites((prevFavorites) => prevFavorites.filter((item) => item !== id));
    } else {
      // Otherwise, add it
      setFavorites((prevFavorites) => [...prevFavorites, id]);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };


 return { favorites, addToFavorites, isModalOpen, openModal, closeModal, selectedImage }; 
}
