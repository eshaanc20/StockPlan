import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockListsService } from '../stock-lists.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  listId: string;
  listName: string;
  listLength: number;
  stocks: any;

  constructor(private route: ActivatedRoute, private stockListService: StockListsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.listId = params.listNumber;
      this.stockListService.getStockDetails(this.listId).subscribe(res => {
        this.listName = res.name;
        this.listLength = res.length;
        this.stocks = res.stockDetail;
      });
    });
  }
  
}
