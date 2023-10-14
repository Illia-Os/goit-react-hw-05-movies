import FilmDescription from 'components/FilmDescription/FilmDescription';
import Loader from 'components/Loader/Loader';
import handleError from 'helpers';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmById } from 'services/api';

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getFilmById(movieId);
        setFilm(data);
      } catch (error) {
        handleError(setError);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error ? (
        <p>{error}</p>
      ) : (
        film && !isLoading && <FilmDescription film={film} />
      )}
    </>
  );
};

export default MovieDetails;
