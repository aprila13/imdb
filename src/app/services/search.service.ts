import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any> {
return this.http.get("https://jsonplaceholder.typicode.com/albums")
  }
}
