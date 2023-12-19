import { ActionReducerMap  } from "@ngrx/store";
import { movieReducer, MovieState } from "./movies/movies.reducer";
import { movieDetailsReducer, MovieDetailsState } from "./movie-details/movie-details.reducers";
import { MovieEffects } from "./movies/movies.effects";
import { MovieDetailsEffects } from "./movie-details/movie-details.effects";

export interface AppState {
  movies: MovieState;
  movieDetails: MovieDetailsState;
};

export const appReducer: ActionReducerMap<AppState> = {
  movies: movieReducer,
  movieDetails: movieDetailsReducer
};

export const appEffects = [
  MovieEffects,
  MovieDetailsEffects
];
