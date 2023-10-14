import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledTrendingFilmsGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledTrendingFilm = styled.li`
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0px 0px 6px 1px rgba(113, 0, 255, 0.75);
  -webkit-box-shadow: 0px 0px 6px 1px rgba(113, 0, 255, 0.75);
  -moz-box-shadow: 0px 0px 6px 1px rgba(113, 0, 255, 0.75);
`;

export const ImageTrendingFilm = styled.img`
  display: block;
  height: 429px;
  border: 4px solid #8745f7;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const StyledTrendingLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const StyledNameTrendingFilm = styled.h2`
  margin-top: 10px;
  margin-bottom: 15px;
  padding-left: 20px;
  font-size: 22px;
`;
