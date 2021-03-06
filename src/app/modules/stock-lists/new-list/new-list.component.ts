import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StockListsService } from '../stock-lists.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
  progress = false;

  constructor(private stockListsService: StockListsService, private dialog: MatDialogRef<NewListComponent>) { }

  ngOnInit() {
  }

  newList(f: NgForm) {
    this.progress = true;
    this.stockListsService.addNewList(f.value.listName).subscribe(res => {
      this.progress = false;
      this.dialog.close();
    });
  }

}
