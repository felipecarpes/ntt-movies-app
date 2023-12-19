import { createAction, props } from '@ngrx/store';

export const selectMovie = createAction(
  '[Movie] Select Movie',
  props<{ movieId: string }>()
);

export const loadMovieDetails = createAction(
  '[Movie] Load Movie Details',
  props<{ movieId: string }>()
);

export const loadMovieDetailsSuccess = createAction(
  '[Movie] Load Movie Details Success',
  props<{ movieDetails: {} }>()
);

export const loadMovieDetailsFailure = createAction(
  '[Movie] Load Movie Details Failure',
  props<{ error: string }>()
);

export const clearMovieDetails = createAction(
  '[Movie] Clear Movie Details'
);
