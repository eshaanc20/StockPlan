import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn: boolean;

  constructor() { }

  login(email: string, password: string) {

  }
}
