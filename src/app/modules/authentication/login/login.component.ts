import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn = false;
  user: User;
  error: string;

  constructor(private loginService: LoginService, private router: Router) {
    loginService.user.subscribe(res => {
      this.loggedIn = true;
      this.user = res; 
      this.error = '';
      if (res.getNewToken()) {
        this.router.navigate(['/dashboard']);
      }
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
