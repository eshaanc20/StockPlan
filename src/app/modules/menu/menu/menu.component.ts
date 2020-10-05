import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../../authentication/login.service';
import { SignupComponent } from '../../authentication/signup/signup.component';
import { User } from '../../authentication/User';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private newDialog: any;
  loggedIn = false;
  userFirstName: string;
  homepage: boolean;

  constructor(private dialog: MatDialog, private loginService: LoginService, private router: Router) {
    if (router.url === '/') {
      this.homepage = true;
    } else {
      this.homepage = false;
    }
    const currentToken = localStorage.getItem('token');
    if (currentToken) {
      loginService.verifyToken(currentToken);
    }
    loginService.user.subscribe(res => {
      this.userFirstName = res.getFirstName();
      this.loggedIn = true;
      if (router.url !== '/') {
        this.homepage = false;
      }
    });
   }

  ngOnInit() {
  }

  open() {
    this.newDialog = this.dialog.open(SignupComponent);
  }

  login() {
    this.router.navigate(['/dashboard']);
  }
}
