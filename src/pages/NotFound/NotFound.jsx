import notFound from '../../images/404-opt.png';
import {
  StyledArrowLeftIcon,
  StyledLinkBack,
} from 'components/FilmDescription/FilmDescription.styled';
import { StyledNoFoundImg, Wrapper } from './NotFound.styled';

const NotFound = () => {
  return (
    <Wrapper>
      <StyledLinkBack to="/">
        <StyledArrowLeftIcon />
        Return to home page
      </StyledLinkBack>
      <StyledNoFoundImg src={notFound} alt="Page not found" />
    </Wrapper>
  );
};

export default NotFound;
