import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  //for prod
  getData() {
    let url = 'https://imdb-api.com/en/API/MostPopularMovies/k_1n6lx9k1';
    return this.http.get(url);
  }

  // ***test
  // getData() {
  //   let url = 'https://jsonplaceholder.typicode.com/photos';
  //   return this.http.get(url);
  // }
}
//A service is used to share data to multiple components
