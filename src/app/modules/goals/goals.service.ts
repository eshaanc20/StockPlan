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
    return this.http.get('https://stockplan-backend.herokuapp.com/goals/list/all', {
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
    return this.http.post('https://stockplan-backend.herokuapp.com/goals/list/new', {
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
    return this.http.get('https://stockplan-backend.herokuapp.com/goals/list/' + listId, {
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
    type: string,
    description: string,
    stock: string,
    validUntil: string,
    parameter: string,
    targetNumber: number) {
    return this.http.post('https://stockplan-backend.herokuapp.com/goals/list/' + listId, {
      goalTitle: title,
      goalType: type,
      goalDescription: description,
      stockSymbol: stock,
      validUntilDate: validUntil,
      goalParameter: parameter,
      goalTargetNumber: targetNumber
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

  deleteGoal(goalId: string) {
    return this.http.delete('https://stockplan-backend.herokuapp.com/goals/' + goalId,
    {
      headers: {
        authentication: 'Bearer ' + this.loginService.getLoginToken()
      }
    });
  }

  readCompletedGoal(goalId: string) {
    return this.http.put('https://stockplan-backend.herokuapp.com/goals/' + goalId + '/read', {},
    {
      headers: {
        authentication: 'Bearer ' + this.loginService.getLoginToken()
      }
    });
  }

}
