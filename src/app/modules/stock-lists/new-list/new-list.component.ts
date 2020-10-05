import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StockListsService } from '../stock-lists.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  constructor(private stockListsService: StockListsService) { }

  ngOnInit() {
  }

  newList(f: NgForm) {
    this.stockListsService.addNewList(f.value.name);
  }

}
