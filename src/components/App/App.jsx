import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import { fetchArticles } from '../../articles';
import css from './App.module.css';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState('');
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = (newTopic) => {
    setTopic(newTopic);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (topic === '') {
      toast('Please enter a search term.');
      return;
    }

    async function getArticles() {
      try {
        setLoading(true);
        setError(false);
        const fetchedArticles = await fetchArticles(topic, page);
        setArticles((prevState) => [...prevState, ...fetchedArticles]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getArticles();
  }, [page, topic]);

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {articles.length > 0 && (
        <>
          <ImageGallery items={articles} onImageClick={openModal} />
          {!loading && !error && <LoadMoreBtn onClick={handleLoadMore} />}
        </>
      )}
      <ImageModal isOpen={modalIsOpen} onClose={closeModal} image={selectedImage} />
    </div>
  );
}



