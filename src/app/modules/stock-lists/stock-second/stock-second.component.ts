import { Component, Input, OnInit } from '@angular/core';
import { StockSummaryData } from '../../interfaces';

@Component({
  selector: 'app-stock-second',
  templateUrl: './stock-second.component.html',
  styleUrls: ['./stock-second.component.css']
})
export class StockSecondComponent implements OnInit {
  @Input() stock: StockSummaryData;
  priceColor: string;
  priceIncrease: boolean;
  marketCap: number;
  marketCapDetail: string;

  constructor() { }

  ngOnInit() {
    this.priceColor = this.stock.change === 'increase' ? 'green' : 'red';
    this.priceIncrease = this.stock.change === 'increase' ? true : false;
  }

}
