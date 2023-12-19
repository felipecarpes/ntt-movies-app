import { createAction, props } from '@ngrx/store';
import { Movie } from '../../model/movie.model';

export const searchMovies = createAction(
  '[Movie] Search Movies',
  props<{ title: string }>()
);

export const searchMoviesSuccess = createAction(
  '[Movie] Search Movies Success',
  props<{ movies: Movie[] | [] }>()
);

export const searchMoviesFailure = createAction(
  '[Movie] Search Movies Failure',
  props<{ error: string }>()
);
export function selectMovie(arg0: { movieId: string; }): any {
  throw new Error('Function not implemented.');
}

export function loadMovieDetails(arg0: { movieId: string; }): any {
  throw new Error('Function not implemented.');
}

