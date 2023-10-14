import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  padding-left: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 15%);

  > nav {
    display: flex;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 12px;
  padding: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: 0.3s;

  &.active {
    background-color: #8745f7;
    border: 1px solid #000;
    text-shadow: 0px 0px 21px rgba(255, 255, 255, 0.64);

    box-shadow: 0px 0px 66px 0px rgba(128, 0, 255, 0.75);
    -webkit-box-shadow: 0px 0px 66px 0px rgba(128, 0, 255, 0.75);
    -moz-box-shadow: 0px 0px 66px 0px rgba(128, 0, 255, 0.75);
  }

  &:hover,
  &:focus {
    background-color: #5f30b0;
  }
`;

export const Main = styled.main`
  margin-bottom: 100px;
`;
