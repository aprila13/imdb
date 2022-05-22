import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  //For fetching Json
  //This method mimics fetching from api
  // getData(){
  //   return {
  //     name: "April",
  //     age: 35,
  //     id: 1
  //   }
  // }

getData() {
let url = "";
return this.http.get(url);
}

}
//https://imdb-api.com/en/API/MostPopularMovies/k_1n6lx9k1
//A service is used to share data to multiple components