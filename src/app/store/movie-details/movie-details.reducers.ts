import { createReducer, on } from '@ngrx/store';
import * as MovieDetailsActions from './movie-details.actions';

export interface MovieDetailsState {
  selectedMovieId: string | null;
  movieDetails: {} | null;
  showMovieDetails: boolean;
  error: string | null;
}

export const initialState: MovieDetailsState = {
  selectedMovieId: null,
  movieDetails: null,
  showMovieDetails: false,
  error: null
};

export const movieDetailsReducer = createReducer(
  initialState,
  on(MovieDetailsActions.selectMovie, (state, { movieId }) => ({
    ...state,
    selectedMovieId: movieId,
    movieDetails: null,
    showMovieDetails: false,
    error: null
  })),
  on(MovieDetailsActions.loadMovieDetails, state => ({
    ...state,
    movieDetails: null,
    showMovieDetails: false,
    error: null
  })),
  on(MovieDetailsActions.loadMovieDetailsSuccess, (state, { movieDetails }) => ({
    ...state,
    movieDetails,
    showMovieDetails: true,
    error: null
  })),
  on(MovieDetailsActions.loadMovieDetailsFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(MovieDetailsActions.clearMovieDetails, state => ({
    ...state,
    selectedMovieId: null,
    movieDetails: null,
    showMovieDetails: false,
    error: null
  }))
);
