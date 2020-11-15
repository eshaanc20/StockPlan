import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../authentication/login.service';
import { GoalsData } from '../../interfaces';
import { AddGoalComponent } from '../add-goal/add-goal.component';
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
  editMode = false;

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
          this.updateContent();
        });
      } else {
        this.updateContent()
      }
    });
  }

  updateContent() {
    this.goals.getGoalsDetail(this.listId).subscribe(list => {
      this.listName = list.name;
      this.goalsList = list.goalsDetail;
      this.listLength = list.goalsDetail.length;
    });
  }

  addNewGoal() {
    this.addDialog = this.dialog.open(AddGoalComponent, {data: {listNumber: this.listId}});
    this.addDialog.afterClosed().subscribe(result => {
      if (result !== 'cancel') {
        this.updateContent();
      }
    })
  }

  edit() {
    this.editMode = !this.editMode;
  }

  updateAfterDelete(event) {
    this.updateContent();
  }
}
