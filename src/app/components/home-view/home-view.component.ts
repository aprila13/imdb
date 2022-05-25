import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
//Prod
  // data: any = [];
  // constructor(private user: UsersService) {
  //   this.user.getData().subscribe((data) => {
  //     this.data = data['items']; //test
  //     console.log(data);
  //   });
  // }

  //test
  data: any = [];
  constructor(private user: UsersService) {
    this.user.getData().subscribe((data) => {
      //this.propAbove = apiData;
      this.data = data; 
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
