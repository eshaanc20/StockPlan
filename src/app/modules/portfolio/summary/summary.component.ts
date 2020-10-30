import { Component, Input, OnInit } from '@angular/core';
import { PortfolioStock } from '../../interfaces';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() data: PortfolioStock[];
  tableColumns = ['Symbol', 'Shares', 'Book Value', 'Market Value', 'Change Amount', 'Change'];

  constructor() { }

  ngOnInit() {
  }

}
