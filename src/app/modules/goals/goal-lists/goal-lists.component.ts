import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginService } from '../../authentication/login.service';
import { StockListsService } from '../../stock-lists/stock-lists.service';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-goal-lists',
  templateUrl: './goal-lists.component.html',
  styleUrls: ['./goal-lists.component.css']
})
export class GoalListsComponent implements OnInit {
  private newDialog: any;
  goalLists: any;

  constructor(private loginService: LoginService, private goals: GoalsService, private dialog: MatDialog) { }

  ngOnInit() {
    if (!this.loginService.getLoginStatus()) {
      this.loginService.user.subscribe(res => {
        this.goals.getAllLists().subscribe(lists => {
          this.goalLists = lists.allLists;
        });
      });
    } else {
      this.goals.getAllLists().subscribe(res => {
        this.goalLists = res.allLists;
      });
    }
  }

  addNewList() {
  }

}