import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'a72c9cd11375413053bccd6b3e6aaefe',
  },
});

type GetMediaProps = {
  genre?: 'popular' | 'latest' | 'now_playing' | 'top_rated' | 'upcoming';
  page?: number;
};

export type Movie = {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

type Response = {
  page: number;
  results: Movie[];
  total_pages?: number;
  total_results?: number;
};

export const getMedia = ({genre = 'popular', page = 1}) =>
  instance
    .get(`movie/${genre}`, {params: {page}})
    .then(response => response.data as Response);
