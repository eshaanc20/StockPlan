import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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

  constructor(
    private goals: GoalsService,
    private dialog: MatDialogRef<AddGoalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {listNumber: string}
  ) { }

  ngOnInit() {
  }

  addGoalToList(f: NgForm) {
    this.progress = true;
    // this.goals.addGoal(f.value.goalTitle).subscribe(res => {
    //   this.progress = false;
    // });
  }

  close() {
    this.dialog.close();
  }
}
