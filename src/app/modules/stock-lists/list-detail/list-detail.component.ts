import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../authentication/login.service';
import { StockData } from '../../interfaces';
import { AddStockComponent } from '../add-stock/add-stock.component';
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
  stocks: StockData[];
  totalChange: string;
  totalChangeAmount: number;
  priceColor: string;
  priceIncrease: boolean;
  progress: boolean;
  private newDialog: any;
  editMode: boolean;

  constructor(
    private route: ActivatedRoute,
    private stockListService: StockListsService,
    private loginService: LoginService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.progress = true;
    this.route.params.subscribe(params => {
      this.listId = params.listNumber;
      if (!this.loginService.getLoginStatus()) {
        this.loginService.user.subscribe(res => {
          this.updateContent();
        });
      } else {
        this.updateContent();
      }
    });
  }

  updateContent() {
    this.stockListService.getStockDetails(this.listId).subscribe(list => {
      this.progress = false;
      this.listName = list.name;
      this.listLength = list.length;
      this.stocks = list.stockDetail;
      this.totalChange = list.totalChange;
      this.totalChangeAmount = list.totalChangeAmount;
      if (list.totalChange === 'increase') {
        this.priceColor = 'green';
        this.priceIncrease = true;
      } else {
        this.priceColor = 'red';
        this.priceIncrease = false;
      }
    });
  }

  add() {
    this.newDialog = this.dialog.open(AddStockComponent, {
      data: {
        listNumber: this.listId
      }
    });
    this.newDialog.afterClosed().subscribe(result => {
      if (result !== 'cancel') {
        this.updateContent();
      }
    });
  }
  
  edit() {
    this.editMode = !this.editMode;
  }

  updateAfterDelete(event) {
    this.updateContent();
  }
}
