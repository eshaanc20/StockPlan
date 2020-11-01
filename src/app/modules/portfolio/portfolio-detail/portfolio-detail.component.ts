import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { LoginService } from '../../authentication/login.service';
import { PortfolioTotalData, GoalsData, StockData, PortfolioStockData } from '../../interfaces';
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
  portfolio: PortfolioStockData[];
  stocks: StockData[];
  goals: GoalsData[];
  total: number;
  totalPortfolioData: PortfolioTotalData;


  constructor(private dialog: MatDialog, private loginService: LoginService, private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.progress = true;
    if (this.loginService.getLoginStatus()) {
      this.portfolioService.getPortfolio().subscribe(data => {
        this.portfolio = data.portfolio.stockDetail;
        this.totalPortfolioData = {
          totalBookValue: data.portfolio.totalBookValue,
          totalMarketValue: data.portfolio.totalMarketValue,
          totalChangeAmount: data.portfolio.totalChangeAmount,
          totalChange: data.portfolio.totalChange,
          totalChangeDirection: data.portfolio.totalChangeDirection
        }
        this.stocks = data.stocks.stockDetail;
        this.goals = data.goals;
        this.total = this.portfolio.length;
        this.progress = false;
      });
    } else {
      this.loginService.user.subscribe(res => {
        this.portfolioService.getPortfolio().subscribe(data => {
          this.portfolio = data.portfolio;
          this.stocks = data.stocks.stockDetail;
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
