import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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
  loggedIn: boolean;
  userFirstName: String;

  constructor(private dialog: MatDialog, private loginService: LoginService) { 
    this.loggedIn = loginService.getLoginStatus();
    if (this.loggedIn) {
      this.userFirstName = loginService.getLoginInformation().getFirstName();
    }
   }

  ngOnInit() {
  }

  open() {
    this.newDialog = this.dialog.open(SignupComponent);
  }

}
