import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '07c0e032482e785f96b6eca01e8f41dd';

export const getTrendingFilms = async page => {
  const response = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${page}&language=en-US`
  );
  return response.data;
};

export const getFilmById = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getCastFilm = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};

export const getMovieByName = async movieName => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${movieName}&include_adult=false&api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};
