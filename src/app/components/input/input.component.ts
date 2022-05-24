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

  searchMovie() {
    this.http
      .get(
        'https://imdb-api.com/en/API/SearchMovie/k_1n6lx9k1/' + this.movieName
      )
      .subscribe((res: any) => {
        this.movieResult = res['results'];
        this.showMovies = true;
        console.log('The movie is: ', this.movieResult);
      });
  }

  //Test
  //  data: any = [];
  // constructor(private user: UsersService, private http: HttpClient) {
  //   this.user.getData().subscribe((data) => {
  //     // this.data = data['items']; //prod
  //     //this.propAbove = apiData;
  //     this.data = data; //test
  //     console.log(data);
  //   });
  // }

  // movieName = '';

  // searchMovie() {
  //   this.http
  //     .get(
  //       'https://jsonplaceholder.typicode.com/photos')
  //     .subscribe((res: any) => {
  //       // const movieResult = res;
  //       console.log('The movie is: ', res);
  //     });
  // }
}
