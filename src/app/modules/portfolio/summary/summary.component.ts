import { Component, Input, OnInit} from '@angular/core';
import { PortfolioStock } from '../../interfaces';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() data: PortfolioStock[];
  tableColumns = ['Symbol', 'Shares', 'Price', 'Book Value', 'Market Value', 'Change Amount', 'Change'];
  tableContent: PortfolioStock[];
  length: number;

  constructor() { }

  ngOnInit() {
    this.length = this.data.length;
    if (this.length < 8) {
      this.tableContent = this.data.slice(0, this.length);
    } else {
      this.tableContent = this.data.slice(0, 8);
    }
  }

  updateTableContent(event: any) {
    const startIndex = event.pageIndex * 1;
    const endIndex = startIndex + 1;
    let updatedData = null;
    if (endIndex > this.length) {
      updatedData = this.data.slice(startIndex, this.length);
    } else {
      this.data.slice(startIndex, endIndex);
    }
    this.tableContent = updatedData;
  }

}
