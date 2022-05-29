import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getData() {
    let url = 'https://imdb-api.com/en/API/MostPopularMovies/k_1yj2rdhq';
    return this.http.get(url);
  }

}
