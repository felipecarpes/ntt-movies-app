import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as MovieDetailsActions from '../movie-details/movie-details.actions';
import { MovieDetailsService } from '../../services/movie-details.service';

@Injectable()
export class MovieDetailsEffects {
  constructor(
    private actions$: Actions,
    private movieDetailsService: MovieDetailsService
  ) {}

  loadMovieDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieDetailsActions.selectMovie),
      mergeMap(({ movieId }) =>
        this.movieDetailsService.getMovieDetails(movieId).pipe(
          map(movieDetails =>
            MovieDetailsActions.loadMovieDetailsSuccess({ movieDetails })
          ),
          catchError(error =>
            of(MovieDetailsActions.loadMovieDetailsFailure({ error }))
          )
        )
      )
    )
  );
}
