import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { LoginService } from '../../authentication/login.service';
import { GoalsInformationFormat, PortfolioStock, StockInformationFormat } from '../../interfaces';
import { PortfolioAddComponent } from '../portfolio-add/portfolio-add.component';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {
  addDialog: any;
  progress: boolean;
  portfolio: PortfolioStock[];
  stocks: StockInformationFormat[];
  goals: GoalsInformationFormat[];
  total: number;


  constructor(private dialog: MatDialog, private loginService: LoginService, private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.progress = true;
    if (this.loginService.getLoginStatus()) {
      this.portfolioService.getPortfolio().subscribe(data => {
        this.portfolio = data.portfolio;
        this.stocks = data.stocks;
        this.goals = data.goals;
        this.total = this.portfolio.length;
        this.progress = false;
      });
    } else {
      this.loginService.user.subscribe(res => {
        this.portfolioService.getPortfolio().subscribe(data => {
          this.portfolio = data.portfolio;
          this.stocks = data.stocks;
          this.goals = data.goals;
          this.total = this.portfolio.length;
          this.progress = false;
        });
      });
    }
  }

  add() {
    this.addDialog = this.dialog.open(PortfolioAddComponent);
  }

}
