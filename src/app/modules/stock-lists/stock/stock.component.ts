import { Component, Input, OnInit } from '@angular/core';
import { StockData } from '../../interfaces';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  @Input() stock: StockData;
  priceColor: string;
  priceIncrease: boolean;
  marketCap: number;
  marketCapDetail: string;

  constructor() { }

  ngOnInit() {
    this.priceColor = this.stock.change === 'increase' ? 'green' : 'red';
    this.priceIncrease = this.stock.change === 'increase' ? true : false;
    if (this.stock.marketCap > 1000) {
      this.marketCap = (Math.round(this.stock.marketCap / 10)) / 100;
      this.marketCapDetail = 'T';
    } else if (this.stock.marketCap > 0) {
      this.marketCap = (Math.round(this.stock.marketCap * 100)) / 100;
      this.marketCapDetail = 'B';
    } else {
      this.marketCap = (Math.round(this.stock.marketCap / 100)) * 100;
      this.marketCapDetail = 'M';
    }
  }
}
