// movie-details.component.ts
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as MovieDetailsActions from '../../store/movie-details/movie-details.actions';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  @Input() movie: any;

  constructor(private store: Store<{}>) {}

  goBack(): void {
    this.store.dispatch(MovieDetailsActions.clearMovieDetails());
  }
}
