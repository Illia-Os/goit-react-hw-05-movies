import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
import {
  NoReviews,
  StyledReviewer,
  StyledReviews,
  StyledReviewsList,
} from './Reviews.styled';
import handleError from 'helpers';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        handleError(setError);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {reviews.length > 0 ? (
        <StyledReviewsList>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <StyledReviewer>{author}</StyledReviewer>
              <StyledReviews>{content}</StyledReviews>
            </li>
          ))}
        </StyledReviewsList>
      ) : (
        <NoReviews>We don't have any reviews for this movie</NoReviews>
      )}
    </>
  );
};

export default Reviews;
