import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  progress = false;

  constructor(private loginService: LoginService, private dialog: MatDialogRef<SignupComponent>) { }

  ngOnInit() {
  }

  onSignup(f: NgForm) {
    this.progress = true;
    this.loginService.signup(f.value.firstName, f.value.lastName, f.value.email, f.value.password).subscribe(res => {
      this.progress = false;
      this.dialog.close();
    });
  }
}
