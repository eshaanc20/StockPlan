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
}
