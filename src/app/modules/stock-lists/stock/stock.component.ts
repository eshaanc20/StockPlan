import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  symbol: string;
  currentPrice: number;
  high: number;
  low: number;
  change: number;
  goals: any;

  constructor() { }

  ngOnInit() {
  }

}
