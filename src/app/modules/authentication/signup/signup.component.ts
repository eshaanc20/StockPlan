import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  inProgress = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSignup(f: NgForm) {
    this.inProgress = true;
    this.loginService.signup(f.value.firstName, f.value.lastName, f.value.email, f.value.password).subscribe(res => {
      this.inProgress = false;
    });
  }
}
