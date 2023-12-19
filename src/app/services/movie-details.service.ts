import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './enviroment';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  constructor(
    private http: HttpClient
  ) {}

  getMovieDetails(movieId: string): Observable<any> {
    const params = new HttpParams()
      .set('apikey', environment.apiKey)
      .set('i', movieId)
      .set('plot', 'full');

    return this.http.get<any>(environment.apiUrl, { params });
  }
}
