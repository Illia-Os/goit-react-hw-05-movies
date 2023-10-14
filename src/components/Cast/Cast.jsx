import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastFilm } from 'services/api';
import {
  NoCast,
  StyledCastImg,
  StyledCastItem,
  StyledCastList,
  StyledNameActor,
} from './Cast.styled';
import noImage from '../../images/no-image.jpg';
import handleError from 'helpers';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getCastFilm(movieId);
        setCast(data.cast);
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
      {error && <p>{error}</p>}
      {cast.length > 0 ? (
        <StyledCastList>
          {cast.map(({ id, name, profile_path, character }) => (
            <StyledCastItem key={id}>
              <StyledCastImg
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original/${profile_path} `
                    : noImage
                }
                alt={cast.name}
              />
              <StyledNameActor>{name}</StyledNameActor>
              <span>Character: {character ? character : <span>-</span>}</span>
            </StyledCastItem>
          ))}
        </StyledCastList>
      ) : (
        <NoCast>We don't have any cast members for this movie</NoCast>
      )}
    </>
  );
};

export default Cast;
