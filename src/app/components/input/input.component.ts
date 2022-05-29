import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {

  //Prod
  constructor(private http: HttpClient) {}
  showMovies:boolean = false;
  movieName:string = '';
  movieResult = [];
  movieVal = '';

  searchMovie() {
    this.http
      .get(
        'https://imdb-api.com/en/API/SearchMovie/k_1yj2rdhq/' + this.movieName
      )
      .subscribe((res: any) => {
        this.movieVal = this.movieName;
        this.movieResult = res['results'];
        this.showMovies = true;
        console.log('The movie is: ', this.movieResult);
      });
  }

}
