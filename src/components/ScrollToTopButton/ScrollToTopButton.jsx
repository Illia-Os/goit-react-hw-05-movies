import throttle from 'lodash.throttle';
import { useEffect, useState } from 'react';
import { ReactComponent as ButtonToTop } from '../../images/chevron-up.svg';
import { BtnToTop, Text } from './ScrollToTopButton.styled';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollTrigger = 600;

    setIsVisible(scrollY > scrollTrigger);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 300));
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <BtnToTop className={isVisible ? 'visible' : ''} onClick={scrollToTop}>
      <ButtonToTop />
      <Text className="text">Back to Top</Text>
    </BtnToTop>
  );
};

export default ScrollToTopButton;
