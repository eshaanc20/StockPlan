import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn = false;
  user = new Subject<User>();
  loginError = new Subject<string>();

  constructor(private http: HttpClient) {  }

  login(loginEmail: string, loginPassword: string) {
    this.http.post('http://localhost:3000/user/login', {email: loginEmail, password: loginPassword})
      .pipe(map(res => {
        let resData;
        resData = {...res};
        return resData;
      }))
      .subscribe(res => {
        if (res.login) {
          this.loggedIn = true;
          this.user.next(new User(res.firstName, res.lastName, res.email, res.token));
        } else {
          this.loggedIn = false;
          this.loginError.next('Login error');
        }
      });
  }

  signup(firstName: string, lastName: string, newEmail: string, newPassword: string) {
    return this.http.post('http://localhost:3000/user/new', {
      firstName: firstName,
      lastName: lastName,
      email: newEmail,
      password: newPassword
    });
  }
}
