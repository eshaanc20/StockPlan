import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../authentication/login.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StockListsService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  addNewList(name: string) {
    return this.http.post('http://localhost:3000/watchlist/new', {
      listName: name
    }, {
      headers: {
        authentication: 'Bearer ' + this.loginService.getLoginToken()
      }
    }).pipe(map(res => {
        let resData;
        resData = {...res};
        return resData;
      }));
  }

  getAllLists() {
    return this.http.get('http://localhost:3000/watchlist/all', {
      headers: {
        authentication: 'Bearer ' + this.loginService.getLoginToken()
      }
    }).pipe(map(res => {
        let resData;
        resData = {...res};
        return resData;
      }));
  }
}
