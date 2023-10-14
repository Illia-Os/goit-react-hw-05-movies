import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledSearchMoviesGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const StyledNameFilm = styled.h2`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 22px;
`;
