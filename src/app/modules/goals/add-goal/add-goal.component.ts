import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {
  progress = false;
  title = new FormControl('');
  stock = new FormControl('');
  goalType = new FormControl('');
  description = new FormControl('');
  validUntil = new FormControl('');
  goalParameter = new FormControl('');
  targetNumber = new FormControl('');
  currentList: string;

  constructor(
    private goals: GoalsService,
    private dialog: MatDialogRef<AddGoalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {listNumber: string}
  ) { }

  ngOnInit() {
    this.currentList = this.data.listNumber;
  }

  addGoalToList() {
    this.progress = true;
    let dateValidUntil = this.validUntil.value.toString();
    const dateArray = dateValidUntil.split(' ');
    const finalDateArray = dateArray.slice(1, 4);
    dateValidUntil = finalDateArray.join(' ');
    this.goals.addGoal(this.currentList, this.title.value, this.goalType.value, this.description.value,
      this.stock.value, dateValidUntil, this.goalParameter.value, this.targetNumber.value).subscribe(res => {
      this.progress = false;
      this.dialog.close();
    });
  }

  close() {
    this.dialog.close();
  }
}
