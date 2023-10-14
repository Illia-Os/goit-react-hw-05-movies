import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StyledFilmImg,
  StyledDescription,
  StyledFilmDescription,
  StyledLink,
  StyledNavList,
  StyledGenres,
  StyledLinkBack,
  StyledArrowLeftIcon,
} from './FilmDescription.styled';
import { Suspense, useRef } from 'react';
import noImage from '../../images/no-image.jpg';

const FilmDescription = ({
  film: {
    poster_path,
    title,
    name,
    vote_average,
    overview,
    release_date,
    genres,
  },
}) => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const getGenres = () => {
    const genresName = genres.map(genre => genre.name);
    return genresName.join(', ');
  };

  return (
    <section>
      <StyledLinkBack to={backLinkHref.current}>
        <StyledArrowLeftIcon />
        Go back
      </StyledLinkBack>
      <StyledFilmDescription>
        <StyledFilmImg
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original/${poster_path} `
              : noImage
          }
          alt={title ?? name}
        />
        <StyledDescription>
          <h1>
            {title ?? name}
            {release_date && ` (${release_date?.substring(0, 4)})`}
          </h1>
          <StyledGenres>
            User score: {Math.round((vote_average / 10) * 100)}%
          </StyledGenres>
          <h2>Overview</h2>
          <p>{overview}</p>

          {genres?.length > 0 && <h2>Genres</h2>}
          <p>{genres?.length > 0 && getGenres()}</p>
        </StyledDescription>
      </StyledFilmDescription>
      <StyledNavList>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </StyledNavList>
      <Suspense>
        <Outlet />
      </Suspense>
    </section>
  );
};

FilmDescription.propTypes = {
  film: PropTypes.object,
};

export default FilmDescription;
