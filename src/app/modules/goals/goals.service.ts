import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoginService } from '../authentication/login.service';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getAllLists() {
    return this.http.get('http://localhost:3000/goal/list/all', {
      headers: {
        authentication: 'Bearer ' + this.loginService.getLoginToken()
      }
    }).pipe(map(res => {
        let resData;
        resData = {...res};
        return resData;
      }));
  }

  addNewList(name: string) {
    return this.http.post('http://localhost:3000/goal/list/new', {
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

  getGoalsDetail(listId: string) {
    return this.http.get('http://localhost:3000/goal/list/' + listId, {
      headers: {
        authentication: 'Bearer ' + this.loginService.getLoginToken()
      }
    }).pipe(map(res => {
      let resData;
      resData = {...res};
      return resData;
    }));
  }

  addGoal(
    listId: string,
    title: string,
    goalType: string,
    description: string,
    stock: string,
    validUntil: string,
    goalParameter: string,
    targetNumber: number
    ) {
    return this.http.post('http://localhost:3000/goal/list/' + listId, {
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
