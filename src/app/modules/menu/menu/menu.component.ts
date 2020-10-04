import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignupComponent } from '../../authentication/signup/signup.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private newDialog: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  open() {
    this.newDialog = this.dialog.open(SignupComponent);
  }

}
