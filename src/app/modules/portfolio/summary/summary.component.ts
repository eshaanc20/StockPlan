import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { PortfolioStockData, PortfolioTotalData } from '../../interfaces';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnChanges {
  @Input() stocks: PortfolioStockData[];
  @Input() total: PortfolioTotalData;
  @Input() edit: boolean;
  tableColumns = ['Symbol', 'Shares', 'Price', 'Book Value', 'Market Value', 'Change Amount', 'Change'];
  tableContent: PortfolioStockData[];
  length: number;
  progress: boolean;
  currentPage = 0;

  constructor(private portfolioService: PortfolioService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.setTableContent(this.currentPage);
  }

  ngOnInit() {
    this.setTableContent(0);
  }

  setTableContent(id: number) {
    const startIndex = id * 1;
    const endIndex = startIndex + 5;
    this.currentPage = id;
    if (endIndex > this.length) {
      this.tableContent = this.stocks.slice(startIndex, this.length);
    } else {
      this.tableContent = this.stocks.slice(startIndex, endIndex);
    }
  }

  updateTableContent(event: any) {
    this.setTableContent(event.pageIndex);
  }

  deletePortfolio(id: string) {
    this.progress = true;
    this.portfolioService.delete(id).subscribe(res => {
      this.stocks = this.stocks.filter(element => {
        if (element.id === id) {
          return false;
        }
        return true;
      });
      this.setTableContent(this.currentPage);
      this.progress = false;
    });
  }
}
