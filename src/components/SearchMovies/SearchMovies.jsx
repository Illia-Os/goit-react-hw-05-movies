import {
  ImageTrendingFilm,
  StyledTrendingFilm,
} from '../TrendingFilms/TrendingFilms.styled';
import {
  StyledLink,
  StyledNameFilm,
  StyledSearchMoviesGallery,
} from './SearchMovies.styled';
import PropTypes from 'prop-types';
import noImage from '../../images/no-image.jpg';
import { useLocation } from 'react-router-dom';

const SearchMovies = ({ moviesByName }) => {
  const location = useLocation();

  return (
    <StyledSearchMoviesGallery>
      {moviesByName.map(({ id, poster_path, release_date, original_title }) => (
        <StyledTrendingFilm key={id}>
          <StyledLink state={{ from: location }} to={`${id}`}>
            <ImageTrendingFilm
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original/${poster_path} `
                  : noImage
              }
              alt={original_title}
            />
            <StyledNameFilm>{original_title}</StyledNameFilm>
            <span>{release_date.substring(0, 4)}</span>
          </StyledLink>
        </StyledTrendingFilm>
      ))}
    </StyledSearchMoviesGallery>
  );
};

SearchMovies.propTypes = {
  moviesByName: PropTypes.array,
};

export default SearchMovies;
