import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../../authentication/login.service';
import { User } from '../../authentication/User';
import { NewListComponent } from '../new-list/new-list.component';
import { StockListsService } from '../stock-lists.service';

@Component({
  selector: 'app-stock-lists',
  templateUrl: './stock-lists.component.html',
  styleUrls: ['./stock-lists.component.css']
})
export class StockListsComponent implements OnInit {
  private newDialog: any;
  stockLists: any;

  constructor(private dialog: MatDialog, private stockListService: StockListsService, private loginService: LoginService) {
  }

  ngOnInit() {
    if (!this.loginService.getLoginStatus()) {
      this.loginService.user.subscribe(res => {
        this.stockListService.getAllLists().subscribe(lists => {
          this.stockLists = lists.allLists;
        });
      });
    } else {
      this.stockListService.getAllLists().subscribe(res => {
        this.stockLists = res.allLists;
      });
    }
  }

  addNewList() {
    this.newDialog = this.dialog.open(NewListComponent);
  }
}
