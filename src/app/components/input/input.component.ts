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
// make a var called showMovies = false, set to true in searchMovie()
//in html, ngIf showMovie

  //constructor(private http: HttpClient) {}
  // movieName = '';

  // searchMovie() {
  //   this.http
  //     .get(
  //       'https://imdb-api.com/en/API/SearchMovie/k_aaaaaaaa/' + this.movieName
  //     )
  //     .subscribe((res: any) => {
  //       const movieResult = res;
  //       console.log('The movie is: ', movieResult);
  //     });
  // }

  //Test
   data: any = [];
  constructor(private user: UsersService, private http: HttpClient) {
    this.user.getData().subscribe((data) => {
      // this.data = data['items']; //prod
      //this.propAbove = apiData;
      this.data = data; //test
      console.log(data);
    });
  }

  movieName = '';

  searchMovie() {
    this.http
      .get(
        'https://jsonplaceholder.typicode.com/photos')
      .subscribe((res: any) => {
        // const movieResult = res;
        console.log('The movie is: ', res);
      });
  }
}
