import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StockListsService {

  constructor(private http: HttpClient) { }

  addNewList(name: string) {
    return this.http.post('http://localhost:3000/watchlist/new', {
      listName: name
    });
  }
}
