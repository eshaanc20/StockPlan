import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-portfolio-add',
  templateUrl: './portfolio-add.component.html',
  styleUrls: ['./portfolio-add.component.css']
})
export class PortfolioAddComponent implements OnInit {

  constructor(private dialog: MatDialogRef<PortfolioAddComponent>) { }

  ngOnInit() {
  }

  add() {

  }

  close() {
    this.dialog.close();
  }

}
