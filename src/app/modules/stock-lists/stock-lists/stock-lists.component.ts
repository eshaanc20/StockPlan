import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewListComponent } from '../new-list/new-list.component';

@Component({
  selector: 'app-stock-lists',
  templateUrl: './stock-lists.component.html',
  styleUrls: ['./stock-lists.component.css']
})
export class StockListsComponent implements OnInit {
  private newDialog: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  addNewList() {
    this.newDialog = this.dialog.open(NewListComponent);
  }
}
