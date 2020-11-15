import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
  progress: boolean;
  portfolioStocks: PortfolioStockData[];
  stocks: StockData[];
  goals: GoalsData[];
  total: number;
  totalPortfolioData: PortfolioTotalData;
  editMode = false;


  constructor(private dialog: MatDialog, private loginService: LoginService, private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.progress = true;
    if (this.loginService.getLoginStatus()) {
      this.updateContent();
    } else {
      this.loginService.user.subscribe(res => {
        this.updateContent();
      });
    }
  }

  updateContent() {
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
  }

  add() {
    const addDialog = this.dialog.open(PortfolioAddComponent);
    addDialog.afterClosed().subscribe(result => {
      if (result !== 'cancel') {
        this.updateContent();
      }
    });
  }

  edit() {
    this.editMode = !this.editMode;
  }

}
