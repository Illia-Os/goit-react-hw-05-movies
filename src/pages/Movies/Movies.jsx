import Loader from 'components/Loader';
import SearchForm from 'components/SearchForm';
import SearchMovies from 'components/SearchMovies';
import handleError from 'helpers';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieByName } from 'services/api';

const Movies = () => {
  const [moviesByName, setMoviesByName] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParam = searchParams.get('query');

  const handleMovies = useCallback(
    data => {
      if (data.results.length === 0) {
        setIsLoading(false);
        setMoviesByName([]);
        setSearchParams({});
        toast.error(
          'Sorry, there are no movies matching your search query. Please try again'
        );
      } else {
        setMoviesByName(data.results);
        setIsLoading(false);
      }
    },
    [setSearchParams]
  );

  useEffect(() => {
    if (!searchParam) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setMoviesByName([]);
        const data = await getMovieByName(searchParam);
        handleMovies(data);
      } catch (error) {
        handleError(setError);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParam, handleMovies]);

  const addMovie = searchValue => {
    if (searchValue.trim() === '') {
      toast.info('Enter the name of the movie.', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    setSearchParams({
      query: searchValue,
    });
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {<SearchForm addMovie={addMovie} />}
      {moviesByName.length > 0 && <SearchMovies moviesByName={moviesByName} />}
    </>
  );
};

export default Movies;
