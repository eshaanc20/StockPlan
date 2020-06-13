import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedInStatus = false;
  user: User;
  error: string;

  constructor(private loginService: LoginService) { 
    loginService.user.subscribe(res => {
      this.user = res;
    });
    loginService.loginError.subscribe(err => {
      this.error = err;
    });
  }

  ngOnInit() {
  }

  onLogin(f: NgForm) {
    this.loginService.login(f.value.email, f.value.password);
  }
}