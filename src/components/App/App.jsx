import { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import css from './App.module.css';
import { getRequest } from '../../apiApp';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import toast from 'react-hot-toast';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({
    src: '',
    description: '',
  });

  useEffect(() => {
    if (searchQuery === '') {
      setImages([]);
      return;
    }

    async function getData() {
      try {
        setError(false);
        setLoading(true);

        const data = await getRequest(searchQuery, page);
        setImages(pervImages => {
          return [...pervImages, ...data.results];
        });
        setTotalPages(data.total_pages); //!
        data.results.length <= 0
          ? toast('No pictures for your request', {
              icon: '❗️',
            })
          : toast.success('Success');
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [searchQuery, page, refreshTrigger]);

  const handelSearch = newQuery => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
    setTotalPages(0);
    setRefreshTrigger(prevState => !prevState);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  function handleModal(state, photo = {}) {
    setIsModalOpen(state);
    if (state) setSelectedPhoto(photo);
  }

  return (
    <div className={css.container}>
      <Toaster position='top-right' />
      <SearchBar onSearch={handelSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} onSelect={handleModal} />}
      {loading && <Loader />}
      {totalPages > page && !loading && !error && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal isOpen={isModalOpen} photo={selectedPhoto} onChange={handleModal} />
    </div>
  );
}
