import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import * as MovieDetailsActions from '../../store/movie-details/movie-details.actions';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  constructor(private store: Store<AppState>) {}
  @Input() movie: any;

  selectMovie(movieId: string) {
    this.store.dispatch(MovieDetailsActions.selectMovie({ movieId }));
    this.store.dispatch(MovieDetailsActions.loadMovieDetails({ movieId }));
  }
}
