import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  @Input() current: string;
  @Output() updated = new EventEmitter<String>();

  constructor(private dialog: MatDialog, private stockListService: StockListsService, private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    if (!this.loginService.getLoginStatus()) {
      this.loginService.user.subscribe(res => {
        this.stockListService.getAllLists().subscribe(lists => {
          this.stockLists = lists.allLists;
        });
      });
    } else {
      this.stockListService.getAllLists().subscribe(lists => {
        this.stockLists = lists.allLists;
      });
    }
  }

  addNewList() {
    this.newDialog = this.dialog.open(NewListComponent);
  }

  goToList(listNumber, listName: string) {
    this.updated.emit(listName);
    this.router.navigate(['/dashboard/list/'+listNumber]);
  }
}
