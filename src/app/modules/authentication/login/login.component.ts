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
  error = false;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.loginService.user.subscribe(res => {
      this.loggedIn = true;
      this.user = res;
      if (res.getNewToken()) {
        this.router.navigate(['/dashboard/portfolio']);
      }
    });
    this.loginService.loginError.subscribe(err => {
      this.error = true;
    });
  }

  onLogin(f: NgForm) {
    this.error = false;
    this.loginService.login(f.value.email, f.value.password);
  }
}
