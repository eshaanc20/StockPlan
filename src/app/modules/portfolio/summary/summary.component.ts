import { Component, Input, OnInit} from '@angular/core';
import { PortfolioStockData, PortfolioTotalData } from '../../interfaces';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() stocks: PortfolioStockData[];
  @Input() total: PortfolioTotalData;
  @Input() edit: boolean;
  tableColumns = ['Symbol', 'Shares', 'Price', 'Book Value', 'Market Value', 'Change Amount', 'Change'];
  tableContent: PortfolioStockData[];
  length: number;
  progress: boolean;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    if (this.length < 8) {
      this.tableContent = this.stocks.slice(0, this.length);
    } else {
      this.tableContent = this.stocks.slice(0, 8);
    }
  }

  updateTableContent(event: any) {
    const startIndex = event.pageIndex * 1;
    const endIndex = startIndex + 1;
    let updatedData = null;
    if (endIndex > this.length) {
      updatedData = this.stocks.slice(startIndex, this.length);
    } else {
      this.stocks.slice(startIndex, endIndex);
    }
    this.tableContent = updatedData;
  }

  deletePortfolio(id: string) {
    this.progress = true;
    this.portfolioService.delete(id).subscribe(res => {
      this.progress = false;
    });
  }
}
