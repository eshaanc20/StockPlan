import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GoalsInformationFormat } from '../../interfaces';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-edit-goals',
  templateUrl: './edit-goals.component.html',
  styleUrls: ['./edit-goals.component.css']
})
export class EditGoalsComponent implements OnInit {
  goals: GoalsInformationFormat[];

  constructor(
    private dialog: MatDialogRef<EditGoalsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {goalsList: [GoalsInformationFormat]},
    private goalService: GoalsService
  ) { }

  ngOnInit() {
    this.goals = this.data.goalsList;
  }

  close() {
    this.dialog.close();
  }

  delete(goalId: any, index: any) {
    this.goals.splice(index, 1);
    this.goalService.deleteGoal(goalId).subscribe(res => {
    });
  }

}
