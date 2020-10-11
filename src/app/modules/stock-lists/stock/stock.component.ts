import { Component, Input, OnInit } from '@angular/core';

interface StockInformationFormat {
  symbol: string;
  current: number;
  open: number;
  high: number;
  low: number;
  previousClosePrice: number;
  change: string;
  percentChange: string;
  amountChange: number;
  name: string;
  currency: string;
  exchange: string;
  marketCap: number;
  outstanding: number;
}

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  @Input() stock: StockInformationFormat;
  priceColor: string;
  priceIncrease: boolean;

  constructor() { }

  ngOnInit() {
    this.priceColor = this.stock.change === 'increase' ? 'green' : 'red';
    this.priceIncrease = this.stock.change === 'increase' ? true : false;
  }
}
