import Loader from 'components/Loader';
import { useEffect, useState } from 'react';
import { getTrendingFilms } from 'services/api';
import { toast } from 'react-toastify';
import TrendingFilms from 'components/TrendingFilms';
import handleError from 'helpers';
import Button from 'components/Button/Button';
import ScrollToTopButton from 'components/ScrollToTopButton';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setShowButton(false);
        setPage(1);
        const data = await getTrendingFilms(1);
        setTrendingFilms(data.results);
        setShowButton(true);
      } catch (error) {
        handleError(setError);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const loadMoreTrendingFilms = async () => {
    setIsLoading(true);
    try {
      const data = await getTrendingFilms(page + 1);
      handleMoreTrendingFilms(data);
    } catch (error) {
      handleError(setError);
    }
  };

  const handleMoreTrendingFilms = data => {
    const totalPages = Math.floor(data.total_pages / 20);
    if (page >= totalPages) {
      setIsLoading(false);
      setShowButton(false);
      toast.info("You've reached the end of search results.");
    } else {
      setTrendingFilms(prevState => [...prevState, ...data.results]);
      setPage(prevPage => prevPage + 1);
      setShowButton(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (page !== 1) {
      const { scrollHeight, clientHeight } = document.documentElement;
      const scrollPosition = scrollHeight - clientHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [page]);

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {trendingFilms.length > 0 && (
        <TrendingFilms trendingFilms={trendingFilms} />
      )}
      {showButton && (
        <Button loadMore={loadMoreTrendingFilms} isLoading={isLoading}>
          Load More
        </Button>
      )}
      <ScrollToTopButton />
    </section>
  );
};

export default Home;
