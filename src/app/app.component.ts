import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import {Observable} from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //For fetching Json
  //Injects UserService into this comp.
  // name = '';
  // constructor(private user: UsersService) {
  //   console.log(this.user.getData());
  //   this.name = this.user.getData().name;
  // }

  //For fetching from API
  //**** api call limit */
  data:any = [];
  constructor(private user: UsersService) {
    this.user.getData().subscribe(data => {
      this.data = (data["items"]);
    //this.propAbove = apiData;
      console.log(data);

    })
  }
}
