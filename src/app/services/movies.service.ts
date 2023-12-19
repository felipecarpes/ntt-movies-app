import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './enviroment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(
    private http: HttpClient
  ) { }

  searchMovies(title: string): Observable<any> {
    const params = new HttpParams()
      .set('apikey', environment.apiKey)
      .set('s', title);

    return this.http.get<any>(environment.apiUrl, { params });
  }
}
