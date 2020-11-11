import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio-add',
  templateUrl: './portfolio-add.component.html',
  styleUrls: ['./portfolio-add.component.css']
})
export class PortfolioAddComponent implements OnInit {
  progress: boolean;

  constructor(
    private dialog: MatDialogRef<PortfolioAddComponent>,
    private portfolioService: PortfolioService
  ) { }

  ngOnInit() {
  }

  add(f: NgForm) {
    this.progress = true;
    this.portfolioService.addToPortfolio(f.value.stockSymbol, Number(f.value.shares), Number(f.value.price)).subscribe(res => {
      this.dialog.close();
      this.progress = false;
    });
  }
}
