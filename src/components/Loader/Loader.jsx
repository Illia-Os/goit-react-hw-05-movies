import { ThreeDots } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color="#f87719"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </StyledLoader>
  );
};

export default Loader;
