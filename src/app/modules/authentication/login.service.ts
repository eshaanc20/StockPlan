import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = false;
  private user: Subject<User>;

  constructor(private http: HttpClient) {
    this.user = new Subject<User>();
   }

  login(loginEmail: string, loginPassword: string) {
    this.http.post('http://localhost:3000/user/login', {email: loginEmail, password: loginPassword})
      .pipe(map(res => {
        let resData;
        for (const i in res) {
          if (res.hasOwnProperty(i)) {
            resData = {...res[i]};
          }
        }
        return resData;
      }))
      .subscribe(res => {
        if (res.login) {
          this.loggedIn = true;
          this.user.next(new User(res.firstName, res.lastName, res.email, res.token));
        } else {
          this.loggedIn = false;
        }
      });
  }

  signup(firstName: string, lastName: string, newEmail: string, newPassword: string) {
    this.http.post('http://localhost:3000/user/new', {
      firstName: firstName,
      lastName: lastName,
      email: newEmail, 
      password: newPassword
    });
  }
}
