import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MovieState } from '../../store/movies/movies.reducer';
import * as MovieActions from '../../store/movies/movies.actions';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from '../search-bar/search-bar.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { Movie } from '../../model/movie.model';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MovieDetailsState } from '../../store/movie-details/movie-details.reducers';

@Component({
  selector: 'app-movie-wrapper',
  standalone: true,
  imports: [CommonModule, SearchbarComponent, MovieDetailsComponent, MovieCardComponent],
  templateUrl: './movie-wrapper.component.html',
  styleUrl: './movie-wrapper.component.scss'
})
export class MovieWrapperComponent implements OnInit {
  movies$: Observable<Movie[] | any>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  showMovieDetails$: Observable<boolean>;
  movieDetails$: Observable<{} | null>;

  constructor(
    private store: Store<{ movies: MovieState }>,
    private detailStore: Store<{ movieDetails: MovieDetailsState }>
  ) {
    this.movies$ = store.pipe(select('movies', 'movies'));
    this.loading$ = store.pipe(select('movies', 'loading'));
    this.error$ = store.pipe(select('movies', 'error'));
    this.showMovieDetails$ = detailStore.pipe(select('movieDetails', 'showMovieDetails'));
    this.movieDetails$ = detailStore.pipe(select('movieDetails', 'movieDetails'));
  }

  ngOnInit(): void {
    this.store.dispatch(MovieActions.searchMovies({ title: 'Avengers' }));
  }
}
