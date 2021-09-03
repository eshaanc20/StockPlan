import { Component, Input, OnInit } from '@angular/core';
import { GoalsData } from '../../interfaces';

@Component({
  selector: 'app-goal-second',
  templateUrl: './goal-second.component.html',
  styleUrls: ['./goal-second.component.css']
})
export class GoalSecondComponent implements OnInit {
  @Input() goal: GoalsData;
  status: string;

  constructor() { }

  ngOnInit() {
    if (this.goal.goalCompleted) {
      this.status = 'Completed';
    } else {
      this.status = 'Active';
    }
  }

}
