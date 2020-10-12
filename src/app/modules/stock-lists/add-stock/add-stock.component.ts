import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StockListsService } from '../stock-lists.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  constructor(private stockListsService: StockListsService) { }

  ngOnInit() {
  }

  addStockToList(f: NgForm) {
    this.stockListsService.addNewList(f.value.listName).subscribe(res => {
      
    });
  }
}
