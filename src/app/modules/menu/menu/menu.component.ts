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
   }

  ngOnInit() {
    if (this.router.url === '/') {
      this.homepage = true;
    } else {
      this.homepage = false;
    }
    const currentToken = sessionStorage.getItem("currentToken");
    if (currentToken) {
      this.loginService.user.subscribe(res => {
        this.userFirstName = res.getFirstName();
        this.loggedIn = true;
        if (this.router.url !== '/') {
          this.homepage = false;
        }
      });
      this.loginService.verifyToken(currentToken);
    }
  }

  open() {
    this.newDialog = this.dialog.open(SignupComponent);
  }

  login() {
    this.router.navigate(['/dashboard']);
  }

  signOut() {
    sessionStorage.removeItem("currentToken");
    this.router.navigate(['../'])
  }
}
