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
  portfolioStocks: PortfolioStockData[];
  stocks: StockData[];
  goals: GoalsData[];
  total: number;
  totalPortfolioData: PortfolioTotalData;


  constructor(private dialog: MatDialog, private loginService: LoginService, private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.progress = true;
    if (this.loginService.getLoginStatus()) {
      this.portfolioService.getPortfolio().subscribe(data => {
        this.portfolioStocks = data.portfolio.stocksDetail;
        this.totalPortfolioData = {
          bookValue: data.portfolio.totalBookValue,
          marketValue: data.portfolio.totalMarketValue,
          changeAmount: data.portfolio.totalChangeAmount,
          change: data.portfolio.totalChange,
          changeDirection: data.portfolio.totalChangeDirection
        };
        this.stocks = data.stocks.stocksDetail;
        this.goals = data.goals;
        this.total = this.portfolioStocks.length;
        this.progress = false;
      });
    } else {
      this.loginService.user.subscribe(res => {
        this.portfolioService.getPortfolio().subscribe(data => {
          this.portfolioStocks = data.portfolio.stocksDetail;
          this.totalPortfolioData = {
            bookValue: data.portfolio.totalBookValue,
            marketValue: data.portfolio.totalMarketValue,
            changeAmount: data.portfolio.totalChangeAmount,
            change: data.portfolio.totalChange,
            changeDirection: data.portfolio.totalChangeDirection
          };
          this.stocks = data.stocks.stocksDetail;
          this.goals = data.goals;
          this.total = this.portfolioStocks.length;
          this.progress = false;
        });
      });
    }
  }

  add() {
    this.addDialog = this.dialog.open(PortfolioAddComponent);
  }

}
