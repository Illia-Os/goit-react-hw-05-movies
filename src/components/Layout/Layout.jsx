import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Main, NavList } from './Layout.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </NavList>
        </nav>
      </Header>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
      <ToastContainer autoClose={3000} theme="colored" />
    </Container>
  );
};
export default Layout;
