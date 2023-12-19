import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as MovieActions from '../../store/movies/movies.actions';
import * as MovieDetailsActions from '../../store/movie-details/movie-details.actions';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchbarComponent {
  constructor(private store: Store<{ movie: any[] }>) {}
  searchQuery: string = '';

  search(): void {
    this.store.dispatch(MovieActions.searchMovies({ title: this.searchQuery }));
    this.store.dispatch(MovieDetailsActions.clearMovieDetails());
  }

  clear(): void {
    this.searchQuery = '';
    this.store.dispatch(MovieDetailsActions.clearMovieDetails());
    this.store.dispatch(MovieActions.searchMovies({ title: 'Avengers' }));
  }
}
