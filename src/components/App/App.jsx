import React from 'react';
import css from './App.module.css';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
//import Loader from '../Loader/Loader';
//import ErrorMessage from '../ErrorMessage/ErrorMessage';
//import ImageModal from '../ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {

  const notify = () => toast('Необхідно ввести текст для пошуку зображень');

   return (
    <div className={css.container}>
      <LoadMoreBtn />
       <SearchBar />
           <button onClick={notify}>Make me a toast</button>
      <Toaster />
      <ImageGallery />
      </div>
  )
}


