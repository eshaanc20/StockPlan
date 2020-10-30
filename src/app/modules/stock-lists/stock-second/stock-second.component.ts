import { Component, Input, OnInit } from '@angular/core';
import { StockInformationFormat } from '../../interfaces';

@Component({
  selector: 'app-stock-second',
  templateUrl: './stock-second.component.html',
  styleUrls: ['./stock-second.component.css']
})
export class StockSecondComponent implements OnInit {
  @Input() stock: StockInformationFormat;
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
