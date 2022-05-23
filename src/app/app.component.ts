import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any = [];
  constructor(private user: UsersService) {
    this.user.getData().subscribe((data) => {
      this.data = data['items'];
      //this.propAbove = apiData;
      console.log(data);
    });
  }
}
