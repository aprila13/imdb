import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { SearchService } from 'src/app/services/search.service';
import {concat, debounceTime, Observable, of, Subject, switchMap} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { SearchResponse } from 'src/searchResponse';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  // inputVal = '';
  // getTitle(titleVal) {
  //   console.log(titleVal);
  //   this.inputVal = titleVal;
  // }
  constructor(private searchService: SearchService){}
     albumRes: SearchResponse[]; 
albumSelected: Number;
     ngOnInit() {
       this.searchService.getAlbums().subscribe(data => {
         this.albumRes = data;
       })
     }
  }

  

