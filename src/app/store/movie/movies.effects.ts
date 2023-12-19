import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { searchMovies, searchMoviesFailure, searchMoviesSuccess } from '../movies/movies.actions';
import { MovieService } from '../../services/movies.service';

interface SearchResponse {
  Response: string;
  Search?: [];
  totalResults?: string;
  Error?: string;
}

@Injectable()
export class MovieEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchMovies),
      mergeMap(({ title }) =>
        this.movieService.searchMovies(title).pipe(
          map((response: SearchResponse) => {
            if (response && response.Search) {
              return searchMoviesSuccess({ movies: response.Search });
            } else {
              return searchMoviesFailure({ error: 'No movies found' });
            }
          }),
          catchError((error: string) => of(searchMoviesFailure({ error })))
        )
      )
    )
  );
}
