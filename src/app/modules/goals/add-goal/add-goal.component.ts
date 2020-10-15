import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {
  progress = false;

  constructor(private goals: GoalsService) { }

  ngOnInit() {
  }

  addGoalToList(f: NgForm) {
    this.progress = true;
    this.goals.addGoal(f.value.goalTitle).subscribe(res => {
      this.progress = false;
    });
  }

}
