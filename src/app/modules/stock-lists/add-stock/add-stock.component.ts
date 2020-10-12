import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { StockListsService } from '../stock-lists.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  currentList: string;
  progress = false;

  constructor(private stockListsService: StockListsService, @Inject(MAT_DIALOG_DATA) public data: {listNumber: string}) { }

  ngOnInit() {
    this.currentList = this.data.listNumber;
  }

  addStockToList(f: NgForm) {
    this.progress = true;
    this.stockListsService.addNewStockToList(this.currentList, f.value.stockSymbol).subscribe(res => {
      this.progress = false;
    });
  }
}
