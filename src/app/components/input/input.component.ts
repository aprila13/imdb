import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  constructor(private http: HttpClient) {}
  movieName = '';

  searchMovie() {
    this.http
      .get(
        'https://imdb-api.com/en/API/SearchMovie/k_1n6lx9k1/' + this.movieName
      )
      .subscribe((res: any) => {
        const movieResult = res;
        console.log('The movie is: ', movieResult);
      });
  }
}
