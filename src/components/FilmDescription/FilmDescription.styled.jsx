import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as ArrowLeftIcon } from '../../images/arrow-left.svg';

export const StyledFilmDescription = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 30px;

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

export const StyledFilmImg = styled.img`
  display: block;
  max-width: 350px;
  height: 500px;
  object-fit: cover;
`;

export const StyledDescription = styled.div`
  max-width: 510px;
`;

export const StyledNavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
  padding: 0;
  margin: 0;
`;

export const StyledGenres = styled.p`
  margin-bottom: 0;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  border: 1px solid #8745f7;

  &.active {
    background-color: #8745f7;
    border: 1px solid #8745f7;
  }
`;

export const StyledLinkBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #fff;
  margin-bottom: 20px;
`;

export const StyledArrowLeftIcon = styled(ArrowLeftIcon)`
  stroke: #f99248;
`;
