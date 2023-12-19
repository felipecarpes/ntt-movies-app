import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './movies.actions';
import { Movie } from '../../model/movie.model';

export interface MovieState {
  movies: Movie | any[];
  movieDetails: Movie | {};
  loading: boolean;
  error: string | null;
}

export const moviesState: MovieState = {
  movies: [],
  movieDetails: {},
  loading: false,
  error: null
};

export const movieReducer = createReducer(
  moviesState,
  on(MovieActions.searchMovies, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(MovieActions.searchMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies,
    loading: false,
    error: null
  })),
  on(MovieActions.searchMoviesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  })),
);
