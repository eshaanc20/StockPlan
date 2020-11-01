import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../authentication/login.service';
import { GoalsData } from '../../interfaces';
import { AddGoalComponent } from '../add-goal/add-goal.component';
import { EditGoalsComponent } from '../edit-goals/edit-goals.component';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-goals-list-detail',
  templateUrl: './goals-list-detail.component.html',
  styleUrls: ['./goals-list-detail.component.css']
})
export class GoalsListDetailComponent implements OnInit {
  listId: string;
  listName: string;
  listLength: number;
  goalsList: GoalsData[];
  private addDialog: any;
  private editDialog: any;

  constructor(
    private route: ActivatedRoute,
    private goals: GoalsService,
    private loginService: LoginService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.listId = params.listNumber;
      if (!this.loginService.getLoginStatus()) {
        this.loginService.user.subscribe(res => {
          this.goals.getGoalsDetail(this.listId).subscribe(list => {
            this.listName = list.name;
            this.goalsList = list.goalsDetail;
            this.listLength = list.goalsDetail.length;
          });
        });
      } else {
        this.goals.getGoalsDetail(this.listId).subscribe(list => {
          this.listName = list.name;
          this.goalsList = list.goalsDetail;
          this.listLength = list.goalsDetail.length;
        });
      }
    });
  }

  addNewGoal() {
    this.addDialog = this.dialog.open(AddGoalComponent, {data: {listNumber: this.listId}});
  }

  editGoals() {
    this.editDialog = this.dialog.open(EditGoalsComponent, {
      data: {
        goalsList: this.goalsList
      }
    });
  }
}
