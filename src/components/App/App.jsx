import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
//import Loader from '../Loader/Loader';
//import ErrorMessage from '../ErrorMessage/ErrorMessage';
//import ImageModal from '../ImageModal/ImageModal';
import { fetchArticles } from '../../articles';
import css from './App.module.css';


export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState([]);

  const handleSearch = (newTopic) => { };

  useEffect(() => {
    async function getArticles() {
      try {
        setLoading(true);
        setError(false);
        const fetchArticles = await fetchArticles();
        setArticles(fetchArticles);
      } catch (error) {
        setError(true);
      } finally {
          setLoading(false);
        }
      }
  
    getArticles();
  }, []);

  const notify = () => toast('Необхідно ввести текст для пошуку зображень');

   return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
           <button onClick={notify}>Search photos and images</button>
       <Toaster />
       {loading && <b>LOADING...</b>}
       {error && <b>Oops there was an error, please try again!!!</b>}
       {articles.length >0 && <ImageGallery items={articles} />}
        <LoadMoreBtn />
    </div>
  )
}


