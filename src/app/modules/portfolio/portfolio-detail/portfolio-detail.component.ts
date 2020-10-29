import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { PortfolioAddComponent } from '../portfolio-add/portfolio-add.component';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {
  addDialog: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  add() {
    this.addDialog = this.dialog.open(PortfolioAddComponent)
  }

}
